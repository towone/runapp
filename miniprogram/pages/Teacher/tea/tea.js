// pages/Teacher/tea/tea.js
Page({

  /**
   * 页面的初始数据
   */
  // 点击下拉显示框
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  // 点击下拉列表
  optionTaps(e) {
    let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      indexs: Indexs,
      shows: !this.data.shows

    });
    wx.setStorageSync('class', this.data.selectDatas[Indexs]) 
  },
  data: {
    shows: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectDatas: ['yiersan'], //下拉列表的数据
    indexs: 0, //选择的下拉列 表下标,
    userListInfo: [{
      icon: "/images/publishNotice.png",
      text: '发布通知'
    }, {
      icon: "/images/classRate.png",
      text: '查看完成情况'
    }, {
      icon: "/images/createClass.png",
      text: '创建班级'
    }, {
      icon: "/images/update.png",
      text: '修改密码'
    }]
  },
  //页面跳转函数
  onclick: function (event) {
    var path = event.currentTarget.id
    switch (path) {
      case '0':
        wx.navigateTo({
          url: '../publishNotice/publishNotice',
        });
        break;
      case '1':
        wx.navigateTo({
          url: '../classRate/classRate',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../createClass/createClass',
        });
        break;
      case '3':
        wx.navigateTo({
          url: '../updatePwd/updatePwd',
        });
        break;
    }
  },
  onLoad: function () {
    // var that = this
    // wx.getUserInfo(function (userInfo) {
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // }),
    console.log('dsfsd')
     const db = wx.cloud.database();
     db.collection('CreateClass').where({}).get({
       success:(res)=>{
        for(var i=0;i<res.data.length;i++){
          this.setData({
            ['selectDatas['+i+']']:res.data[i].Info
          })
        }
       },
       fail:(err)=>{

       }
     })
    
  },
  exit: function () {
    wx.redirectTo({
      url: '../../login/login',
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
    this.onLoad()
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