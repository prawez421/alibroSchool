import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './page/home/Hero';
import Nav from './components/Nav'
import LangSection from './page/home/LangSection';
import CardsGrid from './page/home/CardsGrid';
import HtmlHome from './page/HtmlTutorial/HtmlHome';
import HtmlIntroduction from './page/HtmlTutorial/HtmlIntroduction'





const Home = ({ htmlCode, cssCode, jsCode }) => (
  <>
    <Hero />
    <LangSection title="HTML" subtitle="The Language for Building Web Pages" bg="bg-[#D9EEE1]" code={htmlCode} demoLink="https://onecompiler.com/html/44kbj9r7g" />
    <LangSection title="CSS" subtitle="The Language for Styling Web Pages" bg="bg-[#FFF4A3]" code={cssCode} demoLink="https://onecompiler.com/html/3wx7252uq" />
    <LangSection title="JAVASCRIPT" subtitle="The Language for Programming Web Pages" bg="bg-[#282A35] text-white" code={jsCode} demoLink="https://onecompiler.com/html/44kbj4zm2" />
    <CardsGrid />
  </>
);



function App() {
  const htmlCode = `<!DOCTYPE html>\n<html>\n<head>\n<title>HTML Tutorial</title>\n</head>\n<body>\n<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n</body>\n</html>`;
  const cssCode = `body {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n}`;
  const jsCode = `<button onclick="myFunction()">Click Me!</button>\n\n<script>\nfunction myFunction() {\n  let x = document.getElementById("demo");\n  x.style.fontSize = "25px";\n  x.style.color = "red";\n}\n</script>`;

  return (
    <div className="font-['Montserrat'] min-h-screen flex flex-col bg-white">
      <Header />
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />} />
          <Route path="/htmlHome" element={<HtmlHome />}> </Route>
          <Route path="/htmlIntroduction" element={<HtmlIntroduction />}></Route>
         
        </Routes>
      
      </main>
      <Footer />
      
    </div>
  );
}

export default App;