// pages/loginstart/loginstart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Gender: 'female',
    casIndex: 0,
    items: [
      { name: 'male', value: '男' },
      { name: 'female', value: '女', checked: 'true' },
    ],
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    index:0,//选择的下拉列表下标
    selectData: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天枰座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
    // date: util.getNowDate(new Date())
    inputTele: '',
    result: ''
  },
  inputTele: function(e){
    this.setData({
      telephone: e.detail.value
    })
  },
  log: function(e){
    wx.request({
      url: 'http://192.168.31.238:8000/infoin',
      header:{
        "content-type":"application/x-www-form-urlencoded"
      },
      method:"POST",
      data:{
        telephone:this.data.telephone
      },
      success: res=>{
        if(res.statusCode == 200){
          this.setData({
            result:res.data
          })
        }
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

  },

//   login:function(){
//       wx.navigateTo({ url: '../infoin/infoin' });
//  }
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
      });
    },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉显示框
  selectTap1() {
    this.setData({
      selectShow1: !this.data.selectShow1
    });
  },
  // 点击下拉列表
  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow1: !this.data.selectShow1
    });
  },
  getDateTime:function(e){
    this.setData({
      dateValue:e.detail.value
    })
  },
  openhobby: function(e){
    wx.navigateTo({
      url: '../info2/info2',
    })
  },
  submit:function(){
    wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
    }),
    wx.navigateTo({
      url: '../wait/wait',
    })
    // wx.request({
    //   url: './top/top',
    //   fail: function () {
    //     wx.hideLoading();
    //     wx.redirectTo({
    //       url: '../wait/wait',
    //     })
        // ({
        //   title: '提示',
        //   showCancel: false,
        //   content: '正在加载',
        //   success: function () {
        //     wx.redirectTo({
        //     url: '../top/top'
        //     })
        //   }
        // })
      // }
    // })
  }
  
})