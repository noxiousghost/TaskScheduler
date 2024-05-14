"use client";
import React from "react";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}
function TaskItem({ title, description, date, isCompleted, id }: Props) {
  const { theme } = useGlobalState();
  return (
    <TaskItemStyled theme={theme}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      {isCompleted ? (
        <button className="completed">Completed</button>
      ) : (
        <button className="incomplete">Incomplete</button>
      )}
      <button className="edit">{edit}</button>
      <button className="delete">{trash}</button>
    </TaskItemStyled>
  );
}
const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .date {
    margin-top: auto;
  }
`;

export default TaskItem;
