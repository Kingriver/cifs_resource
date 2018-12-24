// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeImg:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.current) {
      this.setData({
        current: options.current
      })
    }
    this.setData({
      id: options.id,
      src: options.src,
      title:options.title
    });
    this.getQrCode();
  },

  getQrCode() {
    var that = this;
    var token = wx.getStorageSync('token');
    //var pagePaths = getCurrentPages();
    //var currentPath = (pagePaths[pagePaths.length - 1]).route;
    var current=this.data.current;
    var id = this.data.id;
    console.log(this.data.src)
    wx.showLoading({
      title: '图片生成中...',
    })
    wx.request({
      url: 'http://47.92.245.128/php/wx/qr_code.php',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值 application/json
      },
      data: {
        imgSrc: this.data.src,//http://winipo.cn/tpl/Public/images/home/yw_b04.jpg
        title:this.data.title,
        token:token,
        // path: 'pages/design_detail/design_detail?current=' + current + '&obj=' + JSON.stringify(this.data.needParams)
        path: '/pages/design_detail/design_detail?current=' + current + '&id=' + id
      },
      success: function (res) {
        wx.hideLoading()
        if (res.data.success){
          that.setData({
            codeImg: res.data.codeImg
          })
        }
      },
      fail: function (err) {
        wx.showLoading({
          title: '图片生成失败...',
        })
        wx.hideLoading()
        console.log(err)
      }
    })
  },

  previewImage() {
    var codeImg = this.data.codeImg;
    console.log(codeImg)
    if (codeImg){
      wx.previewImage({
        current: codeImg, // 当前显示图片的http链接
        urls: [codeImg] // 需要预览的图片http链接列表
      })
      wx.scanCode({
        success:(res)=>{
          console.log(res)
        }
      })
    }

  },

  downImg(){
    var img = this.data.codeImg;
    wx.getImageInfo({         //下载图片
      src: img,      //这里放你要下载图片的数组(多张) 或 字符串(一张)          下面代码不用改动
      success: function (ret) {
        var path = ret.path;
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(result) {
            wx.showToast({
              title: '下载分享图片成功',
              image: '../../images/success.png',
              duration: 3000
            })
          },
          fail(result) {
            wx.showModal({
              title: '提示',
              confirmText:'重新授权',
              content: '您已取消下载分享图片',
              success:function(res){
                if(res.confirm){
                  wx.openSetting({
                    success: (res) => {
                      console.log(res);
                    }
                  })
                }
              }
            })
          }
        });
      },
      fail:function(err){
        console.log(err)
      }
    });
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
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: that.data.title,
      imageUrl: that.data.src, //'../../images/avatar.png'
      path: '/pages/design_detail/design_detail?current=' + this.data.current + '&id=' + this.data.id,
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          image: '../../images/success.png',
          duration:3000
        })
      },
      fail: function (res) {
        //console.log(res)
      }
    }
  }
})