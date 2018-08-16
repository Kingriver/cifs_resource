// pages/news/news.js
const app = getApp();
import { baseUrl } from '../../api/api.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    news: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '玩命加载中',
    })
    this.setData({
      news: {
        id: decodeURIComponent(options.id),
        from: decodeURIComponent(options.from),
        image: decodeURIComponent(options.image),
        title: decodeURIComponent(options.title),
        content: decodeURIComponent(options.content),
      }
    })
    wx.setNavigationBarTitle({ // 设置当前标题
      title: decodeURIComponent(options.title)
    })
    wx.hideLoading();
  },
  next: function (e) {
    var that = this;
    var id = that.data.news.id;
    if (id === 'n8') {
      wx.showModal({
        title: '提示',
        content: '没有更多内容了',
        showCancel: false,
        success: function (res) {
        }
      })
      return;
    }
    wx.request({
      url: baseUrl,
      success: (res) => {
        for (let i = 0; i < res.data.data.new.length; i++) {
          if (id === res.data.data.new[i].contentId) {
            console.log("找到了");
            this.setData({
              news: res.data.data.new[i + 1],
            })
            var it = this;
            wx.navigateTo({
              url: 'news?id=' + this.data.news.contentId + '&title=' + this.data.news.title + '&from=' + this.data.news.from + '&image=' + this.data.news.image + '&content=' + this.data.news.content + ''
            })
          }
        }
      }
    })
  },
  back: function (e) {
    wx.switchTab({
      url: "../../pages/index/index"
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
  onShareAppMessage: function () {
    return {
      path: `/pages/news/news`+ this.data.news.contentId + '&title=' + this.data.news.title + '&from=' + this.data.news.from + '&image=' + this.data.news.image + '&content=' + this.data.news.content,
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  }
})