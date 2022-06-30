import { useState } from 'react'
import './App.css';
import Privateparty from 'partybutton-react';
function App() {
  const [session, setSession] = useState(null)
  const [payload, setPayload] = useState({})
  return (
    <div className="App">
      <Privateparty
        role="user"
        onSession={(s) => { setSession(s) }}
        login={{
          message: "Connect with Wallet",
          style: {
            backgroundColor: "#6271A0",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer"
          }
        }}
        logout={{
          message: "Disconnect",
          style: {
            backgroundColor: "silver",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer"
          }
        }}
      />
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
export default App;
