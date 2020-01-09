import {
    USERINFO,
    FOLLOW_REFRESH
} from '../constants/user'


const INITAL_STATE = {
    userInfo:null,
    isFollowed:false,
    followList:[]
}

export default function user(state=INITAL_STATE,action){
    switch(action.type){
        //  返回 state 原有的值，但更新，指定的字段
        case USERINFO:
            return {
                ...state,
                userInfo:action.payload.data
            }
        case FOLLOW_REFRESH:
            return {
                ...state,
                followList:action.payload.data
            }
        default:
            return state
    }
}