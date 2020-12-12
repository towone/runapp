var that
// pages/mainPage/accMile/accMile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password2:0,
    min:9,
    sec:55,
    long: wx.getStorageSync('long'),//经度-180 -- 180
    la:wx.getStorageSync('la') ,//纬度-90 --  90
    polyline : [{
      points : [],
       color : '#99FF00',
       width : 5,
       dottedLine : false
   }]
  },
  end: function () {
    wx.navigateTo({
      url: '../finishRun/finishRun',
    })
  },
getlocation:function(){
  wx.getLocation({
    altitude: 'altitude',
    success:(res)=>{
      that.setData({
        long:res.longitude,
        la:res.latitude,
      })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    
    that=this
    // var long=wx.getStorageSync('long')
    // var la=wx.getStorageSync('la')
    var i=0
    this.timer = setInterval(repeat, 1000);
    function repeat(){ 
      that.setData({
        sec:that.data.sec+=1
      }) 
      
      if(that.data.sec%60==0){
        that.setData({
          min:that.data.min+=1,
          sec:0
        })
      }
      console.log('dsfs')
      // long+=0.1
      // la+=0.1
      that.getlocation()     
      that.setData({
        ['polyline[0].points['+i+']']:{latitude: that.data.la, longitude: that.data.long}
      })
      i+=1
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

  }
})