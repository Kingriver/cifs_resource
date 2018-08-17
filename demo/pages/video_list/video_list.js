// pages/video/video_list.js
const app = getApp();
import { baseUrl } from '../../api/api.js';
Page({
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    videos: [
    ],
    currentPage: 1,
    totalPages: 1,
    hide: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: baseUrl,
      success: (res) => {
        console.log(res)
        this.setData({
          videos: res.data.data.videos,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
        })
      }
    }, )
    wx.hideLoading();
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
    wx.showLoading({
      title: '玩命加载中',
    })
    wx.request({
      url: API_BASE,
      success: (res) => {
        this.setData({
          videos: res.data.data.videos,
          currentPage: 1,
          hide: false
        })
        wx.stopPullDownRefresh()
      }
    })
    wx.hideLoading();
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
      path: `/pages/index/index`,
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  }
})