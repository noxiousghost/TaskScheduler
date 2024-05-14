"use client";
import React from "react";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}
function TaskItem({ title, description, date, isCompleted, id }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{id}</p>
    </div>
  );
}

export default TaskItem;
