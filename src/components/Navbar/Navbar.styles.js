import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  position: relative;
  z-index: 999;

  ul {
    margin: 0;
  }

  .logo {
    font-weight: 900;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.secondary};
    font-size: clamp(1.55em, 3vw, 2.125em);
  }

  .links {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .hamburger {
      display: none;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      color: ${(p) => p.theme.colors.secondary};

      li {
        list-style: none;
        font-size: ${(p) => p.theme.fonts.links};
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .links {
      display: flex;
      padding: 0 2em;
      justify-content: flex-end;
      align-items: center;
      gap: 2em;
    }
  }

  @media only screen and (min-width: 1400px) {
    .logo {
      padding-left: 2em;
    }
    .links {
      justify-content: flex-end;
      padding: 0 10em;
      gap: 5em;
    }
  }
`;

export const StyledHamburger = styled.div`
  width: 2.25em;
  height: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 10;

  .line {
    width: 100%;
    height: 0.25em;
    background-color: ${(p) =>
      p.openSidebar ? "#fff" : p.theme.colors.secondary};
    border-radius: 1em;
    transition: 300ms;
  }

  .line1 {
    transform: ${(p) =>
      p.openSidebar ? "rotate(45deg) translate(0px, 9px)" : "0"};
  }

  .line2 {
    opacity: ${(p) => (p.openSidebar ? "0" : "1")};
  }

  .line3 {
    transform: ${(p) =>
      p.openSidebar ? "rotate(-45deg) translate(0px, -9px)" : "0"};
  }
`;
