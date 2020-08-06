import React, { Component } from "react";
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
      });
  }

  displayItems() {
    let orderItems = this.state.items.map((value, index) => {
      let singleItem = (
        <ul classname="order-item-cost-ul">
          <li>{value.itemName}</li>
          <li>{value.quantity}</li>
          <li>{value.unitPrice}</li>
        </ul>
      );
      return singleItem;
    });
    return orderItems;
  }

  render() {
    return (
      <div className="order-detail">
        <div className="order-detail-status">
          <h2>Status: "{this.state.status}"</h2>
        </div>
        <div className="order-detail-info">
          <div className=""> </div>
          <p>Order # {this.state.orderNumber}</p>
          <p>Name: {this.state.customerName}</p>
          <p>Due Date: {this.state.dueDate}</p>
          <p>Address: {this.state.customerAddress}</p>
          <p>Phone #: {this.state.customerPhone}</p>
        </div>
        <div className="items-ordered-box">
          <div>
            <h3>Items Ordered</h3>
          </div>
          <div classname="displayed-items">{this.displayItems()}</div>
        </div>
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
 */