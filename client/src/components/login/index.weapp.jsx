import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"

export default class Login extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        this.setState({
          context: res.result
        })
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>首页</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    )
  }
}
