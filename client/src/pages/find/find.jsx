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
      searchValue: value
    })
  }
  componentWillMount() {
    console.log('222222222222222222',this.props)
    //  this.loadArticle()
    this.loadArticle()


  }
  componentDidMount() {
    console.log('333333333333333333',this)
    // this.loadArticle()
  }

  loadArticle() {
    // console.log("0----------------------",this.props)
    const db = Taro.cloud.database({
      env: "test-3975e"
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



  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    this.loadArticle()
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
          })}
        </View>
        <View>
          {
            this.props.articleList.map((item, index) => {
              return (
                <View class='arctilelist' key={index}>
                  <View class='arcctleleft'>
                    <View class='top'> {item.title}</View>
                    <View class='bottom'><Text class='userName'>{item.user}</Text><Text>{item.time}</Text></View>
                  </View>
                  <View class='articleright'>
                    <Image src={item.img} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);