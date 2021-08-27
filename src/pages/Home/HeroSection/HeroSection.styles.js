import styled from "styled-components";

export const StyledHero = styled.section`
  background-image: url(${(p) => p.heroBg});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5em 2em;
  gap: 2em;

  @media only screen and (min-width: 1024px) {
    padding: 10em 5em;
  }

  .top-hero {
    display: flex;
    flex-direction: column;
    gap: 2em;

    .headline {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 2em;

      .title {
        font-weight: 700;
        font-size: ${(p) => p.theme.fonts.lgTitle};
        max-width: 30ch;
        line-height: 1.2;
        text-shadow: 10px 10px 35px rgba(0, 0, 0, 0.9);
      }
    }
  }

  .bottom-hero {
    width: 100%;
    display: grid;
    place-items: center;
    transform: translateY(10em);
    z-index: 5;

    .companies {
      position: relative;
      background: #fff;
      border-radius: 0.25em;
      padding: 2em;
      max-width: 90%;

      .title-wrapper {
        .title {
          color: ${(p) => p.theme.colors.primary};
          font-weight: 800;
          font-size: ${(p) => p.theme.fonts.smParagraph};
          line-height: 1.5;
          text-transform: uppercase;
        }
      }

      .content {
        padding: 1em 0;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .desc-title {
          font-weight: 800;
          font-size: ${(p) => p.theme.fonts.smParagraph};
          color: ${(p) => p.theme.colors.darkAlt};
        }

        .desc {
          font-size: ${(p) => p.theme.fonts.smParagraph};
          line-height: 1.5;
        }
      }
      .view {
        color: ${(p) => p.theme.colors.primary};
        font-size: ${(p) => p.theme.fonts.smParagraph};
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5em;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .bottom-hero {
      .companies {
        .content {
          padding: 1em 0;
          .desc {
            font-size: ${(p) => p.theme.fonts.smParagraph};
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .companies {
      display: flex;
      align-items: center;
      transform: translateY(5em);

      .title-wrapper {
        display: grid;
        place-items: center;
        border-right: 1px solid ${(p) => p.theme.colors.darkAtl};
        padding: 0 3em;

        .title {
          text-align: center;
          max-width: 10ch;
          padding-bottom: 0;
        }
      }

      .content {
        margin: 0 2em;
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .top-hero {
      .headline {
        padding: 2em;
      }
    }
  }
`;
