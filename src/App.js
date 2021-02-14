import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Navbar from './components/navbar'
import Posts from './components/browseMeme'
import PostForm from './components/postMeme'
import EditForm from './components/editMeme'
import About from './components/about'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Navbar />
            <Posts />
          </Route>
          <Route path="/post">
            <Navbar />
            <PostForm />
          </Route>
          <Route path="/edit">
            <Navbar />
            <EditForm />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
