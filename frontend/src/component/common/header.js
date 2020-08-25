import React , { useState , useEffect }from "react";
import { connect } from "react-redux";
import { userLogin } from "../../redux/action/userActions";
import { withRouter } from "react-router";
import { Button , Modal } from "react-bootstrap";


const Header = (props) => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect( () => {
        console.log("user",props.user)
    },[])

    function  loginUser() {

        console.log("username",username)
        console.log("password",password)

        props.loginFormSubmit({
            email : username,
            password : password
        },handleClose);
    }


    function logoutUser() {

    }
    return(

        <>
        <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"> <img src="https://askbootstrap.com/preview/groci/img/logo.png" alt="logo" /> </a>
                <a className="location-top" href="#"><i className="mdi mdi-map-marker-circle" aria-hidden="true"></i> New York</a>
                <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                    <div className="top-categories-search">
                        <div className="input-group">
                            <span className="input-group-btn categories-dropdown">
                                <select className="form-control-select" id="city_sel">
                                    <option selected="selected">Your City</option>
                                    <option value="0">New Delhi</option>
                                    <option value="2">Bengaluru</option>
                                    <option value="3">Hyderabad</option>
                                    <option value="4">Kolkata</option>
                                </select>
                            </span>
                            <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text" />
                            <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button"><i className="mdi mdi-file-find"></i> Search</button>
                            </span>
                        </div>
                    </div>
                    </div>
                    {
                        (props.user.isLogged) ? (

                            <div className="my-2 my-lg-0">
                                <ul className="list-inline main-nav-right">
                                    <li className="list-inline-item dropdown osahan-top-dropdown">
                                        <a className="btn btn-theme-round dropdown-toggle dropdown-toggle-top-user" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img alt="logo" src="https://askbootstrap.com/preview/groci/img/user.jpg" /><strong>Hi</strong> {props.user.info.first_name}  {props.user.info.last_name} 
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-list-design">
                                        <a href="my-profile.html" class="dropdown-item"><i aria-hidden="true" class="mdi mdi-account-outline"></i>  My Profile</a>
                                        <a href="https://askbootstrap.com/preview/groci/my-address.html" class="dropdown-item"><i aria-hidden="true" class="mdi mdi-map-marker-circle"></i>  My Address</a>
                                        <a href="https://askbootstrap.com/preview/groci/wishlist.html" class="dropdown-item"><i aria-hidden="true" class="mdi mdi-heart-outline"></i>  Wish List </a>
                                        <a href="https://askbootstrap.com/preview/groci/orderlist.html" class="dropdown-item"><i aria-hidden="true" class="mdi mdi-format-list-bulleted"></i>  Order List</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" onClick={logoutUser}><i class="mdi mdi-lock"></i> Logout</a>	
                                        </div>
                                    </li>
                                    <li className="list-inline-item cart-btn">
                                        <a href="#" data-toggle="offcanvas" class="btn btn-link border-none"><i class="mdi mdi-cart"></i> My Cart <small class="cart-value">5</small></a>
                                    </li>
                                </ul>
                            </div>

                        ) : (

                            <div className="my-2 my-lg-0">
                                <ul className="list-inline main-nav-right">
                                    <li className="list-inline-item">
                                        <a href="#" onClick={handleShow} className="btn btn-link"><i className="mdi mdi-account-circle"></i> Login/Sign Up</a>
                                    </li>
                                    <li className="list-inline-item cart-btn">
                                        <a href="#" data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart"></i> My Cart <small className="cart-value">5</small></a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }



                </div>
            </div>
        </nav>

    
        <Modal show={show} onHide={handleClose} className="login-modal-main" size="lg" centered={true}>

        <Modal.Body>

        <div className="login-modal">
                        <div className="row">
                        <div className="col-lg-6 pad-right-0">
                            <div className="login-modal-left">
                            </div>
                        </div>
                        <div className="col-lg-6 pad-left-0">
                            <button type="button" className="close close-top-right" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="mdi mdi-close"></i></span>
                            <span className="sr-only">Close</span>
                            </button>
                            {/* <form action="#"> */}
                                <div className="login-modal-right">
                                    <div className="tab-content">
                                    <div className="tab-pane active" id="login" role="tabpanel">
                                        <h5 className="heading-design-h5">Login to your account</h5>
                                        <fieldset className="form-group">
                                            <label>Enter Email/Mobile number</label>
                                            <input type="text" className="form-control" placeholder="+91 123 456 7890" onChange={
                                                (e) => setUsername(e.target.value) }/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control" placeholder="********"   onChange={
                                                (e) => setPassword(e.target.value) }/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <button type="submit" className="btn btn-lg btn-secondary btn-block" onClick={loginUser}>Enter to your account</button>
                                        </fieldset>
                                        <div className="login-with-sites text-center">
                                            <p>or Login with your social profile:</p>
                                            <button className="btn-facebook login-icons btn-lg"><i className="mdi mdi-facebook"></i> Facebook</button>
                                            <button className="btn-google login-icons btn-lg"><i className="mdi mdi-google"></i> Google</button>
                                            <button className="btn-twitter login-icons btn-lg"><i className="mdi mdi-twitter"></i> Twitter</button>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="register" role="tabpanel">
                                        <h5 className="heading-design-h5">Register Now!</h5>
                                        <fieldset className="form-group">
                                            <label>Enter Email/Mobile number</label>
                                            <input type="text" className="form-control" placeholder="+91 123 456 7890" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Confirm Password </label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <button type="submit" className="btn btn-lg btn-secondary btn-block">Create Your Account</button>
                                        </fieldset>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" for="customCheck2">I Agree with <a href="#">Term and Conditions</a></label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="text-center login-footer-tab">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#login" role="tab"><i className="mdi mdi-lock"></i> LOGIN</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#register" role="tab"><i className="mdi mdi-pencil"></i> REGISTER</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            {/* </form> */}
                        </div>
                        </div>
                    </div>

        </Modal.Body>
       
      </Modal>



        <div className="modal fade login-modal-main hide" id="bd-example-modal">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="login-modal">
                        <div className="row">
                        <div className="col-lg-6 pad-right-0">
                            <div className="login-modal-left">
                            </div>
                        </div>
                        <div className="col-lg-6 pad-left-0">
                            <button type="button" className="close close-top-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="mdi mdi-close"></i></span>
                            <span className="sr-only">Close</span>
                            </button>
                            {/* <form action="#"> */}
                                <div className="login-modal-right">
                                    <div className="tab-content">
                                    <div className="tab-pane active" id="login" role="tabpanel">
                                        <h5 className="heading-design-h5">Login to your account</h5>
                                        <fieldset className="form-group">
                                            <label>Enter Email/Mobile number</label>
                                            <input type="text" className="form-control" placeholder="+91 123 456 7890" onChange={
                                                (e) => setUsername(e.target.value) }/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control" placeholder="********"   onChange={
                                                (e) => setPassword(e.target.value) }/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <button type="submit" className="btn btn-lg btn-secondary btn-block" onClick={loginUser}>Enter to your account</button>
                                        </fieldset>
                                        <div className="login-with-sites text-center">
                                            <p>or Login with your social profile:</p>
                                            <button className="btn-facebook login-icons btn-lg"><i className="mdi mdi-facebook"></i> Facebook</button>
                                            <button className="btn-google login-icons btn-lg"><i className="mdi mdi-google"></i> Google</button>
                                            <button className="btn-twitter login-icons btn-lg"><i className="mdi mdi-twitter"></i> Twitter</button>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="register" role="tabpanel">
                                        <h5 className="heading-design-h5">Register Now!</h5>
                                        <fieldset className="form-group">
                                            <label>Enter Email/Mobile number</label>
                                            <input type="text" className="form-control" placeholder="+91 123 456 7890" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Password</label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Enter Confirm Password </label>
                                            <input type="password" className="form-control" placeholder="********" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <button type="submit" className="btn btn-lg btn-secondary btn-block">Create Your Account</button>
                                        </fieldset>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" for="customCheck2">I Agree with <a href="#">Term and Conditions</a></label>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="text-center login-footer-tab">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" href="#login" role="tab"><i className="mdi mdi-lock"></i> LOGIN</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-toggle="tab" href="#register" role="tab"><i className="mdi mdi-pencil"></i> REGISTER</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            {/* </form> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>






    </>
    )


}

const mapStateToProps = (state) => {
    const userdata = state.user;

    return {
        user : userdata
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {

    return {
        loginFormSubmit : (formdata,fn) =>  dispatch(userLogin(formdata,ownProps,fn))
    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));