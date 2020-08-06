import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Button from '../Button/Button'
import Searchfield from '../Searchfield/Searchfield'

class OrderSidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            statusOptions: ["Unconfirmed","Confirmed","Ready","Delivered"]
            ,customerOptions: []
            ,ready: false
            ,orderNumber: null
            ,status: null
            ,customer: null
            ,dueDate: null

        }
    }

    componentDidMount = () => {
        fetch(`${this.props.url}/order/customers`)
            .then(res => res.json())
            .then( res => {
                this.setState({
                    customerOptions: res
                    ,ready: true
                })
            })
    }


    typeChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    dropdownChange = (e) =>{
        if (this.state.statusOptions.includes(e)){
            this.setState({       
                status: e
            })
        }
        else {
            this.setState({
                customer: e
            })
        }
    }

    onSubmit = () => {

    }

    render(){
        const field = {
            border: "3px solid #F1F3F4",
            fontSize: "15px",
            height: "30px",
            width: "170px",
        }

        const select = {
            border: "3px solid #F1F3F4",
            borderRadius: "6px",
            fontSize: "15px",
            height: "35px",
            width: "200px",
            display: "block",
            color: "#757575"
        }

        return (
            <div className="order-sidebar-container">
                <h2>Filters</h2>
                <form>
                    <div className="order-sidebar-order-no">
                        <h3>Order #</h3>
                        <input type="number" name="orderNumber" style={field} onChange={this.typeChange} />
                        
                    </div>
                    <div className="order-sidebar-status">
                        <h3>Status</h3>
                    <Dropdown style={select} options={this.state.statusOptions} onChange={this.dropdownChange} />
                    </div>
                    <div className="order-sidebar-customers">
                        <h3>Customer</h3>
                    {this.state.ready === true ? <Dropdown style={select} options={this.state.customerOptions} onChange={this.dropdownChange} /> : null }
                    </div>
                    <div className="order-sidebar-order-no" >
                        <h3>Due Date</h3>
                        <input type="text" name="dueDate" style={field} onChange={this.typeChange}/>
                    </div>
                    <Button type="submitbtn" label="Submit" />
                </form>
            </div>
        )
    }
}

export default OrderSidebar
