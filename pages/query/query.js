var data = require("../../data/data.js");
var shorteningFullMap = data.shorteningFullMap;
var numRecommendMap = data.numRecommendMap;
var seriesRecommendMap = data.seriesRecommendMap;
var typeNumMap = data.typeNumMap;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getRecommendResult: function (userInputProcessed, numCharacter) {
    let recommendArray = [];
    let fullSeries = "";
    let result = [];
    let pre = userInputProcessed.split(/[0,1,2,3,4,5,6,7,8,9]/)[0].trim();
    if (shorteningFullMap[pre] != undefined && numCharacter != "") {
      fullSeries = shorteningFullMap[pre];
      recommendArray = seriesRecommendMap[fullSeries];
      for (let i in recommendArray) {
        let recommend = recommendArray[i];
        if (typeNumMap[recommend] == numCharacter) {
          result.push(fullSeries + recommend);
        }
      }
      this.setData({
        showView: "show",
        recommendArray: result
      });
    } else if (shorteningFullMap[userInputProcessed] != undefined) {
      fullSeries = shorteningFullMap[userInputProcessed];
      recommendArray = seriesRecommendMap[fullSeries];
      for (let recommend of recommendArray) {
        result.push(fullSeries + recommend);
      }
      this.setData({
        showView: "show",
        recommendArray: result
      });
    } else if (numCharacter != "") {
      let array = numRecommendMap[numCharacter];
      for (let obj of array) {
        result.push(obj.series + obj.type);
      }
      this.setData({
        showView: "show",
        recommendArray: result
      });
    } else {
      this.setData({
        showView: ""
      });
    }

    return result;
  },

  getPhoneType: function (e) {
    let userInput = e.detail.value;
    let userInputProcessed = userInput.trim().toLowerCase();
    let numCharacter = userInputProcessed.replace(/[^0-9]/ig, "");
    let result = this.getRecommendResult(userInputProcessed, numCharacter);
    if (result.length == 0) {
      console.log("no recommend");
      return;
    }
  },

  goNavigate: function () {
    wx.navigateTo({
      url: '../detail/detail?phonetype=' + this.data.phoneType,
    })
  },

  goNavigateFromRecommend: function (e) {
    console.log(e.currentTarget.dataset.recommend);
    wx.navigateTo({
      url: '../detail/detail?phonetype=' + e.currentTarget.dataset.recommend,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      userInput: ""
    });
    this.setData({
      showView: ""
    });
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