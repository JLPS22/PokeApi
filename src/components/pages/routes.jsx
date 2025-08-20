import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from './posts'
import { Post } from './post'
import { PostsType } from "./postsType";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Posts />} />
                <Route exact path='/:id' element={<Post />} />
                <Route exact path='/type/:id' element={<PostsType />} />
            </Routes>
        </BrowserRouter>
    )
}