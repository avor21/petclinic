import styled from 'styled-components';
import {
  borderMixin,
  boxShadowMixin,
  navElementStyles,
  sizeMixin
} from '../../assets/theme/mixins';

const SButton = styled.button`
  ${navElementStyles};
  ${boxShadowMixin};
  ${borderMixin(({ theme }) => theme.colors.secondaryMoreDarkness)};

  font-family: inherit;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.primary : theme.colors.secondary};
  letter-spacing: 0;

  display: inline-block;
  padding: 0 3px;
  width: ${({ width }) => (width ? width : '100%')};
  height: 40px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transition: all 300ms ease-in-out;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.greyDarker};
    background-color: rgba(180, 180, 180, 0.5);
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: rgba(180, 180, 180, 0.5);
      color: ${({ theme }) => theme.colors.primary};
      cursor: not-allowed;
    }
  }
`;

const SButtonWithIcon = styled(SButton)`
  display: flex;
  align-items: center;

  svg {
    ${sizeMixin('30px', '30px')};
    fill: ${({ theme }) => theme.colors.greyLight};
    margin-right: 5px;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.secondary};

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const SMiniButtonWithIcon = styled(SButtonWithIcon)`
  margin-right: 5px;

  svg {
    ${sizeMixin('20px', '20px')};
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export { SButton, SButtonWithIcon, SMiniButtonWithIcon };
