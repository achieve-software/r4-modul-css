import data from "./utils/data";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </>
  );
}

export default App;
