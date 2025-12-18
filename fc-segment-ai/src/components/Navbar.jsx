import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
	return (
		<header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
			<div className="container-lovely flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center gap-3">
					<Logo className="h-12 w-16" />
					<span className="text-lg font-extrabold tracking-tight">FC SEGMENT AI</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink to="/" className={({isActive})=>`hover:text-white ${isActive? 'text-white' : 'text-gray-300'}`}>Home</NavLink>
					<NavLink to="/products" className={({isActive})=>`hover:text-white ${isActive? 'text-white' : 'text-gray-300'}`}>Products</NavLink>
					<NavLink to="/about" className={({isActive})=>`hover:text-white ${isActive? 'text-white' : 'text-gray-300'}`}>About</NavLink>
					<NavLink to="/contact" className={({isActive})=>`hover:text-white ${isActive? 'text-white' : 'text-gray-300'}`}>Contact</NavLink>
				</nav>
				<div className="flex items-center gap-3">
					<a href="#contact" className="btn-primary">Talk to us</a>
				</div>
			</div>
		</header>
	)
}
