import { useState, useEffect } from "react";
// we want to use another hook called useParams which is used to pass parameters to the URL to make our component more dynamic.
import { useParams } from "react-router-dom";

export default function Definition() {
  const [word, setWord] = useState('');
  let { search } = useParams();
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
        console.log(data[0].meanings)}
      
      ); 
  }, []);
  return (
    <>
      <h1>Here is a Definition:</h1>
      {word ? word.map((e) => { 
        return (
          <p>
            {e.partOfSpeech + ': '}
            {e.definitions[0].definition}
          </p>
        );
        })
        : null} 
    </>
  );
}
// we learnt how to display data from an API using the useEffect hook]
// fetch is one way of making request in react so we will use it to make a request to an API

// NOTE
// the fetch api method is actually a promise function
// While using fetch method, you can either use it in an async function syntax or use it in a pure promise syntax which will be preferred in the course of my study