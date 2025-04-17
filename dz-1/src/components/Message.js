import '../Message.css';

function Message(props) {
    return (
        <div>
            <h2 className='title'>{props.title}</h2>
            <p className='text'>{props.text}</p>
        </div>
    )
}


export default Message;