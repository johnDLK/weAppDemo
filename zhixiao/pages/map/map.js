// pages/map/map.js
const locData = require('./loc.js')
let markers = locData.citys.map(loc => {
  let latlng = loc.latlng.split(',')
  return {
    id: loc.name,
    name: loc.name,
    longitude: parseFloat(latlng[0]),
    latitude: parseFloat(latlng[1])
  }
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: markers[0].longitude,
    latitude: markers[0].latitude,
    markers: markers
  },

  switchCity(e) {
    let app = getApp()
    console.log(app)
    app.globalData.currentCity = e.markerId;
    wx.switchTab({
      url: '/pages/map/weather'
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