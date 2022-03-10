import React from 'react'
import Board from './Board'

export default function Game() {
    const status = 'Next playes is X';
    const moves = (
        <li>
            <button>Start Game</button>
        </li>
    )
    const squares = Array(9).fill(null);

    return (
      <div>
          <div className='game-board'>
            <Board squares={squares}></Board>
          </div>
          <div className='game-info'>  
            <div><p>{status}</p></div>
            <ul>{moves}</ul>
          </div>
      </div>
  )
}
