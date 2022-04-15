import { Checkbox } from "@mui/material";
import styled from "styled-components";
import { ToggleRootProps } from "./types";

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: white;
`;

export const LabelRoot = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.5rem;
  background-color: transparent !important;
`;

export const CheckboxRoot = styled(Checkbox)<ToggleRootProps>`
  &.MuiCheckbox-root {
    & .MuiSvgIcon-root {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
`;

export const ToggleSwitch = styled.span<{ isActive: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3rem;
  background-color: black;

  &::before {
    position: absolute;
    content: "";
    background: ${({ isActive }) => (isActive ? "#61dafb" : "#7f879e")};
    width: 2.5rem;
    max-width: 2.5rem;
    min-width: 2.5rem;
    height: 2.5rem;
    min-height: 2.5rem;
    max-height: 2.5rem;
    left: 0.4rem;
    bottom: 0.5rem;
    border-radius: 50rem;
    transition: all 0.5s ease;
    transform: ${({ isActive }) =>
      isActive ? "translatex(102%)" : "translatex(-3%)"};
  }
`;
