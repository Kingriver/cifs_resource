// pages/opinion/opinion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    desc:'',
    imgsPaths:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo');
    var phone = userInfo.phone;
    if (userInfo && phone){
    //  var showPhone = phone.replace(/^(\d{3})\d*(\d{4})$/, "$1****$2");
      this.setData({
        userName: userInfo.nickName,
        userPhone: phone,
      })
    }
  },
  selectPro(e){
    this.setData({
      targetId: e.currentTarget.dataset.id
    })
  },
  descCount(e){
    this.setData({
      desc: e.detail.value,
      count: e.detail.cursor
    })
  },
  uploadImg(){
    var that=this;
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        //const tempFilePaths = res.tempFilePaths
        that.setData({
          imgsPaths: res.tempFilePaths
        })
      }
    })
  },
  previewImage(e){
    var imgsPaths = this.data.imgsPaths;
    var currentImg = e.currentTarget.dataset.current;
    wx.previewImage({
      current: currentImg, // 当前显示图片的http链接
      urls: imgsPaths // 需要预览的图片http链接列表
    })
  },
  changeName(e){
   this.setData({
     userName: e.detail.value
   })
  },
  changePhone(e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  submitBtn(){
    var targetId=this.data.targetId;
    var desc = this.data.desc;
    var imgsPaths = this.data.imgsPaths;
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    var phoneReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if (!targetId){
      wx.showToast({
        title: '至少选择一个问题',
        icon:'fail'
      })
      return;
     }
    if (!desc) {
      wx.showToast({
        title: '请填写问题描述',
      });
      return;
    }
    if (desc.length<5) {
      wx.showToast({
        title: '问题描述不少于5个字',
      });
      return;
    }
    if (!userName) {
      wx.showToast({
        title: '请填写联系人',
      });
      return;
    }
    if (!userPhone) {
      wx.showToast({
        title: '请填写联系方式',
      });
      return;
    }
    if (!phoneReg.test(userPhone)) {
      wx.showToast({
        title: '请填写有效的联系方式',
      });
      return;
    }
    wx.showModal({
      title: '提示',
      content: '反馈信息提交成功',
      showCancel:false,
      success:function(){
        wx.navigateBack({
          delta: 1
        })
      }
    })

    console.log(targetId, desc, imgsPaths, userName, userPhone)
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