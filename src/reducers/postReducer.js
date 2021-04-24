import * as types from '../actions/types'

const initialState = {
    posts: []
}

export default function(state = initialState, action){
    switch (action.type){
        case types.FETCH_POSTS:
            return{
                posts: action.payload
            }
        case types.ADD_POST:
            return{
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        default:
            return state;
    }
}