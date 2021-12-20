// Import Actions
import { Action } from '@ngrx/store';
import { Post } from '../models/post.model';

export enum PostActionTypes {

    ADD_POST = '[Post] Add',
    ADD_POST_SUCCESS = '[Post] Add Success',
    ADD_POST_FAILURE = '[Post] Add Failure',

    GET_POSTS = '[Post] Get Posts',
    GET_POSTS_SUCCESS = '[Post] Get Posts Success',
    GET_POSTS_FAILURE = '[Post] Get Posts Failure',

    DELETE_POST = '[Post] Delete Post',
    DELETE_POST_SUCCESS = '[Post] Delete Post Success',
    DELETE_POST_FAILURE = '[Post] Delete Post Failure',

}


/*
** Get Posts
**/
export class GetPostsAction implements Action {
    readonly type = PostActionTypes.GET_POSTS;
}

export class GetPostsSuccessAction implements Action {
    readonly type = PostActionTypes.GET_POSTS_SUCCESS;
    constructor(public payload: Post[]){}
}

export class GetPostsFailAction implements Action {
    readonly type = PostActionTypes.GET_POSTS_FAILURE;
    constructor(public payload: any) {}
}

/*
** End - Get Posts
**/


/*
** Add Post
**/
export class AddPostAction implements Action {
    readonly type = PostActionTypes.ADD_POST;
    constructor(public payload: Post){}
}

export class AddPostSuccessAction implements Action {
    readonly type = PostActionTypes.ADD_POST_SUCCESS;
    constructor(public payload: Post){}
}

export class AddPostFailAction implements Action {
    readonly type = PostActionTypes.ADD_POST_FAILURE;
    constructor(public payload: any){}
}

/*
** End - Add Post
**/


/*
** Delete Post
**/
export class DeletePostAction implements Action {
    readonly type = PostActionTypes.DELETE_POST;
    constructor(public payload: number){}
}

export class DeletePostSuccessAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;
    constructor(public payload: string | any){}
}

export class DeletePostFailAction implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAILURE;
    constructor(public payload: any){}
}

/*
** End - Delete Post
**/

export type PostActions =  GetPostsAction | GetPostsSuccessAction | GetPostsFailAction |
    AddPostAction | AddPostSuccessAction | AddPostFailAction |
    DeletePostAction | DeletePostSuccessAction | DeletePostFailAction;