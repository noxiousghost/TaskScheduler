"use client";
import React from "react";
import styled from "styled-components";
import CreateContent from "../modals/CreateContent";

function tasks() {
  return (
    <TaskStyled>
      <CreateContent />
    </TaskStyled>
  );
}

const TaskStyled = styled.main`
  position: relative;
  padding: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  height: 100%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
export default tasks;
