import React from "react";
import OrderHeader from "./OrderHeader";
import OrderDetail from "./OrderDetail";
// import ItemForm from '../Catalogue/ItemForm'
import OrderGrid from "./OrderGrid";

function Order(props) {
  return (
    <div>
      <OrderHeader />
      {/* <OrderGrid /> */}
      <OrderDetail url={props.url} />
      {/* <Route path={'/order'} */}
      {/* <div className="item-form-body"> */}
      {/* <ItemForm /> */}
      {/* </div> */}
    </div>
  );
}

export default Order;
