import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import Login from './Login/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './Login';

// function App() {
//   return (

//     <div className="App">
//       <Login/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
