import React from "react";
import styled from "styled-components";

const Button = ({ children, secondary, white }) => {
  return (
    <StyledButton white={white} secondary={secondary}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  /* background-color: ${(p) => p.theme.colors.primary}; */
  background-color: ${(p) =>
    p.secondary
      ? "transparent"
      : p.white
      ? "#fff"
      : (p) => p.theme.colors.primary};
  color: ${(p) =>
    p.secondary
      ? p.theme.colors.darkAlt
      : p.white
      ? p.theme.colors.darkAlt
      : "#fff"};
  padding: ${(p) => (p.secondary ? "0" : "1em 2em")};
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 0.5em;
  font-size: clamp(0.75em, 3vw, 1.725em);
  width: fit-content;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: ${(p) => (p.secondary ? "underline" : "")};
  text-decoration-color: ${(p) => p.theme.colors.primary};
  text-decoration-thickness: 0.25em;
`;

export default Button;
