import React from 'react';
import { storiesOf } from '@storybook/react';

import CardCatalogue from './CardCatalogue';


storiesOf('CardCatalogue', module)
    .add('Primary', () => <CardCatalogue />)