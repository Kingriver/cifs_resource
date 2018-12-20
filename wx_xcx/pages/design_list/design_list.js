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
    styleList: ['简约', '简欧', '中式', '田园', '地中海'],
    spaceList: ['卧室', '客厅', '餐厅', '卫生间','厨房'],
    localList: ['背景墙', '灯具', '收纳', '窗帘', '过道'],
    colorList: ['春色', '白色', '原木色', '绿色', '紫色', '蓝色', '黑白', '红色', '粉色','黄色'],
    designList:[
      {
       imgs: [{ src: 'http://img3.imgtn.bdimg.com/it/u=2372779370,4017404039&fm=26&gp=0.jpg' }, { src:'http://img1.imgtn.bdimg.com/it/u=956300828,4130373363&fm=26&gp=0.jpg'}],
        browse:5,
        share:10,
        id:0,
        title:'啦啦啦啦啦，呵呵哈哈哈'
      },
      {
        imgs: [{ src: 'http://img3.imgtn.bdimg.com/it/u=2431567762,3256663665&fm=11&gp=0.jpg'},{ src:'http://img1.imgtn.bdimg.com/it/u=956300828,4130373363&fm=26&gp=0.jpg'}],
        browse: 25,
        share: 19,
        id: 1,
        title: '滚滚广告，呵呵哈哈哈'
      },
      {
        imgs: [{ src:'http://img1.imgtn.bdimg.com/it/u=956300828,4130373363&fm=26&gp=0.jpg'}],
        browse: 5,
        share: 10,
        id: 2,
        title: '灌灌灌灌灌，呵呵哈哈哈'
      },
      {
        imgs: [{ src: 'http://img5.imgtn.bdimg.com/it/u=799245537,1784413118&fm=11&gp=0.jpg'},{ src:'http://img1.imgtn.bdimg.com/it/u=956300828,4130373363&fm=26&gp=0.jpg'}] ,
        browse: 95,
        share: 6,
        id: 3,
        title: '嗨嗨嗨哈哈哈，呵呵哈哈哈'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var  
    if(options.id){

    }
    wx.request({
      url: 'http://www.wx.com/xcx/design_list.php',
      success: function (res) {
        console.log(res)
        that.setData({
          designList: res.data
        })
      }
    })









    if (options.type==1){
      this.setData({
        style: this.data.styleList[options.id],
        styleIndex: options.id
      })
    } else if (options.type == 2){
      this.setData({
        space: this.data.spaceList[options.id],
        spaceIndex: options.id
      })
    } else if (options.type == 3) {
      this.setData({
        local: this.data.localList[options.id],
        localIndex: options.id
      })
    }
   // this.getDesignList()
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

  designDetail(e){
    var id = Number(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../design_detail/design_detail?id=' + id,
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