import "../App.css";



export default function Greetings({ lang, children }) {
    let greetingText = '';
  
    if (lang === 'de') {
      greetingText = `Hallo ${children}!`;
    } else if (lang === 'en') {
      greetingText = `Hello ${children}!`;
    } else if (lang === 'es') {
      greetingText = `¡Hola ${children}!`;
    } else if (lang === 'fr') {
      greetingText = `Bonjour ${children}!`;
    } else {
      greetingText = `Hello ${children}!`;
    }
    
   /* return (
    {lang === 'de' && <p>`Hallo ${children}!`</p>};
    {lang === 'en' && <p>`Hello ${children}!`</p>};
    {lang === 'es' && <p>`¡Hola ${children}!`</p>};
    {lang === 'fr' && <p>`Bonjour ${children}!`</p>};
   ) */ return <p>{greetingText}</p>;
  }