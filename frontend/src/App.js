import React, { use } from 'react';  // Fix: Import React
import { useState } from 'react';
import './App.css';

// feedback at bottom ensures its true
function App() {

  const [thoughts,setThought] = useState('')
  return (
    <div className="App">
      <h2>שלום אלכס</h2>
   <DailyThought thoughts={thoughts} setThought={setThought} />    
    </div>
  );
}
function DailyThought({ thoughts, setThought }) {
  const [feedback,setFeedback] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting thought:", thoughts);
  
    try {
      const response = await fetch('http://localhost:4000/submit-thought', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ thought: thoughts }) //passing key value pair key is though value is thoughts   
      });
  
  
      const result = await response.json();
      setFeedback(result.message)
      console.log("Response from server:", result.message);
      alert(result.message);

    } catch (error) {
      console.error('Error submitting thought:', error.message);
      alert('Failed to submit thought');
    }
  };
  
  return (  
  <form onSubmit={handleSubmit}>
    <label>
    מה למדתה היום
    <input
    type="text"
     name="daily_input"
     value={thoughts}
     onChange={(e) => setThought(e.target.value)}
    />
    <button>
      Submit!
    </button>
    
    {feedback && (
        <div style={{ marginTop: '20px' }}>
          <label>Feedback from AI:</label>
          <textarea
            value={feedback}
            readOnly
            rows={4}
            style={{ width: '100%' }}
          />
        </div>
      )}

   


    </label>
  </form>
  )
}


export default App;



