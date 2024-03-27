import Button from "./components/Button/Button";
import { IoPersonAddSharp } from "react-icons/io5";

function App() {
  const handleClick = () => console.log("Clicked");
  const color = "Primary";
  const icon = "IoPersonAddSharp";

  return (
    <div>
      <Button onClick={handleClick} color={color} icon={IoPersonAddSharp}>
        Add Contact
      </Button>
    </div>
  );
}

export default App;
