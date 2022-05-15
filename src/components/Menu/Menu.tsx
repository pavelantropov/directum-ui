import React, { useState } from "react";
import { Link, Menu as MuiMenu } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { MenuItemType } from "./types";

interface Props {
  items: MenuItemType[];
}

export default function Menu({ items }: Props) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div>
      <Button
        id="menu-button"
        variant="contained"
        size="large"
        color="secondary"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Меню
      </Button>
      <MuiMenu
        id="menu"
        anchorEl={menuAnchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "menu-button",
        }}
      >
        {items.length > 0 &&
          items.map((item, index) => (
            <MenuItem
              key={`item_${index}`}
              onClick={handleClose}>
                <Link href={item.ref} underline="none">
                  {item.title}
                </Link>
            </MenuItem>
          ))}
      </MuiMenu>
    </div>
  );
}
