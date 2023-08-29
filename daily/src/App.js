import {useState} from 'react';
import './App.css';
import Hide from './Hide/hide.jsx';
// import Records from './Records.js';

function App() {
  let [record, setRecord] = useState([
    {
      id: Math.random(),
      title: 'Объект — это набор свойств,',
      record: 'и каждое свойство состоит из имени и значения, ассоциированного с этим именем. Значением свойства может быть функция, которую можно назвать методом объекта. В дополнение к встроенным в браузер объектам, вы можете определить свои собственные объекты.'
    }
  ]);

  let [newRecord, setNewRecord] = useState();

  return (
    <div className='record__container'>
      <h2 className='record__title'>Code Diary: Exploring JavaScript Daily</h2>
      <p className='record__new'>Add new record for JS</p>
      <input className='record__input' type='text' placeholder='enter new record' value={newRecord}
        onChange={(event) => {
          setNewRecord(event.target.value);
        }}></input>
      <button className='record__button'
        onClick={() => {
          setRecord([
            ...record,
            {
              id: Math.random(),
              title: newRecord,
              record: newRecord
            }
          ])
        }}>add</button>
      
      <p className='records__subtext'>Records</p>
      <div className='records__cards'>
        {
          record.map((item) => <Hide data={item}/>)
        }
      </div>
    </div>
  );
}

export default App;
