// pages/design_detail/design_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.setData({
      detailId:options.id
    });
    if (options.current){
      this.setData({
        current: options.current
      })
    };
    wx.request({
      url: 'http://www.wx.com/xcx/design_detail.php?id=' + options.id,
      success: function (res) {
        console.log(res)
        that.setData({
          detailItem: res.data
        })
      }
    })
  },


  currentChange(e){
    this.setData({
      current: e.detail.current
    })
  },


  shareDesign(){
    var id = Number(this.data.detailId);
    var current = Number(this.data.current);
    var title = this.data.detailItem.design_desc;
    var imgSrc = this.data.detailItem.design_imgs[current];
    wx.navigateTo({
      url: '../share/share?current=' + current + '&id=' + id + '&src=' + imgSrc + '&title=' + title
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
    var that=this;
    return{
      title: title,
      imageUrl: imgs, //'../../images/avatar.png'
      path: '/pages/design_detail/design_detail?current=' + that.data.current + '&id=' + this.data.detailId,
      success:function(res){
        wx.showToast({
          title: '分享成功',
          image: '../../images/success.png',
          duration: 3000
        })
      },
      fail: function (res) {
        //console.log(res)
      }
    }
  }
})