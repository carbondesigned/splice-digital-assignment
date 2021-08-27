import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  padding: 2em;
  z-index: 2;
  transform: translateY(5em);

  .card {
    all: unset;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    gap: 1em;
    color: ${(p) => p.theme.colors.darkAlt};
    background-color: #fff;

    img {
      max-width: 100%;
      object-fit: cover;
    }

    .info {
      padding: 2em;

      .title {
        font-size: ${(p) => p.theme.fonts.title};
        font-weight: 700;
        padding: 0.5em 0;
      }

      .desc {
        font-size: clamp(1.25em, 3vw, 2em);
      }

      .ctas {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 1em 0;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 0 5em;
    .card {
      flex-direction: row;

      .info {
        padding: 5em;
      }

      img {
        max-width: 50%;
      }

      .desc {
        padding: 0 2em 0 0;
      }
    }
  }

  @media only screen and (min-width: 1400px) {
    padding: 0 15em;

    .card {
      .desc {
        padding: 0 5em 0 0;
      }
    }
  }
`;
