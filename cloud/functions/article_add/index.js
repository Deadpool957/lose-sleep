// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database({
  env: "dev-zc3oa"
})
const articleCollection = db.collection("Article")

// 云函数入口函数
exports.main = async (event, context) => {
  const {title,name,time,src} = event
  const result = await articleCollection.add({
    data: {
      title: title,
      name:name,
      time:time,
      src:src
    },
  })
  return result

}