// pages/Teacher/publishNotice/publishNotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class: wx.getStorageSync('class'),
    notice: ''
  },
  notice: function (e) {
    this.setData({
      notice: e.detail.value
    })
  },
  publish: function () {

    wx.showModal({
      title: '提示',
      content: '是否发布该公告？',
      success:(res) =>{
        if (res.confirm) {
          if (this.data.notice == '') {
            wx.showToast({
              title: '公告内容为空',
              image: '../../../images/错误.png'
            })
          } else {
            const db = wx.cloud.database()
            db.collection('notice').add({
              data: {
                Content: this.data.notice,
                class: wx.getStorageSync('class')
              },
              success: (res) => {
                wx.showToast({
                  title: '公告发布成功',
                })
              },
              fail: (err) => {
                wx.showToast({
                  title: '发布失败',
                  image: '../../../images/错误.png'
                })
              }
            })
          }
        } else if (res.cancel) {

        }
      }
    })

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