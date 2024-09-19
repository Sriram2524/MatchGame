import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav className="header-container">
      <div className="logo-con">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
      </div>
      <ul className="score-timer-con">
        <li className="score-con">
          <p className="score">
            Score:<span className="num">{score}</span>
          </p>
        </li>
        <li className="timer-con">
          <div>
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
          </div>
          <p className="num">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
