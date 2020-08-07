import React, { Component } from "react";
import Button from "../Button/Button";
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
      ready: false,
    };
    this.id = "5f2c4dc6dd12ce0004e869b4";
  }

  componentDidMount() {
    fetch(`${this.props.url}/order/id/${this.props.id}`)
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
          ready: true,
        });
        if (this.state.status === "Ready") {
          this.setState({ statusColor: "#ECE2BE" });
        } else if (this.state.status === "Delivered") {
          this.setState({ statusColor: "#bdd49a" });
        } else if (this.state.status === "Confirmed") {
          this.setState({ statusColor: "#91bfb6" });
        } else if (this.state.status === "Unconfirmed") {
          this.setState({ statusColor: "#ba6d6b" });
        } else {
        }
      });
  }

  displayItems = () => {
    let orderItems = this.state.items.map((value, index) => {
      let singleItem = (
        <div className="order-box" key={index}>
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
  };

  updateStatus = () => {
    console.log(this.state.status);
    let newStatus = "";
    if (this.state.status === "Unconfirmed") {
      newStatus = "Confirmed";
    } else if (this.state.status === "Confirmed") {
      newStatus = "Ready";
    } else if (this.state.status === "Ready") {
      newStatus = "Delivered";
    }
    this.setState(
      {
        status: newStatus,
      },
      () => {
        this.sendNewStatus();
      }
    );
  };

  sendNewStatus = () => {
    console.log(this.state);

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    };
    fetch(`${this.props.url}/order/id/${this.id}`, options)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        console.log("Status Changed!");
      });
  };

  setStatusButton = () => {
    if (this.state.status === "Ready") {
      return (
        <div onClick={this.updateStatus}>
          <Button type="delivered" label="Mark as Delivered" />
        </div>
      );
    } else if (this.state.status === "Unconfirmed") {
      return (
        <div onClick={this.updateStatus}>
          <Button type="confirm" label="Mark as Confirmed" />
        </div>
      );
    } else if (this.state.status === "Confirmed") {
      return (
        <div onClick={this.updateStatus}>
          <Button type="ready" label="Mark as Ready" />
        </div>
      );
    } else if (this.state.status === "Delivered") {
      return (
        <div>
          <Button type="delivered" label="Delivery Complete" />
        </div>
      );
    } else {
    }
  };

  render() {
    if (this.state.ready === true) {
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
          <div className="status-button">{this.setStatusButton()}</div>
          <div className="order-detail-cost">
            <p>
              <strong>Sub-Total:</strong> ${this.state.subTotal}
            </p>
            <p>
              <strong>Tax:</strong> ${this.state.tax}
            </p>
            <p>
              <strong>Total:</strong> ${this.state.total}
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default OrderDetail;
