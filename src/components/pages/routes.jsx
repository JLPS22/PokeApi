import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from './posts'
import { Post } from './post'
import { PostsType } from "./postsType";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/PokeApi/' element={<Posts />} />
                <Route exact path='/PokeApi/:id' element={<Post />} />
                <Route exact path='/PokeApi/type/:id' element={<PostsType />} />
            </Routes>
        </BrowserRouter>
    )
}