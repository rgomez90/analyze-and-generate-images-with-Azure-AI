import React from 'react';

function App() {
  const value = 'World';
  return <div>
    <h2>Hello {value}</h2>
    <p>Insert URL, or type prompt</p>
    <input type="text" />
    <button>Analyze</button>
    <button>Generate</button>
    </div>;
}

export default App;
