const app = getApp()
 
Page({
  data: {
    //顶部安全距离（状态栏高度）
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db=wx.cloud.database()
    db.collection('resetPwd').where({}).get({
      success:(res)=>{
        this.setData({
          list:res.data
        })
      }
    })
  },
Reset:function(){
for(var i=0;i<this.data.list.length;i++){
  const db=wx.cloud.database()
  db.collection('student').where({
    NUM:this.data.list[i].Acc
  }).get({
    success:(res)=>{
      db.collection('student').doc(res.data[0]._id).update({
        data:{
          PW:'123456'
        },
      })
    }
  })
}
for(var j=0;j<this.data.list.length;j++){
  const db=wx.cloud.database()
  console.log(this.data.list[j].Acc)
  db.collection('resetPwd').where({
    Acc:this.data.list[j].Acc
  }).get({
    success:(res)=>{
      console.log(res.data)
      db.collection('resetPwd').doc(res.data[0]._id).remove({
        success:(res)=>{
          wx.showToast({
            title: '重置成功',
          }),
          this.onLoad()
        },
        fail:(err)=>{
          wx.showToast({
            title: '错误',
            image:'../../../images/错误.png'
          })
        }
      })
    }
  })
}
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