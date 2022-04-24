import error from "../../assets/img/error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="w-full h-full flex-con-col overflow-hidden absolute sm:flex-con-row"
    >
      <div className="w-full flex-con-col xs:w-4/5">
        <img src={error} alt="404 error"></img>
      </div>
      <div className="flex-con-col w-[60%]">
        <div className="text-3xl 2md:text-4xl lg:text-5xl">
          เกิดข้อผิดพลาด
        </div>
        <div className="w-8/12 h-1 bg-line m-2 2md:m-4 lg:m-5"></div>
        <div className="text-lg 2md:text-2xl lg:text-3xl">
          ไม่พบหน้าที่คุณต้องการค้นหา
        </div>
        <Link
          className="flex-con-col text-sm bg-[#007cff] text-line w-28 h-9 border-none mt-5 duration-75 rounded-md 
          hover:bg-line hover:text-[#007cff] hover:border-2 hover:border-[#007cff] hover:border-solid 
          2md:text-lg 2md:w-32 2md:h-11 2md:mt-12
          lg:text-2xl lg:w-40 lg:h-14"
          to="/"
        >
          ย้อนกลับ
        </Link>
      </div>
    </div>
  );
};

export default Error;
