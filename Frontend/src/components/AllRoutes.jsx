import React from "react";
import {Route , Routes} from  'react-router-dom';
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import MyBooksPage from "../pages/MyBooksPage";



function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>
         <Route path="//mybooks" element={<MyBooksPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}


export default AllRoutes;