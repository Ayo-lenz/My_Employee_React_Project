import { useState, useEffect } from "react";
// we want to learn another hook called useNavigate: it allows us to force the user to visit a new page in our application
import { useNavigate } from "react-router-dom";

export default function Dictionary() {
  const [word, setWord] = useState('')
  // const [word2, setWord2] = useState('')

  // useEffect helps keep track of any side effects in our code
  // useEffect is better place after the state variable 
  // useEffect takes in two arguments first is no dependency array which updates for any state change and the second which is the dependency array which limit what state useEffect cares about

  {/*
  useEffect(() => {
    console.log('State updated', word + '' + word2);
  }, [word]);*/}

  const navigate = useNavigate();

  return (
    <>
      <input 
        className="bg-primary"
        type="text" 
        onChange={(e) => {
        setWord(e.target.value);
        }} 
      />
      
      {/* <h2>What's the definition for {word}</h2>
      <input 
        className="bg-primary"
        type="text" 
        onChange={(e) => {
        setWord2(e.target.value);
        }} 
      />
      <h2>What's the definition for {word2}</h2> */}
      <button onClick={ () => {
        navigate('/My_Employee_React_Project/definition/' + word)
      }}>Search</button>
      
    </>
  )
}

// no dependency array updates for any state change
// Empty depencency array executes once --- if you want to do something on an initial page load, after everything is loaded and set up properly then you can exeute some code