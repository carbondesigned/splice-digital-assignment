import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h2 className="logo">TERADYNE</h2>
      <ul className="links">
        <li className="link">Products</li>
        <li className="link">Industries</li>
        <li className="link">Applications</li>
        <li className="link">Services</li>
        <li className="link">Support</li>
        <li className="link">Company</li>
      </ul>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 5em;
  flex-direction: column;
  padding: 10em;
  animation: fade 500ms;
  color: #fff;

  .logo {
    color: #fff;
    font-size: ${(p) => p.theme.fonts.title};
    text-align: center;
  }

  .links {
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: ${(p) => p.theme.fonts.paragraph};
    text-align: center;
    gap: 2em;
    margin: 0;
    padding: 0;

    .link {
      list-style: none;
      color: #fff;
    }
  }

  @keyframes fade {
    from {
      transform: translateY(-200em);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Sidebar;
