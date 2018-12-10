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
    markers: [
      {
        iconPath: '/images/location.png',
        id: 0,
        latitude: 39.9219,
        longitude: 116.44355,
        width: 50,
        height: 50
      },
      {
        iconPath: '/images/location.png',
        id: 1, 
        latitude: 40.0065796678,
        longitude: 116.4842176437,
        width: 50,
        height: 50
      },
      {
        iconPath: '/images/location.png',
        id: 2,
        latitude: 40.0026678005, 
        longitude: 116.4870500565,
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

  getLocal: function (latitude, longitude){
    var that=this;
    qqmapsdk.reverseGeocoder({       //qqmapsdk.reverseGeocoder
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(res)
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
    var targetId = e.markerId;
    var markers = this.data.markers;
    var targetInfo={};
    for (var i = 0; i < markers.length;i++){
      if (targetId === markers[i].id){
        targetInfo = markers[i];
      }
    }
    this.setData({
      longitude: targetInfo.longitude,
      latitude: targetInfo.latitude
    })
    this.getLocal(targetInfo.latitude, targetInfo.longitude)

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