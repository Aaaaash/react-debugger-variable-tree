import * as React from 'react';

import { storiesOf } from '@storybook/react';
import VariableTree from '../src';

import './style.css';

const fake = [
  {
    "name": "ADDRESS_SIZE",
    "value": "0x8",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_BOOLEAN_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_BOOLEAN_INDEX_SCALE",
    "value": "0x1",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_BYTE_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_BYTE_INDEX_SCALE",
    "value": "0x1",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_CHAR_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_CHAR_INDEX_SCALE",
    "value": "0x2",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_DOUBLE_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_DOUBLE_INDEX_SCALE",
    "value": "0x8",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_FLOAT_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_FLOAT_INDEX_SCALE",
    "value": "0x4",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_INT_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_INT_INDEX_SCALE",
    "value": "0x4",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_LONG_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_LONG_INDEX_SCALE",
    "value": "0x8",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_OBJECT_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_OBJECT_INDEX_SCALE",
    "value": "0x4",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_SHORT_BASE_OFFSET",
    "value": "0x10",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "ARRAY_SHORT_INDEX_SCALE",
    "value": "0x2",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "INVALID_FIELD_OFFSET",
    "value": "0xffffffffffffffff",
    "type": "int",
    "variablesReference": 0,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  },
  {
    "name": "theUnsafe",
    "value": "sun.misc.Unsafe (id\u003d0x19)",
    "type": "sun.misc.Unsafe",
    "variablesReference": 23,
    "indexedVariables": 0,
    "parentReference": 21,
    "childVariables": [],
    "scopeName": "Local"
  }
];

console.log(fake);

class App extends React.PureComponent {
  state = {
    localVariables: {
      Local: [],
    },
  };

  handleFetch = (scopeName: string, reference: number) => {
    console.log(scopeName, reference);
    const { localVariables } = this.state;
    setTimeout(() => {
      this.setState({
        localVariables: {
          ...localVariables,
          [scopeName]: [...localVariables[scopeName], ...fake],
        },
      });
    }, 100);
  }

  render() {
    const { localVariables } = this.state;

    return (
      <div>
        {Object.keys(localVariables).map(key => (
          <VariableTree
            hasChild
            root
            key={key}
            onExpand={this.handleFetch}
            reference={21}
            childrenVariables={localVariables[key]}
            scopeName={key}
          />))}
      </div>
    );
  }
}

storiesOf('Welcome', module).add('to Storybook', () => <App />);
