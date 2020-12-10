// pages/Teacher/createClass/createClass.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
name:'',
num:'',
Tname:''
      },
input1:function(e){
  this.setData({
    name:e.detail.value
  })
},
input2:function(e){
  this.setData({
    num:e.detail.value
  })
},
input3:function(e){
  this.setData({
    Tname:e.detail.value
  })
},
create:function(){
  const db = wx.cloud.database();
  const testDB = wx.cloud.database({
    env: 'hsb'
  });
  db.collection('CreateClass').add({
    data:{
      Tno:wx.getStorageSync('Sno'),
      Tname:this.data.Tname,
      Info:this.data.name,
      ClassNum:this.data.num
    }
  }).then(res=>{
    wx.showToast({
      title: '创建成功',
    })
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