import './styles/App.css';
import {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/mySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'uJavaScript 1', body: 'cDescription'},
        {id: 2, title: 'fJavaScript 2', body: 'aDescription'},
        {id: 3, title: 'iJavaScript 3', body: 'yDescription'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

// калбэк функция для предачи данных от ребенка родителю
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sorting'
                options={[
                    {value: 'title', name: 'by name'},
                    {value: 'body', name: 'by description'}
                ]}
            />
            {
                posts.length
                    ? <PostList posts={posts} remove={removePost}/>
                    : <h1 style={{textAlign: 'center'}}>Posts not found</h1>
            }
        </div>
    );
}

export default App;
