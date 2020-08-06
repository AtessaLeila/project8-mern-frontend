import React from 'react';
import { storiesOf } from '@storybook/react';

import CardOrder from './CardOrder';


storiesOf('CardOrder', module)
    .add('Primary', () => <CardOrder />)