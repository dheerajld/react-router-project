import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Users } from './component/Users';
import { Todos } from './component/Todos';
import { Photos } from './component/Photos';
import { Comments } from './component/Comments';
import { Albums } from './component/Albums';
import { Navbar } from './component/Navbar';
import {Posts }from './component/Posts';
import Post from './component/Posts/Posts';
import Todo from './component/Todos/Todos';
import Album from './component/Albums/Albums';
import Comment from './component/Comments/Comments';
import Photo from './component/Photos/Photos';
import  {Registration} from './component/auth/Registration';
import { Login } from './component/auth/Login';
import { PublicRoutes } from './component/auth/PublicRoutes';
import { ProtectedRoutes } from './component/auth/ProtectedRoutes';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
      <br />
      <br />
      <br />
        <Routes>
       {/* public Route */}

        <Route element={<PublicRoutes />}>
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Login' element={<Login />} />
        
        
        </Route>

          {/* Protecte Route */}
           <Route element={<ProtectedRoutes />}>
           
           <Route path="/" element={<Users />} />
           <Route path="/Todos" element={<Todos />} />
           <Route path="/Posts" element={<Posts/> } />
           <Route path="/Photos" element={<Photos />} />
           <Route path="/Comments" element={<Comments />} />
           <Route path="/Albums" element={<Albums />} />
           <Route path="/posts/:userId" element={<Post/> } />
           <Route path="/todos/:userId" element={<Todo/> } />
           <Route path="/albums/:userId" element={<Album/> } />
           <Route path="/comments/:postId" element={<Comment/> } />
           <Route path="/photos/:albumId" element={<Photo /> } />
          
           
           </Route>
          
     
    </Routes>

      </BrowserRouter>
    </div>



  );
}

export default App;
