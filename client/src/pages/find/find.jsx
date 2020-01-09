import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import { View, Text,Image} from '@tarojs/components'
import './find.scss'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/first
import defaultImg from '../../assets/pages/1.jpg'


export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '失眠狒话'
  }
  constructor(){
    super(...arguments)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      searchValue:'',
      // eslint-disable-next-line react/no-unused-state
      defaultImg:defaultImg,
       // eslint-disable-next-line react/no-unused-state
       hotwords:[
         '失眠','失眠','失眠','失眠','失眠'
       ],
       // eslint-disable-next-line react/no-unused-state
       arctleList:[
         {
           'name':'在这里放入微信热榜推荐的文章',
            'user':'微信娱乐',
            'time':"刚刚",
            'img':defaultImg,
         },
         {
          'name':'在这里放入微信热榜推荐的文章',
           'user':'微信娱乐',
           'time':"刚刚",
           'img':defaultImg
        },
        {
          'name':'在这里放入微信热榜推荐的文章',
           'user':'微信娱乐',
           'time':"刚刚",
           'img':defaultImg
        },
        {
          'name':'在这里放入微信热榜推荐的文章',
           'user':'微信娱乐',
           'time':"刚刚",
           'img':defaultImg
        },
        {
          'name':'在这里放入微信热榜推荐的文章',
           'user':'微信娱乐',
           'time':"刚刚",
           'img':defaultImg
        }
       ]
    }
  }
onChange (value){
  this.setState({
    // eslint-disable-next-line react/no-unused-state
    searchValue:value
  })
}
  componentWillMount () {
    wx.cloud.init({
      env:"test"
    })

    this.loadArticle()

   }

   loadArticle(){
    const db = wx.cloud.database()
    const result = db.collection("article").get().then(
      res =>{
        console.log("artile",res)
        this.setState({
          arctleList:res.data
        })
      }
    )
    .catch(err => {
      console.log(err)
    })
    console.log(result)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='find'>
          <View class='searchItems'>
            <AtSearchBar value={this.state.searchValue} onChange={this.onChange.bind(this)}  actionName='搜索' />
          </View>
          <View class='searchHot'>热门搜索</View>
          <View class='hotwords'>
            {this.state.hotwords.map((item,index)=>{
            return (<View key={index} class='hotItem'>{item}</View>)
            })}
          </View>
          <View>
            {
              this.state.arctleList.map((item,index)=>{
                return (
                  <View class='arctilelist' key={index}> 
                  <View class='arcctleleft'>
                <View class='top'>{item.name}</View>
              <View class='bottom'><Text class='userName'>{item.user}</Text><Text>{item.time}</Text></View>
                  </View>
                  <View class='articleright'>
                    <Image  src={item.img} />
                  </View>
              </View>
                )
              })
            }
          </View>
          
      </View>
    )
  }
}
