import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CurvedBlock from "../../components/CurvedBlock";
import { createTask } from "../../features/taskLists/taskListsReducer";

type FormData = {
  description: string;
  time: string;
};

const NewTaskFormBlock = ({ className }: { className?: string }) => {
  // will need to figure out a way to redirect if no taskListId provided

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    state: { taskListId },
  } = useLocation();
  const { register, handleSubmit } = useForm<FormData>();

  const submitData = (data: FormData) => {
    const { description, time } = data;
    dispatch(createTask({ taskListId, description, time }));
    navigate(`/tasklists/read/${taskListId}`);
  };

  return (
    <>
      <CurvedBlock
        className={twMerge(
          `after:content-none bg-black flex-grow text-white`,
          className
        )}
      >
        <form
          className={`flex flex-col gap-4`}
          onSubmit={handleSubmit(submitData)}
        >
          <label htmlFor="description" className={``}>
            What are you planning?
          </label>
          <textarea
            {...register("description")}
            className={`bg-black border-b border-white`}
          />
          <div className={`flex gap-4 mt-8 items-center`}>
            <label htmlFor="time" className={`flex-1`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </label>
            <input
              type="datetime-local"
              style={{ colorScheme: "dark" }}
              {...register("time")}
              className={`flex-[90%] bg-black`}
            />
          </div>
          {/* <div className={`flex gap-4 items-center`}>
            <label htmlFor="description" className={`flex-1`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </label>
            <input
              type="note"
              {...register("note")}
              placeholder="Add note"
              className={`flex-[90%] bg-black`}
            />
          </div> */}
          <button
            className={`px-12 py-4 bg-purple-800 rounded-3xl w-fit self-end`}
          >
            Create
          </button>
        </form>
      </CurvedBlock>
    </>
  );
};

export default NewTaskFormBlock;
