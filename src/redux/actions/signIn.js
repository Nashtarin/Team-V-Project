import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();

export const signInWithGoogleStart = () => {
    return {
        type: 'google-signIn-start',

    }
}
export const signInWithGoogleEnd = () => {
    return {
        type: 'google-signIn-end',

    }
}
export const signInWithGoogleSuccess = (payLoad) => {
    return {
        type: 'google-signIn-success',
        payLoad
    }
}
export const signInWithGoogleFailed = (payLoad) => {
    return {
        type: 'google-signIn-failed',
        payLoad

    }
}

export const signOutWithGoogle = () => {
    return {
        type: 'google-loggedOut-success',

    }
}