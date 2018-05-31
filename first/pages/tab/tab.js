// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all:{},
    nowlist:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getData();
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
  getData:function(){
    var res = {
      "code": 100,
      "msg": "处理成功",
      "extend": {
        "dayTimeAllow": [
          {
            "day": "2018-05-18",
            "times": [
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "12:00",
                "allow": 0
              },
              {
                "time": "13:00",
                "allow": 1
              },
              {
                "time": "14:00",
                "allow": 0
              },
              {
                "time": "15:00",
                "allow": 0
              },
              {
                "time": "16:00",
                "allow": 0
              }
            ]
          },
          {
            "day": "2018-05-25",
            "times": [
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "11:00",
                "allow": 1
              },
              {
                "time": "11:00",
                "allow": 1
              }
            ]
          }
        ]
      }
    };
    res.extend.dayTimeAllow.forEach(function(i){
       i.selected = false;
    });
    res.extend.dayTimeAllow[0].selected = true;
    this.setData({
      all:res.extend.dayTimeAllow,
      nowlist:res.extend.dayTimeAllow[0].times,
    })
    console.log(this.data.all);
  },
  addTitle:function(i){
    console.log(i);
    var allinfo = this.data.all;
    var index = i.currentTarget.dataset.index;
    allinfo.forEach(function(j){
      j.selected = false;
    });
    allinfo[index].selected = true;
    console.log(allinfo);
    this.setData({
      all:allinfo,
      nowlist: i.currentTarget.dataset.times,
    });
  },
  addcon:function(i){
    var allow = i.currentTarget.dataset.allow;
    var index = i.currentTarget.dataset.index;
    var now = this.data.nowlist;
    now[index].allow = 1;
    if (allow == 1){
      wx.showToast({
        title: '你不能再点击了',
      })
      return;
    }else{
      this.setData({
        nowlist:now
      })
    }
  }
})