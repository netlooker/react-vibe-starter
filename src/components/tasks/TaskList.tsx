import React from "react";
import { useTasks } from "../../features/tasks";
import { TaskItem } from "./TaskItem";
import { TaskForm } from "./TaskForm";

export const TaskList: React.FC = () => {
  const { 
    filteredTasks, 
    filter, 
    setFilter, 
    sortBy, 
    setSortBy 
  } = useTasks();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          My Tasks
        </h2>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center">
            <label htmlFor="filter" className="mr-2 text-sm text-gray-600 dark:text-gray-300">
              Show:
            </label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-sm text-gray-600 dark:text-gray-300">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2"
            >
              <option value="createdAt">Date Added</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      </div>
      
      <TaskForm />
      
      <div className="mt-6 space-y-4">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {filter === "all" 
              ? "No tasks yet. Add one above!" 
              : filter === "active" 
                ? "No active tasks." 
                : "No completed tasks."}
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        )}
      </div>
      
      {filteredTasks.length > 0 && (
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {filteredTasks.length} {filteredTasks.length === 1 ? "task" : "tasks"} {filter !== "all" && filter}
        </div>
      )}
    </div>
  );
};