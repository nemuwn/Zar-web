import Link from "next/link";
import React, { useCallback, useState, useContext } from "react";
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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Search from "./Search";

const HeaderTop = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  height: 70px;

  align-items: center;
  background-color: #f4f7f6;
  border-bottom: 1px solid #e6eaea;

  .LeftBox,
  .RightBox {
    width: 15%;
  }
  .CenterBox {
    width: 70%;
    text-align: center;
    h1 {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .link-underlined {
    position: relative;
    display: inline-block;
    line-height: normal;
    color: #202121;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
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
  .item {
    padding: 0 23px;
  }
  .social {
    text-align: right;
  }
  svg {
    font-size: 1rem;
  }
  li {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  li:last-child {
    margin-right: 0;
  }
`;

const HeaderBot = styled.header`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #e6eaea;
  align-items: center;

  font-size: 13px;
  background-color: #f4f7f6;
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
  display: block;
  position: absolute;
  left: 50%;
  width: auto;

  line-height: normal;
  transform: translateX(-50%);
`;

const GroupButtons = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
  flex: 1;
  align-items: center;
  padding: 0 23px;
  height: 70px;
  border: none;
  background-color: transparent;

  font-size: 14px;
  color: #202121;
  font-weight: 600;
  text-transform: uppercase;
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
    <>
      <HeaderTop>
        <div className="LeftBox">
          <div className="item">
            <span className="link-underlined">ENGLISH</span>
          </div>
        </div>
        <div className="CenterBox">
          <h1>
            The awards of design, creativity and innovation on the internet
          </h1>
        </div>
        <div className="RightBox">
          <ul className="social item">
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
        </div>
      </HeaderTop>
      <HeaderBot>
        <LeftHeader>
          <a>
            <MenuIcon />

            <span>MENU</span>
          </a>
        </LeftHeader>
        <Link href="/">
          <Logo>
            <a>
              <Image src="/assets/FinalLogo.svg" height={100} width={100} />
            </a>
          </Logo>
        </Link>

        <RightHeader>
          {search ? (
            <SearchContainer>
              <Search
                buttonText="ХАЙХ"
                placeholder="Зараа бичээд хайна уу..."
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
              <LoginButton>
                <a>Нэвтрэх</a>
              </LoginButton>
              <GroupButtons>
                <AddButton>Зар нэмэх</AddButton>
              </GroupButtons>
            </>
          )}
        </RightHeader>
      </HeaderBot>
    </>
  );
}

export default Header;
