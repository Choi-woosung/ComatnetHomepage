import Header from './component/Header';
import './css/Header.css';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
