// Page({
//   takePhoto() {
//     console.log(123)
//     const ctx = wx.createCameraContext()
//     ctx.takePhoto({
//       quality: 'high',
//       success: (res) => {
//         this.setData({
//           src: res.tempImagePath
//         })
//       }
//     })
//   },
//   error(e) {
//     console.log(e.detail)
//   }
// })

Page({
  // onReady: function() {
  //     this.videoContext = wx.createVideoContext('myVideo');
  // }
  bindButtonTap: function() {
    console.log(456)
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function(res) {
        that.setData({
            src: res.tempFilePath
        })
      }
    })
  }
})