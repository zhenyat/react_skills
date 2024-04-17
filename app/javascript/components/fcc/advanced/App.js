import React from "react"
import ReactDOMServer from 'react-dom/server';

export default class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h3>Hello from App</h3>
      </React.Fragment>
    );
  }
}

const html = ReactDOMServer.renderToString(<App />);
console.log(html); // Logs: <div>Hello World</div>
