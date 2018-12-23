// pages/nearby/nearby.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'SFLBZ-GZ5H6-7RLS6-EI7M2-EVVWK-LMBAU'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: false,
    reset: false,
    latitude: '',
    longitude: '',
    nearList: [
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
    notFound: false,
    currentItem: '',
    selectedVal: '',
    markers: [],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/images/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  },

  // 监听input值变化
  changeSearchVal(e) {
    var that = this;
    var targetVal = e.detail.value;
    that.setData({
      selectedVal: targetVal
    })
  },

  // input框搜索
  searchVal: function (e) {
    if (!e.detail.value) {
      wx.showToast({
        title: '请输入搜索内容',
        image: '../../images/error.png',
      });
      return;
    }
    var obj = {
      keyWords: e.detail.value,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
    }
    this.setData({
      currentItem: ''
    })
    this.searchNearby(obj);
  },

  // 搜索按钮
  btnSearchVal() {
    if (!this.data.selectedVal) {
      wx.showToast({
        title: '请输入搜索内容',
        image: '../../images/error.png',
      });
      return;
    }
    var obj = {
      keyWords: this.data.selectedVal,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
    }
    this.setData({
      currentItem: ''
    })
    this.searchNearby(obj);
  },

  // 搜索附近
  searchNearby(obj) {
    var _this = this;
    // 调用搜索附近接口
    qqmapsdk.search({
      keyword: obj.keyWords,  //搜索关键词
      location: obj.latitude + ',' + obj.longitude,  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/images/location.png", //图标路径
            width: 32,
            height: 32
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks,
          notFound: false,
          nearList: res.data
        })
        if (!res.data.length) {
          _this.setData({
            notFound: true
          })
        }
      },
      fail: function (res) {
        //console.log(res);
      },
      complete: function (res) {
        //console.log(res);
      }
    });
  },

  //获取当前地址位置
  getLocal: function (latitude, longitude) {
    var that = this;
    qqmapsdk.reverseGeocoder({  //qqmapsdk.reverseGeocoder
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        var address = res.result.address;
        that.setData({
          current_address: address
        });

      },
      fail: function (res) {
        // console.log(res)
        // wx.showToast({
        //   title: '解析地址错误',
        //   icon: 'loading',
        //   duration: 1000
        // });
      },

    })
  },

  // 地图标记点事件
  markertap(e) {
    var that = this;
    var markerId = e.markerId;
    var nearList = this.data.nearList;
    if (nearList.length) {
      for (var i = 0; i < nearList.length; i++) {
        if (markerId == nearList[i].id) {
          that.setData({
            currentItem: nearList[i]
          })
        }
      }
    }
  },
  // 当前位置附近
  currentNearby(e) {
    var latitude = e.currentTarget.dataset.latitude;
    var longitude = e.currentTarget.dataset.longitude;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../building_list/building_list?longitude=' + longitude + '&latitude=' + latitude + '&title=' + title
    })
  },

  goBuildingList(){
    wx.navigateTo({
      url: '../building_list/building_list'
    })
  },

  // 点击当前选中标记点事件
  selectVal(e) {
    var latitude = e.currentTarget.dataset.latitude;
    var longitude = e.currentTarget.dataset.longitude;
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '../building_item/building_item?longitude=' + longitude + '&latitude=' + latitude + '&title=' + title
    })
  },

  //重新授权地理
  reset() {
    wx.showModal({
      title: '提示',
      content: '您未授权地理位置，请重新授权！',
      confirmText: '重新授权',
      success: function (res) {
        if (res.confirm) {
          //重新授权
          wx.openSetting({
            success(res) {
              if (res.authSetting['scope.userLocation']) {
                wx.showToast({
                  title: '授权成功',
                })
              }
            }
          })
        }
      },
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
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function (res) {
        that.setData({
          state: true,
          reset: false,
          latitude: res.latitude,
          longitude: res.longitude
        })
        that.getLocal(res.latitude, res.longitude)
      },
      fail: function (res) {
        that.setData({
          reset: true,
          state: false
        })
      }
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