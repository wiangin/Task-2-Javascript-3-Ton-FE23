import styles from '../style/CellStyle.module.css';
import bombIcon from '../assets/bombIcon.png';


export default function Cell( props ){
    
    const { cell } = props;

    const clickHandler = () => {

        props.onClick( cell );

    };

    const displayBoardGame = () => {

        let element;

        if( props.onGameWin === 18 || props.onGameLose === true){
            return element =  <div className={styles.cellStyle} > { showCell() } </div> 
        } else{
            return element = <div className={styles.cellStyle} onClick={ clickHandler }> { showCell() } </div> 
        }
    };

    const showCell = () => {

        let element;

        if( !cell.visible ){ 
            return element = <div className={ styles.justStyle }><p>?</p></div>
        } else if( cell.hasMine ){
            return element = <div className={ styles.isBomb }><img src={bombIcon}/></div>
        } else if(cell.numberOfNeighbouringMines === 0){
            return element = <div className={ styles.isOpened }></div>
        } else{
             return element = <div className={ styles.isOpened }><p>{ cell.numberOfNeighbouringMines }</p></div>
        }
    };
    
    return(
        <>
            { displayBoardGame() }
        </>
            
    )
}   