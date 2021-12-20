import {PostActionTypes, PostActions} from '../actions/posts.actions';
import { Post } from '../models/post.model';

export interface PostState {
    posts: Post[],
    loading: boolean,
    error: string | any
}

// initial state
const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
};

// postReducer Function
export function postReducer(state = initialState, action: PostActions): PostState {
    switch (action.type) {
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                loading: true
            }
        case PostActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            }
        case PostActionTypes.ADD_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
    
        case PostActionTypes.DELETE_POST:
            return {
                ...state,
                loading: true
            }
        case PostActionTypes.DELETE_POST_SUCCESS:{
            let updatedPosts = [...state.posts];
            updatedPosts.splice(action.payload, 1);   
            return {
                ...state,
                posts: updatedPosts,
                loading: false
            };
        }
        case PostActionTypes.DELETE_POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case PostActionTypes.GET_POSTS:
            return {
                ...state,
                loading: true
            }
        case PostActionTypes.GET_POSTS_SUCCESS:
            return {
                ...state, 
                posts: action.payload,
                loading: false
            }
        case PostActionTypes.GET_POSTS_FAILURE:
            return {
                ...state, 
                error: action.payload,
                loading: false
            }
        default: 
            return state;
     }   
}