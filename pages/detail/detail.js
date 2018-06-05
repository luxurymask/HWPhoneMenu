var data = require("../../data/data.js");
var phoneMap = data.phoneMap;
var phoneData = data.phoneData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //读取用户输入的字符串
    let phoneType = options.phonetype;
    console.log("detail + " + phoneType);

    if(phoneType == "undefined"){
      wx.setNavigationBarTitle({
        title: "没找到TT"
      });
      return;
    }

    wx.setNavigationBarTitle({
      title: phoneType
    })

    // let phoneTypeProcessed = phoneType.trim().toLowerCase();

    let phoneArray = phoneData.phoneArray;
    let phone = phoneArray[phoneMap[phoneType]];
    console.log(phone);
    this.setData({
      type: phoneType,
      screen: phone.screen,
      cameraFront: phone.cameraFront,
      cameraBack: phone.cameraBack,
      batery: phone.batery,
      cpu: phone.cpu,
      ram: phone.ram
    });
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
    
  }
})