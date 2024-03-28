// using styled-components to create all needed styles for the Modals component
import styled from 'styled-components'

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.90);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  z-index: 10;
  border-radius: 20px;
  overflow: hidden;

  .close-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    transform: scale(1.4);
    color: #000;
    cursor: pointer;
  }
`

export const Person = styled(Modal)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;

  .person-img {
    width: 35%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      aspect-ratio: 1/1;
    }
  }

  .person-info {
    padding: 1rem;
    line-height: 2;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #000;
    }

    p {
      font-size: 1rem;
      color: #000;
    }
  }

  @media (width <= 991px) {
    .person-info {
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media (width <= 767px) {
    flex-direction: column;
    padding: 1rem;
    .person-img {
      width: 50%;
    }
    .person-info {
      h3 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
`

export const Edit = styled(Modal)`
  padding: 1rem;
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .person-img {
      width: 80%;
      display: grid;
      place-items: center;
      img {
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
        aspect-ratio: 1/1;
      }
    }
  }
  .right {
    width: 50%;
    height: 95%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    /* outline: 1px solid #000; */

    form {
      height: 100%;
      width: 100%;
      /* outline: 1px solid #000; */
      display: flex;
      gap: 1.1rem;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .form-input {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 0;

        label {
          font-size: 1rem;
          font-weight: 400;
          color: #000;
        }

        input {
          width: 95%;
          padding: 0.3rem;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.3);
        }

        button {
          width: 95%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 5px;
          border: none;
          background: #000;
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }

  @media (width <= 991px) {
    .right {
      form {
        .form-input {
          label {
            font-size: 0.9rem;
          }
          input {
            padding: 0.2rem;
          }
          button {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media (width <= 767px) {
    flex-direction: column;
    padding: 1rem;
    .left {
      width: 100%;
      .person-img {
        width: 50%;
      }
    }
    .right {
      width: 100%;
      form {
        .form-input {
          label {
            font-size: 0.9rem;
          }
          input {
            padding: 0.2rem;
          }
          button {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`
export const Add = styled(Modal)`
  width: 80vw;
  min-height: 30vh;
  padding: 1rem;
  padding-bottom: 0;

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 3rem;

    .upload-img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 100px;
        border-radius: 50%;
      }

      input {
        display: none;
      }
    }

    .fullName,
    .contact,
    .btns {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2.5rem;
      /* outline: 1px solid #000; */

      .input-group {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        label {
          font-size: 1rem;
          font-weight: 400;
          color: #000;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          border-radius: 50px;
          border: none;
          background-color: #f5f5f5;
        }
      }
    }

    .btns {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3rem;
      padding-bottom: 1rem;

      button {
        width: 10rem;
        padding: 0.6rem 0;
        border-radius: 20px;
        border: none;
        background: #000;
        color: #fff;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;

        &.cancel {
          background-color: #d9d9d9;
          color: #000;
        }

        &.save {
          background-color: #1bb0f0;
          color: #fff;
        }
      }
    }
  }

  @media (width <= 991px) {
    .form {
      gap: 2rem;
      .fullName,
      .contact {
        flex-direction: column;
        gap: 1.5rem;
        .input-group {
          width: 100%;

          label {
            font-size: 0.9rem;
          }
        }
      }
      .btns {
        gap: 1.5rem;
      }
    }
  }

  @media (width <= 767px) {
    width: 90vw;
    .form {
      gap: 1.5rem;
      .upload-img {
        gap: 0.5rem;
        img {
          width: 70px;
        }
      }
      .fullName,
      .contact {
        gap: 1rem;
        .input-group {
          label {
            font-size: 0.8rem;
          }
          input {
            padding: 0.4rem;
          }
        }
      }
      .btns {
        gap: 1rem;
        button {
          width: 6rem;
          padding: 0.4rem 0;
          font-size: 0.7rem;
        }
      }
    }
  }
`
