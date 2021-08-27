import styled from "styled-components";

export const StyledSection = styled.section`
  color: ${(p) => p.theme.colors.darkAlt};
  padding-top: 5em;

  .header {
    width: 100%;
    text-align: center;
    padding: 2em 0;

    .title {
      font-size: ${(p) => p.theme.fonts.title};
      font-weight: 700;
    }
  }

  .main {
    width: 100%;
    height: 100%;
    padding: 3em;

    .list {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      width: 100%;

      .news {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        margin-bottom: 5em;
      }
    }
  }

  .events {
    background: ${(p) => p.theme.colors.primGradient};
    color: #fff;
    width: 100%;
    padding: 2em;
    margin: 2em 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;

    .logo {
      max-width: 50%;
    }

    .desc {
      text-align: center;
      padding: 1em 0;

      .title {
        font-size: ${(p) => p.theme.fonts.smTitle};
        font-weight: 700;
      }

      .body {
        font-size: ${(p) => p.theme.fonts.paragraph};
      }
    }

    .upcoming {
      text-align: center;
      font-weight: 300;

      .title {
        font-size: ${(p) => p.theme.fonts.paragraph};
        text-transform: uppercase;
      }
      .occasion {
        list-style: none;
        font-size: ${(p) => p.theme.fonts.paragraph};
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .main {
      padding: 5em;
    }
    .events {
      .desc {
        .body {
          max-width: 50ch;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .main {
      display: flex;

      .list {
        flex: 100%;
        margin-left: 2em;
      }
    }

    .events {
      margin: 0;
      align-items: flex-start;
      flex: 50%;

      .desc {
        text-align: left;
      }

      .upcoming {
        text-align: left;
        padding: 0;
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    .events {
      padding: 5em;
    }
  }
`;
