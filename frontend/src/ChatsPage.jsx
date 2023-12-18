import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('ee3b9fee-f35b-4534-b1e9-74152ecdb3c6', props.user.username, props.user.secret)

    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>

    </div>
}

export default ChatsPage