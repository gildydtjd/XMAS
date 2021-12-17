import { BrowserRouter, Route, useLocation, Switch } from 'react-router-dom';
import Santa from './routes/Santa';
import Rudolf from './routes/Rudolf';
import Sleigh from './routes/Sleigh';
import Gift from './routes/Gift';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loading from './components/loading/Loading';

const AnimatedSwitch = () => {
  const location = useLocation();
  console.log('location', location);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <Switch location={location}>
          <Route path="/" exact component={Loading} />
          <Route path="/Santa" component={Santa} />
          <Route path="/Rudolf" component={Rudolf} />
          <Route path="/Sleigh" component={Sleigh} />
          <Route path="/Gift" component={Gift} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedSwitch />
      </BrowserRouter>
    </>
  );
}

export default App;
