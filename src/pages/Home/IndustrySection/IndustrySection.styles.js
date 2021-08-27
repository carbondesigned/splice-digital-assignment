import styled from "styled-components";

export const StyledIndustrySection = styled.section`
  margin-top: 5em;
  color: ${(p) => p.theme.colors.darkAlt};

  .header {
    text-align: center;
    padding: 2em;

    .title {
      font-size: ${(p) => p.theme.fonts.title};

      font-weight: bold;
    }
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    height: 100%;

    .industry-img {
      height: 100%;
      width: 100%;
      padding: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transform: translateY(5em);
      flex: 100%;

      img {
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
        border-radius: 0.25em;
      }
    }

    .wrapper {
      padding: 5em;
      display: flex;
      flex-direction: column;
      gap: 2em;
      z-index: 0;
      flex: 50%;

      @media only screen and (min-width: 768px) {
        padding: 8em;
      }

      .carousel {
        .carousel-indicators {
          bottom: -12em;
          display: flex;
          gap: 0.5em;
          justify-content: flex-start;
          margin: 0;
          z-index: 1;

          button {
            background-color: ${(p) => p.theme.colors.primary};
            width: 10px;
            height: 10px;
            border-radius: 50%;
            padding: 0;
            margin: 0;
            border: none;
          }

          button[aria-current="false"] {
            background-color: lightgray;
          }
        }

        .carousel-caption {
          all: unset;
          inset: 0;
          padding: 0;
          color: black;
          z-index: 0;

          h3 {
            font-size: ${(p) => p.theme.fonts.smTitle};
          }

          p {
            font-size: ${(p) => p.theme.fonts.paragraph};
            max-width: 90%;
          }
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      flex-direction: row;

      .industry-img {
        transform: translateY(10em);
      }
    }

    @media screen and (min-width: 1400px) {
      padding: 0 5em;
    }
  }
  .carousel-control-prev {
    opacity: 1;
    left: -5em;

    @media only screen and (min-width: 570px) {
      left: -6em;
    }
    @media only screen and (min-width: 768px) {
      left: -8em;

      .carousel-control-prev-icon {
        width: 50px;
        height: 50px;
      }

      @media only screen and (min-width: 1400px) {
        left: -12em;
      }
    }
    .carousel-control-prev-icon {
      background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.33334 25H41.6667' stroke='%2356BFE9' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M27.0833 10.4167L41.6667 25L27.0833 39.5834' stroke='%2356BFE9' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
      transform: rotate(180deg);
    }
  }
  .carousel-control-next {
    opacity: 1;
    right: -5em;
    .carousel-control-next-icon {
      background-image: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.33334 25H41.6667' stroke='%2356BFE9' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M27.0833 10.4167L41.6667 25L27.0833 39.5834' stroke='%2356BFE9' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
      opacity: 1;
    }

    @media only screen and (min-width: 768px) {
      right: -3em;
      .carousel-control-next-icon {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
