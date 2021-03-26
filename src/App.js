import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io("localhost:3001");

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('hi');
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    socket.on('message', (data) => {
      console.log(data);
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
