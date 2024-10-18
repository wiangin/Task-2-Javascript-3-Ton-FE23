import { useState } from 'react'
import Board from './components/Board';
import createBoard from './utils';
import myImg from "./assets/gameBackground.png";


import './App.css'

function App() {

  const mainDivStyle = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"    
  }

  const [ mineFound, setMineFound ] = useState( false );
  const [ gameWin, setGameWin ] = useState( 0 );
  // console.log(gameWin);
  
  const checkIfHasMine = ( dataFromBoard ) => {
    // console.log(mineOrNot);
      if( dataFromBoard.hasMine ){
        setMineFound( true )
        setGameWin( 0 )
      } else{
        setGameWin(( prevValue ) => {
          return prevValue + 1;
      })
      }
  }

  return (
    <div className='main' style={ mainDivStyle }>
        
        <h1>Min Röj</h1>
        { mineFound && <h2>{ mineFound }Game Over</h2> }
        { gameWin === 18 && <h2>You Win</h2> }
        <Board onGameBoard={ createBoard } onMine={ checkIfHasMine } onGameWin={ gameWin } onGameLose={ mineFound }/>
    </div>
  )
}

export default App
