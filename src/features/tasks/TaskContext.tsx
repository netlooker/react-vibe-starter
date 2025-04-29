import React, { createContext, useContext, useEffect, useState } from "react";

// Define the Task type
export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: number;
};

// Define the context type
type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, "id" | "createdAt">>) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  sortBy: "priority" | "createdAt";
  setSortBy: (sortBy: "priority" | "createdAt") => void;
  filteredTasks: Task[];
};

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Priority values for sorting
const priorityValues = {
  high: 3,
  medium: 2,
  low: 1,
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize tasks from localStorage or empty array
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortBy, setSortBy] = useState<"priority" | "createdAt">("createdAt");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Update an existing task
  const updateTask = (
    id: string,
    updates: Partial<Omit<Task, "id" | "createdAt">>
  ) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task completion status
  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter and sort tasks
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "all") return true;
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "priority") {
        return priorityValues[b.priority] - priorityValues[a.priority];
      }
      return b.createdAt - a.createdAt; // Newest first
    });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskCompletion,
        filter,
        setFilter,
        sortBy,
        setSortBy,
        filteredTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook for using the task context
export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};