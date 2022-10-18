import "./App.css";
import { NavLink, useParams } from "react-router-dom";

const data = [
  {
    image: "beatles",
    src: "https://www.billboard.com/wp-content/uploads/media/the-beatles-1964-650a.jpg?w=650&h=430&crop=1",
  },
  {
    image: "vocals",
    src: "https://faroutmagazine.co.uk/static/uploads/2020/10/This-was-why-George-Harrison-didnt-like-being-a-member-of-The-Beatles.jpg",
  },
  {
    image: "drums",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMAd8hRm6I0B83RTXOfI5iDQ2j752hFu4XF9Fuwu_4Fm9cpbdUdHthk_JVTG4Ga4u5Qg&usqp=CAU",
  },
  {
    image: "guitar",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYclsIGXdAKJTkeTHoxRZoXpquWQssEt2sw&usqp=CAU",
  },
  {
    image: "bass",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJW63NZrUUaVAzRAKS4L5S9WwKfiHC7jkvw&usqp=CAU",
  },
];

const App = () => {
  const { role } = useParams();

  const currImg = data.filter((el) => el.image === role)[0];

  console.log(currImg);

  return (
    <div>
      <NavLink activeclassname="active" end className="link" to="/beatles">
        <h1>The Beatles</h1>
      </NavLink>

      <ul className="list">
        <NavLink className="link" to="/vocals">
          <li className="list-items">VOCALS</li>
        </NavLink>
        <NavLink className="link" to="/drums">
          <li className="list-items">DRUMS</li>
        </NavLink>
        <NavLink className="link" to="/guitar">
          <li className="list-items">GUITAR</li>
        </NavLink>
        <NavLink className="link" to="/bass">
          <li className="list-items">BASS</li>
        </NavLink>
      </ul>

      <img src={currImg.src} alt="" />
    </div>
  );
};

export default App;
