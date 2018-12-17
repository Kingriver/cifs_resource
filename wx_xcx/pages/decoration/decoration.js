// pages/decoration/decoration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [
      { imgUrl: 'http://img3.imgtn.bdimg.com/it/u=634470242,3595602949&fm=26&gp=0.jpg' },
      { imgUrl: 'http://img1.imgtn.bdimg.com/it/u=1080278868,1560940585&fm=26&gp=0.jpg' },
      { imgUrl: 'http://img2.imgtn.bdimg.com/it/u=4042059753,871837749&fm=26&gp=0.jpg' }
    ],
    currentNav: 0,
    typeList: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getTypeList(this.data.currentNav)
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
  getTypeList(type){
    var con='';
    if(type==0){
      con='风格';
    }else if(type==1){
      con ='空间' ;
    } else if (type == 2){
      con = '局部';
    }
 
    var typeList=[];
    for(var i=0; i<10; i++){
      var obj = {};
      obj['con']=con+(i+1);
      typeList.push(obj)
    }
    this.setData({
      typeList: typeList
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