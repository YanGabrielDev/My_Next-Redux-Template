import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    Text: 'opa' ,
  },
} 

export const Template = (args: Button) => <Button {...args}/>




