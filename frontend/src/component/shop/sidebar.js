import React from "react";

const Sidebar = () => {
    return(
       <div className="col-md-3">
				   <div className="shop-filters">
					  <div id="accordion">
						 <div className="card">
							<div className="card-header" id="headingOne">
							   <h5 className="mb-0">
								  <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
								  Category <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
							   <div className="card-body card-shop-filters">
								  <form className="form-inline mb-3">
									 <div className="form-group">
										<input type="text" className="form-control" placeholder="Search By Category" />
										<button type="submit" className="pl-2 pr-2 btn btn-secondary btn-lg"><i className="mdi mdi-file-find"></i></button>
									 </div>
								  </form>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb1" />
									 <label className="custom-control-label" for="cb1">All Fruits </label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb8" />
									 <label className="custom-control-label" for="cb8">Fresh & Herbs <span className="badge badge-primary">5% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb2" />
									 <label className="custom-control-label" for="cb2">Seasonal Fruits <span className="badge badge-secondary">NEW</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb3" />
									 <label className="custom-control-label" for="cb3">Imported Fruits <span className="badge badge-danger">10% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb4" /> 
									 <label className="custom-control-label" for="cb4">Citrus <span className="badge badge-info">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb5" />
									 <label className="custom-control-label" for="cb5">Cut Fresh & Herbs</label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb6" />
									 <label className="custom-control-label" for="cb6">Seasonal Fruits <span className="badge badge-success">25% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="cb7" />
									 <label className="custom-control-label" for="cb7">Fresh & Herbs <span className="badge badge-primary">5% OFF</span></label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingTwo">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								  Price <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
							   <div className="card-body card-shop-filters">
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="1" />
									 <label className="custom-control-label" for="1">$68 to $659 <span className="badge badge-warning">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="2" />
									 <label className="custom-control-label" for="2">$660 to $1014</label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="3" />
									 <label className="custom-control-label" for="3">$1015 to $1679</label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="4" />
									 <label className="custom-control-label" for="4">$1680 to $1856</label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingThree">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								  Brand <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							   <div className="card-body card-shop-filters">
								  <form className="form-inline mb-3">
									 <div className="form-group">
										<input type="text" className="form-control" placeholder="Search By Brand" />
									 </div>
									 <button type="submit" className="btn btn-secondary ml-2">GO</button>
								  </form>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="b1" />
									 <label className="custom-control-label" for="b1">Imported Fruits <span className="badge badge-warning">50% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="b2" />
									 <label className="custom-control-label" for="b2">Seasonal Fruits <span className="badge badge-secondary">NEW</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="b3" />
									 <label className="custom-control-label" for="b3">Imported Fruits <span className="badge badge-danger">10% OFF</span></label>
								  </div>
								  <div className="custom-control custom-checkbox">
									 <input type="checkbox" className="custom-control-input" id="b4" />
									 <label className="custom-control-label" for="b4">Citrus</label>
								  </div>
							   </div>
							</div>
						 </div>
						 <div className="card">
							<div className="card-header" id="headingThree">
							   <h5 className="mb-0">
								  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
								  Imported Fruits <span className="mdi mdi-chevron-down float-right"></span>
								  </button>
							   </h5>
							</div>
							<div id="collapsefour" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
							   <div className="card-body">
								  <div className="list-group">
									 <a href="#" className="list-group-item list-group-item-action">All Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Imported Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Seasonal Fruits</a>
									 <a href="#" className="list-group-item list-group-item-action">Citrus</a>
									 <a href="#" className="list-group-item list-group-item-action disabled">Cut Fresh & Herbs</a>
								  </div>
							   </div>
							</div>
						 </div>
					  </div>
				   </div>
				   <div className="left-ad mt-4">
					  <img className="img-fluid" src="http://via.placeholder.com/254x557" alt="" />
				   </div>
				</div>

    )
}

export default Sidebar;