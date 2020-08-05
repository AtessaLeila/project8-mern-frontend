import React from 'react'
import Button from '../Button/Button'

function CatalogueDetail() {
    return (
        <div className="item-detail">
            <div className="item-detail-image"><h3 style={{color: "white"}}>Placeholder</h3></div>
            <div className="item-detail-row-one">
                <h1>Item Name</h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            </div>
            <div className="item-detail-row-two">
                <div className="row-two-unit-price">
                    <h2>Unit: XXX</h2>
                    <h2>Price: XXX</h2>
                </div>
                <div className="row-two-inventory">
                    <h2>In Stock: XXXX</h2>
                </div>
            </div>
            <div className="item-detail-buttons">
                <Button type="delete" label="Delete" />
                <Button type="edit" label="Edit" />
            </div>
        </div>
    )
}

export default CatalogueDetail
