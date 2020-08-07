import React, {Component} from "react";
import OrderHeader from "./OrderHeader";
// import ItemForm from '../Catalogue/ItemForm'
import OrderGridCard from "./OrderGridCard";
import OrderSidebar from './OrderSidebar'
import OrderDetail from './OrderDetail'
import {Route} from 'react-router-dom'

class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentId: ""
            ,orderList: null
        }
    }

    setId = (value) => {
        this.setState({
            currentId: value
            , ready: true
        })

    }

    setList = list => {
        console.log(list)
        this.setState({
            orderList: list
        })
    }

render(){
  return (
    <div className="order-main">
        <Route path="/orders"
            render={() => {
                return (
        <div className="order-main">
            <OrderHeader component={OrderHeader} /> 
            <div className="order-body">
                <div className="order-sidebar" style={{ marginLeft: "10px", marginRight: "20px" }}>
                    <OrderSidebar url={this.props.url} setList={this.setList} />
                </div>
                <Route path="/orders"
                    render={() => {
                    if (this.state.orderList === null){
                    return <OrderGridCard setId={this.setId}  /> 
                    }
                    else {
                        return <OrderGridCard setId={this.setId} orderList={this.state.orderList} />
                    }
                }}
                    exact />
                    
                
                <Route path={`/orders/id/${this.state.currentId}`}
                    render={() => {
                        if(this.state.ready === true){
                            return(<OrderDetail url={this.props.url} setId={this.setId} id={this.state.currentId} />)
                        }
                        else {return null}
                        }} exact />
                
            </div>
        </div> 
        );}
    } /> </div>
  )}}

export default Order;

