import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import { View, Text, Image, Form } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './find.scss'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/first
import { LOADARTICLE, SEARCHWORDS } from '../../constants/article'


const mapStateToProps = state => {
  console.log("-----11111111111111-map state to props----",state)
  return {
    searchValue: state.article.searchValue,
    hotWords: state.article.hotWords,
    arctleList: state.article.arctleList,
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: LOADARTICLE, payload }),
});


class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '失眠狒话'
  }
  // constructor(props) {
  //   super(...arguments)
  //   this.props = props
  // }
  onChange(value) {
    this.setState({
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
      env:"dev-zc3oa"
    })
  }
  componentWillMount() {
    console.log('222222222222222222',this.props)
    //  this.loadArticle()
    this.loadArticle()


   loadArticle(){
     wx.cloud.callFunction({
       name:"article_get",
       data:{},
       success:res=>{
         console.log(res,"返回结果")
       },
       fail:err=>{console.log(err)}
     })
    const db = wx.cloud.database()
    const result = db.collection("Article").get().then(
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
    db.collection("article").where({}).get().then(
      res => {
        // console.log("artile", res)
        // this.setState({
        //   arctleList:res.data
        // })
        this.props.onLoad(res)
      }
    ).catch(err => {
        console.log("-----", err)
      })
  }



  componentWillUnmount() {
    let xa = "acceds"
    console.log(xa)
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    console.log("-----------this. render----------",this.props)
    return (
      <View className='find'>
        <View class='searchItems'>
          <AtSearchBar value={this.props.searchValue}  actionName='搜索' />
        </View>
        <View class='searchHot'>热门搜索</View>
        <View class='hotwords'>
          {this.props.hotwords.map((item, index) => {
            return (<View key={index} class='hotItem'>{item}</View>)
<<<<<<< HEAD
            })}
          </View>
          <View>
            {
              this.state.arctleList.map((item,index)=>{
                return (
                  <View class='arctilelist' key={index}>
=======
          })}
        </View>
        <View>
          {
            this.props.articleList.map((item, index) => {
              return (
                <View class='arctilelist' key={index}>
>>>>>>> eeae1140094e9afe74753d579e4bc539e4dfb490
                  <View class='arcctleleft'>
                    <View class='top'> {item.title}</View>
                    <View class='bottom'><Text class='userName'>{item.user}</Text><Text>{item.time}</Text></View>
                  </View>
                  <View class='articleright'>
                    <Image src={item.img} />
                  </View>
<<<<<<< HEAD
              </View>
                )
              })
            }
          </View>
=======
                </View>
              )
            })
          }
        </View>
>>>>>>> eeae1140094e9afe74753d579e4bc539e4dfb490

      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
