import "../src/style.css"
import Header from "./components/header";
import SectionInrto from "./components/sectionIntro";
// import Card from "./components/card";

// const cards = [
//   {
//     title: "Basliq",
//     text: "bu bir metndir",
//   },
//   {
//     title: "Basliq",
//     text: "bu bir metndir",
//   },
//   {
//     title: "Basliq",
//     text: "bu bir metndir",
//   },
// ];

// function App() {
  // const test = cards.map((count, index) => {
  //   return <Card key={index} text={count.title} title={count.text} />;
  // });
  // return <div className="App">{test}</div>;
// }

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionInrto/>
    </div>
  );
}

export default App;
