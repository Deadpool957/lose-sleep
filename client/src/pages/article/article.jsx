import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './article.scss'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '失眠广场'
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
