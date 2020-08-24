const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    }
  },
  data: {
    checkboxItems: [
      {
        id:0,
        imgUrl:"../../images/grouplist0.jpg",
        name:"红心火龙果",
        intro:"海南红心火龙果一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:1,
        imgUrl:"../../images/grouplist1.jpg",
        name:"水晶红富士",
        intro:"陕西水晶红富士一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:2,
        imgUrl:"../../images/grouplist2.jpg",
        name:"伦晚",
        intro:"秭归伦晚脐橙一箱",
        price:58.5,
        discountsPrice:72.8
      },
      {
        id:3,
        imgUrl:"../../images/grouplist3.jpg",
        name:"汤山杨梅",
        intro:"汤山杨梅一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:4,
        imgUrl:"../../images/grouplist4.jpg",
        name:"妃子笑荔枝",
        intro:"海南妃子笑荔枝一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:5,
        imgUrl:"../../images/grouplist5.jpg",
        name:"柠檬",
        intro:"柠檬一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:6,
        imgUrl:"../../images/grouplist6.jpg",
        name:"蓝莓",
        intro:"蓝莓一箱",
        price:92.5,
        discountsPrice:125.8
      },
      {
        id:7,
        imgUrl:"../../images/grouplist7.jpg",
        name:"水蜜桃",
        intro:"水蜜桃一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:8,
        imgUrl:"../../images/grouplist8.jpg",
        name:"木瓜",
        intro:"木瓜一箱",
        price:32.5,
        discountsPrice:45.8
      },
      {
        id:9,
        imgUrl:"../../images/grouplist9.jpg",
        name:"库尔勒香梨",
        intro:"库尔勒香梨一箱",
        price:32.5,
        discountsPrice:45.8
      },
    ],
    totalNum:0
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.checkboxItems
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  }
})