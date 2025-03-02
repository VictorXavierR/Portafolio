import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {Inicio} from './Inicio';

const meta: Meta<typeof Inicio> = {
  component: Inicio,
};

export default meta;

type Story = StoryObj<typeof Inicio>;

export const Basic: Story = {args: {}};
