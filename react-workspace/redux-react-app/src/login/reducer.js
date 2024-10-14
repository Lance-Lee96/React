const initialState = {isLoggedIn : false, userName : ''}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn : true,
                userName : action.userName
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn : false,
                userName : ''
            }
        default : 
            return state;
    }
}
export default authReducer