import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './article.scss'
import defaultLogo from '../../assets/pages/logo.jpg'
import defaultPerson from '../../assets/pages/luck.jpg'
import defaultway from '../../assets/pages/kate.jpeg'
export default class Index extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '狒话广场'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='square'>
        <View class='top_talk'>
          <View class='top_talk_left'>
              <View>
                <View className='at-icon at-icon-bookmark'></View>
                <View class='top_talk_nums'><Text>99</Text></View>
              </View>
              <View class='top_talk_center'>
                <Text>今日话题：失眠的时候做什么？</Text>
            </View>
          </View>
         
          <View class='top_talk_right'>
               <Image  src={defaultLogo} /> 
          </View>
        </View>
        <View class='contributor'>
          <View class='contributor_infos'> 
            <Image src={defaultPerson} />
            <View class='contributor_person'><Text class='contributor_person_left'>投稿人</Text><Text>二狗</Text></View>
          </View>
            <View class='time'>2019-12-26</View>
        </View>
        <View class='line_split'></View>
        <View class='ways_list'>
            <View class='way'> 
                <Image src={defaultway} />
                <View class='way_right'>
                  <View class='peopleInfo'>
                    <View><Text class='name'>Emma:</Text> <Text class='use_way'>听歌</Text></View>
                    <View><Text class='time_to_now'>8分钟</Text><Text class='reply'>回复</Text></View>
                  </View>
                  <View className='at-icon at-icon-heart'></View>
                </View>
            </View>
            <View class='way'> 
                <Image src={defaultway} />
                <View class='way_right'>
                  <View class='peopleInfo'>
                    <View><Text class='name'>Emma:</Text> <Text class='use_way'>听歌</Text></View>
                    <View><Text class='time_to_now'>8分钟</Text><Text class='reply'>回复</Text></View>
                  </View>
                  <View className='at-icon at-icon-heart'></View>
                </View>
            </View>
            <View class='way'> 
                <Image src={defaultway} />
                <View class='way_right'>
                  <View class='peopleInfo'>
                    <View><Text class='name'>Emma:</Text> <Text class='use_way'>听歌</Text></View>
                    <View><Text class='time_to_now'>8分钟</Text><Text class='reply'>回复</Text></View>
                  </View>
                  <View className='at-icon at-icon-heart'></View>
                </View>
            </View>
            <View class='way'> 
                <Image src={defaultway} />
                <View class='way_right'>
                  <View class='peopleInfo'>
                    <View><Text class='name'>Emma:</Text> <Text class='use_way'>听歌</Text></View>
                    <View><Text class='time_to_now'>8分钟</Text><Text class='reply'>回复</Text></View>
                  </View>
                  <View className='at-icon at-icon-heart'></View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}
