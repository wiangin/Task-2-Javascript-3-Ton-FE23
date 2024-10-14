import React from "react";
import "../style/BoardStyle.css";
import Cell from "./Cell";
import { v4 as uuidv4 } from 'uuid';

export default class Board extends React.Component{

    objArray;

    constructor(props){
        super(props)
        
        this.objArray = props.gameBoard(25,7);
  
    }

    callbackFunc = (dataFromCell) => {
        console.log("obj from Cell",dataFromCell);
        
    }
    render(){
        return(
            <div className="cell-container">
             {this.objArray.map((element) => {return <Cell onClick={this.callbackFunc}
                key={uuidv4()} 
                cell={element}/>})}
            </div>
        )
    }
}