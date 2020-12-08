// pages/Adminer/adminSel/adminSel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //顶部安全距离（状态栏高度）
    usernum: '',
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    list: []
  },
value:function(e){
  this.setData({
    usernum: e.detail.value
  })
},
search:function(){
  var that=this;
  const db = wx.cloud.database();
  const testDB = wx.cloud.database({
    env: 'hsb'
  });
  const todos = db.collection('runRat');
db.collection('runRat').where({
NUM:that.data.usernum
}).get({
  success: function(res){
that.setData({
  list:res.data
})
console.log(res.data)
console.log(that.data.usernum)
  }

})
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    const db = wx.cloud.database();
    const testDB = wx.cloud.database({
      env: 'hsb'
    });
    const todos = db.collection('runRat');
  db.collection('runRat').where({
  }).get({
    success: function(res){
  that.setData({
    list:res.data
  })
    }
  
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