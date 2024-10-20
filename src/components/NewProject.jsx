import { useRef } from "react";
import Input from "./Input.jsx";

const NewProject = () => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSaveInputData = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50"
            onClick={handleSaveInputData}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due date" />
      </div>
    </div>
  );
};

export default NewProject;
