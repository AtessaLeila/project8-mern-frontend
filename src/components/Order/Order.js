import React from 'react'
import OrderHeader from './OrderHeader'
import OrderDetail from './OrderDetail'
import ItemForm from '../Catalogue/ItemForm'

function Order() {
    return (
        <div>
            <OrderHeader />
            <div className="item-form-body">
                <ItemForm />
            </div>
        </div>
    )
}

export default Order


