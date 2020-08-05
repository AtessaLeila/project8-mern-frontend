import React, { Component } from 'react'
import Button from '../Button/Button'

export class CatalogDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: ""
            ,description: ""
            ,unit: 0
            ,price: 0
            ,inventory: 0
            ,image: ""
        }
        this.id = "5f2af0f77854d527596e3cad"
    }

    componentDidMount= () =>{
        fetch(`${this.props.url}/item/id/${this.id}`)
            .then(res => res.json())
            .then(res =>{
                this.setState({
                    name: res.name
                    ,description: res.description
                    ,unit: res.unit
                    ,price: res.unitPrice
                    ,inventory: res.inventoryCount
                    ,image: res.image
                })
            })
    }
    render() {
        return (
            <div className="item-detail">
            <div className="item-detail-image" /* style={{backgroundImage: `url(${this.state.image}`}} */><h3 style={{color: "white"}}>Placeholder</h3></div>
            <div className="item-detail-row-one">
                <h1>{this.state.name}</h1>
                <h3>{this.state.description}</h3>
            </div>
            <div className="item-detail-row-two">
                <div className="row-two-unit-price">
                    <h2>Unit: {this.state.unit}</h2>
                    <h2>Price: {this.state.price}</h2>
                </div>
                <div className="row-two-inventory">
                    <h2>In Stock: {this.state.inventory}</h2>
                </div>
            </div>
            <div className="item-detail-buttons">
                <Button type="delete" label="Delete" />
                <Button type="edit" label="Edit" />
            </div>
        </div>
        )
    }
}

export default CatalogDetail
