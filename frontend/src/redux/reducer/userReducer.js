
const initialState = {
    isLogged : false,
    info : {

    }
}


const userReducer = (state = initialState , action) => {

        if(action.type == "REGISTER_USER") {
            return Object.assign({},state,{ isLogged : action.payload.status,info : action.payload.user_info });
        }
        else if(action.type == "LOGIN_USER") {
            return Object.assign({},state,{ isLogged : action.payload.status,info : action.payload.user_info });
        }
        else if(action.type == "LOGOUT_USER") {
            return Object.assign({},state,{ isLogged : action.payload.status,info : action.payload.user_info });
        }
        else if(action.type == "LOAD_USER") {
            return Object.assign({},state,{ isLogged : action.payload.status,info : action.payload.user_info });
        }
        else{
            return state;
        }
}

export default userReducer;