import './App.css';
import react, {useState} from 'react';
import Subject from './components/subject';

function App() {

  const [ subjectsState, setSubjectsState ] = useState({
    subjects: [
      { id: 1, title: "Web App Development", year: 3, lecturer: "Rosanne Birney" },
      { id: 2, title: "Digital Graphic Design", year: 3, lecturer: "Sinead O' Riordan" },
      { id: 3, title: "NoSQL Databases", year: 3, lecturer: "T.J. McDonald" },
      { id: 4, title: "Multimedia Networks", year: 3, lecturer: "Lucy White" }
    ]
  });

  return (
    <div className="container">
      <h1>Hi, I'm a React App</h1>
        {subjectsState.subjects.map((subject, index) => {
            return <Subject 
              title={subject.title}
              year={subject.year}
              lecturer={subject.lecturer}
              key={subject.id}
            >
            Read more about this subject...
            </Subject>
          })}
    </div>
  );
}

export default App;
