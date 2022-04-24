const CommentCard = (props) => {
  const { data } = props;
  return (
    <>
      <div className="rounded-md flex item-center px-2 py-3 mt-2 2md:bg-white">
        <img
          src={data.pic}
          alt="user-proflie"
          className="w-[55px] h-[55px] rounded-full shrink-0 ml-1/2"
        ></img>
        <div className="ml-4  flex flex-col flex-wrap">
          <div className="text-secondary font-bold">{data.name}</div>
          <div className="text-text font-medium break-all">{data.comment}</div>
        </div>
      </div>
    </>
  );
};
export default CommentCard;
