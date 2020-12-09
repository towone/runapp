// pages/mainPage/joinClass/joinClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: ''
  },
  classnum: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  joinclass: function () {
    const db = wx.cloud.database();
    const testDB = wx.cloud.database({
      env: 'hsb'
    });
    db.collection('CreateClass').where({
      ClassNum: this.data.num
    }).get({

      success: (res) => {
        if (res.data.length > 0) {
          db.collection('class').add({
            data: {
              ClassNum: this.data.num,
              Sno: wx.getStorageSync('Sno')
            }
          }).then(res => {
            wx.showToast({
              title: '加入成功',
             
            })
          })
        }else{
          wx.showToast({
            title: '不存在此班级',
            image:'../../../images/错误.png'
          })
        }
      }
    })

    // wx.getStorageSync('Sno')
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