import React, { Component } from 'react';
import axios from 'axios';
import CardOrder from '../CardOrder/CardOrder';



class OrderGridCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            ready: false
        };
    }

    componentDidMount() {
        axios.get('https://group-project-mern-backend.herokuapp.com/order')
            .then(response => {
                this.setState({
                    orders: response.data,
                    ready: true
                })
                console.log(this.state.orders)

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    displayOrders() {
        let ordersArr = this.state.orders
        ordersArr = ordersArr.map((val, idx) => {

            let newOrder = <CardOrder style={{ display: "flex", flexWrap: "wrap" }} orderNumber={val.orderNumber} customer={val.customer.name} occasion={val.occasion} dueDate={val.dueDate} key={idx} />;
            return (
                newOrder
            )
        })
        console.log(ordersArr)
        return ordersArr
    }

    render() {
        return (
            <div className="order-grid-card">
                {this.state.ready === true ? this.displayOrders() : null}
            </div>
        )
    }
}

export default OrderGridCard;