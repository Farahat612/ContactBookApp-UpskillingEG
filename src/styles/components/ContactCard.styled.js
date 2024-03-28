// using styled-components to create a Card component
import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  background: transparent;
  border-bottom: 2px solid #d9d9d9;
  &:last-child {
    border-bottom: none;
  }
  /* outline: 1px solid black; */

  .contact-details {
    display: flex;
    gap: 2rem;
    align-items: center;
    /* outline: 1px solid black; */

    .contact-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      cursor: pointer;
      overflow: hidden;
      transition: 0.3s;

      &:hover {
        box-shadow: 0 0 5px 0 #1bb0f0;
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
      }
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      color: #d9d9d9;

      h3 {
        font-size: 1.4rem;
        font-weight: 500;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }

  .contact-actions {
    display: flex;
    gap: 1.5rem;
    /* outline: 1px solid black; */

    button {
      width: 50px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 5px;
      background: white;
      color: white;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #1bb0f0;
        .edit-icon,
        .delete-icon {
          color: white;
        }
      }

      &:last-child:hover {
        background: #ec1b1b;
      }

      .edit-icon {
        font-size: 1.5rem;
        color: #1bb0f0;
        transition: 0.3s;
        transform: translate(0.1rem, 0);
      }
      .delete-icon {
        font-size: 1.3rem;
        color: #ec1b1b;
        transition: 0.3s;
      }
    }
  }

  @media (width <= 991px) {
    .contact-details {
      .contact-info {
        h3 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
  @media (width <= 767px) {
    .contact-details {
      gap: 1rem;
      .contact-img {
        width: 80px;
        height: 80px;
      }
      .contact-info {
        h3 {
          font-size: 1rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
    }
    .contact-actions {
      gap: 1rem;
      button {
        width: 40px;
        height: 35px;
        .edit-icon {
          font-size: 1.3rem;
        }
        .delete-icon {
          font-size: 1.1rem;
        }
      }
    }
  }
  @media (width <= 575px) {
    .contact-details {
      .contact-img {
        width: 60px;
        height: 60px;
      }
      .contact-info {
        h3 {
          font-size: 0.8rem;
          word-wrap: break-word;
        }
        p {
          font-size: 0.6rem;
        }
      }
    }
    .contact-actions {
      gap: 0.4rem;
      flex-direction: column;
      button {
        width: 30px;
        height: 25px;
        .edit-icon {
          font-size: 1rem;
        }
        .delete-icon {
          font-size: 0.8rem;
        }
      }
    }
  }
`
