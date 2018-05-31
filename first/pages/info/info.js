Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainData:{},
    tabActive:0,
    typeId:1,
    DATA:null,
    typeData:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    this.getType();
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
    const that = this;
    wx.request({
      url:'http://47.93.220.17/Home/Bk/xinfang',
      method:'get',
      dataType:'json',
      success: function (res) {
        that.setData({
          mainData:res.data
        });
        console.log(that.data.mainData);
      }
    })
  },
  getType: function () {
    const that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      method: 'get',
      dataType: 'json',
      data:{
        type_id: that.data.typeId,
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          typeData: res.data
        });
        console.log(that.data.typeData);
      }
    })
  },
  addtabTitle:function(e){
    const that = this;
    var index = parseInt(e.currentTarget.dataset.index);
    var id = parseInt(e.currentTarget.dataset.id);
    console.log(this.data.tabActive);
    that.setData({
      tabActive:index,
      typeId:id,
    });
    this.getType();
  }
})