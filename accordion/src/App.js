import React, { useState } from "react";
import data from "./data";
import SingleQuestions from "./Question";

function App() {
  const [questions, setquestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
