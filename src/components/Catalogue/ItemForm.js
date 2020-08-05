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
                    <input type="text">
                        
                    </input>
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
                    <Button type="delete" label="Cancel" />
                    <Button type="edit" label="Create" />
                </div>
            </form>
        )
    }
}

export default ItemForm
