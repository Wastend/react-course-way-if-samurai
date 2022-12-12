let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage = { id: 6, message: state.newMessageBody }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        case "UPDATE_NEW_MESSAGE_BODY":{
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        }
        default: return state
    }
}

export default dialogsReducer

export const sendMessageCreator = () => ({type: "SEND-MESSAGE"})

export const updateNewMessageBody = (body) => ({type: "UPDATE_NEW_MESSAGE_BODY", newMessageBody: body})