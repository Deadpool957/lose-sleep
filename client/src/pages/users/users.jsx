import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './users.scss'
import headtwo from '../../assets/pages/kate.jpeg'
import headImg from '../../assets/pages/emma.jpg'
export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '失眠排行榜'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  fork(){

  }
  render () {
    return (
      <View className='ranking'>
          <View class='ranking_top'>
             <View class='top'>
                <View class='head'>
                  <Image src={headtwo} />
                  <View>第二名</View>
                </View>
                <View class='info'>
                    <View class='name'>Eddle</View>
                    <View class='days'>失眠天数：28天</View>
                    <View onClick={this.fork()} class='fork'>+关注</View>
                </View>
             </View>
             <View class='top'>
                <View class='head'>
                  <Image src={headtwo} />
                  <View>第一名</View>
                </View>
                <View class='info'>
                    <View class='name'>Eddle</View>
                    <View class='days'>失眠天数：28天</View>
                    <View onClick={this.fork()} class='fork'>+关注</View>
                </View>
             </View>
             <View class='top'>
                <View class='head'>
                  <Image src={headtwo} />
                  <View>第三名</View>
                </View>
                <View class='info'>
                    <View class='name'>Eddle</View>
                    <View class='days'>失眠天数：28天</View>
                    <View onClick={this.fork()} class='fork'>+关注</View>
                </View>
             </View>
          </View>
          <View class='ranking_list'>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>4</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>5</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>6</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>7</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>8</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
              <View class='info'>
                <View class='info_left'>
                    <View class='info_num'>9</View>
                    <View class='info_img'>
                      <Image src={headImg} />
                    </View>
                    <View class='info_main'>
                        <View class='info_main_top'>
                          <View class='info_main_name'>柠檬精</View>
                          <View class='info_main_flag'>失眠中</View>
                        </View>
                        <View class='info_main_bottom'>
                          <View class='info_main_days'>失眠24天</View>
                          <View class='info_main_marks'>人生态度/个性签名等</View>
                        </View>
                    </View>
                  </View>
                  <View class='info_fork'>
                    <View className='at-icon at-icon-arrow-up'></View>
                    <View className='fork'>+关注</View>
                  </View>
              </View>
          </View>
      </View>
    )
  }
}
