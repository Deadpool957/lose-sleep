const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: "test"
})
const userCollection = db.collection("user")

exports.main = async () => {
  const wxContext = cloud.getWXContext()
  console.log(">>>>>>>>>>>>>>>>>>",wxContext)
  const { OPENID, APPID, UNIONID } = wxContext
  try {
    // const alluser = (await userCollection.get()).data
    const alluser = (await userCollection.get()).data
    console.log(">>>>>>>>all user info",alluser)
    const [userInfo] = alluser.filter(v => v.openId === OPENID)
    let name, avatarUrl, gender
    if (!userInfo) {
      console.log(">>>>>用户不存在，然后添加用户---", OPENID)
      await userCollection.add({
        data: {
          openId: OPENID,
          createTime: db.serverDate(),
        },
      })
    } else {
      console.log("--用户存在，---", OPENID)
      name = userInfo.name
      avatarUrl = userInfo.avatarUrl
      gender = userInfo.gender
    }
    return {
      name: name || null,
      avatarUrl: avatarUrl || null,
      gender: gender || null,
      openId: OPENID
    }

  } catch (error) {
    console.log(error)
    return {
      code: 500,
      message: "服务器错误"
    }
  }
}

