import React from "react";
const Index = () => {
  const [message, setMessage] = React.useState("waiting...");
  const onClick = () => setMessage("This is a react-ssr!");
  return (
    <React.Fragment>
      <p>Hello !</p>
      <button onClick={onClick}>Click Me Delete</button>
      <p>Message from state: {message}</p>
    </React.Fragment>
  );
};
export default Index;
