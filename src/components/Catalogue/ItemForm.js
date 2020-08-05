import React, { Component } from 'react'
import Button from "../Button/Button"




export class ItemForm extends Component {
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
    }


    onChange = (e) =>{
        e.preventDefault()

        this.setState({
            [e.target.name]: e.target.value

        })

    }

    onSubmit = () =>{


    }

    cancelForm = () =>{
        
    }

    render() {
        return (
            <form className="item-form">
                <div className="item-form-image">
                    <h3 style={{color: "white"}}>Placeholder</h3>
                    <input className="item-form-add-image" type="text" name="image" placeholder="Image Url" onChange={this.onChange} />
                </div>
                <div className="item-form-row-one">
                    <h2>Enter the details for the new item.</h2>
                    <input className="item-form-name item-form-input" type="text" name="name" placeholder="Item Name" onChange={this.onChange} />
                    <textarea className="item-form-detail item-form-input" name="description" placeholder="Item Description" onChange={this.onChange} />
                </div>
                <div className="item-form-row-two">
                    <div className="item-form-row-two-unit-price">
                        <input className="item-form-unit" type="number" name="unit" placeholder="Unit Size" onChange={this.onChange} />
                        <input className="item-form-unit" type="number" name="price" placeholder="Unit Price" onChange={this.onChange} />
                    </div>
                    <div className="item-form-row-two-inventory">
                    <input className="item-form-inventory" type="number" name="inventory" placeholder="Inventory Ct." onChange={this.onChange} />
                    </div>
                </div>
                <div className="item-form-buttons">
                    <Button type="delete" label="Cancel" />
                    <Button type="edit" label="Create" />
                </div>
            </form>
        )
    }
}

export default ItemForm
