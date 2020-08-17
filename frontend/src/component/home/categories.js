import React from "react";
import './common.css';


const Categories = () => {

    return(
        <div id="home_categories">
            <div>
                <div className="box" >
                    <img src="/assets/images/cat1.png" />
                </div>
                <span>Beverages</span>
            </div>

            <div>
            <div className="box" >
                    <img src="/assets/images/cat1.png" />
                </div>
                <span>Buiscut Snaks</span>
            </div>

            <div>
            <div className="box" >
                    <img src="/assets/images/cat2.png" />
                </div>
                <span>Breakfast & Diary</span>
            </div>

            <div>
            <div className="box" >
                    <img src="/assets/images/cat1.png" />
                </div>                <span>Fruits & Vegetables</span>
            </div>
            <div>
            <div className="box" >
                    <img src="/assets/images/cat5.png" />
                </div>                <span>Furnishing Home <br /> Needs</span>
            </div>

            <div>
            <div className="box" >
                    <img src="/assets/images/cat1.png" />
                </div>                <span>Grocery & Stapels</span>
            </div>
            <div>
            <div className="box" >
                    <img src="/assets/images/cat3.png" />
                </div>                <span>Home & Kitches</span>
            </div>
        </div>
    )

};

export default Categories;