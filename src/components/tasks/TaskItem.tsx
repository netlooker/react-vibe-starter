import React, { useState } from "react";
import { Task, useTasks } from "../../features/tasks";
import { Check, Trash2, Edit, ChevronDown, ChevronUp } from "lucide-react";

type TaskItemProps = {
  task: Task;
};

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskCompletion, deleteTask, updateTask } = useTasks();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || "");
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleToggleExpand = () => {
    if (!isEditing) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsExpanded(true);
  };

  const handleSave = () => {
    updateTask(task.id, {
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority as "low" | "medium" | "high",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description || "");
    setEditedPriority(task.priority);
    setIsEditing(false);
  };

  const priorityColors = {
    low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <div className={`border ${task.completed ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} rounded-lg shadow-sm transition-all duration-200`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <button
            onClick={() => toggleTaskCompletion(task.id)}
            className={`flex-shrink-0 w-6 h-6 rounded-full border ${
              task.completed
                ? "bg-indigo-500 border-indigo-500 dark:bg-indigo-600 dark:border-indigo-600"
                : "border-gray-300 dark:border-gray-600"
            } flex items-center justify-center mt-0.5`}
            aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {task.completed && <Check size={14} className="text-white" />}
          </button>

          <div className="flex-grow">
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                    autoFocus
                  />
                ) : (
                  <div
                    className={`text-base font-medium ${
                      task.completed
                        ? "text-gray-500 dark:text-gray-400 line-through"
                        : "text-gray-900 dark:text-white"
                    }`}
                    onClick={handleToggleExpand}
                  >
                    {task.title}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 ml-2">
                <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[task.priority]}`}>
                  {task.priority}
                </span>
                
                {!isEditing && (
                  <>
                    <button
                      onClick={handleEdit}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      aria-label="Edit task"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                      aria-label="Delete task"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      onClick={handleToggleExpand}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </>
                )}
              </div>
            </div>

            {(isExpanded || isEditing) && (
              <div className="mt-3">
                {isEditing ? (
                  <>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description
                      </label>
                      <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                        rows={3}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Priority
                      </label>
                      <select
                        value={editedPriority}
                        onChange={(e) => setEditedPriority(e.target.value as any)}
                        className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        onClick={handleCancel}
                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-3 py-1.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                      >
                        Save
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {task.description ? (
                      task.description
                    ) : (
                      <span className="italic">No description</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};