import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const keyChange = (event) => setKeyword(event.target.value);
  console.log("callme");

  useEffect(() => {
    console.log("Run");
  }, []);
  useEffect(() => {
    if (keyword.length >= 6) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //useEffect 1つ目の引数は１回だけ実行させたい関数,でも２つ目の引数が変更したら関数が実行する

  return (
    <div>
      <input
        value={keyword}
        onChange={keyChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
