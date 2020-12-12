// pages/mainPage/faceIden/faceIden.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "",
    src: "", //图片的链接
    token: "",
    base64: "",
    msg: ""
  },
  myrquest: function () {
    var that = this;
    this.setData({
      token: '24.31573b478477b914bb1f35a164c0eb40.2592000.1610185144.282335-23130383'
    })
    console.log(this.data.token)
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/face/v3/search?access_token=' + that.data.token,
      
      method: 'POST',
      data: {
        image: that.data.base64,
        image_type: 'BASE64',
        group_id_list: 'facedatabase', //自己的组id
      },
      header: {
        'Content-Type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        var errorcode = res.data.error_code
        //做成功判断
        if (errorcode == 0) {
          var ulist = res.data.result
          if (ulist.user_list != null) {
            var result = ulist.user_list[0].score
            if (result > 80) {
              wx.showToast({
                title: '验证通过',
                icon: 'success',
                duration: 500
              })
              wx.navigateTo({
                url: '../accMile/accMile',
              })
            }else(
              console.log('不匹配')
            )
          }
        } else {
          wx.showToast({
            title: '访问失败',
            image:'../../../images/错误.png'
          })
        }
      }
    })

  },
  takePhoto: function () {
    var that = this;
    //拍照
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'medium', //使用small可以加快速度
      success: (res) => {
        that.setData({
          src: res.tempImagePath //获取图片
        })

        //图片base64编码
        wx.getFileSystemManager().readFile({
          filePath: that.data.src, //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            that.setData({
              base64: res.data
            })
            that.myrquest(); //拍照之后，调用上传函数，获取token上传人脸
          }
        })
      } //拍照成功结束

    }) //调用相机结束

    //失败尝试
    wx.showToast({
      title: '注册中...',
      icon: 'loading',
      duration: 1000
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