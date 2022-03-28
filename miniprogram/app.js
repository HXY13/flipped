// app.js
import WxService from './assets/wx-service/WxService'
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-2gic3h5e69c16e30',
        traceUser: true,
      });
    }
    // let that = this
    // // 登录
    // wx.login({
    //     //获取code
    //     success: function (res) {
    //       var code = res.code; //返回code
    //       console.log(code);
    //       var appId = '...';
    //       var secret = '...';
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + secret + '&js_code=' + code + '&grant_type=authorization_code',
    //         data: {},
    //         header: {
    //           'content-type': 'json'
    //         },
    //         success: function (res) {
    //           var openid = res.data.openid //返回openid
    //           console.log('openid为' + openid);
    //         }
    //       })
    //     }
    // })
    // this.globalData = {
    //   userInfo: null,
    //   baseurl: "http://127.0.0.1:3306/"
    // };
  },
  WxService: new WxService, 
});
