
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:[
      "https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/index/swiper01.png?sign=eb3d362d268f6db9b47461d39910774f&t=1639212940",
      "https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/index/swiper02.png?sign=7406fd18d977f185a2d866ebe2c83df3&t=1639212994",
      "https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/index/swiper03.png?sign=2f8442d4ba12426a510457ae744dcbed&t=1639213006",
    ],
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
  // onShow: function () {

  // },

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
  onShow: function (e) {
    this.setData({
      msgList: [
        { url: "url", title: "心动请响铃" },
        { url: "url", title: "交友社区" },
        { url: "url", title: "我们将为您匹配最合适你的心灵对象" }]
    });
  },
  goToInfoin: function(e){
    wx.navigateTo({
      url: '../infoin/infoin',
    })
  }
})
