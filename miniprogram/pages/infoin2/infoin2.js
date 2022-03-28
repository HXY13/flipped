// pages/loginstart/loginstart.js
Page({

  data: {
  evaluate_contant: ['喜欢猫', '喜欢狗', '喜欢艺术','喜欢音乐','性格内向', '性格外向', '喜欢旅游','喜欢运动','喜欢读书','喜欢美食'],
  stars: [0, 1, 2, 3, 4],
  normalSrc: '../images/star.png',
  selectedSrc: '../images/hello-star.png',
  halfSrc: '../images/half_star.png',
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
  }
 })
 