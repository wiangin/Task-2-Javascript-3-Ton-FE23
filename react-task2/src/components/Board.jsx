import React from "react";
import "../style/BoardStyle.css";
import Cell from "./Cell";
import { v4 as uuidv4 } from 'uuid';

export default class Board extends React.Component{



    constructor(props){
        super(props) 
        this.state = {
            gameBoard: props.onGameBoard(25,7)
        }
        
        // console.log(this.state);
        
    }

    callbackFunc = (dataFromCell) => {
        console.log(dataFromCell);
        
        const updateBoard = this.state.gameBoard.map(element => {
        
           if(element.index === dataFromCell.index){
               return {...element,visible : true};
           }
           return element;
        })
   
        this.setState({gameBoard: updateBoard});
    }
    render(){
        return(
            <div className="cell-container">
             {  this.state.gameBoard.map((element) => {
                return <Cell 
                            onClick={this.callbackFunc}
                            key={uuidv4()} 
                            cell={ element }
                        /> })}
            </div>
        )
    }
}