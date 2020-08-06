import React from "react";
import OrderHeader from "./OrderHeader";
import OrderDetail from "./OrderDetail";
// import ItemForm from '../Catalogue/ItemForm'
import OrderGrid from "./OrderGrid";
import OrderSidebar from './OrderSidebar'

function Order(props) {
  return (
    <div className="order-main">
        <div className="order-main">
        <OrderHeader component={OrderHeader} /> 
        <div className="order-body">
            <div className="order-sidebar" style={{ marginLeft: "10px", marginRight: "20px" }}>
                <OrderSidebar url={props.url} />
            </div>
            <OrderGrid />
            
        </div>
        </div>
    </div>
  );
}

export default Order;
