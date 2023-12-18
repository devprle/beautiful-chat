import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {


    return <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='ee3b9fee-f35b-4534-b1e9-74152ecdb3c6'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100dvh'}}
        />
    </div>
}

export default ChatsPage