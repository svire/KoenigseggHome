import React, {useState} from "react";
import "./App.css";
import Speech from "react-speech";
import {assert} from "assert";
import ReactDOM from "react-dom";

function App(props) {
  const [nesto, setNesto] = useState("");

  function simulateClick() {
    // document.getElementById("voziona").click();
  }

  function onBlick(elemid) {
    var text = document.getElementById(elemid).getElementsByTagName("p")[0]
      .innerHTML;

    ReactDOM.render(
      <Speech id='voziona' text={text} voice='Google UK English Female' />,
      document.getElementById("speech")
    );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert(nesto);
  };

  const onChange = (event) => {
    event.preventDefault();
    setNesto(event.target.value);
  };

  return (
    <div className='App'>
      <div className='Cont'>
        <div className='Sent' onClick={simulateClick}>
          <p>Let me tell you a little story!</p>
          <span className='Time'>12:32:01 AM</span>
        </div>
        <div
          id='first'
          className='Incoming'
          onMouseOut={() => onBlick("first")}
        >
          <p>What the hell are you talking about?</p>
          <span className='Time'>12:32:53 AM</span>
        </div>
        <div className='Sent'>
          <p>Whats</p>
          <span className='Time'>12:34:23 AM</span>
        </div>
        <div
          id='second'
          className='Incoming'
          onMouseOut={() => onBlick("second")}
        >
          <p>Are you drunk or something?</p>
          <span className='Time'>12:34:53 AM</span>
        </div>
        <div className='Sent'>
          <p>Is christmas already?</p>
          <span className='Time'>12:34:23 AM</span>
        </div>
        <div
          id='third'
          className='Incoming'
          onMouseOut={() => onBlick("third")}
        >
          <p>Christmas is early this season!</p>
          <span className='Time'>12:34:53 AM</span>
        </div>

        <div id='speech' className='Speech'></div>
      </div>
    </div>
  );
}

export default App;

/*

.App {
  text-align: center;
  background-color: rgb(30, 132, 132);
  height: 1000px;
}

.Cont {
  background-color: rgb(30, 132, 132);
  width: 100%;
  height: 100%;
  position: fixed;
}

.Sent {
  clear: both;
  background-color: rgba(228, 233, 233, 0.554);
  min-height: 50px;
  min-width: 100px;
  max-width: 300px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
  padding: 5px;
  font-size: large;
  font-weight: 500;
  color: white;
}

.Incoming {
  background-color: rgba(228, 233, 233, 0.554);
  min-height: 50px;
  min-width: 100px;
  max-width: 300px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
  padding: 5px;
  font-size: large;
  font-weight: 500;
  color: white;
  float: right;
}

.Desno {
  float: right;
}

.Time {
  color: rgb(6, 15, 5);
}

.Speech {
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 0 auto;
}

.Butonis {
  float: right;
  background-color: gray;
  margin: 10px;
  padding: 10px 20px;
  margin-top: 20px;
}

.Ocisti {
  clear: both;
  float: left;
}

.Amaha {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: aquamarine;
  /* 
  Ovo svojstvo box-a se bavi prikazivanjem sadržajem ukoliko je sadržaj veći od kontejnera u kome se nalazi. default je visible
  koja omogućava sadržaju da se prikaže i preko granica kontejnera. 
  overflow: visible; */
/*overflow: scroll;    */
overflow: hidden; /*  Kada je vrednost osobine overflow setovana na hidden vidljiv je samo deo sadržaja koliko to veličina kontejnera dopušta. 
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


  */
