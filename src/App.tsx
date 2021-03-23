import './App.css';
import { Dashboard } from './presentation/pages/dashboard/views';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dashboard from './presentation/pages/dashboard/store/dashboard.reducers';
import Navbar from './presentation/shared/components/Navbar';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({ dashboard });
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#651fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/dashboard">{() => <Dashboard />}</Route>
            <Redirect to="/dashboard" />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
