"use client";

import { TODO } from "@/shared/models/todo";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/shared/services/todo.service";
import Image from "next/image";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import EmptyJPG from "../images/empty.jpg";
import TodoDetails from "./component/TodoDetails";
import TodoForm from "./forms/TodoForm";

export default function Home() {
  /*

    TODO: starting from this skeleton, build a dashboard to fullfill the use cases provided. The dashboard should be:
    - visually appealing (we don't expect anything fancy, but don't use plain text either)
    - clean and well-organized
    - easy to use

    Organize your code as you see fit.

  */

  const [todo, setTodo] = React.useState({
    id: "",
    title: "",
    description: "",
    estimated_time: 0,
  });

  const [todos, setTodos] = React.useState([]);

  const [search, setSearch] = React.useState("");

  const [open, setOpen] = React.useState(false);

  const [viewModal, setViewModal] = React.useState(false);

  const getAllTodos = async () => {
    try {
      const resp: any = await getTodos();
      setTodos(resp.todos);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const createATodo = async () => {
    try {
      await createTodo(todo);
      setTodo({
        id: "",
        title: "",
        description: "",
        estimated_time: 0,
      });
      setOpen(false);
      await getAllTodos();
      toast.success("Todo created successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateATodo = async () => {
    try {
      await updateTodo(todo.id, todo);
      setTodo({
        id: "",
        title: "",
        description: "",
        estimated_time: 0,
      });
      setOpen(false);
      await getAllTodos();
      toast.success("Todo updated successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const deleteATodo = async (id: string) => {
    try {
      if (!window.confirm("Are you sure you want to delete this todo?")) {
        return;
      }
      animateDelete(id);
      setTimeout(async () => {
        await deleteTodo(id);
        await getAllTodos();
      }, 500);
      toast.success("Todo deleted successfully");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const animateDelete = (id: string) => {
    const todo = document.getElementById("todo-" + id) as HTMLDivElement;
    todo.classList.add("animate-fadeOut");
  };

  React.useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            TODO Dashboard
          </h1>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="button"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => {
                  setTodo({
                    id: "",
                    title: "",
                    description: "",
                    estimated_time: 0,
                  });
                  setOpen(true);
                }}
              >
                New TODO
              </button>
            </div>
            <ul className="space-y-2">
              {todos
                .filter((todo: TODO) =>
                  search
                    ? todo.title.toLowerCase().includes(search.toLowerCase()) ||
                      todo.description
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    : true
                )
                .map((todo: TODO) => (
                  <li
                    key={todo.id}
                    id={"todo-" + todo.id}
                    className="flex items-center justify-between px-4 py-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                  >
                    <span
                      className="text-lg text-gray-700 w-full"
                      onClick={() => {
                        setTodo(todo);
                        setViewModal(true);
                      }}
                    >
                      {todo.title}
                    </span>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="px-4 py-1 text-gray-500 hover:text-gray-700"
                        onClick={() => {
                          setTodo(todo);
                          setOpen(true);
                        }}
                      >
                        Edit
                      </button>
                      <span className="mx-2">|</span>
                      <button
                        type="button"
                        className="px-4 py-1 text-red-500 hover:text-red-700"
                        onClick={async () => await deleteATodo(todo.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              {todos.length === 0 && (
                <li className="px-4 py-2 text-gray-500 flex flex-col items-center">
                  <Image src={EmptyJPG} alt="empty" width={200} height={200} />
                  <p>No todos found</p>
                </li>
              )}
            </ul>
          </div>
          <TodoForm
            todo={todo}
            setTodo={setTodo}
            open={open}
            setOpen={setOpen}
            handleSubmit={!todo.id ? createATodo : updateATodo}
          />
          <TodoDetails {...todo} open={viewModal} setOpen={setViewModal} />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
