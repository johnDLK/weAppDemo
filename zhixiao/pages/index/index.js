//index.js

const firstPage = [
  {
    id: '1',
    title: '装修秘诀1',
    description: '文艺气息爆棚的精致白色现代家',
    cover: 'xxx'
  },
  {
    id: '2',
    title: '装修秘诀2',
    description: '文艺气息爆棚的精致白色现代家',
    cover: 'xxx'
  },
  {
    id: '3',
    title: '装修秘诀3',
    description: '文艺气息爆棚的精致白色现代家',
    cover: 'xxx'
  },
  {
    id: '4',
    title: '装修秘诀4',
    description: '文艺气息爆棚的精致白色现代家',
    cover: 'xxx'
  }
];
const lastPage = [
  {
    id: '5',
    title: '超新约全书',
    description: '一个以折磨人为乐趣的上帝',
    cover: 'xxx'
  },
  {
    id: '6',
    title: '2001太空漫游',
    description: '现代科幻电影技术的里程碑',
    cover: 'xxx'
  }
];
const READED_ARTICLES = 'READED_ARTICLES';
let isEnd = false,
    pageLimit = 4;

Page({
  data: {
    articles: [],
    loading: false,
    loadMoreText: '加载更多'
  },
  onLoad: function() {
    this.getArticles(true);
  },
  getArticles: function(isFirstPage) {
    if(!isEnd && !this.data.loading) {
      this.setData({ loading: true });
      setTimeout(() => {
        if(isFirstPage) {
          this.setData({
            articles: this.addReadStatus(firstPage),
            loading: false
          })
        } else {
          this.setData({
            articles: firstPage.concat(lastPage),
            loading: false
          })
          if(lastPage.length < pageLimit) {
            isEnd = true;
            this.setData({ loadMoreText: '已无更多' })
          }
        }
      })
    }
  },
  toDetailPage: function(e) {
    let id = e.currentTarget.dataset.id;
    let readedArticles = wx.getStorageSync(READED_ARTICLES);
    if (!readedArticles) {
      wx.setStorageSync(READED_ARTICLES, [id]);
    } else if (readedArticles.indexOf(id) == -1) {
      readedArticles.push(id);
      wx.setStorageSync(READED_ARTICLES, readedArticles);
    }
    this.setData({ articles: this.addReadStatus(this.data.articles) })
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
    })
  },
  loadMore: function(event) {
    this.getArticles()
  },
  addReadStatus: function(articles) {
    let readedArticles = wx.getStorageSync(READED_ARTICLES);
    if (!readedArticles) {
      return articles;
    }
    let newArticles = [];
    for (let i = 0; i < articles.length; i++) {
      let article = Object.assign(articles[i]);
      if (readedArticles.indexOf(article.id) != -1) {
        article.isReaded = true;
      } else {
        article.isReaded = false;
      }
      newArticles.push(article);
    }
    return newArticles;
  },
  goToMedia: function() {
    wx.navigateTo({
      url: `../detail/media`,
    })
  },
  goToMedicalCard() {
    wx.navigateTo({
      url: `../medical-card/index`,
    })
  }
})

//获取应用实例
// const app = getApp()
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
