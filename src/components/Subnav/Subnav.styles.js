import styled from "styled-components";

export const StyledSubnav = styled.div`
  display: none;
  z-index: 999;

  @media only screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 100%);
    background-color: white;
    width: 100%;
    display: ${(p) => (p.active ? "flex" : "none")};
    justify-content: space-between;
    background-color: #f6f6f6;

    .main {
      display: flex;
      flex-direction: column;
      color: ${(p) => p.theme.colors.secondary};
      background-color: #fff;
      padding: 2em;

      .title {
        font-size: ${(p) => p.theme.fonts.title};
      }

      .categories {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1em;

        li {
          list-style: none;
          font-size: ${(p) => p.theme.fonts.links};
        }

        .active {
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: ${(p) => p.theme.colors.tertiary};
          text-decoration-thickness: 0.15em;
        }
      }
    }

    .sub-links {
      column-count: 2;
      padding: 2em;
      color: ${(p) => p.theme.colors.darkAlt};

      li {
        list-style: none;
        flex: 50%;
        line-height: 1.5;

        .title {
          font-weight: 700;
        }
      }
    }

    .card {
      all: unset;
      flex: 50%;
      background-color: #fff;
      margin: 2em;

      .header {
        width: 100%;

        img {
          max-width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .content {
        padding: 2em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        color: ${(p) => p.theme.colors.darkAlt};

        .header {
          .sub {
            color: #672666;
          }
          .title {
            font-size: ${(p) => p.theme.fonts.paragraph};
            font-weight: 700;
          }
        }

        .desc {
          font-size: ${(p) => p.theme.fonts.links};
        }
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .main {
      padding: 5em;
      .title {
        padding-bottom: 0.5em;
      }
    }

    .sub-links {
      padding: 5em;
    }

    .card {
      flex: 25%;
    }
  }
`;
