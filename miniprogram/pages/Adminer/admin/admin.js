// pages/Adminer/admin/admin.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    userListInfo: [{
      icon: "/images/reset.png",
      text: '重置用户密码'
    }, {
      icon: "/images/select.png",
      text: '查询跑步数据'
    }, {
      icon: "/images/update.png",
      text: '修改学生信息'
    }]
  },
  exit: function () {
    wx.redirectTo({
      url: '../../login/login',
      
    })
  },
  onLoad: function () {
    var that = this
    wx.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  move: function (event) {
    var path = event.currentTarget.id
    console.log(path)
    switch (path) {
      case '0':
        console.log(path)
        wx.navigateTo({
          url: '../adminReset/adminReset',
        });
        break;
      case '1':
        wx.navigateTo({
          url: '../adminSel/adminSel',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../adminUpdate/adminUpdate',
        });
        break;
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
    this.onUnload()
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