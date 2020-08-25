import axios from "axios";
const login_url = "http://localhost:8080/api/user/login";
const get_user_url = "http://localhost:8080/api/user/details";


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

export const userLogin = (formdata,ownProps,fn) => {

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
                axios.get(get_user_url,{
                    headers: {
                      'Authorization': response.data.response
                    }
                }).then((res) => {
                            dispatch({
                                type : "LOAD_USER",
                                payload : {
                                    status : true,
                                    user_info : res.data.response
                                }
                            });
                            fn();
                            console.log("ownProps",ownProps);
                            ownProps.history.push('/about');
                })

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