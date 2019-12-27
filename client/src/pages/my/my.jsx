import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './my.scss'
// eslint-disable-next-line import/first
import { AtAvatar,AtInput} from 'taro-ui'
import headImage from '../../assets/pages/sarah.jpeg'

export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '我的世界'
  }
constructor(){
  super(...arguments)
  this.state = {
    userName :'kekimi',
    // eslint-disable-next-line react/no-unused-state
    isEdit:false,
    sex:"",
    xz:"",
    age:"",
    city:"",
    flag:"",
    time:"",
    face:""
  }
}
handleChange(value){
  this.setState({
    userName:value
  })
  return value
}
handleChangeSex(value){
  this.setState({
    sex:value
  })
  return value
}
handleChangeXz(value){
  this.setState({
    xz:value
  })
  return value
}
handleChangeAge(value){
  this.setState({
    age:value
  })
  return value
}
handleChangeCity(value){
  this.setState({
    city:value
  })
  return value
}
handleChangeFlag(value){
  this.setState({
    flag:value
  })
  return value
}
handleChangeTime(value){
  this.setState({
    time:value
  })
  return value
}
handleChangeFace(value){
  this.setState({
    face:value
  })
  return value
}
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user_info'>
        <View class='atavator'>
          <AtAvatar circle image={headImage}></AtAvatar>
        </View>
        <View class='user_info_edit'>
            <AtInput editable={this.state.isEdit} type='text' value={this.state.userName} onChange={this.handleChange.bind(this)} border={false} error={false} clear={false} />
            <View className='at-icon at-icon-edit'></View>
        </View>
        <View class='fork'>
            <View class='me_fork'><Text class='me_fork_nums'>12</Text><Text class='me_fork_title'>我关注的人</Text></View>
            <View class='me_fork'><Text class='me_fork_nums'>8</Text><Text class='me_fork_title'>关注我的人</Text></View>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='性别' value={this.state.sex} onChange={this.handleChangeSex.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='星座' value={this.state.xz} onChange={this.handleChangeXz.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='年龄' value={this.state.age} onChange={this.handleChangeAge.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='城市' value={this.state.city} onChange={this.handleChangeCity.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='标签' value={this.state.flag} onChange={this.handleChangeFlag.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='失眠时长' value={this.state.time} onChange={this.handleChangeTime.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
        <View class='edit_user_list'>
            <AtInput type='text' title='人生态度' value={this.state.face} onChange={this.handleChangeFace.bind(this)}>
            <View className='at-icon at-icon-edit'></View>
          </AtInput>
        </View>
      </View>
    )
  }
}
