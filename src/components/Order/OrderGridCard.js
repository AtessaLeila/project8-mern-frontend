import React, { Component } from 'react';
import axios from 'axios';
import CardOrder from '../CardOrder/CardOrder';
import {Link} from 'react-router-dom'



class OrderGridCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            ready: false
        };
    }

    componentDidMount() {
        if (this.props.orderList){
            this.setState({
                orders: this.props.orderList,
                ready: true
            })
        }
        else {
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
    }

    displayOrders() {
        let ordersArr = this.state.orders
        ordersArr = ordersArr.map((val, idx) => {

            let newOrder = 
            
            <CardOrder id={val._id} orderNumber={val.orderNumber} customer={val.customer.name} occasion={val.occasion} dueDate={val.dueDate} key={idx} setId={this.setId} />;
            return (
                newOrder
            )
        })
        console.log(ordersArr)
        return ordersArr
    }

    setId = (id) =>{
        this.props.setId(id)
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

