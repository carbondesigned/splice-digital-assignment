import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${(p) => p.theme.colors.darkAlt};
  text-align: center;
  color: #fff;
  padding: 10em 2em;

  .header {
    padding: 0 1em;

    .title {
      font-weight: 700;
      font-size: ${(p) => p.theme.fonts.title};
    }

    .sub-title {
      line-height: 1.5;
      font-size: ${(p) => p.theme.fonts.paragraph};
    }
  }

  .applications {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    width: 100%;
    justify-content: center;
    align-items: center;

    .application {
      flex: 1;

      img {
        max-width: 100%;
      }

      .title {
        h4 {
          font-size: ${(p) => p.theme.fonts.smParagraph};
          font-weight: 700;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .header {
      .sub-title {
        padding: 0 2em;
      }
    }
    .applications {
      display: grid;
      grid-auto-flow: column;

      .application {
        text-align: center;

        img {
          max-width: 100%;
        }

        .title {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          h4 {
            font-weight: 800;
            font-size: 1.525em;
            max-width: 10ch;
            line-height: 1.5;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    padding: 15em 2em;

    .header {
      .sub-title {
        padding: 0 10em;
      }
    }
  }
`;
