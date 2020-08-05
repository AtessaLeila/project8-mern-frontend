import React from 'react';



function Dropdown(props) {
    const [items] = React.useState([
        {
            label: "Select",
            value: "Select"
        },
        { label: "", value: "" },
        { label: "", value: "" },
        { label: "", value: "" }
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