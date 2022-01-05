import React from 'react';
import AddPost from '../AddPost.js/AddPost';

import { Link } from 'react-router-dom';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AllBlogPosts from '../BlogPosts/AllBlogPosts/AllBlogPosts';
import MyBlogs from '../BlogPosts/MyBlogs/MyBlogs';
import PrivateRoute from '../Login/PrivateRoute';
import AboutMe from './AboutMe/AboutMe';


const Home = (props) => {

    let { path, url } = useRouteMatch();

    return (
        <div className="mt-5 container">

            <div className="row">
                <div className="col-lg-4" style={{ border: '2px solid royalblue',backgroundColor: '#80bfff', borderRadius: '20px', paddingTop: '30px',height:"250px",width:"200px",marginRight:"40px"}}>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/createpost`}><button style={{ border: '2px solid  #00334d', color: ' navy', backgroundColor: ' #0099e6', borderRadius: '3px', marginBottom: '15px' }} >Create Post</button></Link> <br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/allblogs`}><button style={{ border: '2px solid  #00334d', color: ' navy', backgroundColor: ' #0099e6', borderRadius: '3px', marginBottom: '15px' }} >All Blogs</button></Link><br />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/myblogs`}><button style={{ border: '2px solid  #00334d', color: ' navy', backgroundColor: ' #0099e6', borderRadius: '3px', marginBottom: '15px' }} >My Blogs</button></Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/aboutme`}><button style={{ border: '2px solid  #00334d', color: ' navy', backgroundColor: ' #0099e6', borderRadius: '3px', marginBottom: '15px' }} >About Me</button></Link><br />



                </div>
                <div className="col-lg-8" style={{ border: '2px solid  #0077b3' }}>

                    <Switch>
                        <PrivateRoute exact path={path}>

                            <AllBlogPosts></AllBlogPosts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/createpost`}>
                            <AddPost></AddPost>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/allblogs`}>
                            <AllBlogPosts></AllBlogPosts>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/myblogs`}>
                            <MyBlogs></MyBlogs>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/aboutme`}>
                            <AboutMe></AboutMe>
                        </PrivateRoute>

                    </Switch>
                </div>
            </div>


        </div>
    );
};

export default Home;