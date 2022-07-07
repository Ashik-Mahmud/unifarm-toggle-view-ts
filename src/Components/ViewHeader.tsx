import React from "react";
import { BsGrid, BsListUl } from "react-icons/bs";
import styled from "styled-components";

type Props = {};

const ViewHeader: React.FC = (props: Props) => {
  return (
    <ViewHeaderStyle>
      <div className="search-options">
        <div className="search-options-item">
          <input type="search" name="search" id="search" placeholder="Search" />
          <select name="select" id="select">
            <option value="">Sort By</option>
            <option value="APY">APY</option>
          </select>
        </div>
        <div className="view-options">
          <div className="view-options-item">
            <BsListUl />
          </div>
          <div className="view-options-item">
            <BsGrid />
          </div>
        </div>
      </div>
    </ViewHeaderStyle>
  );
};

const ViewHeaderStyle = styled.div`
  position: relative;
  margin: 1rem 0rem;
`;

export default ViewHeader;
