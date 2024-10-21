import { useState } from 'react';
import Board from './components/Board';
import createBoard from './utils';
import './App.css';


function App() {

  const mainDivStyle = {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"    
  };

  const [ mineFound, setMineFound ] = useState( false );
  const [ gameWin, setGameWin ] = useState( 0 );
  
  const checkIfHasMine = ( dataFromBoard ) => {

      if( dataFromBoard.hasMine ){
        setMineFound( true );
        setGameWin( 0 );
      } else{
        setGameWin(( prevValue ) => {
          return prevValue + 1;
        });
      }
  }

  return (
    <div className="main" style={ mainDivStyle }>
        
        <h1>MINE SWEEPER</h1>
        { mineFound && 
            <div className="mineFoundDiv">{ mineFound }
              <h2>Game Over</h2>
              <button onClick={()=>{ location.reload()}}>New Game</button>
            </div> 
        }
        { gameWin === 18 && 
            <div className="mineFoundDiv">
              <h2>You Win</h2>
              <button onClick={()=>{ location.reload()}}>New Game</button>
            </div>
        }
        <Board onGameBoard={ createBoard } onMine={ checkIfHasMine } onGameWin={ gameWin } onGameLose={ mineFound }/>
        <div className='copyRightDiv'>
          <p>&copy;Copyright Ton FE23</p>
        </div>
    </div>
  )
}

export default App
