import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${(p) => p.theme.colors.secondary};
  padding: 0 2em;

  .logo {
    width: 100%;
    display: flex;
    justify-content: center;

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
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 1em;
      text-align: center;
      justify-content: space-evenly;

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
        padding: 0 5em;
        text-align: center;
        margin: 5em 0;

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
        justify-content: flex-end;
        /* padding: 1em 5em; */
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
    padding-bottom: 5em;

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
    }
    .main {
      flex-direction: row;

      .links {
        text-align: left;
        flex-direction: row;
        /* padding: 0 5em; */
        flex-wrap: wrap;

        .col {
          display: flex;
          flex-direction: column;
        }
      }
      .socials {
        margin-top: -5em;
        padding-bottom: 5em;
        .newsletter {
          padding: 0;
          flex-direction: row;
          width: 100%;
          gap: 1em;

          input {
            width: 50em;
          }
        }
      }
    }
  }
`;
