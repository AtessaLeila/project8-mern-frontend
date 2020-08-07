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

    onSubmit = (e) => { 
        e.preventDefault()
        
        fetch(`${this.props.url}/order`)
            .then(res => res.json())
            .then( res => {
                if (this.state.status !== null){
                    let newArr = res.map((val, idx) => {
                        let newVal
                        if (val.status === this.state.status) {
                            newVal = val
                            return newVal
                        }
                    })
                    return newArr.filter(obj => obj !== undefined)
                } else {return res}
            })
            .then( arr => {
                if (this.state.dueDate !== null){
                    let newArr = arr.map((val, idx) => {
                        let newVal
                        if (val.dueDate === this.state.dueDate) {
                            newVal = val
                            return newVal
                        }
                    })
                    return newArr.filter(obj => obj !== undefined)
                } else {return arr}
            })
            .then( arr => {
                 if (this.state.customer !== null){
                     let newArr = arr.map((val, idx) => {
                         let newVal
                         if (val.customer.name === this.state.customer) {
                             newVal = val
                             return newVal
                         }
                     })
                     return newArr.filter(obj => obj !== undefined)
                 }
                 else {return arr}
             })
             .then( arr => {
                 if (this.state.orderNumber !== null){
                     let newArr = arr.map((val, idx) => {
                         let newVal
                         if (val.orderNumber === this.state.orderNumber) {
                             newVal = val
                             return newVal
                         }
                     })
                     return newArr.filter(obj => obj !== undefined)
                 } else {return arr}
             })
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

        const subBut = {
            backgroundColor: "#9fc3cc",
            color: "#3c3c3c",
            border: "none",
            borderRadius: "2px",
            padding: "10px 20px",
            marginTop: "40px"
        }

        return (
            <div className="order-sidebar-container">
                <h2>Filters</h2>
                <form onSubmit={this.onSubmit}>
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
                    <input type="submit" style={subBut} />
                    {/* <Button type="submitbtn" label="Submit" /> */}
                </form>
            </div>
        )
    }
}

export default OrderSidebar
