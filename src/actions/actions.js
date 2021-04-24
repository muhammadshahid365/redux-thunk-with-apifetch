import * as types from './types'

export const fetchPosts = () => {
    // console.log("fetchPosts");
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                dispatch({
                    type: types.FETCH_POSTS,
                    payload: posts
                })
            });
    }
}

export const addPost = (item) => {
    return {
        type: types.ADD_POST,
        payload: item
    }
}
