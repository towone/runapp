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
  goto_index: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      const db = wx.cloud.database();
      const testDB = wx.cloud.database({
        env: 'hsb'
      });
      const todos = db.collection('student');
      db.collection('student').where({
          NUM: that.data.username,
          PW: that.data.password
        })
        .get({
          success: function (res) {
            if (res.data.length > 0) {
              // var unitName = res.data.data.User.unitName;
              // var unitId = res.data.data.User.unitId;
              // wx.setStorageSync('unitId', unitId);
              // wx.setStorageSync('unitName', unitName);
              if (res.data[0].check == '0') {
                wx.setStorageSync('Sno', that.data.username)
                wx.switchTab({
                  url: '../mainPage/main/main'
                })
              } else if (res.data[0].check == '1') {
                wx.setStorageSync('Sno', that.data.username)
                wx.navigateTo({
                  url: '../Teacher/tea/tea'
                })

              } else {
                wx.navigateTo({
                  url: '../Adminer/admin/admin',
                })
              }

            } else {
              console.log(res.data.length);
              wx.showToast({
                title: '账号不存在或密码错误',
                icon: 'none',
                duration: 2000
              })
            }

          }

        })
    }
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
  // register: function () {
  //   wx.navigateTo({
  //     url: '../register/register'
  //   })
  // },
  forgetPwd: function () {
    wx.navigateTo({
      url: '../resetPwd/resetPwd'
    })
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