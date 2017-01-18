// pages/index/index.js
Page({
  data:{
    slider: [
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000rVobR3xG73f.jpg'},
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000j6Tax0WLWhD.jpg'},
    {picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000a4LLK2VXxvj.jpg'},
    ],
    swiperCurrent: 0,
    lists: [
        {
            "redirecturl": "234",
            "mainimg": "upload1/20160629/1606290358393979.jpg",
            "title": "我是猎手",
            "description": "",
            "content": "I'M HUNTER!"
        },
        {
            "redirecturl": "../consigner/index",
            "mainimg": "upload1/20160629/1606291134207266.jpg",
            "title": "我是委托人",
            "description": "",
            "content": "I'M CONSIGNER!"
        },
        {
            "redirecturl": "../admin/index",
            "mainimg": "upload1/20160202/1602020451004977.jpg",
            "title": "我是管理员",
            "description": "",
            "content": "I'M ADMINISTRATIR!"
        },
        {
            "redirecturl": "../hunter/index",
            "mainimg": "upload1/20160202/1602020545059897.jpg",
            "title": "任务栏",
            "description": "",
            "content": "TASKBOARD"
        },
        {
            "redirecturl": "../taskboard/index",
            "mainimg": "upload1/20160202/1602020413397202.jpg",
            "title": "更多敬请期待",
            "description": "",
            "content": "TO BE CONTINUE..."
        }
    ]
  },
  swiperChange: function(e){
        this.setData({
            swiperCurrent: e.detail.current
        })
    },
  bindViewTap:function(event){
    console.log(event.target)
    wx.navigateTo({
      url: event.target.dataset.url
      // url: event.target.dataset.redirecturl
    })
  },
  bindListViewTap: function(event) {
    console.log(event.target)
    wx.navigateTo({
      url: event.target.dataset.redirecturl
    })
    console.log(event.target.dataset.redirectUrl)
  },
  // bindhunterViewTap: function(event) {
  //   console.log(event.target)
  //   console.log(event.target.dataset.redirectUrl)
  //   wx.navigateTo({
  //     url: '../hunter/index'
  //   })
  // },
  // bindconsignerViewTap: function() {
  //   wx.navigateTo({
  //     url: '../consigner/index'
  //   })
  // },
  // bindadminViewTap: function() {
  //   wx.navigateTo({
  //     url: '../admin/index'
  //   })
  // },
  // bindtaskboardViewTap: function() {
  //   wx.navigateTo({
  //      url: '../logs/logs'
  //   })
  // },
  // bindmoreViewTap: function() {
  //   wx.navigateTo({
  //   })
  // },
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