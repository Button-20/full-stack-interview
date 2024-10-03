import { TODO } from "@/shared/models/todo";
import { XMarkIcon } from "@heroicons/react/20/solid";

const TodoForm = ({
  todo,
  setTodo,
  open,
  setOpen,
  handleSubmit,
}: {
  todo: TODO;
  setTodo: any;
  open: boolean;
  setOpen: any;
  handleSubmit: () => Promise<void>;
}) => {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={handleClose}
          ></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          onClick={handleOpen}
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex items-center justify-between mb-4 w-full border-b pb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                TODO Form
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                value={todo.title}
                onChange={(e) =>
                  setTodo((prev: TODO) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Title"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                id="description"
                value={todo.description}
                onChange={(e) =>
                  setTodo((prev: TODO) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Description"
              />
            </div>
            <div className="mt-2">
              <div className="mt-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="completion_date"
                >
                  Estimated Time (in minutes)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="completion_date"
                  type="number"
                  placeholder="Estimated Time"
                  value={todo.estimated_time}
                  onChange={(e) =>
                    setTodo((prev: TODO) => ({
                      ...prev,
                      estimated_time: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleSubmit}
              >
                {todo.id ? "Update TODO" : "Create TODO"}
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
