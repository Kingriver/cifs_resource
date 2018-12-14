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
    keyWords:'',
    notFound:false,
    btnColor:'#e6e6e6',
    latitude: '',   //纬度
    longitude: '',   //经度
    nearList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      latitude: options.latitude,
      longitude: options.longitude,
      keyWords: options.title
    });
    if (this.data.keyWords) {
      this.setData({
        btnColor: '#181717'
      })
    } else {
      this.setData({
        btnColor: '#e6e6e6'
      })
    }
    this.searchNearby()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  changeInput(e){
    console.log(e.detail.value)
    if (e.detail.value){
      this.setData({
        btnColor: '#181717'
      })
    }else{
      this.setData({
        btnColor: '#e6e6e6'
      })

    }
    this.setData({
      keyWords:e.detail.value
    })
  },

  inputSearchNearby(){
    var keyWords = this.data.keyWords;

    if (!keyWords) {
      wx.showToast({
        title: '请输入搜索内容',
        image: '../../images/error.png',
      });
      return;
    }
    console.log(keyWords)
    this.searchNearby()
  },

  btnSearchNearby(){
    var keyWords = this.data.keyWords;
    if (!keyWords) {
      wx.showToast({
        title: '请输入搜索内容',
        image: '../../images/error.png',
      });
      return;
    }
    console.log(keyWords)
    this.searchNearby()
  },

  searchNearby(){
    console.log(this.data.latitude)
    console.log(this.data.longitude)
    // 事件触发，调用接口
      var _this = this;
      // 调用接口
      qqmapsdk.search({
        keyword: this.data.keyWords,  //搜索关键词
        location:{
          latitude: this.data.latitude,
          longitude: this.data.longitude
        },
       // location: this.data.latitude + ',' + this.data.longitude,  //设置周边搜索中心点
        success: function (res) { //搜索成功后的回调
        console.log(res)
          _this.setData({ //设置markers属性，将搜索结果显示在地图中
            notFound: false,
            nearList: res.data
          })
          if (!res.data.length) {
            _this.setData({ //设置markers属性，将搜索结果显示在地图中
              notFound: true
            })
          }
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          //console.log(res);
        }
      });
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