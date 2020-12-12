// pages/Adminer/adminUpdate/adminUpdate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows: false,
    indexs:0,
    selectDatas: ['正常','异常'],
    seaSno:'201831062217',
    userName:'',
    finish:'',
    remain:'',
    aid:'',
  },
  //获取要搜索的学号
  selectTaps() {
    this.setData({
      shows: !this.data.shows,
    });
  },
sea:function(e){
  this.setData({
    seaSno:e.detail.value
  })
},
optionTaps(e) {
  let Indexs = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
  this.setData({
    indexs: Indexs,
    shows: !this.data.shows
  });


},
//搜索 在下面显示出相应的信息
search:function(){
const db=wx.cloud.database()
db.collection('runRat').where({
  NUM:this.data.seaSno
}).get({
  success:(res)=>{
    this.setData({
      userName:res.data[0].name,
      finish:res.data[0].finished,
      remain:res.data[0].remin,
      aid:res.data[0].aid
    })
  }
})
},
update:function(){
  const db=wx.cloud.database()
  db.collection('runRat').where({
    NUM:this.data.seaSno
  }).get({
    success:(res)=>{
      console.log(res)
      console.log(this.data.selectDatas[this.data.indexs])
      db.collection('runRat').doc(res.data[0]._id).update({
        data:{
          status:this.data.selectDatas[this.data.indexs]
        },
        success:(res)=>{
          wx.showToast({
            title: '修改状态成功',
          })
        }
      })
    }
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