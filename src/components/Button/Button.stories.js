import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Confirm', () => <Button type="confirm" label="Confirm" />)
    .add('Ready', () => <Button type="ready" label="Ready" />)
    .add('Delivered', () => <Button type="delivered" label="Delivered" />)
    .add('Edit', () => <Button type="edit" label="Edit" />)
    .add('Create', () => <Button type="create" label="Create" />)
    .add('Delete', () => <Button type="delete" label="Delete" />)
    .add('New', () => <Button type="new" label="New Item" />)
    .add('Submitbtn', () => <Button type="submitbtn" label="Submit" />)

