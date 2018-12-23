// pages/infor/infor.js
var appId ='wx36f66757564195a9';
var secret ='8a89d968e0b9ae5cfb1d4901fe3d57b2';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    token:'',
    qrCode:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getToken();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getToken(){
    var that = this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx36f66757564195a9&secret=8a89d968e0b9ae5cfb1d4901fe3d57b2',
      method: 'GET',
      success: function (res) {
        if (res.statusCode == 200) {
          var token = res.data.access_token;
          that.getQrCode(token)
          that.setData({
            token: token
          })
        }
      }
    })
  },

  getQrCode(token){
    var that = this;
    //var token=this.data.token;
    var pagePaths = getCurrentPages();
    var currentPath = pagePaths[pagePaths.length - 1].route;
    if(token){
      wx.request({
        url: 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=' + token,
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        data: {
          // access_token: token,
          path: currentPath
        },
        success: function (res) {
          console.log(res)
          console.log(wx.arrayBufferToBase64(res.data))
         
          that.setData({
            qrCode:res.data
          })
        }
      })
    }
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