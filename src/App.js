import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Netapi from './components/pages/netapi';
import Fronttech from './components/pages/fronttech';
import Documents from './components/pages/Documents';
import SMTrend from './components/pages/SMTrend';
import './i18n';

const PageWithMargin = ({ component: Component }) => (
  <div style={{ marginTop: '100px' }}>
    <Component />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={() => <PageWithMargin component={Home} />} />
        <Route path='/Projects' component={() => <PageWithMargin component={Projects} />} />
        <Route path='/Documents' component={() => <PageWithMargin component={Documents} />} />
        <Route path='/Netapi' component={() => <PageWithMargin component={Netapi} />} />
        <Route path='/Fronttech' component={() => <PageWithMargin component={Fronttech} />} />
        <Route path='/SMTrend' component={() => <PageWithMargin component={SMTrend} />} />
      </Switch>
      <div className="contact">
        <Contact />
      </div>
      <div className="backwrap gradient">
        <div className="back-shapes">
            <span
              className="floating circle"
              style={{
                top: '66.59856996935649%',
                left: '13.020833333333334%',
                animationDelay: '-0.9s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '31.46067415730337%',
                left: '33.59375%',
                animationDelay: '-4.8s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '76.50663942798774%',
                left: '38.020833333333336%',
                animationDelay: '-4s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '21.450459652706844%',
                left: '14.0625%',
                animationDelay: '-2.8s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '58.12053115423902%',
                left: '56.770833333333336%',
                animationDelay: '-2.15s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '8.682328907048008%',
                left: '72.70833333333333%',
                animationDelay: '-1.9s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '31.3585291113381%',
                left: '58.541666666666664%',
                animationDelay: '-0.65s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '69.96935648621042%',
                left: '81.45833333333333%',
                animationDelay: '-0.4s',
              }}
            ></span>
            <span
              className="floating circle"
              style={{
                top: '15.117466802860061%',
                left: '32.34375%',
                animationDelay: '-4.1s',
              }}
            ></span>
            <span
              className="floating circle"
              style={{
                top: '13.074565883554648%',
                left: '45.989583333333336%',
                animationDelay: '-3.65s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '55.87334014300306%',
                left: '27.135416666666668%',
                animationDelay: '-2.25s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '49.54034729315628%',
                left: '53.75%',
                animationDelay: '-2s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '34.62717058222676%',
                left: '49.635416666666664%',
                animationDelay: '-1.55s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '33.19713993871297%',
                left: '86.14583333333333%',
                animationDelay: '-0.95s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '28.19203268641471%',
                left: '25.208333333333332%',
                animationDelay: '-4.45s',
              }}
            ></span>
            <span
              className="floating circle"
              style={{
                top: '39.7344228804903%',
                left: '10.833333333333334%',
                animationDelay: '-3.35s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '77.83452502553627%',
                left: '24.427083333333332%',
                animationDelay: '-2.3s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '2.860061287027579%',
                left: '47.864583333333336%',
                animationDelay: '-1.75s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '71.3993871297242%',
                left: '66.45833333333333%',
                animationDelay: '-1.25s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '31.256384065372828%',
                left: '76.92708333333333%',
                animationDelay: '-0.65s',
              }}
            ></span>
            <span
              className="floating triangle"
              style={{
                top: '46.47599591419816%',
                left: '38.90625%',
                animationDelay: '-0.35s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '3.4729315628192032%',
                left: '19.635416666666668%',
                animationDelay: '-4.3s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '3.575076608784474%',
                left: '6.25%',
                animationDelay: '-4.05s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '77.3237997957099%',
                left: '4.583333333333333%',
                animationDelay: '-3.75s',
              }}
            ></span>
            <span
              className="floating cross"
              style={{
                top: '0.9193054136874361%',
                left: '71.14583333333333%',
                animationDelay: '-3.3s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '23.6976506639428%',
                left: '63.28125%',
                animationDelay: '-2.1s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '81.30745658835546%',
                left: '45.15625%',
                animationDelay: '-1.75s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '60.9805924412666%',
                left: '42.239583333333336%',
                animationDelay: '-1.45s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '29.009193054136876%',
                left: '93.90625%',
                animationDelay: '-1.05s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '52.093973442288046%',
                left: '68.90625%',
                animationDelay: '-0.7s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '81.51174668028601%',
                left: '83.59375%',
                animationDelay: '-0.35s',
              }}
            ></span>
            <span
              className="floating square"
              style={{
                top: '11.542390194075587%',
                left: '91.51041666666667%',
                animationDelay: '-0.1s',
              }}
            ></span>
          </div>
        </div>
    </Router>
  );
}

export default App;
