import React from "react";


function OrderGrid() {
  return (
    <div>
      <div className="order-grid">
        <h2>Items Ordered</h2>
        <div className="order-grid-item">
          <h3>Item</h3>
          <ol>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ol>
          <div className="order-grid-quantity">
            <h3>Quantity</h3>
            <ol>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ol>
          </div>
          <div className="order-grid-price">
            <h3>Price</h3>
            <ol>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ol>
          </div>
          <div className="order-grid-total">
            <h3>Total</h3>
            <ol>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderGrid;
