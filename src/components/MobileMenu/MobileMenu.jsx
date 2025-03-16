import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <WrapperOverlay />
        <WrapperContent>
          <CloseWrapper aria-label="Close">
            <Cross2Icon onClick={onDismiss} />
          </CloseWrapper>
          <Dialog.Title />
          <DialogContainerWrapper>
            <NavTopWrapper>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </NavTopWrapper>
            <NavBottomWrapper>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </NavBottomWrapper>
          </DialogContainerWrapper>
        </WrapperContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const CloseWrapper = styled.button`
  margin-left: auto;
  border: none;
  background-color: initial;
  display: block;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const DialogContainerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const WrapperOverlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`;

const WrapperContent = styled(Dialog.Content)`
  min-width: 300px;
  background: white;
  height: 100vh;
  right: 0;
  position: fixed;
  top: 0;
  width: 70%;
  max-width: 400px;
  padding: 30px;
`;

const NavTopWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  flex: 8;

  & a {
    text-decoration: none;
    color: ${COLORS.gray["700"]};
    font-size: 0.88rem;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

const NavBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  padding-bottom: 30px;
  flex: 1;

  & a {
    color: ${COLORS.gray["700"]};
    font-size: 0.875rem;
    text-decoration: none;
  }
`;

export default MobileMenu;
