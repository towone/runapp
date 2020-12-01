// pages/userConsole/userConsole.js
Page({

  data: {
    openid: ''
  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
  },
  sha:function(){
   console.log(wx.cloud.callFunction({
     name:'sum'
   }))
   console.log('dianwole!')
  }
})
