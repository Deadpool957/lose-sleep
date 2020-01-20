// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  try {
    await b.collection("Article").doc('10eb3b8d-07bd-4eb8-a35a-2bd36b42c521')
  .set({
    data:{}
  })
} catch(e){
  console.error(e)
}
}