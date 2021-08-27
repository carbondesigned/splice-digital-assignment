import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${(p) => p.theme.colors.secondary};
  padding: 0 2em;

  .logo {
    text-align: center;
    h2 {
      font-size: 5em;
      font-weight: 700;
      text-transform: uppercase;
      padding: 1em 0;
    }

    img {
      max-width: 50%;
      object-fit: cover;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .links {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      text-align: center;
      padding: 0;
      margin: 0;

      .link {
        list-style: none;
        font-size: ${(p) => p.theme.fonts.smParagraph};
      }
    }
    .socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      .newsletter {
        display: flex;
        flex-direction: column;
        padding: 5em 0;
        text-align: center;

        input {
          border: none;
          border: 1px solid #ccc;
          padding: 1em;
        }

        label {
          font-size: ${(p) => p.theme.fonts.smParagraph};
          white-space: nowrap;
        }
      }
      .social-links {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        gap: 2em;

        img {
          max-width: 20%;
          object-fit: cover;
        }

        .logo {
          font-size: ${(p) => p.theme.fonts.paragraph};
          max-width: max-content;
        }
      }
    }
  }

  .copy {
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 5em 0;

    .copy-links {
      display: flex;
      align-items: center;
      margin: 0;
      gap: 1em;
      li {
        list-style: none;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 10em;

    .logo {
      justify-content: flex-start;
      text-align: left;
    }
    .main {
      flex-direction: row;

      .links {
        text-align: left;
        display: flex;
        gap: 1em;
        flex-direction: row;

        .col {
          display: flex;
          flex-direction: column;
          flex: 50%;
          gap: 1em;
        }
      }
      .socials {
        margin-top: -5em;
        padding: 5em;
        flex: 25%;

        .newsletter {
          padding: 0;
          flex-direction: row;
          width: 100%;
          gap: 1em;

          input {
            width: 50em;
          }
        }
        .social-links {
          justify-content: flex-end;
          padding: 5em 0;
        }
      }
    }
  }
`;
