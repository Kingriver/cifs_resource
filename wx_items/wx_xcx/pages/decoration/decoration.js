// pages/decoration/decoration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:5,
    banner:[
      { imgSrc:'http://winipo.cn/tpl/Public/images/home/yw_b01.jpg'},
      { imgSrc: 'http://winipo.cn/tpl/Public/images/home/yw_b02.jpg' }
    ],
    num:'',
    currentNav: 1,
    typeList:[],
    typeData:[],
    buildingList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'http://47.92.245.128/php/wx/design_type.php',
      success: function (res) {
        var resData=res.data;
        var num=0;
        if (resData.length){
          for (var i = 0; i < resData.length; i++) {
            if (resData[i].son.length) {
              for (var j = 0; j < resData[i].son.length;j++){
                num += Number(resData[i].son[j].num);
              }
            }
          }
        };
        that.setData({
          num: num
        });

        resData.pop();
        that.setData({
          typeData: resData
        });
        that.getTypeList(1)
      }
    })
    wx.request({
      url: 'http://47.92.245.128/php/wx/building.php',
      success: function (res) {
        var resData = res.data;
        that.setData({
          buildingList:resData
        })
      }
    })
  },

  buildingMore(){
    wx.navigateTo({
      url: '../nearby/nearby',
    })
  },

  buildingItem(){
    console.log('kk')
    wx.navigateTo({
      url: '../building_item/building_item',
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

  selectNav(e){
    var current=e.currentTarget.dataset.type;
    this.setData({
      currentNav: current
    });
    this.getTypeList(current)
  },

  getTypeList(types){
    var typeData = this.data.typeData;
    for(var i=0; i<typeData.length;i++){
      if(types==typeData[i].id){
        this.setData({
          typeList: typeData[i]
        })
      }
    }
  },

  designList(e){
    var types = this.data.current;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../design_list/design_list?type='+types+'&id='+id,
    })
  },

  loadMaore(){
    wx.navigateTo({
      url: '../design_list/design_list',
    })
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