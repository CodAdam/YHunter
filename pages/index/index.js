// pages/index/index.js
Page({
  data:{
    slider: [
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg'},
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg'},
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg'},
    ],
    swiperCurrent: 0,
  },
  swiperChange: function(e){
      this.setData({
          swiperCurrent: e.detail.current
      })
  },
  bindhunterViewTap: function() {
    wx.navigateTo({
      url: '../hunter/index'
    })
  },
  bindconsignerViewTap: function() {
    wx.navigateTo({
      url: '../consigner/index'
    })
  },
  bindadminViewTap: function() {
    wx.navigateTo({
      url: '../admin/index'
    })
  },
  bindtaskboardViewTap: function() {
    wx.navigateTo({
       url: '../taskboard/index'
    })
  },
  bindmoreViewTap: function() {
    wx.navigateTo({
      //url: '../admin/index'
      url: '../searcher/index'
      //url: '../search/index'
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