import {
    LOADARTICLE,
    SEARCHWORDS
} from '../constants/article'


const INITAL_STATE = {
    // eslint-disable-next-line react/no-unused-state
      searchValue:'',
      // eslint-disable-next-line react/no-unused-state
       // eslint-disable-next-line react/no-unused-state
       hotwords:[
         '失眠','失眠','失眠','失眠','失眠'
       ],
       // eslint-disable-next-line react/no-unused-state
       arctleList:[]
}

export default function user(state=INITAL_STATE,action){
    switch(action.type){
        //  返回 state 原有的值，但更新，指定的字段
        case LOADARTICLE:
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