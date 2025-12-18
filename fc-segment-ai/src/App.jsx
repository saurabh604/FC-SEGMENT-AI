import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen flex flex-col">
				<Navbar />
				<div className="flex-1">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
