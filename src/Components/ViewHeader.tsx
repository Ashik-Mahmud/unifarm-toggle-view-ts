import { BsGrid, BsListUl } from "react-icons/bs";
import styled from "styled-components";

type Props = {
  view: Boolean;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewHeader = ({ view, setView }: Props) => {
  return (
    <ViewHeaderStyle>
      <div className="search-options">
        <div className="search-options-item">
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>
        <div className="search-options-item">
          <select name="select" id="select">
            <option value="">Sort By</option>
            <option value="APY">APY </option>
            <option value="APY">Crypto Currency Invest</option>
          </select>
        </div>
      </div>
      <div className="view-options">
        <div
          onClick={() => setView(false)}
          className={`view-options-item ${!view && "active"}`}
        >
          <BsListUl />
        </div>
        <div
          onClick={() => setView(true)}
          className={`view-options-item ${view && "active"}`}
        >
          <BsGrid />
        </div>
      </div>
    </ViewHeaderStyle>
  );
};

const ViewHeaderStyle = styled.div`
  position: relative;
  margin: 1rem 0rem;
  background: #f8f8f8;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  .search-options {
    display: flex;
    position: relative;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    input,
    select {
      border: none;
      border-bottom: 2px solid #cccccc;
      padding: 0.5rem;
      background: #f8f8f8;
      outline: none;
      font-size: 1rem;
      font-family: "Poppins", sans-serif;
    }
  }
  .view-options {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 50px;
    overflow: hidden;
    .view-options-item {
      padding: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      width: 40px;
      height: 30px;
      display: grid;
      place-items: center;
    }
    .view-options-item.active {
      background-color: #673ab7;
      color: #fff;
    }
  }
`;

export default ViewHeader;
