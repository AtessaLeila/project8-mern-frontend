import React from 'react'
import Button from '../Button/Button'

function OrderHeader() {
    return (
        <div className="order-header">
            <div className="new-order-button">
            <Button type="create" label="+ New Order" />
            </div>
        </div>
    )
}

export default OrderHeader
