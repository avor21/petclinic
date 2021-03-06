import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  navElementStyles,
  boxShadowMixin,
  borderMixin
} from '../../assets/theme/mixins';

const SLink = styled(Link)`
  font-family: inherit;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.greyLight};
  letter-spacing: 2px;
  text-decoration: none;

  ${navElementStyles};

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryLighter};
    transition: all 300ms ease-in-out;
  }
`;

const SWhiteLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    ${borderMixin(({ theme }) => theme.colors.white)};
    ${boxShadowMixin};
    transition: all 300ms ease-in-out;
  }
`;

export { SLink, SWhiteLink };
