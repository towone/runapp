// pages/mainPage/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: '',
    time: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var myDate = new Date();
    console.log(myDate.toLocaleString())
    const db = wx.cloud.database()
    db.collection('class').where({
      Sno: wx.getStorageSync('Sno')
    }).get({
      success: (res) => { //得到该学生所在的班级号
        if (res.data.length != 0) { //说明学生已经加入了班级
          db.collection('CreateClass').where({
            ClassNum: res.data[0].ClassNum
          }).get({
            success:(res)=>{//根据班级号找到班级名
              console.log(res)
              db.collection('notice').where({//根据班级名得到应该收到的公告
                class:res.data[0].Info
              }).get({
                success:(res)=>{
                  this.setData({
                    notice:res.data[res.data.length-1].Content
                  })
                }
              })
            }
          })
        }
        else{
          this.setData({
            notice:'还没有加入班级！'
          })
        }
      },
      fail: (err) => {
        console.log(err)
      }

    })
  },
  move: function () {
    wx.navigateTo({
      url: '../joinClass/joinClass',
    })
  },
  startrun: function () {
    wx.navigateTo({
      url: '../faceIden/faceIden',
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
    this.onLoad()
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