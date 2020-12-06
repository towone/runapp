// pages/Mine/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    userListInfo:[{
      icon:"/images/跑步记录.png",
      text:'跑步记录'
    },{
      icon:"/images/通知公告.png",
      text:'通知公告'
    },{
      icon:"/images/修改密码.png",
      text:'修改密码'
    },{
      icon:"/images/联系客服.png",
      text:'联系客服'
    }
    ]
      },
    onLoad: function(){
      var that = this
      wx.getUserInfo(function (userInfo){
        that.setData({
          userInfo:userInfo
        })
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