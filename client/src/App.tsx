import { useEffect } from "react";

const port = import.meta.env.VITE_PORT || 5000;

function App() {
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    await fetch(`${import.meta.env.VITE_BASE_URL}${port}/api/auth/user`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Login with steam</h1>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href={`${import.meta.env.VITE_BASE_URL}${port}/api/auth/steam`}>
          <img src="/steamBtn/button2.png" />
        </a>
        <a href={`${import.meta.env.VITE_BASE_URL}${port}/api/auth/steam`}>
          <img src="/steamBtn/button1.png" />
        </a>
      </section>

      <div className="textsInfo">
        <p>steam login with nodejs save data user given data to server.</p>
      </div>
    </>
  );
}

export default App;
