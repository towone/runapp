// pages/Teacher/updatePwd/updatePwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldpwd:'',
    newpwd:'',
    conpwd:'',
    Sno: wx.getStorageSync('Sno'),
  },
  oldPwd:function(e){
    this.setData({
      oldpwd:e.detail.value
    })
  },
  newPwd:function(e){
    this.setData({
      newpwd:e.detail.value
    })
  },
  conPwd:function(e){
    this.setData({
      conpwd:e.detail.value
    })
  },
  confirm:function(){
    if(this.data.oldpwd!=''&&this.data.newpwd!=''&&this.data.conpwd!=''){
      if(this.data.newpwd==this.data.conpwd){
        const db=wx.cloud.database()
        db.collection('student').where({
          NUM:this.data.Sno,
          PW:this.data.oldpwd
        }).get({
          success:(res)=>{
              if(res.data.length!=0){//如果找到相应的记录，说明原密码输入正确,进行更改密码的操作
                db.collection('student').doc(res.data[0]._id).update({
                  data:{
                    PW:this.data.newpwd,
                  },
                  success:(res)=>{
                    wx.showToast({
                      title: '密码修改成功',
                      // success:()=>{
                      //   wx.redirectTo({
                      //     url: '../tea/tea',
                      //   })
                      // }
                    })
                    
                  },
                  fail:(err)=>{
                    wx.showToast({
                      title: '密码修改失败',
                      image:'../../../images/错误.png'
                    })
                  }

                })
              }
              else{
                wx.showToast({
                  title: '原密码输入错误',
                  image:'../../../images/错误.png'
                })
              }
          },
          fail:(err)=>{
            console.log(err)
          }
        })
      }
      else{
        wx.showToast({
          title: '两次密码不一致',
          image:'../../../images/错误.png'
        })
      }
    }
    else{
      wx.showToast({
        title: '请输入完整信息',
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