import { css } from 'styled-components';

const boxShadowMixin = css`
  box-shadow: 4px 4px 7px ${({ theme }) => theme.colors.shadowColor};
`;

const borderMixin = color => {
  return css`
    border: 2px solid ${color};
    border-radius: 7px;
  `;
};

const navElementStyles = css`
  cursor: pointer;
  outline: none;
  transition: 0.25s ease-in-out; //ToDo
`;

export { boxShadowMixin, borderMixin, navElementStyles };