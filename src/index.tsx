import * as React from 'react';
import styled from 'styled-components';

const arrSvg = `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='%23E8E8E8' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/></svg>`;
const arrSvgExpand = `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='%23E8E8E8' d='M11 10H5.344L11 4.414V10z'/></svg>`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
`;

const Arrow = styled<{ expand: boolean }, 'span'>('span')`
  display: block;
  width: 16px;
  height: 16px;
  background: url("${({ expand }) => expand ? arrSvgExpand : arrSvg}") 50% no-repeat;
`;

const Value = styled.span`
  margin-left: 6px;
  color: #b5cea8;
`;

const Name = styled.span`
  color: #c586c0;
`;

interface IProps {
  root?: boolean;
  childrenTree?: Array<VariableTree>;
  name?: string;
  onExpand?: () => void;
  hasChild: boolean;
}

class VariableTree extends React.PureComponent<IProps> {
  state = {
    expand: false,
  }

  render() {
    const { hasChild } = this.props;
    const { expand } = this.state;
    return (
      <Container onClick={() => this.setState({ expand: !expand })}>
        {hasChild && <Arrow expand={expand} />}
        <Name>root:</Name>
        <Value>java.util.concurrent.FutureTask (id=0x13)</Value>
      </Container>
    );
  }
}

export default VariableTree;
