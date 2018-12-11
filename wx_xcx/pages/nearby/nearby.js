// pages/nearby/nearby.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'SFLBZ-GZ5H6-7RLS6-EI7M2-EVVWK-LMBAU'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',//纬度
    longitude: ''//经度
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   // this.getLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  searchText(e){

    // this.setData({
    //   searchVal: e.detail.value
    // })
  },

  goMap(){
    var latitude = this.data.latitude;
    var longitude = this.data.longitude;
    if (!latitude || !longitude){
      wx.showModal({
        title: '提示',
        content: '您未授权地理位置，请重新授权！',
        confirmText:'重新授权',
        success:function(res){
          if(res.confirm){
            //重新授权
            wx.openSetting({
              success(res) {
                if (res.authSetting['scope.userLocation']){
                  wx.showToast({
                    title: '授权成功',
                  })
                }
              }
            })
          }
        },
      });
      return;
    }
    wx.navigateTo({
      url: "../map/map?latitude="+latitude+"&longitude="+longitude,
    })
  },

  getLocation(){
    var that = this;
    var latitude = this.data.latitude;
    var longitude = this.data.longitude;
      wx.getLocation({
        type: 'gcj02',
        altitude: true,
        success: function (res) {
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude
          })
        },
        fail: function (res) {
          //console.log('jj')
        }
      })
  },


  searchNearby(res){
    console.log(res)
    // 事件触发，调用接口
      var _this = this;
      // 调用接口
      qqmapsdk.search({
        keyword: res.detail.value,  //搜索关键词
        location: this.data.latitude + ',' + this.data.longitude,  //设置周边搜索中心点
        success: function (res) { //搜索成功后的回调
          var mks = []
          for (var i = 0; i < res.data.length; i++) {
            mks.push({ // 获取返回结果，放到mks数组中
              title: res.data[i].title,
              id: res.data[i].id,
              latitude: res.data[i].location.lat,
              longitude: res.data[i].location.lng,
              iconPath: "/images/location.png", //图标路径
              width: 50,
              height: 50
            })
          }
          _this.setData({ //设置markers属性，将搜索结果显示在地图中
            markers: mks
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var latitude = this.data.latitude;
    var longitude = this.data.longitude;
    if (!latitude || !longitude) {
      this.getLocation()
    }
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