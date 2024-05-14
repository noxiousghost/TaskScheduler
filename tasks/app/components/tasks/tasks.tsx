"use client";
import React from "react";
import styled from "styled-components";
import CreateContent from "../modals/CreateContent";
import { useGlobalState } from "@/app/context/globalProvider";
import TaskItem from "../taskItem/TaskItem";

interface Props {
  title: string;
  tasks: any[];
}

function tasks({ title, tasks }: Props) {
  const { theme } = useGlobalState();
  return (
    <TaskStyled>
      <h1>{title}</h1>
      <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
      </div>
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
