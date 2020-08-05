import React, { Component } from 'react'
import Button from "../Button/Button"


export class ItemForm extends Component {
    render() {
        return (
            <form className="item-form">
                <div className="item-form-image">
                    <h3 style={{color: "white"}}>Placeholder</h3>
                    <div className="item-form-add-image-button">
                        <Button type="create" label="Add an image" />
                    </div>
                </div>
                <div className="item-form-row-one">
                    <h2>Enter the details for the new item.</h2>
                    <input className="item-form-name item-form-input" type="text" placeholder="Item Name" />
                    <input className="item-form-detail item-form-input" type="text" placeholder="Item Description" />
                </div>
                <div className="item-form-row-two">
                    <div className="item-form-row-two-unit-price">
                        <h2>Unit: XXX</h2>
                        <h2>Price: XXX</h2>
                    </div>
                    <div className="item-form-row-two-inventory">
                        <h2>In Stock: XXXX</h2>
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
