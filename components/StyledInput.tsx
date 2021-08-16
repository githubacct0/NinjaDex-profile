import styled from 'styled-components';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  span.ant-input-affix-wrapper-lg {
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 60px;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(91.38deg, #1b21ef 30.58%, #ffb800 108.54%);
    margin-bottom: 30px;
  }

  input.ant-input.ant-input-lg {
    background-color: ${(props) => props.theme.colors.black};
  }

  span.ant-input-prefix {
    color: ${(props) => props.theme.colors.grey};
  }
`;

const StyledInput = styled(Input)``;

export default function AppInput() {
  return (
    <Wrapper>
      <StyledInput size="large" placeholder="Search" prefix={<SearchOutlined color="#898989" />} />
    </Wrapper>
  );
}
