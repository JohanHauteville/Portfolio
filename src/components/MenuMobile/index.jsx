import * as React from "react";
import "./styles.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuMobile() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-mobile">
      <Button
        // startIcon={<MenuIcon />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="white"
        size="large"
        sx={{ height: "80px", width: "80px" }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("./");
            handleClose();
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("./projects");
            handleClose();
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("./skills");
            handleClose();
          }}
        >
          Skills
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("./about");
            handleClose();
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("./contact");
            handleClose();
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
