import * as React from 'react';

import { storiesOf } from '@storybook/react';
import VariableTree from '../src';

import "./style.css";

storiesOf('Welcome', module).add('to Storybook', () => <VariableTree
  hasChild
  onExpand={(reference) => {
    console.log(reference);
  }}
  variablesReference={0}
/>);
