const userState = {
    user: [],
    isLogged: 'false',
    isLoading: 'false',
    signError: ''
}



const userReducer = (state = userState, action) => {


    switch (action.type) {
        case 'google-signIn-start':
            console.log(action.payLoad);
            state.isLoading = 'true'
            return state;

        case 'google-signIn-end':
            state.isLoading = 'false'
            return state;

        case 'google-signIn-success':
            console.log(action.payLoad);
            console.log(action.payLoad.auth);
            state.isLogged = true
            state.user = action.payLoad;
            return state;

        case 'google-signIn-failed':
            state.signError = action.payLoad;
            return state;

        case 'google-loggedOut-success':
            state.isLogged = false
            state.user = [];
            return state;


        default: return state;

    }
}
export default userReducer;
