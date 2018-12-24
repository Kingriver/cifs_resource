//index.js
//获取应用实例
const app = getApp()
// var appId ='wx36f66757564195a9';
// var secret ='2a3fb080ae3e486a5cbab1fd7b646b9b';
Page({
  data: {
  },

  onLoad: function () {
    this.getToken();
  },

  getToken(){
    var that=this;
    wx.request({
      url: 'http://47.92.245.128/php/wx/user_token.php',
      success: function (res) {
        if(res.data.success){
          wx.setStorageSync('token', res.data.access_token);
          wx.setStorageSync('tokenTime', res.data.expires_in);
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  /**
 * 生命周期函数--监听页面显示                                                                    
 */
  onShow: function () {
    var timeStamp = new Date().getTime();
    var cacheTime=wx.getStorageSync('tokenTime');
    if (timeStamp > cacheTime){
      this.getToken()
    }
  },

})
