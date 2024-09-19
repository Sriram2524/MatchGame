import './index.css'

const GameOver = props => {
  const {score, resetButton} = props
  const onResetButton = () => [resetButton()]
  return (
    <div className="container">
      <div className="game-over-cont">
        <div className="trophy-con">
          <img
            className="tropy-img"
            alt="trophy"
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          />
        </div>
        <p className="score-head">YOUR SCORE</p>
        <h1 className="score-num">{score}</h1>
        <button
          onClick={onResetButton}
          type="button"
          className="play-gain-button"
        >
          <img
            className="reset-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameOver
