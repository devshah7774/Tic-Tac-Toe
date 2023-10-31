import { useState } from 'react'
import { Start } from './components/Start';
import './App.css'
import { Player } from './components/Player';
import Finish from './components/Finish';

function App() {
  
  const [gameStatus, setGameStatus] = useState<string>("started");
  const [player, setPlayer] = useState<string>("");
  const [letter, setLetter] = useState<string>("");

  return (
    <>
    <div className="App">
      {gameStatus === "started" && (
        <Start
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          player = {player}
          setPlayer = {setPlayer}
          letter = {letter}
          setLetter = {setLetter}
        />
      )}
      {gameStatus === "playing" && player === "player" && (
        <Player gameStatus={gameStatus} setGameStatus={setGameStatus} />
      )}
      {/* {gameStatus === "playing" && player === "normal" && (
        <Normal
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          letter={letter}
        />
      )}
      {gameStatus === "playing" && player === "genius" && (
        <Genius
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          letter={letter}
        />
      )} */}
      {gameStatus === "finished" && (
        <Finish
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          player={player}
          setPlayer={setPlayer}
          letter={letter}
          setLetter={setLetter}
        />
      )}

    </div>
    </>
  )
}

export default App
