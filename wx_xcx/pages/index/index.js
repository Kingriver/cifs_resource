//index.js
//获取应用实例
const app = getApp()
var appId ='wx36f66757564195a9';
var secret ='2a3fb080ae3e486a5cbab1fd7b646b9b'
Page({
  data: {
    token:''
  },

  onLoad: function () {
    this.getToken()
  },
  getToken(){
    var that=this;
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx36f66757564195a9&secret=2a3fb080ae3e486a5cbab1fd7b646b9b',
      success:function(res){
        var token = res.data.access_token;
        console.log(res)
        that.getQrCode(token)
        that.setData({
          token: token
        })
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  getQrCode(token){
    var that = this;
    var pagePaths = getCurrentPages();
    console.log(pagePaths[pagePaths.length - 1])
    var currentPath = (pagePaths[pagePaths.length - 1]).route;
    console.log(currentPath)
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token='+token,
      data:{
        path: currentPath
      },
      method:'POST',
      success: function (res) {
        wx.request({
          url: 'http://www.test.com/table.php',
          method:'POST',
           header: {
             'content-type': 'application/x-www-form-urlencoded' // 默认值
           },
          data:{
            token: token,
            url: currentPath
          },
          success:function(res){
            console.log(res)
          },
          fail:function(err){
            console.log(err)
          }
        })
       
        
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }

})
