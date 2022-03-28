Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 最大字符数
    maxTextLen: 20,
    // 默认长度
    textLen: 0
  },
  getWords(e) {
    let page = this;
    // 设置最大字符串长度(为-1时,则不限制)
    let maxTextLen = page.data.maxTextLen;
    // 文本长度
    let textLen = e.detail.value.length;

    page.setData({
      maxTextLen: maxTextLen,
      textLen: textLen
    });
  },
  closeToreceive_t: function(e){
    wx.switchTab({
      url: '../receive_t/receive_t',
    })
  },
  goToreceive_t: function(e){
    wx.navigateTo({
      url: '../reply/reply',
    })
  }
  
})