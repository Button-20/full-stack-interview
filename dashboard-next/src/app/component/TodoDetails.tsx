import { XMarkIcon } from "@heroicons/react/20/solid";

const TodoDetails = ({
  id,
  title,
  description,
  estimated_time,
  open,
  setOpen,
}: {
  id: string;
  title: string;
  description: string;
  estimated_time: number;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className={open ? "block" : "hidden"}>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &8203;
          </span>

          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Todo Details
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <dl className="mt-4 space-y-6">
                <div className="flex">
                  <dt className="text-lg font-bold text-gray-500">Title:</dt>
                  <dd className="ml-4 text-xl text-gray-900">{title}</dd>
                </div>
                <div className="flex">
                  <dt className="text-lg font-bold text-gray-500">
                    Description:
                  </dt>
                  <dd className="ml-4 text-xl text-gray-900">{description}</dd>
                </div>
                <div className="flex">
                  <dt className="text-lg font-bold text-gray-500">
                    Estimated Time (in minutes):
                  </dt>
                  <dd className="ml-4 text-xl text-gray-900">
                    {estimated_time}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
