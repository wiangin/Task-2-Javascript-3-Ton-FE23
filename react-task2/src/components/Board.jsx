import React from "react";
import "../style/BoardStyle.css";
import Cell from "./Cell";
import { v4 as uuidv4 } from 'uuid';

export default class Board extends React.Component{

    constructor( props ){
        super( props ) 
        this.state = {
            gameBoard: props.onGameBoard( 25,7 )
        }
    }

    getDataFromCell = ( dataFromCell ) => { //måste andra namn på callback
        console.log(dataFromCell); 
        this.props.onMine( dataFromCell );

        const updateBoard = this.state.gameBoard.map( element => {
        
           if( element.index === dataFromCell.index ){
               return { ...element,visible : true };
           }
           return element;
        })
   
        this.setState({ gameBoard: updateBoard });
    }

    render(){
        return(
           <>   
                <div className="cell-container">
                    { this.state.gameBoard.map(( element ) => { 
                        return <Cell 
                            onClick={ this.getDataFromCell }
                            key={ uuidv4() } 
                            cell={ element }
                            onGameWin={ this.props.onGameWin }
                            onGameLose={ this.props.onGameLose }
                            /> })
                    }
                </div>
           </>     
        )
    }
}