import React from 'react';



function Dropdown(props) {
    const [items] = React.useState([
        {
            label: "Select",
            value: "Select"
        },
        { label: "One", value: "One" },
        { label: "Two", value: "Two" },
        { label: "Three", value: "Three" }
    ]);
    return (
        <select style={props.style}>
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;