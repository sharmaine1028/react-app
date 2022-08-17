import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={new Date()} title={"Car insurance"} amount={35} />
    </div>
  );
}

export default App;
