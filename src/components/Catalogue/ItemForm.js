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


    onChange = () =>{


    }

    onSubmit = () =>{


    }

    render() {
        return (
            <form className="item-form">
                <div className="item-form-image">
                    <h3 style={{color: "white"}}>Placeholder</h3>
                    <input className="item-form-add-image" type="text" placeholder="Image Url" />
                </div>
                <div className="item-form-row-one">
                    <h2>Enter the details for the new item.</h2>
                    <input className="item-form-name item-form-input" type="text" placeholder="Item Name" />
                    <textarea className="item-form-detail item-form-input" placeholder="Item Description" />
                </div>
                <div className="item-form-row-two">
                    <div className="item-form-row-two-unit-price">
                        <input className="item-form-unit" type="text" placeholder="Unit Size" />
                        <input className="item-form-unit" type="text" placeholder="Unit Price" />
                    </div>
                    <div className="item-form-row-two-inventory">
                    <input className="item-form-inventory" type="text" placeholder="Inventory Count" />
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
