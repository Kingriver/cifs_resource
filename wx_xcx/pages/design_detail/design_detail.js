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
    wx.request({
      url: 'http://www.wx.com/xcx/design_detail.php?id=' + options.id,
      success: function (res) {
        
      }
    })
return;
    console.log(options)
    if (options.current){
      this.setData({
        current:options.current
      })
    }

    var obj = JSON.parse(options.obj);
    this.setData({
      needParams: obj
    });
     var imgs=obj.src;
     for(var i=0;i<imgs.length;i++){
       imgs[i].src=decodeURIComponent(imgs[i].src)
     }
    this.setData({
      id: obj.id,
      title: obj.title,
      src: imgs
    });
  },
  currentChange(e){
    this.setData({
      current: e.detail.current
    })
  },
  shareDesign(){
    wx.navigateTo({
      url: '../share/share?current=' + this.data.current+ '&obj=' + JSON.stringify(this.data.needParams),
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
    var current=that.data.current;
    //var imgs=this.data.src[current].src;
    return{
      title:that.data.title,
      imageUrl: '../../images/avatar.png', //'../../images/avatar.png'
      path: '/pages/design_detail/design_detail?current=' + current + '&obj=' + JSON.stringify(this.data.needParams),
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