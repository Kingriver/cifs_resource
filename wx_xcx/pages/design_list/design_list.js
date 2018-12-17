// pages/design_list/design_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:2,
    style:'风格',
    space:'空间',
    local:'局部',
    color:'色系',
    styleIndex :null,
    spaceIndex: null,
    localIndex: null,
    colorIndex: null,
    styleList: ['风格1', '风格2', '风格3', '风格4', '风格5', '风格6'],
    spaceList: ['空间1', '空间2', '空间3'],
    localList: ['局部1', '局部2', '局部3', '局部4', '局部5'],
    colorList: ['色系1', '色系2', '色系3', '色系4', '色系5', '色系6']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  styleNavbarChange(e){
    var index = e.detail.value;
    this.setData({
      style: this.data.styleList[index],
      styleIndex: index
    });
    this.getDesignList();
  },

  spaceNavbarChange(e) {
    var index = e.detail.value;
    this.setData({
      space: this.data.spaceList[index],
      spaceIndex: index
    });
    this.getDesignList();
  },

  localNavbarChange(e) {
    var index = e.detail.value;
    this.setData({
      local: this.data.localList[index],
      localIndex: index
    });
    this.getDesignList();
  },

  colorNavbarChange(e) {
    var index = e.detail.value;
    this.setData({
      color: this.data.colorList[index],
      colorIndex: index
    });
    this.getDesignList();
  },

  getDesignList(){
    var styleIndex = this.data.styleIndex;
    var spaceIndex = this.data.spaceIndex;
    var localIndex = this.data.localIndex;
    var colorIndex = this.data.colorIndex;
    console.log(styleIndex, spaceIndex, localIndex, colorIndex)
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