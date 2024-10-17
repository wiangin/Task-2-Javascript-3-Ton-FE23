import styles from '../style/CellStyle.module.css';
import { useState, useEffect } from 'react';

// import "../style/CellStyle.css";

export default function Cell(props){
    
    const {cell} = props;
    console.log(cell);

    // const [state, setState] = useState(0);
    const [gameWin, setGameWin] = useState(0);

    const clickHandler = (event) => {

        props.onClick(cell);

    }

    const showCell = () => {
        let content;

        if( !cell.visible ){ 
            return content = <div className={styles.justStyle}><p>? {cell.index}</p></div>
        } else if(cell.hasMine){
            return content = <div className={styles.isBomb}><p>Bomb</p></div>
        } else{
             return content = <div className={styles.isOpened}><p>{cell.numberOfNeighbouringMines}</p></div>
        }
    }

    return(
        <>
       
            <div className={styles.cellStyle} onClick={ clickHandler }> { showCell() } </div> 
        </>
            
    )
}   