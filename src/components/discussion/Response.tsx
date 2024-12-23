import React, { useRef } from "react";
import Heading from "./Heading.tsx";
import { limitTextCharacters } from "../../helpers/helpers";

interface Props extends DiscussionResponse {}

const TopicResponse: React.FC<Props> = ({ description, references, ...props }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleOpen = () => {
    const dialogElement = dialogRef.current;
    dialogElement?.showModal();
  };

  const handleClose = () => {
    const dialogElement = dialogRef.current;
    dialogElement?.close();
  };

  return (
    <div>
      <div className="mb-8 ml-6 border-l-2 border-black pl-2">
        <Heading {...props} />
        <p className="text-sm mb-4">{limitTextCharacters(description, 250)}</p>
        <button className="text-sm py-1 mb-2 underline" onClick={handleOpen}>
          Read More
        </button>
      </div>
      <dialog ref={dialogRef}>
        <div className="p-4">
          <Heading {...props} />
          <p className="text-sm mb-4">{description}</p>
          <p className="text-sm my-2">{"References: " + references}</p>
          <button className="p-1 bg-blue-400" onClick={handleClose}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default TopicResponse;
