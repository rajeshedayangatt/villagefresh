
import axios from "axios";

const get_user_url = "http://localhost:8080/api/user/details";

export const checkUserAlreadyLogined = () => {

    
    return  (dispatch) => {

       // Retrieve the object from storage
        let  loginstatus = localStorage.getItem('isLogged');
        if(loginstatus) {
            var userinfo = localStorage.getItem('info');

            axios.get(get_user_url,{
                headers: {
                  'Authorization': userinfo
                }
              }).then((res) => {
                        dispatch({
                            type : "LOAD_USER",
                            payload : {
                                status : true,
                                user_info : res.data.response
                            }
                        })
                  })

        }

    }

}