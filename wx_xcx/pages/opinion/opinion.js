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