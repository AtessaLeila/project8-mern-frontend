import React from 'react';



function Dropdown(props) {
    const items = props.options
      
    return (
        <select style={props.style} onChange={e => {props.onChange(e.target.value)}}>
            <option value="null" >Select...</option>
            {items.map((item, idx) => (
                <option
                    key={idx}
                    value={item}
                >
                    {item}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;