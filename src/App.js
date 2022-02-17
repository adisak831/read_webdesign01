import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./routes/Routes";
import SwitchRoute from "./layout/SwitchLayout";
import { nanoid } from "nanoid";
import "./style/tailwind.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {Routes.filter().map((prop) => {
            return (
              <SwitchRoute
                exact
                path={prop.path}
                component={prop.component}
                layout={prop.layout}
                key={nanoid()}
                {...this.props}
                pathNameTH={prop.name}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.Authentication,
});

export default connect(mapStateToProps)(App);












// import logo from './logo.svg';
// import './App.css';
// import './style/tailwind.css';

// function App() {
//   return (
//     <div className="App">
      
//       <header className="App-header">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg" className="App-logo" alt="logo" /> 
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > 
//         <p className="">GGEZ</p>
//         </a>
//       </header> 
//     </div>
//   );
// }

// export default App;
