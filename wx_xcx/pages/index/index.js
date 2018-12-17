//index.js
//获取应用实例
const app = getApp()
// var appId ='wx36f66757564195a9';
// var secret ='2a3fb080ae3e486a5cbab1fd7b646b9b';
Page({
  data: {
  },

  onLoad: function () {
   // this.getQrCode();
    this.getToken()
  },

  getToken(token) {
    var that=this;
    wx.request({
      url: 'http://www.wx.com/xcx/user_token.php',
      success: function (res) {
        console.log(res);
        that.getQrCode()
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  getQrCode(token){
    var that = this;
    var pagePaths = getCurrentPages();
    var currentPath = (pagePaths[pagePaths.length - 1]).route;
    wx.request({
      url: 'http://www.wx.com/xcx/qr_code.php',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值 application/json
      },
      data: {
        path: currentPath,
        style:'check'
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

})
