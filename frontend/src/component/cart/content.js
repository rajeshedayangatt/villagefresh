import React from "react";

const Content = () => {

    return(

        <section className="cart-page section-padding">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body cart-table">
                    <div className="table-responsive">
                    <table className="table cart_summary">
                        <thead>
                            <tr>
                                <th className="cart_product">Product</th>
                                <th>Description</th>
                                <th>Avail.</th>
                                <th>Unit price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th className="action"><i className="mdi mdi-delete-forever"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="cart_product"><a href="#"><img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/11.jpg" alt="" /></a></td>
                                <td className="cart_description">
                                <h5 className="product-name"><a href="#">Ipsums Dolors Untra </a></h5>
                                <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                </td>
                                <td className="availability in-stock"><span className="badge badge-success">In stock</span></td>
                                <td className="price"><span>$49.88</span></td>
                                <td className="qty">
                                <div className="input-group">
                                    <span className="input-group-btn"><button disabled="disabled" className="btn btn-theme-round btn-number" type="button">-</button></span>
                                    <input type="text" max="10" min="1" value="1" className="form-control border-form-control form-control-sm input-number" name="quant[1]" />
                                    <span className="input-group-btn"><button className="btn btn-theme-round btn-number" type="button">+</button>
                                    </span>
                                </div>
                                </td>
                                <td className="price"><span>$49.88</span></td>
                                <td className="action">
                                <a className="btn btn-sm btn-danger" data-original-title="Remove" href="#" title="" data-placement="top" data-toggle="tooltip"><i className="mdi mdi-close-circle-outline"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cart_product"><a href="#"><img alt="Product" src="https://askbootstrap.com/preview/groci/img/item/10.jpg" className="img-fluid" /></a></td>
                                <td className="cart_description">
                                <h5 className="product-name"><a href="#">Ipsums Dolors Untra </a></h5>
                                <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                </td>
                                <td className="availability out-of-stock"><span className="badge badge-primary">No stock</span></td>
                                <td className="price"><span>$00.00</span></td>
                                <td className="qty">
                                <div className="input-group">
                                    <span className="input-group-btn"><button disabled="disabled" className="btn btn-theme-round btn-number" type="button">-</button></span>
                                    <input type="text" max="10" min="1" value="1" className="form-control border-form-control form-control-sm input-number" name="quant[1]" />
                                    <span className="input-group-btn"><button className="btn btn-theme-round btn-number" type="button">+</button>
                                    </span>
                                </div>
                                </td>
                                <td className="price"><span>00.00</span></td>
                                <td className="action">
                                <a className="btn btn-sm btn-danger" data-original-title="Remove" href="#" title="" data-placement="top" data-toggle="tooltip"><i className="mdi mdi-close-circle-outline"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td className="cart_product"><a href="#"><img alt="Product" src="https://askbootstrap.com/preview/groci/img/item/9.jpg" className="img-fluid" /></a></td>
                                <td className="cart_description">
                                <h5 className="product-name"><a href="#">Ipsums Dolors Untra </a></h5>
                                <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                                </td>
                                <td className="availability in-stock"><span className="badge badge-warning">In stock</span></td>
                                <td className="price"><span>$99.00</span></td>
                                <td className="qty">
                                <div className="input-group">
                                    <span className="input-group-btn"><button disabled="disabled" className="btn btn-theme-round btn-number" type="button">-</button></span>
                                    <input type="text" max="10" min="1" value="1" className="form-control border-form-control form-control-sm input-number" name="quant[1]" />
                                    <span className="input-group-btn"><button className="btn btn-theme-round btn-number" type="button">+</button>
                                    </span>
                                </div>
                                </td>
                                <td className="price"><span>$188.00</span></td>
                                <td className="action">
                                <a className="btn btn-sm btn-danger" data-original-title="Remove" href="#" title="" data-placement="top" data-toggle="tooltip"><i className="mdi mdi-close-circle-outline"></i></a>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="1"></td>
                                <td colspan="4">
                                <form className="form-inline float-right">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter discount code" className="form-control border-form-control form-control-sm" />
                                    </div>
                                    &nbsp;
                                    <button className="btn btn-success float-left btn-sm" type="submit">Apply</button>
                                </form>
                                </td>
                                <td colspan="2">Discount : $237.88 </td>
                            </tr>
                            <tr>
                                <td colspan="2"></td>
                                <td className="text-right"  colspan="3">Total products (tax incl.)</td>
                                <td colspan="2">$437.88 </td>
                            </tr>
                            <tr>
                                <td className="text-right" colspan="5"><strong>Total</strong></td>
                                <td className="text-danger" colspan="2"><strong>$337.88 </strong></td>
                            </tr>
                        </tfoot>
                    </table>
                    </div>
                    <a href="https://askbootstrap.com/preview/groci/checkout.html"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span className="float-right"><strong>$1200.69</strong> <span className="mdi mdi-chevron-right"></span></span></button></a>
                </div>
                <div className="card mt-2">
                    <h5 className="card-header">My Cart (Design Two)<span className="text-secondary float-right">(5 item)</span></h5>
                    <div className="card-body pt-0 pr-0 pl-0 pb-0">
                    <div className="cart-list-product">
                        <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                        <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/11.jpg" alt="" />
                        <span className="badge badge-success">50% OFF</span>
                        <h5><a href="#">Product Title Here</a></h5>
                        <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                        <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
                    </div>
                    <div className="cart-list-product">
                        <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                        <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/1.jpg" alt="" />
                        <span className="badge badge-success">50% OFF</span>
                        <h5><a href="#">Product Title Here</a></h5>
                        <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                        <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
                    </div>
                    <div className="cart-list-product">
                        <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
                        <img className="img-fluid" src="https://askbootstrap.com/preview/groci/img/item/2.jpg" alt="" />
                        <span className="badge badge-success">50% OFF</span>
                        <h5><a href="#">Product Title Here</a></h5>
                        <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
                        <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
                    </div>
                    </div>
                    <div className="card-footer cart-sidebar-footer">
                    <div className="cart-store-details">
                        <p>Sub Total <strong className="float-right">$900.69</strong></p>
                        <p>Delivery Charges <strong className="float-right text-danger">+ $29.69</strong></p>
                        <h6>Your total savings <strong className="float-right text-danger">$55 (42.31%)</strong></h6>
                    </div>
                    <a href="https://askbootstrap.com/preview/groci/checkout.html"><button className="btn btn-secondary btn-lg btn-block text-left" type="button"><span className="float-left"><i className="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span className="float-right"><strong>$1200.69</strong> <span className="mdi mdi-chevron-right"></span></span></button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>


    )
    

}


export default Content;