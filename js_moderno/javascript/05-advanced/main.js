import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { environmentsComponent } from "./src/concepts/01-environments";
import { callbacksComponent } from "./src/concepts/02-callbacks";
import { promiseComponent } from "./src/concepts/03-promises";
import { promiseHellTip1Component } from "./src/concepts/05-promise-hell-tip1";
import { promiseAllComponent } from "./src/concepts/06-promise-all";
import { promiseRaceComponent } from "./src/concepts/07-promise-race";
import { asyncComponent } from "./src/concepts/08-async";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>
  </div>
`;

const element = document.querySelector(".card");

// environmentsComponent (element);
// callbacksComponent(element);
// promiseComponent(element);
// promiseHellTip1Component(element);
// promiseAllComponent(element);
// promiseRaceComponent(element);
asyncComponent(element);