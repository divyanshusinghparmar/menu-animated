import React, { useContext } from "react";
import { Plus } from "react-feather";
import { MenuContext } from "../Menu/MenuManager";
import cn from "classnames";
import "./style.scss";

function ContactButton() {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <button
      className={cn("contact-button", { open })}
      onClick={() => setOpen(!open)}
    >
      <span>Contact us</span>
      <Plus />
    </button>
  );
}

export default ContactButton;
