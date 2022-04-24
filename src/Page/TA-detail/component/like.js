import nonstaricon from "../../../assets/icon/nonstar.png";

const Like = () => {
  return (
    <div className="absolute flex-con-row w-20 -right-[15px] -bottom-[35px]">
        <img className="w-7" src={nonstaricon} alt="nonstar"></img>
        <div className="text-text ">12</div>
    </div>
  );
};

export default Like;
