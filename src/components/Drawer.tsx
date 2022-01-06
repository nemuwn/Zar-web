import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { List } from "@mui/material";
import Link from "next/link";
import { Dispatch } from "react";

import { AppMenu } from "../utils/drawer";
import { makeStyles } from "@mui/styles";

export const AppMain = styled.div<{ menuOpen: boolean }>`
  width: 100%;
  margin-left: ${(props) => props.menuOpen && "160px"};
  transition: margin-left 0.3s;
`;

const MenuDrawer = styled(Drawer)<{ menuOpen: boolean }>`
  width: 100%;
  .closeBtn {
    float: right;
    width: 50%;
    svg {
      color: #202121;
      font-size: 30px;
    }
    &:hover {
      color: #5b5e5e;
    }
  }
`;
const useStyles = makeStyles({
  drawer: {
    width: "300px",
  },
});

export const MenuSlider = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<boolean>;
}) => {
  const classes = useStyles();
  return (
    <MenuDrawer
      classes={{ paper: classes.drawer }}
      menuOpen={menuOpen}
      anchor="left"
      open={menuOpen}
    >
      <div>
        <Typography variant="h5">MENU</Typography>
      </div>
      <List>
        <ListItem
          className="closeBtn"
          key="fuck"
          button
          onClick={() => setMenuOpen(false)}
        >
          Close
          <ListItemIcon>
            <CloseOutlinedIcon color="primary" />
          </ListItemIcon>
        </ListItem>
        {AppMenu.map((item) => (
          <Link href={item.path}>
            <ListItem key={item.text} button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MenuDrawer>
  );
};
