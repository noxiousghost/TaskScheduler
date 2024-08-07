import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });
    console.log("Task created: ", task);

    return NextResponse.json(task);
  } catch (error) {
    console.log("Error creating task:", error);
    return NextResponse.json({ error: "error creating the task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.log("Error getting task:", error);
    return NextResponse.json({ error: "error getting the task", status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { userId } = auth();
    const { isCompleted, id } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("Error updating task:", error);
    return NextResponse.json({ error: "error updating the task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { id, title, description, date, isCompleted, isImportant } =
      await req.json();

    if (!id || !title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.update({
      where: {
        id,
        userId,
      },
      data: {
        title,
        description,
        date,
        isCompleted,
        isImportant,
      },
    });
    console.log("Task updated: ", task);
    return NextResponse.json(task);
  } catch (error) {
    console.log("Error updating task:", error);
    return NextResponse.json({ error: "Error updating the task", status: 500 });
  }
}
