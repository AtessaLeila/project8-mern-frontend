import React from 'react';
import './Card.css';
import Button from '../Button/Button'
import Counter from '../Counter/Counter'

const Card = (props) => {
    let classList = [];

    let types = ['example']

    if (types.includes(props.type)) {
        classList.push(`card-${props.type}`)
    }

    return (
        <div className={classList.join(" ")}>
            <div className="container">
                <h3>{props.orderNum} Order Number</h3>
                <h4>{props.name}Name of Bakery Item</h4>
                <p>{props.description}Description of Bakery Item</p>
                <p>Inventory:  <Counter /></p>
                <div className="btn"><Button type="confirm" label="Confirm" /></div>
            </div>
        </div>
    )
}

export default Card; 