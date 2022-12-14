import { updateNewMessageBody, sendMessageCreator } from '../../redux/Reducer/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBody(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }

}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer