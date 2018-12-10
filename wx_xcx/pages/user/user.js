// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: true,
    servicePhone:'18382441605',
    serviceTime:'(服务时间: 9:00  - 23:00)'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo.isLogin) {
      that.setData({
        state: false,
        userInfo: userInfo
      });
    } else {
      wx.navigateTo({
        url: '../../pages/login/login',
      })
    }

  },

  callPhone(){
    wx.makePhoneCall({
      phoneNumber: this.data.servicePhone 
    })
  },

  handleContact(e){
    console.log(e)
  },
  //跳转登录授权页
  toLogin(){
    if(this.data.state){
      wx.navigateTo({
        url: '../../pages/login/login',
      })
    }
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
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo.isLogin) {
      that.setData({
        state: false,
        userInfo: userInfo
      });
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