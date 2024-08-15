import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";

function App() {
  const sendTest = () => {
    fetch("http://localhost:3000/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("error sending test get request", error));

    console.log("test sent");
  };

  return (
    <>
      <button onClick={sendTest}>test route</button>

      <MainRoutes />
      {/*
  <nav>
    <ul>
      <li><Link to="/SignUpPage">signup</Link></li>
      <li><Link to="/LogInPage" >Login</Link></li>
    </ul>
  </nav>
  <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolore incidunt repellendus harum atque eum saepe commodi quae optio itaque sed nam, officia ab fugiat provident, quod laboriosam cum beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus accusantium officiis sequi. Amet quas nisi quasi sapiente quis quaerat dolorum temporibus corrupti libero aliquid? Fugiat quam tempora quasi dolor! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate tempore maiores repellendus vitae, neque cumque nostrum nesciunt, corporis voluptatibus dicta aspernatur aliquid aperiam praesentium quisquam magnam quidem repellat quod nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab velit laboriosam veritatis magni modi dolores libero atque facilis omnis eveniet fugiat id obcaecati, ea possimus repellat voluptatibus, maiores officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi magnam aliquam natus hic, et maxime doloremque exercitationem dicta fugit inventore repellendus, eveniet aliquid commodi. Ullam nostrum incidunt dolores possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate repellat perspiciatis cum minima repudiandae blanditiis debitis similique recusandae maxime amet dolores pariatur omnis sapiente molestias ab, veniam fugiat tenetur.</h1>
  */}
    </>
  );
}

export default App;
