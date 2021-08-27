import styled from "styled-components";

export const StyledUtilBar = styled.nav`
  width: 100%;
  background: ${(p) => p.theme.colors.tertGradient};
  padding: 0.5em;
  align-items: center;
  display: flex;

  ul {
    margin-bottom: 0 !important;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.5em;
    width: 100%;

    .link {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: clamp(0.55em, 3vw, 0.85em);
      cursor: pointer;

      &:last-child {
        margin-left: auto;
      }

      .icon {
        max-width: 50%;
        margin-right: 0.5em;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .links {
      justify-content: flex-end;
      padding-right: 2.5em;

      .link {
        &:last-child {
          margin: 0;
        }
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .links {
      padding: 0 10.3em;
    }
  }
`;
