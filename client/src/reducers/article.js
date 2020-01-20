import {
    LOADARTICLE,
    SEARCHWORDS
} from '../constants/article'


const INITAL_STATE = {
    // eslint-disable-next-line react/no-unused-state
      searchValue:'你搜我?',
      // eslint-disable-next-line react/no-unused-state
       // eslint-disable-next-line react/no-unused-state
       hotwords:[
         '琅丹','失眠','失眠','失眠','失眠'
       ],
       // eslint-disable-next-line react/no-unused-state
       articleList:[]
}

export default function article(state=INITAL_STATE,action){
    // console.log("---------article reducer------------",action)
    switch(action.type){
        //  返回 state 原有的值，但更新，指定的字段
        case LOADARTICLE:
            // console.log('i received the message',action)
            // console.log("out---put----",{...state,articleList:action.payload.data})
            return {
                ...state,
                articleList:action.payload.data
            }
        case SEARCHWORDS:
            return {
                ...state,
                followList:action.payload.data
            }
        default:
            return state
    }
}