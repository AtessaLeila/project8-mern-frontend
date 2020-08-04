import React from 'react';
import './Searchfield.css';

const Searchfield = (props) => {

    let classList = [];

    let types = ['submit']

    if (types.includes(props.type)) {
        classList.push(`button-${props.type}`)
    }

    return (
        <div>
            <div className="form">
                <form>
                    <input style={props.style}
                        placeholder={props.placeholder}
                        name={props.name}
                    /*onChange={handleChange}*/

                    />
                    <div className="btn">
                        <input type="submit" className={classList.join(" ")} /*onClick={handleSubmit}*/ />
                    </div>
                </form>
            </div>


        </div>
    )


}

export default Searchfield;