import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const greeting = "Hello";
  const [data, setData] = useState(greeting)
const changeGreeting = (event) =>{
     setData(event.target.value)
}
  return (
    <UserContext.Provider value={{ greeting, changeGreeting, data }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };
