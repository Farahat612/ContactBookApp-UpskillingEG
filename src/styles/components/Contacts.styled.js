// using styled-components to create all needed styles for the Contacts component
import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 80%;
  min-height: 25vh;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  border: 0.1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  position: static;

  @media (width <= 991px) {
    width: 90%;
    padding: 1rem;
  }

  @media (width <= 767px) {
    width: 95%;
    padding: 0.7rem;
  }
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  /* outline: 1px solid black; */

  .search-bar {
    width: 70%;
    input {
      width: 90%;
      height: 2.5rem;
      padding: 1rem;
      border-radius: 999px;
      border: none;
      outline: none;

      &::placeholder {
        font-size: 0.85rem;
        color: black;
        text-transform: capitalize;
      }

      &:focus {
        border: 1px solid black;
      }
    }
    .search-icon {
      display: inline-block;
      transform: translate(-2rem, 0.25rem);
      color: #1bb0f0;
    }
  }

  .add-contact {
    width: 30%;
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.2rem;
      padding: 0.8rem 1.8rem;
      border-radius: 20px;
      border: none;
      outline: none;
      background: #1bb0f0;
      color: white;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #01579b;
      }
    }
  }

  @media (width <= 991px) {
    .add-contact {
      button {
        padding: 0.8rem 1.3rem;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
  @media (width <= 767px) {
    .search-bar {
      width: 80%;
      input {
        padding: 0.8rem;
        &::placeholder {
          font-size: 0.65rem;
        }
      }
    }
    .add-contact {
      max-width: 20%;
      border-radius: 999px;
      button {
        padding: 0.8rem 1rem;
        span {
          display: none;
        }
      }
    }
  }
`

export const ContactsList = styled.div`
  height: 70%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* outline: 1px solid black; */
`

export const BottomBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 0;
  /* outline: 1px solid black; */

  .pagination {
    display: flex;
    gap: 1rem;

    .btn {
      width: auto;
      border: none;
      outline: none;
      background: none;
    }

    .pagination-icon {
      /* font-size: 2rem; */
      color: #fff;
      cursor: pointer;
      transform: scale(2.7) translateY(0.07rem);
      transition: 0.3s;

      &:hover {
        color: #1bb0f0;
      }
    }

    .pagination-pages {
      display: flex;
      gap: 0.25rem;
      color: #fff;
      font-size: 1.1rem;
      vertical-align: middle;
    }
  }

  @media (width <= 991px) {
    .pagination {
      gap: 0.8rem;
      .pagination-icon {
        transform: scale(2.5) translateY(0.07rem);
      }
      .pagination-pages {
        font-size: 1rem;
      }
    }
  }
  @media (width <= 767px) {
    .pagination {
      gap: 0.65rem;
      .pagination-icon {
        transform: scale(2.5) translateY(0.07rem);
      }
      .pagination-pages {
        font-size: 0.9rem;
      }
    }
  }
  @media (width <= 575px) {
    .pagination {
      gap: 0.5rem;
      .pagination-icon {
        transform: scale(2.3) translateY(0.07rem);
      }
      .pagination-pages {
        font-size: 0.8rem;
      }
    }
  }
`
