import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from './Dropdown';

const select = {
    border: "3px solid #F1F3F4",
    borderRadius: "6px",
    fontSize: "15px",
    height: "35px",
    width: "200px",
    display: "block",
    color: "#757575"
}


storiesOf('Dropdown', module)
    .add('Primary', () => <Dropdown style={select} />)
