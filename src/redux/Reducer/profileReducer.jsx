let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '11' },
        { id: 2, message: 'It\'s my first post', likesCount: '23' }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":{
            return {
                ...state,
                newPostText: action.text
            }
        }
        default: return state
    }
}

export default profileReducer

export const addPostActionCreator = () => ({type: "ADD-POST"})

export const updateNewPostTextActionCreator = (text) => ({type: "UPDATE-NEW-POST-TEXT", text: text})