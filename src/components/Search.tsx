import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { grey } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;
const SearchButton = styled(Button)`
  color: #202121;
  width: 10%;
  height: 40px;
  border: none;
  font-size: 13px;
  font-weight: bold;
  border-radius: 2px;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }

  .underlined {
    position: relative;
    display: inline-block;
    line-height: normal;
    color: #202121;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background-repeat: no-repeat;
      background-image: linear-gradient(
        to right,
        black 45%,
        rgba(32, 33, 33, 0.3) 55%
      );
      background-size: 220% 100%;
      background-position: 100% 50%;
      transition: 0.3s ease-out;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  padding-left: 20px;
  background-color: #f4f7f6;
`;

const GroupInput = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  border: none;
  svg {
    position: absolute;
    top: 13px;
    font-size: 13px;
    font-weight: bold;
    border-radius: 2px;
    /* text-transform: capitalize; */
    left: 15px;
    width: 16px;
    height: 16px;
  }
`;
const CloseButton = styled.button`
  width: 66px;
  height: 70px;
  background-color: #202121;
  cursor: pointer;
  border: none;
  svg {
    font-size: 28px;
  }
  &:hover {
    background-color: #363838;
  }
`;

function Search({
  placeholder,
  buttonText,
  setSearch,
}: {
  placeholder: string;
  buttonText: string;
  setSearch: any;
}) {
  return (
    <SearchContainer>
      <GroupInput>
        <SearchInput name="query" placeholder={placeholder} />
      </GroupInput>
      <SearchButton className="underlined" type="submit">
        {buttonText}
      </SearchButton>

      <CloseButton onClick={() => setSearch(false)}>
        <CloseIcon sx={{ color: grey[50] }} />
      </CloseButton>
    </SearchContainer>
  );
}

export default Search;
