// pages/首页/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
// 获取输入账号 
usernameInput: function (e) {
  this.setData({
    username: e.detail.value
  })
},

// 获取输入密码 
passwordInput: function (e) {
  this.setData({
    password: e.detail.value
  })
},
goto_index: function (){
var that =this;
console.log(that.data.username)
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