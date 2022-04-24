import { useState, useEffect } from "react";

const Comment_Input = (props) => {
  const [datacomment, setComment] = useState("");
  const [formvalid, setformvalid] = useState(false);
  const { data } = props;
  const inputComment = (event) => {
    setComment(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    props.onAddItem(datacomment);
    setComment("");
  };
  useEffect(() => {
    const checkData = datacomment.trim().length > 0;
    setformvalid(checkData);
  }, [datacomment]);
  return (
    <div className="mt-10">
      <div className="text-text font-bold">คอมเมนท์ TA '{data.name}'</div>
      <form onSubmit={saveItem} className="flex flex-col">
        <textarea
          className="p-3 resize-none flex-con-row outline-none border-line border-solid border-2 w-[360px] h-[100px] rounded-md mt-3 text-text font-medium lg:w-[400px] xl:w-[500px]"
          onChange={inputComment}
          value={datacomment}
        ></textarea>
        <button
          disabled={!formvalid}
          type="submit"
          className="self-end text-secondary w-28 h-8 border-secondary border-solid border-2 rounded-md mt-3 right-0 hover:bg-secondary hover:border-none hover:text-button"
        >
          คอมเมนท์
        </button>
      </form>
    </div>
  );
};

export default Comment_Input;
