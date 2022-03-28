// // index.js
// // const app = getApp()
// const { envList } = require('../../envList.js');

// Page({
//   data: {
//     showUploadTip: false,
//     powerList: [{
//       title: '云函数',
//       tip: '安全、免鉴权运行业务代码',
//       showItem: false,
//       item: [{
//         title: '获取OpenId',
//         page: 'getOpenId'
//       },
//       //  {
//       //   title: '微信支付'
//       // },
//        {
//         title: '生成小程序码',
//         page: 'getMiniProgramCode'
//       },
//       // {
//       //   title: '发送订阅消息',
//       // }
//     ]
//     }, {
//       title: '数据库',
//       tip: '安全稳定的文档型数据库',
//       showItem: false,
//       item: [{
//         title: '创建集合',
//         page: 'createCollection'
//       }, {
//         title: '更新记录',
//         page: 'updateRecord'
//       }, {
//         title: '查询记录',
//         page: 'selectRecord'
//       }, {
//         title: '聚合操作',
//         page: 'sumRecord'
//       }]
//     }, {
//       title: '云存储',
//       tip: '自带CDN加速文件存储',
//       showItem: false,
//       item: [{
//         title: '上传文件',
//         page: 'uploadFile'
//       }]
//     }, {
//       title: '云托管',
//       tip: '不限语言的全托管容器服务',
//       showItem: false,
//       item: [{
//         title: '部署服务',
//         page: 'deployService'
//       }]
//     }],
//     envList,
//     selectedEnv: envList[0],
//     haveCreateCollection: false
//   },

//   onClickPowerInfo(e) {
//     const index = e.currentTarget.dataset.index;
//     const powerList = this.data.powerList;
//     powerList[index].showItem = !powerList[index].showItem;
//     if (powerList[index].title === '数据库' && !this.data.haveCreateCollection) {
//       this.onClickDatabase(powerList);
//     } else {
//       this.setData({
//         powerList
//       });
//     }
//   },

//   onChangeShowEnvChoose() {
//     wx.showActionSheet({
//       itemList: this.data.envList.map(i => i.alias),
//       success: (res) => {
//         this.onChangeSelectedEnv(res.tapIndex);
//       },
//       fail (res) {
//         console.log(res.errMsg);
//       }
//     });
//   },

//   onChangeSelectedEnv(index) {
//     if (this.data.selectedEnv.envId === this.data.envList[index].envId) {
//       return;
//     }
//     const powerList = this.data.powerList;
//     powerList.forEach(i => {
//       i.showItem = false;
//     });
//     this.setData({
//       selectedEnv: this.data.envList[index],
//       powerList,
//       haveCreateCollection: false
//     });
//   },

//   jumpPage(e) {
//     wx.navigateTo({
//       url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
//     });
//   },

//   onClickDatabase(powerList) {
//     wx.showLoading({
//       title: '',
//     });
//     wx.cloud.callFunction({
//       name: 'quickstartFunctions',
//       config: {
//         env: this.data.selectedEnv.envId
//       },
//       data: {
//         type: 'createCollection'
//       }
//     }).then((resp) => {
//       if (resp.result.success) {
//         this.setData({
//           haveCreateCollection: true
//         });
//       }
//       this.setData({
//         powerList
//       });
//       wx.hideLoading();
//     }).catch((e) => {
//       console.log(e);
//       this.setData({
//         showUploadTip: true
//       });
//       wx.hideLoading();
//     });
//   }
// });
// pages/demo/demo.js
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
