// pages/loginstart/loginstart.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   Gender: 'female',
  //   casIndex: 0,
  //   items: [
  //     { name: 'male', value: '男' },
  //     { name: 'female', value: '女', checked: 'true' },
  //   ],
  //   show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
  //   index:0,//选择的下拉列表下标
  //   selectData: ['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天枰座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
  //   // date: util.getNowDate(new Date())
    
  // },
  data: {
    list:[
      {
        id:0,
        name:"喜欢猫",
        value:"apple"
      },
      {
        id:1,
        name:"喜欢狗",
        value:"grape"
      },
      {
        id:2,
        name:"喜欢旅游",
        value:"bananer"
      },
      {
        id:3,
        name:"喜欢音乐",
        value:"bananer"
      },
      {
        id:4,
        name:"性格内向",
        value:"bananer"
      },
      {
        id:5,
        name:"性格外向",
        value:"bananer"
      },
      {
        id:6,
        name:"喜欢艺术",
        value:"bananer"
      },
      {
        id:7,
        name:"喜欢探险",
        value:"bananer"
      },
      {
        id:8,
        name:"喜欢运动",
        value:"bananer"
      },
      {
        id:9,
        name:"喜欢打游戏",
        value:"bananer"
      },
      {
        id:10,
        name:"喜欢年上",
        value:"bananer"
      },
      {
        id:11,
        name:"喜欢年下",
        value:"bananer"
      },
      {
        id:12,
        name:"喜欢二次元",
        value:"bananer"
      },
      {
        id:13,
        name:"喜欢美食",
        value:"bananer"
      },
      {
        id:14,
        name:"喜欢学习",
        value:"bananer"
      },
      {
        id:15,
        name:"喜欢摄影",
        value:"bananer"
      },
      {
        id:16,
        name:"喜欢演唱会",
        value:"bananer"
      },
      {
        id:17,
        name:"喜欢读书",
        value:"bananer"
      },
      {
        id:18,
        name:"喜欢喜欢逛街",
        value:"bananer"
      },
      {
        id:19,
        name:"不知道喜欢什么",
        value:"bananer"
      }
    ],
    checkedList:[]
  },


  HandelItemChange(e){
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value;
    // 2 进行赋值
    this.setData({
      checkedList
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
  closeToinfoin:function(e){
      wx.navigateTo({
        url: '../infoin/infoin',
      })
  },
  submit:function(){
    console.log('提交')
  }
  
})