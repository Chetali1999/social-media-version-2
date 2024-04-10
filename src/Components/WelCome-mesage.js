
const WelcomeMessage = ({onGetPostsClick}) => {

    return (
        <center className="my-5">
            <h1>There are no post</h1>
            <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Get Post From Server</button>
        </center> 
    )
}

export default WelcomeMessage;