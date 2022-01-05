// import React from 'react';

// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';



// import './Header.css'

// const Header = () => {

//     const { user, logOut } = useAuth();

//     return (
//         <div className="pt-5" style={{ backgroundColor: 'black', padding: '5px' }}>

//             <div className="row gx-0">
//                 <div className="col-lg-4 col-sm-12 ">
//                     <Link className="nav-con-link" to="/home"> <h4>ST Blog</h4></Link>

//                     {/* <p>hi:{isLogged}</p> */}
//                     {/* <button onClick={() => dispatch(signInWithGoogle())}>Sign koro</button> */}

//                     {/* <button onClick={() => dispatch(outInWithGoogle())}>Sign out koro</button> */}


//                 </div>
//                 <div className="col-lg-8 col-sm-12">

//                     <Link className="nav-con-link" to="/home">Home</Link>

//                     <Link className="nav-con-link" to="/contact">Contact Me</Link>

//                     {
//                         user?.displayName ? <Link style={{ textDecoration: 'none' }} to='/home'><button onClick={logOut} style={{ border: '1px solid red', color: 'red', backgroundColor: 'black' }}>Log Out</button></Link> :
//                             <Link className="nav-con-link" to="/login">Login</Link>
//                     }




//                     {/* <a className="nav-con-link" href="https://drive.google.com/file/d/1_F5g7i09uyqXG7hfH6N1_DGPFryKpsCg/view?usp=sharing" target="_blank">Download Resume</a> */}
//                 </div>

//             </div>

//         </div>






//     );
// };

// export default Header;
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import logo from '../../../images/logoST.png'
import { signInWithGoogleFailed, signOutWithGoogle } from '../../../redux/actions/signIn';
import '../Header/Header.css'

const Header = () => {
 
    const auth = getAuth();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user?.user);
    const isLogged = useSelector(state => state.user?.isLogged);


    const handleSignOutWithGoogle = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(signOutWithGoogle());
        }).catch((error) => {
            // An error happened.
            // dispatch(signInWithGoogleFailed(error.message));
            dispatch(signInWithGoogleFailed(error.message));
        })
        // .finally(() => setIsLoading(false));
    }

    return (
        <div className='d-flex justify-content-between'>

            <img className="me-5" style={{marginLeft:"35px",marginTop:"20px", height: "120px", width: "200px" }} src={logo} alt="" />



            <div className="me-5 mt-4">
                <Navbar expand="lg">
                    <Container fluid>
                        {/* <Navbar.Brand ><i className='text-warning'>Sunshine Hospital</i></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {/* <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                               <Nav.Link ><Link to='/explore'>Explore</Link></Nav.Link> */}
                                <Link className="nav-con-link" to="/home">Home</Link>

                                <Link className="nav-con-link" to="/contact">Contact Me</Link>
                                {/* {
                                    user?.email && <Nav.Link ><Link to='/dashboard'>Dashboard</Link></Nav.Link>
                                } */}
                                {/* <Nav.Link ><Link to='/aboutus'>About Us</Link></Nav.Link> */}

                                <button onClick={handleSignOutWithGoogle}>Sign out</button>

                                {/* {user.email ? <div><span>{user.displayName}  </span><Button onClick={logOut} style={{ backgroundColor: "gray" }} className='me-3 text-white fw-bold'>Logout</Button></div> : */}
                                    <Link to='/login'><Button className='me-3' style={{ backgroundColor: '#006bb3' }}>Login</Button></Link>}

                            </Nav>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;