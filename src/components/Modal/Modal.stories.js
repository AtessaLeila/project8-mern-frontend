import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './Modal';

storiesOf('Modal', module)
    .add('Confirm', () => <Modal
        type="confirm"
        label="Confirm"
        content="Your order is confirmed!"
    />
    )
    .add('Delivered', () => <Modal
        type="delivered"
        label="Delivered"
        content="Your order has been delivered!"
    />
    )