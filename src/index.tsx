import * as React from 'react';
import styled from 'styled-components';

const arrSvg = `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='%23E8E8E8' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/></svg>`;
const arrSvgExpand = `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='%23E8E8E8' d='M11 10H5.344L11 4.414V10z'/></svg>`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 12px;
  flex-direction: column;
`;

const Arrow = styled<{ expand: boolean }, 'span'>('span')`
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: -12px;
  background: url("${({ expand }) => expand ? arrSvgExpand : arrSvg}") 50% no-repeat;
`;

const Value = styled.span`
  margin-left: 6px;
  color: #b5cea8;
  white-space: pre;
`;

const Header = styled.p`
  margin: 0px;
  display: flex;
  align-items: center;
  position: relative;
  height: 22px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

const Name = styled<{ root: boolean }, 'span'>('span')`
  color: ${({ root }) => root ? '#ccc' : '#c586c0'};
  font-weight: ${({ root }) => root ? 700 : 400};
  white-space: pre;
`;

const ChildVariables = styled.div`
  padding-left: 12px;
`;

interface Variable {
  variablesReference: number;
  childVariables: Variable[];
  parentVariables: number;
  name: string;
  value: string;
  type: string;
  indexedVariables: number;
  scopeName: string;
}

interface IonExpand {
  (scopeName: string, variablesReference: number): void;
}

interface IProps {
  root: boolean;
  childrenVariables: Variable[];
  name?: string;
  value?: string;
  onExpand: IonExpand;
  hasChild: boolean;
  reference: number;
  scopeName: string;
}

interface IState {
  expand: boolean;
}

class VariableTree extends React.PureComponent<IProps, IState> {
  state = {
    expand: this.props.root,
  };

  handleClick = (variablesReference: number) => {
    const { hasChild, onExpand, scopeName, childrenVariables } = this.props;
    const { expand } = this.state;
    if (hasChild) {
      this.setState({
        expand: !expand,
      });

      if (childrenVariables && childrenVariables.length > 0) {
        onExpand(scopeName, variablesReference);
      }
    }
  }

  renderChildVariable = () => {
    const { childrenVariables, scopeName, onExpand } = this.props;
    return (
      <ChildVariables>
        {childrenVariables.map((variable: Variable) => (
          <VariableTree
            scopeName={scopeName}
            root={false}
            key={`${scopeName}-${variable.name}-${variable.variablesReference}`}
            reference={variable.variablesReference}
            childrenVariables={[]}
            hasChild={variable.variablesReference !== 0}
            onExpand={onExpand}
            name={variable.name}
            value={variable.value}
          />
        ))}
      </ChildVariables>
    );
  }

  render() {
    const { hasChild, reference, root, childrenVariables, scopeName, name, value } = this.props;
    const { expand } = this.state;
    return (
      <Container onClick={() => this.handleClick(reference)}>
        <Header>
          {hasChild && <Arrow expand={expand} />}
          {<Name root={root} title={root ? scopeName : name}>{root ? scopeName : `${name}:`}</Name>}
          {!root && <Value title={value}>{value}</Value>}
        </Header>
        {childrenVariables && childrenVariables.length > 0 && expand && this.renderChildVariable()}
      </Container>
    );
  }
}

export default VariableTree;
