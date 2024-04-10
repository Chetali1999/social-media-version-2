import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";
import WelcomeMessage from "./WelCome-mesage";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);

    const handleGetPostsList = () => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data =>{
            addInitialPosts(data.posts)
        }

        );
    }
    
    return (

        <>

        {postList.length === 0 && <WelcomeMessage onGetPostsClick={handleGetPostsList}/>}
            {postList.map((post) =>  <Post key={post.id} post={post}/>)}
        </>
    )
}

export default PostList;