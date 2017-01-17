// pages/hunter/index.js
Page({
  data:{},
  bindGoHuntViewTap:function(){
    wx.navigateTo({
      url: 'gohunt/index'
    })
  },
  bindAskRewardViewTap:function(){
    wx.navigateTo({
      url: 'askreward/index'
    })
  },
  bindMyTaskViewTap:function(){
    wx.navigateTo({
      url: 'mytask/index'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})