import { useState } from 'react'
import Board from './components/Board';
import createBoard from './utils';

import './App.css'

function App() {


  return (
    <div className='main'>  
        <Board gameBoard={createBoard}></Board>
    </div>
  )
}

export default App
