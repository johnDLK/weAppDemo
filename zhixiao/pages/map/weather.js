// pages/map/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    weather: '',
    temperature: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getLocation({
      success: function(res) {
        console.log(res)
        that.formatLocation(res.longitude, res.latitude)
        that.setData({
          hasLocation: true
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let app = getApp()
    let city = app.globalData.currentCity
    if (city) {
      this.reloadData(city)
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  formatLocation: function (longitude, latitude) {
    let that = this;
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/',
      data: {
        key: 'Q7QBZ-KNT3S-NB6OI-6YZOV-FKVA6-MAF73',
        location: latitude + ',' + longitude
      },
      success: function(res) {
        console.log(res)
        that.reloadData(res.data.result.ad_info.city)
      },
      fail: function({errMsg}) {
        console.error(errMsg);
      }
    })
  },

  getWeather: function() {
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json',
      data: {
        key: 'irnojhxhnayi3euq',
        location: this.data.city
      },
      success: (res) => {
        console.log(res)
        this.setData({
          weather: res.data.results[0].now.text,
          temperature: res.data.results[0].now.temperature
        });
      },
      fail: function({errMsg}) {
        console.error(errMsg)
      }
    })
  },

  reloadData(city) {
    this.setData({
      city: city
    });
    this.getWeather()
  }

})