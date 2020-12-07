const app = getApp()
 
Page({
  data: {
    //顶部安全距离（状态栏高度）
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    list: [
      {id: 1,date:'2020-07-01',number:'201831062214',name:'贺志强',statusName:'待操作'},
      {id: 2,date:'2020-07-01',number:'201831062214',name:'贺志强',statusName:'待操作'},
      {id: 3,date:'2020-07-01',number:'201831062214',name:'贺志强',statusName:'待操作'},
      {id: 4,date:'2020-07-01',number:'201831062214',name:'贺志强',statusName:'待操作'},
      {id: 5,date:'2020-07-01',number:'201831062214',name:'贺志强',statusName:'待操作'},
    ]
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