import { request } from "./request"

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 构造函数，将从服务器返回的的数据进行整合
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}