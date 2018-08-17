// pages/player/player.js
const app = getApp();
import { baseUrl } from '../../api/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canshow: true,
    canshow2: true,
    playernum: 5,
    playernum2: 5,
    player1: [],
    player2: [],
    player3: [],
    player4: [],
    player5: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: baseUrl,
      success: (res) => {
        this.setData({
          player1: res.data.data.player1,
          player2: res.data.data.player2
        })
      }
    })
  },
  showmore: function (e) {
    let canshow = this.data.canshow;
    if (canshow) {
      this.setData({
        canshow: false,
        playernum: 10,
      })
    } else {
      this.setData({
        canshow: true,
        playernum: 5,
      })
    }
  },
  showmore2: function (e) {
    let canshow = this.data.canshow2;
    if (canshow) {
      this.setData({
        canshow2: false,
        playernum2: 10,
      })
    } else {
      this.setData({
        canshow2: true,
        playernum2: 5,
      })
    }
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
      path: `/pages/index/index`,
      success: function (res) {
      },
      fail: function (res) {
      }
    }
  }
})