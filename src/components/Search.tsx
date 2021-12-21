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
  color: #fff;
  width: 10%;
  height: 40px;
  border: none;
  font-size: 13px;
  font-weight: bold;
  border-radius: 2px;
  background-color: red;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  padding-left: 40px;
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
  width: 4%;
  height: 70px;
  background-color: #202121;
  cursor: pointer;
  border: none;
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
        <SearchIcon />
        <SearchInput name="query" placeholder={placeholder} />
      </GroupInput>
      <SearchButton type="submit">{buttonText}</SearchButton>

      <CloseButton onClick={() => setSearch(false)}>
        <CloseIcon sx={{ color: grey[50] }} />
      </CloseButton>
    </SearchContainer>
  );
}

export default Search;
