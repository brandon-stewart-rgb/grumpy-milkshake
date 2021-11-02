import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/skills" component={Skills} />
					<Route path="/project" component={Project} />
					<Route path="/resume" component={Resume} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
