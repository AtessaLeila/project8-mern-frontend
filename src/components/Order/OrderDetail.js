import React, { Component } from "react";

class OrderDetail extends Component {
  render() {
    return (
      <div className="order-detail">
        <div className="order-detail-status">
          <h1>Status: {props.status}</h1>
        </div>
        <div className="order-detail-info">
          <h2>Order #: {props.id}</h2>
          <h2>Customer Name: {props.customer.name}</h2>
          <h2>Due Date: {props.dueDate}</h2>
          <h2>Address: {props.customer.address}</h2>
          <h2>Phone #: {props.customer.phone}</h2>
        </div>
        <OrderGrid />
        <div className="order-detail-cost">
          <h2>Sub-Tot: </h2>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
