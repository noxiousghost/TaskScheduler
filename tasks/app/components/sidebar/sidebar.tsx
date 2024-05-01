"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

function sidebar() {
  const { theme } = useGlobalState();
  return <SidebarStyled>sidebar</SidebarStyled>;
}

const SidebarStyled = styled.nav``;
export default sidebar;
