// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  
  bell_ding1:function(){
    console.log('Top1响铃！')
    
  },
  bell_ding2:function(){
    console.log('Top2响铃！')
  },
  bell_ding3:function(){
    console.log('Top3响铃！')
  },
  toshowinfo1:function(){
    wx.navigateTo({
      url: '../showinfo/showinfo',
    })
  },
  toshowinfo2:function(){
    wx.navigateTo({
      url: '../showinfo2/showinfo',
    })
  },
  toshowinfo3:function(){
    wx.navigateTo({
      url: '../showinfo3/showinfo',
    })
  }
})