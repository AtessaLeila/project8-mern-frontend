import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';


import Searchfield from './Searchfield';


const field = {
    border: "3px solid #F1F3F4",
    fontSize: "15px",
    height: "30px",
    width: "170px",
}

storiesOf('Searchfield', module)
    .add('Submit', () =>
        <Searchfield

            name="Submitbtn"
            type="submit"
            placeholder="Search..."
            style={field}
            small

        />

    )
