import styled from "styled-components";

export const CardStyle = styled.div`
  position: relative;

  /* for list view  */
  .list {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      background: #ffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 20px;
      box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.15);
      .info-image {
        position: relative;
        display: flex;
        align-items: center;
        gap: 2rem;
      }
      .info {
        display: flex;
        flex-direction: column;
        .sub-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #616161;
        }
        h3 {
          display: flex;
          align-items: center;
        }
        button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: transparent;
          border: 1px solid #03a9f4;
          font-family: "Poppins", sans-serif;
          color: #03a9f4;
          font-size: 0.9rem;
          padding: 0.6rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.5s ease;
          &:hover {
            background-color: #03a8f416;
          }
        }
      }
    }
  }

  .card {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    list-style: none;
    margin: 0px;
    padding: 0px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    h3 {
      margin: 0.2rem 0rem;
      font-size: 16px;
    }
    .sub-title {
      color: #616161;
      font-size: 14px;
    }
    li {
      position: relative;
      border: 1px solid #e0e0e0;
      border-radius: 13px;
      padding: 30px 23px;
      display: flex;
      flex-direction: column;
      gap: 21px;
      padding-right: 6rem;
      @media (max-width: 1000px) {
        padding-right: 23px;
      }
      .info-image {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.5rem;

        > img {
          width: 60px;
        }
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
          display: flex;
          align-items: center;
          gap: 0.1rem;
        }
      }
      .btn-group {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: transparent;
          border: 1px solid #03a9f4;
          font-family: "Poppins", sans-serif;
          color: #03a9f4;
          font-size: 0.9rem;
          padding: 0.5rem 0.6rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.5s ease;
          &:hover {
            background-color: #03a8f416;
          }
        }
      }
    }
  }
`;
