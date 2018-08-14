import * as React from 'react';

import { storiesOf } from '@storybook/react';
import VariableTree from '../src';

storiesOf('Welcome', module).add('to Storybook', () => <VariableTree hasChild />);
