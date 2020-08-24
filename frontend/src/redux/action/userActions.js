import axios from "axios";
const login_url = "http://localhost:8080/api/user/login";


export const userRegister = () => {

    return (dispatch) => {
        dispatch({
            type : "REGISTER_USER",
            payload : {
                status : true,
                info : {
                    name : "rajesh"
                }
            }
        })
    }
}

export const userLogin = (formdata,ownProps) => {

    return(dispatch) => {

        axios({
            method: 'post',
            url: login_url,
            data: formdata,
            // headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {

                //storing in session 
                window.localStorage.setItem('isLogged',true);
                window.localStorage.setItem('info',JSON.stringify(response.data.response));
                
                dispatch({
                    type : "LOGIN_USER",
                    payload : {
                        status : true,
                        user_info : response.data.response
                    }
                })
                ownProps.history.push('/about');
                //handle success
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });


    }
}

export const userLogout = () => {

    // remove
    localStorage.removeItem('isLogged');
    // remove all
    localStorage.clear();

    return(dispatch) => {
        dispatch({
            type : "LOGOUT_USER",
            payload : {
                status : false,
                info : { }
            }
        })
    }
}