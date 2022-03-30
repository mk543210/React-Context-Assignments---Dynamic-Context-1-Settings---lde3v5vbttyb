import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const greeting = "Hello";
  const [state, setState] = useState(greeting);

  const changeGreeting = (data) => {
    setState(data);
    console.log(data);
  };

  return (
    <UserContext.Provider value={{ greeting: state, changeGreeting }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };
