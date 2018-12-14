//index.js
//获取应用实例
const app = getApp()
var appId ='wx36f66757564195a9';
var secret ='2a3fb080ae3e486a5cbab1fd7b646b9b'
Page({
  data: {
  },

  onLoad: function () {
    this.getQrCode();
  },

  getQrCode(token){
    var that = this;
    var pagePaths = getCurrentPages();
    console.log(pagePaths[pagePaths.length - 1])
    var currentPath = (pagePaths[pagePaths.length - 1]).route;
    console.log(currentPath)
    wx.request({
      url: 'http://www.wx.com/xcx/qr_code.php',
      method: 'POST',
      // header: {
      //   'content-type': 'application/x-www-form-urlencoded' // 默认值
      // },
      data: {
        url: currentPath
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
