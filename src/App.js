import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Header';
import Footer from './Components/Footer';
import SideBar from './Components/Side-bar';
import CreatePost from './Components/Create-post';
import PostList from './Components/PostList';
import { useState } from 'react';
import PostListProvider from './Store/Post-list-store';

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (

    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='content'>
          <Header />
          {selectedTab === "Home" ?
            <PostList />
            :
            <CreatePost />
          }
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
