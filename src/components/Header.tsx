import Link from "next/link";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Button from "./Button";
import Image from "next/image";
// import { useDispatch, useSelector } from 'react-redux';

// import Button from '@/components/Button';
// import { Dispatch } from '@/lib/actions';
// import { StoreState } from '@/lib/store';
// import { useProfile } from '@/hooks/useProfile';

import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";

const HeaderTop = styled.header`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #e6eaea;
  align-items: center;

  font-size: 13px;
  background-color: #ffffff;
  z-index: 9;
`;

const LeftHeader = styled.div`
  line-height: 73px;
  padding: 0 23px;
  min-width: 130px;
  height: 70px;
  border-right: 1px solid #e6eaea;
  cursor: pointer;
  overflow: hidden;
  /* transition: all 0.3s ease-in-out; */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 10px;
    }
  }
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const HeaderSearch = styled.div`
  padding: 0 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    position: relative;
    display: inline-block;
    width: auto;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const Logo = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const GroupButtons = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  padding: 0 23px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  align-items: center;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: #7e7e7e;
  }
`;
const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 23px;
  width: 190px;
  height: 70px;
  padding: 0;

  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 500;

  background-color: #202121;
  border: solid 1px transparent;
  line-height: 73px;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #363838;
  }
`;

const ProfileDropdown = styled.div`
  top: 100%;
  z-index: 1;
  width: 100%;
  display: none;
  font-size: 13px;
  border-radius: 4px;
  position: absolute;
  background-color: #fff;
  border: solid 1px #ededed;
  a {
    display: block;
    padding: 10px 10px;
    &:hover {
      background-color: #ededed;
      cursor: pointer;
    }
  }
`;

const LoggedUser = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 10px;
  &:hover ${ProfileDropdown} {
    display: block;
  }
`;

const UserName = styled.div`
  color: #0093d3;
  font-size: 13px;
  margin-left: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

function Header() {
  const [search, setSearch] = useState(false);

  return (
    <HeaderTop>
      <LeftHeader>
        <a>
          <MenuIcon />

          <span>MENU</span>
        </a>
      </LeftHeader>

      <RightHeader>
        {search ? (
          <SearchContainer>
            <Search
              buttonText="Haih"
              placeholder="Zaraa bicheed haina uu"
              setSearch={setSearch}
            />
          </SearchContainer>
        ) : (
          <>
            <HeaderSearch>
              <a onClick={() => setSearch(true)}>
                <SearchIcon />
              </a>
            </HeaderSearch>
            <Link href="/">
              <Logo>
                <a>
                  <Image src="/assets/FinalLogo.svg" height={100} width={100} />
                </a>
              </Logo>
            </Link>
            <GroupButtons>
              <LoginButton>
                <a>Нэвтрэх</a>
              </LoginButton>
            </GroupButtons>
          </>
        )}
      </RightHeader>
    </HeaderTop>
  );
}

export default Header;
