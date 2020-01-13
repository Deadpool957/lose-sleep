import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import { get as getGlobalData, set as setGlobalData,globalData} from './utils/global_data'
import './app.scss'
import store  from './store'

// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss'
import { getWXContext } from 'wx-server-sdk'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// const store = configStore
class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/index/index',
      'pages/find/find',
      'pages/article/article',
      'pages/users/users',
      'pages/my/my'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '失眠狒话',
      navigationBarTextStyle: 'black'
    },
    cloud: true,
    tabBar: {
      color: "#383838",
      selectedColor: "#f5574e",
      backgroundColor: "#fff",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/find/find",
          iconPath: "./assets/tab-bar/find.png",
          selectedIconPath: "./assets/tab-bar/find-active.png",
          text: "发现"
        },
        {
          pagePath: "pages/article/article",
          iconPath: "./assets/tab-bar/arctcle.png",
          selectedIconPath: "./assets/tab-bar/arctle-active.png",
          text: "狒话"
        },
        {
          pagePath: "pages/users/users",
          iconPath: "./assets/tab-bar/users.png",
          selectedIconPath: "./assets/tab-bar/users-active.png",
          text: "用户"
        },
        {
          pagePath: "pages/my/my",
          iconPath: "./assets/tab-bar/my.png",
          selectedIconPath: "./assets/tab-bar/my-active.png",
          text: "我的"
        }
      ]
    }
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: "test-3975e",
        traceUser: true
    })
    }
    this.loadOpenId()
  }



  loadOpenId(){
    Taro.cloud.callFunction({
      name:"login",
    }).then(res => {
      const openId = res.result.openId
      setGlobalData('openid',openId || null)
      if (openId){
        Taro.setStorageSync("openid",openId)
        console.log('--globaldata---',globalData)
      }
      console.log('----open---',openId)
    }).catch(err=>{
      console.log("- load open id-- err",err)
    })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
