let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Дима' },
                { id: 2, name: 'Маша' },
                { id: 3, name: 'Паша' },
                { id: 4, name: 'Кузя' },
                { id: 5, name: 'Туся' },
                { id: 6, name: 'Патриарх' }],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Привет' },
                { id: 3, message: 'Hello' },
                { id: 4, message: 'Как дела?' },
                { id: 5, message: 'Whats app' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: '11' },
                { id: 2, message: 'It\'s my first post', likesCount: '23' }
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _rerenderEntireTree() {
        console.log("values changed")
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this._state.sidebar =  sidebarReducer(this._state.sidebar, action)

        this._state.dialogs =  dialogsReducer(this._state.dialogsPage, action)
        
        this._rerenderEntireTree(this._state)
    }

}
export default store