import "../App.css";

export default function Random({max, min }) {
  let randomNumber = Math.random() * (max - min) + min;
  return <p>The random number is: {Math.floor(randomNumber)}</p>;
}
