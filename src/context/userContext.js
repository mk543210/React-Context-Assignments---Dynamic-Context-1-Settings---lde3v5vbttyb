import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const greeting = "Hello";
const [data, setData] = useState(greeting)
const changeGreeting = (e) =>{
  setData(e.target.value)
}
  return (
    <UserContext.Provider value={{ greeting, data, changeGreeting }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };
