import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import React from 'react'
import { useState } from "react";
const App = () => {
	const [progress, setProgress] = useState(0);
	const pageSize = 5;
	const apiKey = process.env.REACT_APP_NEWS_API;
	return (
		<>
			<Router>
				<Navbar />
				<LoadingBar
					color='#f11946'
					progress={progress}
					height={3}
				/>
				<Routes>
					<Route key="general" path="/home" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='general' />} ></Route>
					<Route key="general" path="/" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='general' />} ></Route>
					<Route key="business" path="/business" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='business' />} ></Route>
					<Route key="health" path="/health" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='health' />} ></Route>
					<Route key="science" path="/science" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='science' />} ></Route>
					<Route key="technology" path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='Technology' />} ></Route>
					<Route key="sports" path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='sports' />} ></Route>
					<Route key="entertainment" path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} country='in' pageSize={pageSize} category='entertainment' />} ></Route>
				</Routes>
			</Router>
		</>
	)
}


export default App;