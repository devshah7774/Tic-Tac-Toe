import { Button } from "antd";
// import { useEffect, useState } from "react";

interface Props {
  // combi: [number, number, number];
  value: string;
  index: number;
  handleClick: (index: number) => void;
}

const styles = {
  square: {
    display:"flex",
    justifyContent:"center",
    width:"120px",
    height:"120px",
    background:"transparent",
    border:"5px solid white",
    borderRadius:"10px",
    fontSize: "50px",
    fontWeight: "bold",
  },    
};

function Square(props:Props){
  // const [ifLine, setIfLine] = useState<boolean>(false);

  // useEffect(() => {
  //   for(let i=0; i<3; i++){
  //     if(props.combi[i]===props.index){
  //       setIfLine(true);
  //       props.handleClick(props.index);
  //     }
  //   }console.log(props.combi);
  // }, [props]);

  return (
    // <div style={{background:`${ifLine?'aqua':'transparent'}`}}>
      <Button style={styles.square} onClick={() => props.handleClick(props.index)}>
      {props.value}
    </Button>
    // </div>
  );
}

export default Square;