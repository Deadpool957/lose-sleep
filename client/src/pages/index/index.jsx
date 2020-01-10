import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {connect} from "@tarojs/redux"

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue,
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: "", payload}),
});

class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {

  }
  constructor() {
    super(...arguments)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      list: [
        {
          "title":"感情"
        },
        {
          "title": "事业"
        },
        {
          "title": "生活"
        },
        {
          "title": "家庭"
        },
        {
          "title": "都是病"
        },
        {
          "title": "夜生活"
        },
        {
          "title": "当代青年"
        },
        {
          "title": "废材一枚"
        }
      ]
    }


  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  goFindPage(){
    Taro.reLaunch({
      url:'/pages/find/find'
    })
  }
  render() {
    return (

      <View className='index'>
        <View class='reasons'>选择你失眠的理由</View>
        <View class='reasomn_items'>{this.state.list.map((item, key) => {
          return (<View key={key} class='reason_item'>
            <Text>{item.title}</Text>
          </View>)
        })}</View>
        <View class='nextPage' onClick={this.goFindPage}>Go</View>
      </View>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
