import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/Computer 03.jpg"
import web2 from "../src/images/comp1.jpg"
import web3 from "../src/images/comp2.jpg"
import web4 from "../src/images/comp3.jpg"

const Service = () => {
  return (
    <>
    <div className="my-4">
      <h1 className="text-center"> Our Services</h1>
    </div>
    <div className="container-fluid nav bg">
            <div className="row">
                <div className="col-12 mx-auto">
                  <div classname="row">

                    <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Web Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                    </div>

                    <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
  <img src={web2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Software Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
  <img src={web3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Digital Marketing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div class="card" >
  <img src={web4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Android Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

    </>
  );
};

export default Service;