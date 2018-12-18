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
    typeList:[]

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
    var data={
      style: [
        {
          name: '简约',
          src: 'http://img1.imgtn.bdimg.com/it/u=1836352691,206686460&fm=26&gp=0.jpg',
          count: 100,
          id: 0
        },
        {
          name: '简欧',
          src: 'http://img5.imgtn.bdimg.com/it/u=3795187,1566404830&fm=26&gp=0.jpg',
          count: 111,
          id: 1
        },
        {
          name: '中式',
          src: 'http://img2.imgtn.bdimg.com/it/u=1539973776,2666718968&fm=26&gp=0.jpg',
          count: 300,
          id: 2
        },
        {
          name: '田园',
          src: 'http://img0.imgtn.bdimg.com/it/u=3545937745,487104179&fm=26&gp=0.jpg',
          count: 86,
          id: 3
        },
        {
          name: '地中海',
          src: 'http://img0.imgtn.bdimg.com/it/u=1772195352,3929023192&fm=26&gp=0.jpg',
          count: 78,
          id: 4
        },
      ],
      space: [
        {
          name: '卧室',
          src: 'http://img1.imgtn.bdimg.com/it/u=1836352691,206686460&fm=26&gp=0.jpg',
          count: 111,
          id: 0
        },
        {
          name: '客厅',
          src: 'http://img5.imgtn.bdimg.com/it/u=3795187,1566404830&fm=26&gp=0.jpg',
          count: 111,
          id: 1
        },
        {
          name: '餐厅',
          src: 'http://img2.imgtn.bdimg.com/it/u=1539973776,2666718968&fm=26&gp=0.jpg',
          count: 300,
          id: 2
        },
        {
          name: '卫生间',
          src: 'http://img0.imgtn.bdimg.com/it/u=3545937745,487104179&fm=26&gp=0.jpg',
          count: 86,
          id: 3
        },
        {
          name: '厨房',
          src: 'http://img0.imgtn.bdimg.com/it/u=1772195352,3929023192&fm=26&gp=0.jpg',
          count: 78,
          id: 4
        },
      ],
      local: [
        {
          name: '背景墙',
          src: 'http://img1.imgtn.bdimg.com/it/u=1836352691,206686460&fm=26&gp=0.jpg',
          count: 100,
          id: 0
        },
        {
          name: '灯具',
          src: 'http://img5.imgtn.bdimg.com/it/u=3795187,1566404830&fm=26&gp=0.jpg',
          count: 111,
          id: 1
        },
        {
          name: '收纳',
          src: 'http://img2.imgtn.bdimg.com/it/u=1539973776,2666718968&fm=26&gp=0.jpg',
          count: 300,
          id: 2
        },
        {
          name: '窗帘',
          src: 'http://img0.imgtn.bdimg.com/it/u=3545937745,487104179&fm=26&gp=0.jpg',
          count: 86,
          id: 3
        },
        {
          name: '过道',
          src: 'http://img0.imgtn.bdimg.com/it/u=1772195352,3929023192&fm=26&gp=0.jpg',
          count: 78,
          id: 4
        },
      ]
    };
    if(type==0){
      this.setData({
        typeList: data.style
      })
    }else if(type==1){
      this.setData({
        typeList: data.space
      })
    } else if (type == 2){
      this.setData({
        typeList: data.local
      })
    }
  },
  designList(e){
    var types = e.currentTarget.dataset.type;
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