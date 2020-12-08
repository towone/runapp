// pages/Mine/updatePwd/updatePwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:wx.getStorageSync('Sno'),
    oldpwd:'',
    newpwd:'',
    connewpwd:''
  },
oldPwd:function(e){
  this.setData({
    oldpwd: e.detail.value
  })
},
newPwd:function(e){
  this.setData({
    newpwd: e.detail.value
  })
},
conNewPwd:function(e){
  this.setData({
    connewpwd: e.detail.value
  })
},
update:function(){
if(this.data.newPwd!=''&&this.data.oldpwd!=''&&this.data.connewpwd!=''){
  if(this.data.connewpwd==this.data.newpwd){
    const db=wx.cloud.database()
    db.collection('student').where({
      PW:this.data.oldpwd,
      NUM:wx.getStorageSync('Sno')
    }).get({
      success:(res)=>{
        //查找到一条记录
        if(res.data.length==1){
          db.collection('student').where({
            NUM:wx.getStorageSync('Sno')
          }).get({
            success:(res)=>{
              // 先找到对应学号_id
              db.collection('student').doc(res.data[0]._id).update({
                data:{
                  PW:this.data.newpwd
                },
                success:(res)=>{
                  // 密码修改成功跳转到我的界面
                  wx.showToast({
                    title: '密码修改成功！',
                    success:(res)=>{
                      wx.switchTab({
                        url: '../my/my',
                      })
                    }
                })

              },
              fail:(err)=>{
                  wx.showToast({
                    title: '修改失败！',
                  })
              }      
              })
            }
          })
        }
        else{
          wx.showToast({
            title: '旧密码输入错误！',
            image:'../../../images/错误.png'
          })
        }
      }
    })

    

    
  }
  else{
    wx.showToast({
      title: '两次密码不一致！',
     image:'../../../images/错误.png'
    })
  }
}
else{
  wx.showToast({
    title: '请输入完整信息！',
   image:'../../../images/错误.png'
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