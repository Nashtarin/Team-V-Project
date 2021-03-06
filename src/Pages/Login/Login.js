import React from 'react';
import { Button } from 'react-bootstrap';

import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logoST.png';
import { useDispatch } from 'react-redux';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signInWithGoogleEnd, signInWithGoogleFailed, signInWithGoogleStart, signInWithGoogleSuccess } from '../../redux/actions/signIn';



const Login = () => {



    const location = useLocation();
    const history = useHistory();

    const { signInWithGoogle, user } = useAuth();

    console.log(user);
    const dispatch = useDispatch();




    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogleStart());
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                dispatch(signInWithGoogleSuccess(user));

                const destination = location?.state?.from || '/home';
                history.replace(destination);

                // setAuthError('');
            }).catch((error) => {
                // setAuthError(error.message);
                dispatch(signInWithGoogleFailed(error.message));
            }).finally(() => {


                dispatch(signInWithGoogleEnd());
                // setIsLoading(false);
            });
    }


    return (
        <div className='container'>

            <div className="row">
            <div className="col-lg-4"></div>

                <div className="col-lg-4 col-sm-12">
                    <div style={{ width: '340px', padding: '70px', backgroundColor: '#80bfff', borderRadius: '20px', height: '300px', textAlign: 'center',border:'2px solid #0080ff' }}>
                        <img className="mx-auto" style={{ width: "230px", height: "120px" }} src={logo} alt="" />

                        {/* <Button className='mt-4 fw-bold' variant="primary" onClick={() => signInWithGoogle(location, history)}>Google Sign In</Button> */}
                        <Button className='mt-4 fw-bold' variant="primary" onClick={()=>handleGoogleSignIn(location, history)}>Google Sign In</Button>
                        
                    </div>
                </div>
                <div className="col-lg-4"></div>

            </div>


            {/* <p>user:{user.displayName}</p> */}


            {/* <button onClick={() => dispatch(signOutWithGoogle())}>Google Sign Out</button> */}
        </div>
    );
};

export default Login;