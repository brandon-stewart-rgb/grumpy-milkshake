import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

	return (
		<>
			<Router basename="/grumpy-milkshake">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route  path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/portfolio" component={Portfolio} />
					<Route path="/resume" component={Resume} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
