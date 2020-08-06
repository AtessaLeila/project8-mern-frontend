import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'

class OrderSidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: ["Unconfirmed","Confirmed","Ready","Delivered"]
            ,customers: []
        }
    }

    componentDidMount = () => {
        fetch(`${this.props.url}/order/customers`)
            .then(res => res.json())
            .then( res => {
                console.log(res)
            })
    }

    render(){
        return (
            <div className="order-sidebar-container">
                <h2>Filters</h2>
                <form>
                    <div className="order-sidebar-order-no">
                        <h3>Order #</h3>
                        <input type="text" />
                    </div>
                    <div className="order-sidebar-status">
                        {/* <Dropdown style={"select"} /> */}
                    </div>

                </form>
            </div>
        )
    }
}

export default OrderSidebar
