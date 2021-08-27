import styled from "styled-components";

export const StyledSection = styled.section`
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  z-index: 0;
  padding: 10em 2em 2em;

  .heading {
    color: ${(p) => p.theme.colors.darkAlt};
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;

    .title {
      font-size: ${(p) => p.theme.fonts.title};
      font-weight: 700;
    }
    .sub {
      font-size: ${(p) => p.theme.fonts.paragraph};
    }
  }

  .stats {
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1em;
    width: 100%;
    padding: 5em 0;

    .stat {
      .main {
        font-size: ${(p) => p.theme.fonts.xlgTitle};
        font-weight: 700;

        .b {
          font-weight: 400;
        }
      }

      .sub {
        font-weight: 700;
        font-size: ${(p) => p.theme.fonts.smParagraph};
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 10em 5em 5em;
  }

  @media only screen and (min-width: 1400px) {
    padding: 10em 15em 15em;

    .heading {
      padding: 10em 0;
      max-width: 80%;

      .sub {
        padding-bottom: 2em;
      }
    }
  }
`;
