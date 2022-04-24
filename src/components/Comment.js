import "./Comment.css";
import "../App.css";

const Comment = () => {
  return (
    <div className="comment-con flex-con-row">
      <img
        className="comment-profile"
        alt="profile"
        src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/201969004_2814573422187954_5002808462566942689_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JIexLHTG48kAX9Gt-Y4&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT8SRygiINvIzuIE4NISm4gpKu_awJnOgihr3cfLxSmcYA&oe=62605D70"
      ></img>
      <div className="content-con">
        <div className="name">พิชชาภา เวียงทอง</div>
        <div className="content">สุดยอดเลยค่ะ</div>
      </div>
    </div>
  );
};

export default Comment;
