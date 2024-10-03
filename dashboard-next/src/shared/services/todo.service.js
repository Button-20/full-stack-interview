import { del, get, post, put } from "../core/requests";

export const createTodo = async (data) => {
  try {
    const resp = await post("/todos", { data });
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const resp = await get("/todos");
    return resp;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const resp = await del(`/todos/${id}`);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (id, data) => {
  try {
    const resp = await put(`/todos/${id}`, { data });
    return resp;
  } catch (error) {
    throw error;
  }
};
