import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Hide from './Hide/Hide.jsx';
import axios from 'axios';
import Quiz from 'react-quiz-component';
import Confetti from 'react-confetti';


function App() {
  let [record, setRecord] = useState([
    {
      id: Math.random(),
      title: 'Объект',
      record: '— это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем. Значением свойства может быть функция, которую можно назвать методом объекта. В дополнение к встроенным в браузер объектам, вы можете определить свои собственные объекты.'
    }
  ]);

  let [newTitle, setNewTitle] = useState();
  let [newRecord, setNewRecord] = useState();

  const quiz = {
    "quizTitle": "React Quiz Component Demo",
    "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
    "nrOfQuestions": "4",
    "questions": [
      {
        "question": "How can you access the state of a component from inside of a member function?",
        "questionType": "text",
        "questionPic": "https://dummyimage.com/600x400/000/fff&text=X",
        "answerSelectionType": "single",
        "answers": [
          "this.getState()",
          "this.prototype.stateValue",
          "this.state",
          "this.values"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "20"
      },
      {
        "question": "ReactJS is developed by _____?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Google Engineers",
          "Facebook Engineers"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "20"
      },
      {
        "question": "ReactJS is an MVC based framework?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "10"
      },
      {
        "question": "Which of the following concepts is/are key to ReactJS?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "Component-oriented design",
          "Event delegation model",
          "Both of the above",
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "30"
      },
      {
        "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        "questionType": "photo",
        "answerSelectionType": "single",
        "answers": [
          "https://dummyimage.com/600x400/000/fff&text=A",
          "https://dummyimage.com/600x400/000/fff&text=B",
          "https://dummyimage.com/600x400/000/fff&text=C",
          "https://dummyimage.com/600x400/000/fff&text=D"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "20"
      },
      {
        "question": "What are the advantages of React JS?",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "React can be used on client and as well as server side too",
          "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
          "React components have lifecycle events that fall into State/Property Updates",
          "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
        ],
        "correctAnswer": [1, 2, 4],
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "point": "20"
      },
    ]
  }; 

  useEffect(() => {
    const getRecord = async () => {
      let data = await axios ({
        method: 'get',
        url: 'https://64fc5056605a026163ae5cee.mockapi.io/records',
        withCredentials: false,
      });

      console.log('data: ', data.data);
      setRecord(data.data);
    };
    getRecord();

    // let recordLoc = localStorage.getItem('myCards');
    // setRecord(JSON.parse(recordLoc) || []);
  }, []);

  return (
    <div className='record__container'>
      <div className='record__quiz'>
        <Quiz quiz={quiz}/>
      </div>

      <Confetti/>

      <h2 className='record__title'>Code Diary: Exploring JavaScript Daily</h2>
      <p className='record__new'>Add new record for JS</p>
      <input className='record__input__title' type='text' placeholder='enter new title' value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}></input>
      <input className='record__input__text' type='text' placeholder='enter new record' value={newRecord}
        onChange={(event) => {
          setNewRecord(event.target.value);
        }}></input>
      <button className='record__button'
        onClick={() => {
          setRecord([
            ...record,
            {
              id: Math.random(),
              title: newTitle,
              record: newRecord
            },
          ]);

          localStorage.setItem('myCards', JSON.stringify( [
            ...record, 
            {
              id: Math.random(),
              title: newTitle,
              record: newRecord
            },            
          ])); 
        }}>add</button>
      
      <p className='records__subtext'>Records</p>

      <div className='records__cards'>
        {
          record.map((item) => <Hide record={record} item={item} setRecord={setRecord}/>)
        }
      </div>

    </div>
  );
}

export default App;
