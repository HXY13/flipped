const App = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        indicatorDots: false,
        autoplay: false,
        openid: ""
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
    getUserInfo(){
      wx.getUserProfile({
        desc: '用于完善信息',
        success: (res) => {
          console.log(res)
        }
      })
      wx.switchTab({
        url: '../index/index'
    })
    },
    
    // getOpenid:function(){
    //   var that = this;
    //   app.wxlogin(function (res)  {
    //     console.log("获取openid："+res);
    //     if(res){
    //       that.setData({
    //         openid:res
    //       })
    //     }
    //   })
    // }

})