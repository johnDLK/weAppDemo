const formData = {
  bloodType: "2",
  gender: "男",
  isOrganDonor: true,
  medicalConditions: [1,2],
  medicationCompliance: "没有",
  name: "哈哈怪",
  phoneNumber: "123"
}

Page({
  data: {
    isShowMedicalCard: false,
    formData: null
  },
  showMedicalCard() {
    this.setData({
      isShowMedicalCard: true
    })
  },
  onLoad: function() {
    // get data
    let getDataFlag = true;
    if (getDataFlag) {
      this.setData({
        formData: formData,
        isShowMedicalCard: true
      })
    }
  }
})