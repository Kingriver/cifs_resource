// pages/map/map.js
var QQMapWX=require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'SFLBZ-GZ5H6-7RLS6-EI7M2-EVVWK-LMBAU'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    selectedVal:'',
    markers: [
      {
        iconPath: '/images/location.png',
        id: 0,
        latitude: 39.9219,
        longitude: 116.44355,
        width: 50,
        height: 50
      }
    ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      latitude:options.latitude,
      longitude:options.longitude
    })
    this.getLocal(options.latitude, options.longitude)
  },
  changeSearchVal(e){
    var that = this;
    var targetVal = e.detail.value;
    if (!targetVal) { return }
    that.setData({
      selectedVal: targetVal
    })
  },
  searchVal:function(e){
    var that=this;
    var targetVal = e.detail.value;
    if (!targetVal){return}
    // 调用接口
    qqmapsdk.getSuggestion({
      keyword: targetVal,
      success: function (res) {
        that.setData({
          valList: res.data
        })
      }
    });

  },
  btnSearchVal(){
    var that = this;
    var targetVal = this.data.selectedVal;
    if (!targetVal) { return }
    // 调用接口
    qqmapsdk.getSuggestion({
      keyword: targetVal,
      success: function (res) {
        that.setData({
          valList: res.data
        })
      }
    });
  },

  selectVal(e){
    var markers= [
      {
        iconPath: '/images/location.png',
        id: 0,
        title: e.currentTarget.dataset.title,
        latitude: e.currentTarget.dataset.latitude,
        longitude: e.currentTarget.dataset.longitude,
        width: 50,
        height: 50
      }
    ];
    var polyline= [{
      points: [
        {
          longitude: this.data.longitude,
          latitude: this.data.latitude
        },
       {
         longitude: e.currentTarget.dataset.longitude,
         latitude: e.currentTarget.dataset.latitude,
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }];
   //   markers[0]
    console.log(markers)
    this.setData({
      valList: [],
      markers: markers,
      polyline: polyline,
      selectedVal: e.currentTarget.dataset.title,
    })
    //this.getLocal(e.currentTarget.dataset.latitude, e.currentTarget.dataset.longitude)
  },

  getLocal: function (latitude, longitude){
    var that=this;
    qqmapsdk.reverseGeocoder({       //qqmapsdk.reverseGeocoder
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        var address = res.result.address;
        that.setData({
          current_address: address
        });

      },
      fail: function (res) {
        console.log(res)
        // wx.showToast({
        //   title: '解析地址错误',
        //   icon: 'loading',
        //   duration: 1000
        // });
      },

    })
  },

  markertap(e) {
    console.log(e)
    // var targetId = e.markerId;
    // var markers = this.data.markers;
    // var targetInfo={};
    // for (var i = 0; i < markers.length;i++){
    //   if (targetId === markers[i].id){
    //     targetInfo = markers[i];
    //   }
    // }
    // this.setData({
    //   longitude: targetInfo.longitude,
    //   latitude: targetInfo.latitude
    // })
    // this.getLocal(targetInfo.latitude, targetInfo.longitude)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})