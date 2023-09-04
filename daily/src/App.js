import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Hide from './Hide/hide.jsx';

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

  useEffect(() => {
    let recordLoc = localStorage.getItem('myCards');
    console.log(recordLoc);
  });

  return (
    <div className='record__container'>
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
            }
          ]);

          localStorage.setItem('myCards', [
            ...record, 
            {
              id: Math.random(),
              title: newTitle,
              record: newRecord
            }            
          ]);
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
