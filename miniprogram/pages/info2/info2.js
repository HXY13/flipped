// pages/loginstart/loginstart.js
Page({

  data: {
  evaluate_contant: ['喜欢猫', '喜欢狗', '喜欢艺术','喜欢音乐','性格内向', '性格外向', '喜欢旅游','喜欢运动','喜欢读书','喜欢美食'],
  stars: [0, 1, 2, 3, 4],
  normalSrc: 'https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/info2/star.png?sign=99c9449a000c7f0c441d244fbd6627ec&t=1640253319',
  selectedSrc: 'https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/info2/hello-star.png?sign=21f20c973d59ef6a23866ac968ec358a&t=1640253306',
  halfSrc: 'https://636c-cloud1-2gic3h5e69c16e30-1308351239.tcb.qcloud.la/flipped/info2/half_star.png?sign=98c0b2c6348ca70438b2e61c992e0188&t=1640253269',
  score: 0,
  scores: [0, 0, 0],
  },
 
  // 提交事件
  submit_evaluate: function () {
  console.log('评价得分' + this.data.scores)
  },
 
  //点击左边,半颗星
  selectLeft: function (e) {
  var score = e.currentTarget.dataset.score
  if (this.data.score == 0.5 && e.currentTarget.dataset.score == 0.5) {
  score = 0;
  }
 
  this.data.scores[e.currentTarget.dataset.idx] = score,
  this.setData({
  scores: this.data.scores,
  score: score
  })
 
  },
 
  //点击右边,整颗星
  selectRight: function (e) {
  var score = e.currentTarget.dataset.score
  this.data.scores[e.currentTarget.dataset.idx] = score,
  this.setData({
  scores: this.data.scores,
  score: score
  })
  },
  return:function(e){
    wx.navigateTo({
      url: '../infoin/infoin',
    })
  }
 })
 