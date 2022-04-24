import ProfileCard from "./component/profile-card";
import Comment_Input from "./component/comment-input";
import CommentCard from "./component/comment-card";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TA_detail = () => {
  const initdata = {
    pic: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t31.18172-8/12339081_10203830842209825_2022223518266037990_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Pt4-D8RPP-YAX8KOOyB&tn=N8A3TzvFbg1a5Aq2&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT9B5k2bPFeVrt7JjKvyJ17FnjdxJy7Lo5JEb2aggz-BmA&oe=626F5202",
    name: "ปิยชัย แก้วชุ่ม",
    stdID: "63010604",
    department: "โทรคมนาคม",
    email: "piyachai.k@kmitl.ac.th",
    like: "12",
  };
  const user = {
    pic: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/277571939_3017520665226561_1835127875252847760_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFXlvLDqV1Zn5DXTjnqq-JUBtuh57Kv0woG26Hnsq_TCl4STjppfx5kWe003kZnm8QUelk-ToLAj1P_6B1h5dfC&_nc_ohc=2a9tenT5NY4AX_mPCP1&_nc_ht=scontent.fbkk5-6.fna&oh=00_AT_4vZUn6JX4gRKtQwJGYnA5McmhZVfvKtuQ9yQuHt4e7w&oe=625A8B56",
    name: "พิชชาภา เวียงทอง",
  };
  const [item, setItem] = useState([]);
  const onAddNewItem = (newItem) => {
    setItem((e) => [...e, newItem]);
    console.log(item);
  };
  return (
    <>
      <div className="h-[80px] w-full bg-line"></div>
      <div className="flex-con-col w-full 2md:flex-con-row">
        <ProfileCard data={initdata} />
        <div className="mb-20 2md:flex 2md:flex-col 2md:ml-10 lg:ml-20 xl:ml-40">
          <Comment_Input data={initdata} onAddItem={onAddNewItem} />
          <div className="flex flex-col items-start w-[360px] lg:w-[400px] xl:w-[500px]">
            <div className="left-0 text-xl text-text font-bold">
              คอมเมนท์ของคุณ ({item.length})
            </div>
            <div className="h-0.5 w-full bg-line my-3"></div>
            {item.map((comment) => (
              <CommentCard
                data_user={user}
                data_comment={comment}
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TA_detail;
