import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setData(data)
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      })
  }
  fetchData()


  return (
    <div className="app">
      <table border="2" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {data.map((text) => (
            <tr key = {text.id}>
              <td className='td-text1'>{text.id}</td>
              <td>{text.title}</td>
              <td>{text.completed.toString()}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default App;

