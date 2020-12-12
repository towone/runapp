var that
var i = 0
// pages/mainPage/accMile/accMile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    distance: 2.0,
    speed_min: 1.0,
    speed_sec: 1.0,
    pause: '暂停',
    password2: 0,
    min: 9,
    sec: 55,
    long: 1, //经度-180 -- 180
    la: 1, //纬度-90 --  90
    polyline: [{
      points: [],
      color: '#99FF00',
      width: 5,
      dottedLine: false
    }],
    polygon:[{
     
      points:[{latitude:30.824,longitude:104.151},{latitude:30.824,longitude:104.159},{latitude:30.825,longitude:104.159},{latitude:30.825,longitude:104.158},],

      strokeWidth:5,
      strokeColor:'#99FF00'
    }]
  },
  pause: function () {
    if (that.data.pause == '暂停') {
      clearInterval(this.timer),
        this.setData({
          pause: '继续'
        })
    } else {
      this.timer = setInterval(that.repeat, 1000);
      this.setData({
        pause: '暂停'
      })
    }
  },
  end: function () {
    clearInterval(this.timer);
    wx.showModal({
      title: '提示',
      content: '是否结束跑步？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('distance', that.data.distance)
          wx.setStorageSync('speed_min', that.data.speed_min)
          wx.setStorageSync('speed_sec', that.data.speed_sec)
          wx.setStorageSync('min', that.data.min)
          wx.setStorageSync('sec', that.data.sec)
          wx.navigateTo({
            url: '../finishRun/finishRun',
          })
        }
        else if(res.cancel){
          this.timer=setInterval(that.repeat,1000)
        }
      }
    })


  },
  getlocation: function () {
    wx.getLocation({
      altitude: 'altitude',
      success: (res) => {
        that.setData({
          long: res.longitude,
          la: res.latitude,
        })
        wx.setStorageSync('long', that.data.long)
        wx.setStorageSync('la', that.data.la)
      }
    })
  },
  repeat: function () {
    that.setData({ //秒数自增1
      sec: that.data.sec += 1,
      distance:Math.round((that.data.distance+=0.05)*100)/100
    })
    if (that.data.sec % 60 == 0) { //计算分钟数
      that.setData({
        min: that.data.min += 1,
        sec: 0
      })
    }

    var speed_min = Math.floor((that.data.min + that.data.sec / 60) / that.data.distance)
    var speed_sec = Math.round(((that.data.min + that.data.sec / 60) / that.data.distance - speed_min) * 60)
    this.setData({
      speed_min: speed_min,
      speed_sec: speed_sec
    })
    // long+=0.1
    // la+=0.1
    that.getlocation()
    that.setData({
      ['polyline[0].points[' + i + ']']: {
        latitude: that.data.la,
        longitude: that.data.long
      },

    })
    i += 1

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      long:wx.getStorageSync('long'),
      la:wx.getStorageSync('la')
    })
    that = this
    // var long=wx.getStorageSync('long')
    // var la=wx.getStorageSync('la')
    this.timer = setInterval(that.repeat, 1000);

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
    // this.timer = setInterval(that.repeat, 1000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.timer)
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