import React from 'react';
import analizeImage from './azure-image-analysis';



function App() {

  const [inputContent, setInputContent] = React.useState('');
  const [result, setResult] = React.useState('');

  function onAnalize() {
    analizeImage(inputContent).then((result) => {
      setResult(result);
    }
    );
  }

  return <div>
    <h2>Computer Vision</h2>
    <p>Insert URL, or type prompt</p>
    <input type="text" value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
    <button onClick={onAnalize}>Analyze</button>
    <button>Generate</button>
    <div>
      {result}
    </div>
  </div>;
}


export default App;
