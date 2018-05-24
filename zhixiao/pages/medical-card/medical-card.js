// pages/medical-card/medical-card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    formData: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    form: null,
    bloodTypes: ['A', 'B', 'AB', 'O'],
    medicalConditions: [
      { name: '有过敏史', checked: false },
      { name: '有过大型手术', checked: false },
      { name: '有家族遗传病', checked: false }
    ],
    phoneNumber: '',
    isShowUpdate: false
  },
  ready: function() {
    if (this.data.formData) {
      let form = this.data.formData
      if (form.medicalConditions.length > 0) {
        let medicalConditions = this.data.medicalConditions
        form.medicalConditions.forEach(num => {
          medicalConditions[num].checked = true
        })
        this.setData({
          medicalConditions: medicalConditions
        })
      }
      this.setData({
        form: form,
        isShowUpdate: true
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    phoneNumberChange(e) {
      let phone = e.detail.value
      this.setData({
        phoneNumber: phone
      })
    },
    makePhoneCall() {
      let { phoneNumber } = this.data
      wx.makePhoneCall({
        phoneNumber: phoneNumber,
      })
    },
    bloodTypeChange(e) {
      let value = e.detail.value
      let form = this.data.form
      form.bloodType = value
      this.setData({
        form: form
      })
    },
    formSubmit(e) {
      console.log(e)
      let val = e.detail.value
      if (!val.gender) {
        wx.showToast({
          title: '请选择性别'
        })
        return
      }
      if (!val.bloodType) {
        wx.showToast({
          title: '请选择血型'
        })
        return
      }
      if (this.data.isShowUpdate) {
        wx.showToast({
          title: '更新成功'
        })
      } else {
        wx.showToast({
          title: '提交成功'
        })
      }
      this.setData({
        form: { ...val },
        isShowUpdate: true
      })
    }
  }
})
