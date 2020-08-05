import React, { Component } from 'react'
import Button from "../Button/Button"

export class ItemForm extends Component {
    render() {
        return (
            <div className="item-form">
            <div className="item-form-image"><h3 style={{color: "white"}}>Placeholder</h3></div>
            <div className="item-form-row-one">
                <h1>Item Name</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
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
                <Button type="delete" label="Delete" />
                <Button type="edit" label="Edit" />
            </div>
        </div>
        )
    }
}

export default ItemForm
