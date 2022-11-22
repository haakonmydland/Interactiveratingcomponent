import Card from "./components/Card";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Card
        title="How did we do?"
        paragraph="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        endTitle="Thank you!"
        endParagraph="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
      />
    </div>
  );
}

export default App;
