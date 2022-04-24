import { useState } from "react";

const HistoryWorked = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex-col items-center w-[360px] border-line border-solid border-2 rounded-md p-5">
        <div className="flex-con-row">
          <div className="text-primary w-1/2" onClick={(e) => setOpen(!open)}>
            ประวัติการทำงาน ({data.length})
          </div>
          <div className="ml-40" onClick={(e) => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.5"
              height="7.719"
              viewBox="0 0 12.5 7.719"
            >
              <path
                id="Icon_material-navigate-next"
                data-name="Icon material-navigate-next"
                d="M1.469,0,0,1.469,4.771,6.25,0,11.031,1.469,12.5l6.25-6.25Z"
                transform="translate(12.5) rotate(90)"
                fill="#465ffc"
              />
            </svg>
          </div>
        </div>

        {open && (
          <>
            {data.map((subject) => (
              <div className="mt-6 ml-4 font-medium break-all">{subject}</div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default HistoryWorked;
