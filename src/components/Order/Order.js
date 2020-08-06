import React from "react";
import OrderHeader from "./OrderHeader";
// import ItemForm from '../Catalogue/ItemForm'
import OrderGrid from "./OrderGrid";
import OrderGridCard from './OrderGridCard'

function Order(props) {
  return (
    <div>
      <OrderHeader />
      {/* <OrderGrid /> */}
      {/* <OrderDetail url={props.url} /> */}
      {/* <Route path={'/order'} */}
      {/* <div className="item-form-body"> */}
      {/* <ItemForm /> */}
      {/* </div> */}
      <OrderGridCard />
    </div>
  );
}

export default Order;
