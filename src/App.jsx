import { useState, useEffect } from "react";
import "./scss/App.scss";

function App() {
  const [brakLength, setBreak] = useState(5);
  const [sessionLength, setSession] = useState(25);
  const [timeRemaining, setTimeRemaining] = useState(sessionLength * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerType, setTimerType] = useState(true);
  let formattedTime = new Date(timeRemaining * 1000)
    .toISOString()
    .substr(14, 5);

  const handleBreak = (event) => {
    if (event.target.value == "+") {
      setBreak((n) => n + 1);
      setTimeRemaining((n) => n + 60);
    }
    if (event.target.value == "-") {
      setBreak((n) => n - 1);
      setTimeRemaining((n) => n - 60);
    }
  };
  const handleSession = (event) => {
    if (event.target.value == "+") {
      setSession((n) => n + 1);
      setTimeRemaining((n) => n + 60);
    }
    if (event.target.value == "-") {
      setSession((n) => n - 1);
      setTimeRemaining((n) => n - 60);
    }
  };
  const playPause = () => {
    setTimerRunning((n) => !n);
  };
  const reset = () => {
    setBreak(5);
    setSession(25);
    setTimeRemaining(25 * 60);
  };

  const playSound = () => {
    new Audio("/alert.mp3").play();
  };
  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Czyszczenie interwału po odmontowaniu komponentu
  }, [timerRunning, sessionLength]);

  console.log(timeRemaining);
  if (timeRemaining == 0) {
    console.log("koniec czasu");
    playSound();
    setTimeRemaining(timerType ? brakLength * 60 : sessionLength * 60);
    setTimerType((n) => !n);
  }
  useEffect(() => {}, []);

  return (
    <>
      <div className="main-wrapper">
        <section className="panel">
          <h2>Pomodoro Timer</h2>
          <div className="timer-controls">
            <div className="length-control">
              <div id="break-label">Break Length</div>
              <div className="symbol symbol-50px btn-level">
                <button
                  onClick={handleBreak}
                  id="break-increment"
                  value="+"
                  className="symbol-label bg-active-primary orange-bg">
                  <span className="svg-icon svg-icon-2x svg-icon-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        opacity="0.5"
                        d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z"
                        fill="black"></path>
                      <path
                        d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z"
                        fill="black"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="btn-level" id="break-length">
                {brakLength}
              </div>
              <div className="symbol symbol-50px btn-level">
                <button
                  id="break-decrement"
                  value="-"
                  onClick={handleBreak}
                  className="symbol-label bg-active-primary orange-bg">
                  <span className="svg-icon svg-icon-2x svg-icon-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        opacity="0.5"
                        d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z"
                        fill="black"></path>
                      <path
                        d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z"
                        fill="black"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="length-control">
              <div id="session-label">Session Length</div>
              <div className="symbol symbol-50px btn-level">
                <button
                  id="session-increment"
                  value="+"
                  onClick={handleSession}
                  className="symbol-label bg-active-primary orange-bg">
                  <span className="svg-icon svg-icon-2x svg-icon-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        opacity="0.5"
                        d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z"
                        fill="black"></path>
                      <path
                        d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z"
                        fill="black"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="btn-level" id="session-length">
                {sessionLength}
              </div>
              <div className="symbol symbol-50px btn-level">
                <button
                  value="-"
                  id="session-decrement"
                  onClick={handleSession}
                  className="symbol-label bg-active-primary orange-bg">
                  <span className="svg-icon svg-icon-2x svg-icon-orange">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        opacity="0.5"
                        d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z"
                        fill="black"></path>
                      <path
                        d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z"
                        fill="black"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="timer-wrapper">
            <div id="timer-label">Session</div>
            <div id="time-left">{formattedTime}</div>
          </div>
          <a href="#" className="button" id="timer-label">
            {timerType ? "Session" : "Break"}
          </a>
          <div className="timer-control">
            <div className="symbol symbol-50px">
              <button
                id="start_stop"
                onClick={playPause}
                className="symbol-label bg-active-primary color1-bg">
                <span className="svg-icon svg-icon-2x svg-icon-color1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <rect
                      opacity="0.3"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="black"></rect>
                    <path
                      d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                      fill="black"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="symbol symbol-50px">
              <button
                onClick={reset}
                className="symbol-label bg-active-primary orange-bg"
                id="reset">
                <span className="svg-icon svg-icon-2x svg-icon-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      opacity="0.3"
                      d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12 17.8C11 17.8 10.2 17.4 9.5 16.8C8.8 16.1 8.5 15.3 8.5 14.3C8.5 13.8 8.6 13.3 8.8 12.9L10 14.1V11.1C10 10.5 9.6 10.1 9 10.1H6L7.3 11.4C6.8 12.3 6.5 13.2 6.5 14.3C6.5 15.8 7.1 17.2 8.1 18.2C9.1 19.2 10.5 19.8 12 19.8C12.6 19.8 13 19.3 13 18.8C13 18.2 12.6 17.8 12 17.8ZM16.7 17.2C17.2 16.3 17.5 15.4 17.5 14.3C17.5 12.8 16.9 11.4 15.9 10.4C14.9 9.39999 13.5 8.79999 12 8.79999C11.4 8.79999 11 9.19999 11 9.79999C11 10.4 11.4 10.8 12 10.8C12.9 10.8 13.8 11.2 14.5 11.8C15.2 12.5 15.5 13.3 15.5 14.3C15.5 14.8 15.4 15.3 15.2 15.7L14 14.5V17.5C14 18.1 14.4 18.5 15 18.5H18L16.7 17.2Z"
                      fill="black"></path>
                    <path
                      d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                      fill="black"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <p className="signature">Designed and coded by Adam Fijałkowski</p>
        </section>
      </div>
    </>
  );
}

export default App;
