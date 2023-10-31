import type { RadioChangeEvent } from "antd";
import { Radio, Button, Space } from "antd";
import "./Start.css"

interface Props {
   gameStatus: string;
   setGameStatus: (val: string) => void;
   player: string;
   setPlayer: (val: string) => void;
   letter: string;
   setLetter: (val: string) => void;
 }

 const styles = {
   letterButton: {
     fontWeight: "bold",
     backgroundColor:"transparent",
     border:"10px solid brown",
     fontSize: "80px",
     width: "150px",
     marginLeft:"25px",
     marginRight:"25px",
     paddingTop:"10px",
     paddingBottom:"40px",
     marginTop:"0px",
     height:"85px",
    },
  playerButton: {
    fontWeight: "bold",
    backgroundColor:"#746b5b",
    border:"10px solid brown",
    fontSize: "40px",
    width: "290px",
    marginLeft:"25px",
    marginRight:"25px",
    paddingTop:"10px",
    paddingBottom:"40px",
    marginTop:"0px",
    height:"85px",
   },
   startButton: {
     marginTop: "55px",
     fontSize:"50px",
     fontWeight: "bold",
     width: "350px",
     height: "150px",
   },
 };

export function Start(props:Props){
   const handleLetterChange = (event: RadioChangeEvent):void => {
      props.setLetter(event.target.value);
   }
   
   const handlePlayerChange = (event: RadioChangeEvent): void => {
      if(event.target.value==="normal" || event.target.value==="genius")alert("coming soon")
      props.setPlayer(event.target.value);
   };
  
   const handleStartGame = () => {
      props.setGameStatus("playing");
   };

   return(
      <>
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
   <div className="wrapper">
      <div className="bg"> Choose Letter </div>
      <div className="fg"> Choose Letter </div>
   </div>

      <Radio.Group
        buttonStyle="solid"
        size="large"
        onChange={handleLetterChange}   
      >
         <Space direction="vertical">
          <div style={{display:"flex", justifyContent:"center"}}>
          <Radio.Button style={styles.letterButton} value="X">
            X
          </Radio.Button>
          <Radio.Button style={styles.letterButton} value="O">
            O
          </Radio.Button>
          </div>
        </Space>
      </Radio.Group>

      {props.letter && (
        <div className="wrapper">
        <div className="bg"> Choose Opponent </div>
        <div className="fg"> Choose Opponent </div>
        </div>
      )}

      {props.letter && (
        <Radio.Group buttonStyle="solid" onChange={handlePlayerChange}>
          <Space direction="vertical">
          <div style={{display:"flex", justifyContent:"center"}}>
          <Radio.Button style={styles.playerButton} value="player">
            Player
          </Radio.Button>
          <Radio.Button style={styles.playerButton} value="normal">
            Normal Bot
          </Radio.Button>
          <Radio.Button style={styles.playerButton} value="genius">
            Genius Bot
          </Radio.Button>
          </div>
        </Space>
        </Radio.Group>
      )}

      {props.letter && props.player && (
        <Button
          style={styles.startButton}
          type="primary"
          danger
          size="large"
          onClick={handleStartGame}
        >
          Start Game!!
        </Button>
      )}

   </div>
   </>
   )
}