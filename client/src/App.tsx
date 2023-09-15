const port = import.meta.env.VITE_PORT || 5000;

function App() {
  return (
    <>
      <h1>Login with steam</h1>

      <h3>{`${import.meta.env.VITE_BASE_URL}${port}/api/auth/steam`}</h3>

      <a href={`${import.meta.env.VITE_BASE_URL}${port}/api/auth/steam`}>
        <img src="/steamBtn/button2.png" />
      </a>
      <img src="/steamBtn/button1.png" />
    </>
  );
}

export default App;
