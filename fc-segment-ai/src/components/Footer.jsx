import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-white/10 py-10">
			<div className="container-lovely grid gap-8 md:grid-cols-3">
				<div className="space-y-3">
					<div className="flex items-center gap-2">
						<Logo className="h-10 w-14" />
						<span className="font-bold">FC SEGMENT AI</span>
					</div>
					<p className="text-sm text-gray-300 max-w-sm">Agentic AI products for automation, insights, and growth.</p>
				</div>
				<nav className="text-sm space-y-2">
					<p className="font-semibold text-white">Company</p>
					<ul className="space-y-2 text-gray-300">
						<li><Link to="/about" className="hover:text-white">About</Link></li>
						<li><Link to="/products" className="hover:text-white">Products</Link></li>
						<li><a href="#contact" className="hover:text-white">Contact</a></li>
					</ul>
				</nav>
				<div className="text-sm text-gray-400 md:text-right">
					<p>© {new Date().getFullYear()} FC SEGMENT AI. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
