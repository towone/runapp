// pages/resetPwd/resetPwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acc:'',
    pwd:''
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
accinput:function(e){
  this.setData({
  acc:e.detail.value,
})

},
pwdinput:function(e){
this.setData({
  pwd:e.detail.value
})

},
applyReset:function(){
  const db=wx.cloud.database();

db.collection('resetPwd').where({
  Acc:this.data.acc,
  Pwd:this.data.pwd
}).get({
  success:(res)=>{
    if(res.data.length!=0){
      console.log('你已经重置过密码！')
    }
    else{
      db.collection('student').where({
        NUM:this.data.acc,
        sixID:this.data.pwd
      }).get({
        success:(res)=>{
          if(res.data.length==0){
            console.log('学号或身份证后六位输入错误！')
          }
          else{
            db.collection('resetPwd').add({
              data:{
                Acc:this.data.acc,
                Pwd:this.data.pwd
              },
              success:function(res){
                console.log('申请成功！')
              }
            })
          }
        }
      })
      
    }
  }
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