// pages/building_list/building_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      {
        "id": "10198516521169569718",
        "title": "宏福苑",
        "address": "北京市昌平区定泗路",
        "tel": " ",
        "category": "房产小区:住宅区:住宅小区",
        "type": 0,
        "location": {
          "lat": 40.11415,
          "lng": 116.36723
        },
        "_distance": 23564.48,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10003172372052837960",
        "title": "宏福苑[公交站]",
        "address": "昌22",
        "tel": " ",
        "category": "基础设施:交通设施:公交车站",
        "type": 1,
        "location": {
          "lat": 40.115484,
          "lng": 116.367981
        },
        "_distance": 23702.06,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10003126559695607160",
        "title": "宏福苑小区[公交站]",
        "address": "463,607,922,昌22,快速直达专线165,快速直达专线164",
        "tel": " ",
        "category": "基础设施:交通设施:公交车站",
        "type": 1,
        "location": {
          "lat": 40.115537,
          "lng": 116.367912
        },
        "_distance": 23708.77,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "18069226477569232643",
        "title": "宏福苑南区",
        "address": "北京市昌平区郑各庄",
        "tel": " ",
        "category": "房产小区:住宅区:住宅小区",
        "type": 0,
        "location": {
          "lat": 40.113384,
          "lng": 116.367012
        },
        "_distance": 23482.77,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "4068362459453832660",
        "title": "宏福苑北区",
        "address": "北京市昌平区定泗路",
        "tel": " ",
        "category": "房产小区:住宅区:住宅小区",
        "type": 0,
        "location": {
          "lat": 40.116737,
          "lng": 116.367481
        },
        "_distance": 23846.44,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10336530980648944664",
        "title": "宏福苑-南一区",
        "address": "北京市昌平区定泗路",
        "tel": " ",
        "category": "房产小区:住宅区:住宅小区",
        "type": 0,
        "location": {
          "lat": 40.109034,
          "lng": 116.365101
        },
        "_distance": 23028.74,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10891907573483968875",
        "title": "宏福苑(南二区)",
        "address": "北京市昌平区宏福大道",
        "tel": " ",
        "category": "房产小区:住宅区:住宅小区",
        "type": 0,
        "location": {
          "lat": 40.109391,
          "lng": 116.368907
        },
        "_distance": 23019.6,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10003571323520588260",
        "title": "宏福苑小区西[公交站]",
        "address": "607,快速公交3,463,922,快速直达专线165,快速直达专线164",
        "tel": " ",
        "category": "基础设施:交通设施:公交车站",
        "type": 1,
        "location": {
          "lat": 40.115742,
          "lng": 116.366544
        },
        "_distance": 23748.18,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10003933900066574280",
        "title": "宏福苑小区南[公交站]",
        "address": "快速公交3,607,快速直达专线165",
        "tel": " ",
        "category": "基础设施:交通设施:公交车站",
        "type": 1,
        "location": {
          "lat": 40.111397,
          "lng": 116.37745
        },
        "_distance": 23149.67,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      },
      {
        "id": "10003819358795621030",
        "title": "宏福苑小区东[公交站]",
        "address": "463,607,922,昌22,快速直达专线165,快速直达专线164",
        "tel": " ",
        "category": "基础设施:交通设施:公交车站",
        "type": 1,
        "location": {
          "lat": 40.115336,
          "lng": 116.371452
        },
        "_distance": 23646.15,
        "ad_info": {
          "adcode": 110114,
          "province": "北京市",
          "city": "北京市",
          "district": "昌平区"
        }
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  buildingItem(){
    wx.navigateTo({
      url: '../building_item/building_item',
    })
  },

  goBuildingMap(){
    wx.navigateTo({
      url: '../nearby/nearby',
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