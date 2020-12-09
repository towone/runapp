// pages/Teacher/classRate/classRate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //顶部安全距离（状态栏高度）
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
     list: [
      //  {
    //     id: 1,
    //     class: '一班',
    //     number: '2018314',
    //     name: '侯金凯',
    //     finish: '60km',
    //     remain: '30km'
    //   },
    //   {
    //     id: 1,
    //     class: '一班',
    //     number: '2018314',
    //     name: '侯金凯',
    //     finish: '60km',
    //     remain: '30km'
    //   },
    //   {
    //     id: 1,
    //     class: '一班',
    //     number: '2018314',
    //     name: '侯金凯',
    //     finish: '60km',
    //     remain: '30km'
    //   },

    ],
    numlist: '',
    Numlist: []
  },

  onLoad: function (options) {
    var that = this;
    const db = wx.cloud.database();
    const testDB = wx.cloud.database({
      env: 'hsb'
    });
    db.collection('CreateClass').where({
      Info: '轮滑一班'
    }).get().then(res=>{
        db.collection('class').where({
          ClassNum: res.data[0].ClassNum
        }).get().then(e=>{
          for(var i=0;i<e.data.length;i++){
            db.collection('runRat').where({
              NUM:e.data[i].Sno
            }).get().then(c=>{
              that.setData({
                list:c.data
              })
            })
          }
          
        })
    })
    // db.collection('class').where({
    //   ClassNum: that.data.numlist
    // }).get({
    //   success: (res) => {
    //     console.log(res)
    //     that.setData({
    //       Numlist: res.data
    //     })
    //   }
    // })
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