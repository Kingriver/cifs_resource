// pages/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      phone:'',
      code:'',
      textColor:'#dddddd',
      btnColor: '#dddddd',
      state:false,
      background: 'rgba(190, 190, 190, 0.786)'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  phoneInput(data){
    var phone=data.detail.value;
    if (phone.length===11){
      this.setData({
        textColor:'green',
        phone: phone
      })
    }else{
      this.setData({
        textColor: 'back',
        phone: ''
      })
    }
  },
  getCode(){
   var phone=this.data.phone;
    var phoneReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if(!phone){return;}
    if (phoneReg.test(phone)) {
      this.setData({
        phone: phone,
        state: true
      })
      wx.showToast({
        title: '验证码已发送',
        icon: 'success',
        duration: 3000
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '手机号码输入不正确，请重新输入 !',
        showCancel:false
      })
    }
  },
  codeInput(data){
    var code= data.detail.value;
       if(this.data.state){
         if (code.length===6){
           this.setData({
             background: 'green',
             btnColor: '#ffffff',
             code:code
           })
         }else{
           this.setData({
             background: 'rgba(190, 190, 190, 0.786)',
             btnColor: '#dddddd',
             code: ''
           })
         }
       }
  },

  sign(){
    var phone=this.data.phone;
    var code=this.data.code;
    if (!this.data.state) {return;}
    if(!code){return;}
    var userInfo = wx.getStorageSync('userInfo');
    userInfo.phone = phone;
    userInfo.isLogin=true;
    wx.setStorageSync('userInfo', userInfo);
    wx.showToast({
      title: '登录成功',
      success:function(){
        wx.switchTab({
          url: '../../pages/user/user'
        })
      }
    })
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
  signIn(){
    
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