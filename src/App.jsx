import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import MediBuilder from './components/MediBuilder';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Header />}></Route>
				<Route path='/medibuilder' element={<MediBuilder />}></Route>
			</Routes>
		</div>
	);
}

export default App
