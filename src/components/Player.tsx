import { useEffect, useState } from "react";
import { findWinner } from "../logics/findWinner";
import Square from './../../public/Square'
import "./Player.css"

interface Props {
  gameStatus: string;
  setGameStatus: (val: string) => void;
}

const styles = {
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
};

export function Player(props:Props){
  const setGameStatus = props.setGameStatus;
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState<string>("X");
  // const [combination, setCombination] = useState<[number, number, number]>([-1, -1, -1]);

  useEffect(()=>{
    const res = findWinner(board);
    const getWinner = res[0];
    // const combi: [number, number, number] = [res[1], res[2], res[3]];

    if(getWinner){
      localStorage.setItem("winner", getWinner);
      setGameStatus("finished");
      return;
    } else {
      const data = board.every((v)=>v!=="");
      if(data){
        localStorage.setItem("winner", getWinner);
        setGameStatus("finished");
        return;
        // setCombination(combi);
        // console.log(combi, "here")
      }
      return;
    }
  },[board, setGameStatus]);

  const handleClick = (index:number):void =>{
    if(index<0 || index>9 || board[index]!="")return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === "X" ? "O" : "X";
    setTurn(newTurn);
  }

  return (<div style={{display:"flex", justifyContent:"center"}}>
    <div style={{display:"flex", justifyContent:"column", marginTop:"100px", backgroundImage: "url('/ticback.jpg')", backgroundSize:"100% 100%", padding:"3%"}}>
      
      <div className={`close ${turn === "X" ? 'blue-bg' : ''}`}></div>
      
      {/* -----------------BUILDING THE BOARD-------------- */}
      <div style={styles.board}>
      {board.map((value, index) => {
        return (
          <Square
            // combi={combination}
            value={value}
            index={index}
            handleClick={handleClick}
          />
          );
        })}
    </div>

    <div className={`cirBack ${turn === "O" ? 'blue-bg' : ''}`}>
      <div className="closie"></div>
    </div>
  
  </div>
  </div>
  );
}