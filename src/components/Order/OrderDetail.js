import React, { Component } from "react";
import Button from "../Button/Button.stories";
import "./OrderDetail.css";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: 0,
      customerName: "",
      customerAddress: "",
      customerPhone: "",
      dueDate: "",
      subTotal: 0,
      tax: 0,
      total: 0,
      status: "",
      items: [],
      statusColor: "",
    };
    this.id = "5f2b2c159f5fa00004aba113";
  }
  componentDidMount() {
    fetch(`${this.props.url}/order/id/${this.id}`)
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.setState({
          orderNumber: res.orderNumber,
          customerName: res.customer.name,
          customerAddress: res.customer.address,
          customerPhone: res.customer.phone,
          dueDate: res.dueDate,
          subTotal: res.subTotal,
          tax: res.tax,
          total: res.total,
          status: res.status,
          items: res.orderInfo,
        });
        if (this.state.status === "Ready") {
          this.setState({ statusColor: "#ECE2BE" });
        }
      });
  }

  displayItems() {
    let orderItems = this.state.items.map((value, index) => {
      let singleItem = (
        <div className="order-box">
          <div className="order-box-item">
            <p className="order-val">{value.itemName}</p>
          </div>
          <div className="order-box-item">
            <p className="order-val">{value.quantity}</p>
          </div>
          <div className="order-box-item">
            <p className="order-val">{value.unitPrice}</p>
          </div>
        </div>
      );
      return singleItem;
    });
    return orderItems;
  }

  setStatusButton() {}

  render() {
    return (
      <div className="order-detail">
        <div className="order-detail-status">
          <h2>
            Status:{" "}
            <span style={{ backgroundColor: `${this.state.statusColor}` }}>
              {this.state.status}
            </span>
          </h2>
        </div>
        <div className="order-detail-info">
          <p>
            <strong>Order Number:</strong> {this.state.orderNumber}
          </p>
          <p>
            <strong>Name:</strong> {this.state.customerName}
          </p>
          <p>
            <strong>Due Date:</strong> {this.state.dueDate}
          </p>
          <p>
            <strong> Address:</strong> {this.state.customerAddress}
          </p>
          <p>
            <strong>Phone Number:</strong> {this.state.customerPhone}
          </p>
        </div>
        <div className="items-ordered-box">
          <div>
            <h2>Items Ordered</h2>
          </div>
          <div className="order-box-header">
            <h4>Name</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
          </div>
          <div className="displayed-items">{this.displayItems()}</div>
        </div>
        <div></div>
        <div className="order-detail-cost">
          <h3>Sub-Total: {this.state.subTotal}</h3>
          <h3>Tax: {this.state.tax}</h3>
          <h3>Total: {this.state.total}</h3>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
