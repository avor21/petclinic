import styled from 'styled-components';
import { sizeMixin } from '../../../theme/mixins';
import { ButtonWithIcon } from '../../common/buttons/button.styled';

const PanelWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryMoreDarkness};
  margin-bottom: 20px;
  padding-bottom: 10px;
`;

const SearchRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    ${sizeMixin('30px', '30px')};
    fill: ${({ theme }) => theme.colors.greyLight};
    margin-right: 15px;
  }
`;

const SearchInput = styled.input`
  ${sizeMixin('100%', '30px')};
  background: none;
  border: none;
  letter-spacing: 1.5px;
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  margin-right: 10px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MiniButton = styled(ButtonWithIcon)`
  margin-right: 5px;

  svg {
    ${sizeMixin('20px', '20px')};
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export { PanelWrapper, SearchRow, SearchInput, MiniButton };
