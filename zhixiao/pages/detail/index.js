// pages/detail/index.js
const articleInfo = {
  title: '特斯拉卡车发布',
  category: '科技',
  poster: 'xxx.jpg',
  content: '特斯拉卡车发布',
  create_at: '2017-11-11'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getArtcle(options.id)
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

  getArtcle: function() {
    this.setData({ article: articleInfo});
  },

  onShareAppMessage: function(option) {
    return {
      title: this.data.article.title,
      // imageUrl:
      path: `pages/detail/index?id=${this.data.article.id}`
    }
  }
})