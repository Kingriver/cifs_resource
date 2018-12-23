// pages/effect/effect.js
import NumberAnimate from "../../utils/NumberAnimate";
// console.log(NumberAnimate)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: '13388',
    num2: '',
    num3: '',
    num1Complete: '',
    num2Complete: '',
    num3Complete: ''
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
    this.animation = wx.createAnimation()
    var that=this;
    setInterval(function(){
      that.scale()
    },1000)
    setInterval(function () {
      that.animate()
    }, 2000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     
  },



    //调用NumberAnimate.js中NumberAnimate实例化对象，测试3种效果
   animate: function () {

       this.setData({
           num1: '',
           num2: '',
           num3: '',
           num1Complete: '',
           num2Complete: '',
           num3Complete: ''
       });

        let num1  =  18362.856;
        let n1  =  new  NumberAnimate({
              from: num1,//开始时的数字
              speed: 3000,// 总时间
              refreshTime: 100,//  刷新一次的时间
              decimals: 3,//小数点后的位数
              onUpdate: () => {//更新回调函数
                  this.setData({
                      num1: n1.tempValue
                  });
              },
              onComplete: () => {//完成回调函数
               
              }
        });

        let num2  =  13388;
        let n2  =  new  NumberAnimate({
              from: num2,
              speed: 1500,
              decimals: 0,
              refreshTime: 100,
              onUpdate: () => {
                  this.setData({
                      num2: n2.tempValue
                  });
              },
              onComplete: () => {
                    this.setData({
                        num2Complete: " 完成了"
                    });
              }
        });

        let num3  =  2123655255888.86;
        let n3  =  new  NumberAnimate({
              from: num3,
              speed: 2000,
              refreshTime: 100,
              decimals: 2,
              onUpdate: () => {
                  this.setData({
                      num3: n3.tempValue
                  });
              },
              onComplete: () => {
                    this.setData({
                        num3Complete: " 完成了"
                    });
              }
        });
   },






  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale: function () {
    this.animation.scale(1.2).step().scale(1).step()
    this.setData({ animation: this.animation.export() })
  },
  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew: function () {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  rotateThenScale: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  allInQueue: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  reset: function () {
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
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