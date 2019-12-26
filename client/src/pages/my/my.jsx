import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './my.scss'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '我的世界'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}
