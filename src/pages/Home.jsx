import { Link } from 'react-router-dom'
import ProductCard from '../components/ui/ProductCard'

export default function Home() {
	return (
		<div className="container-lovely py-12">
			{/* Hero Section */}
			<div className="max-w-4xl mx-auto text-center mb-16">
				<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
					FC Segment AI
				</h1>
				<p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
					Revolutionizing businesses through innovative Agentic AI solutions
				</p>
				<p className="text-gray-400 mb-10 max-w-2xl mx-auto">
					We specialize in building intelligent AI agents, enterprise-grade digital products, 
					and cutting-edge automation platforms that transform how organizations operate.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link 
						to="/products" 
						className="px-8 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
					>
						Explore Products
					</Link>
					<Link 
						to="/about" 
						className="px-8 py-3 border-2 border-brand-500 text-brand-300 hover:bg-brand-500/10 font-semibold rounded-lg transition-colors duration-200"
					>
						Learn More
					</Link>
				</div>
			</div>

			{/* Features Section */}
			<div className="max-w-6xl mx-auto mb-16">
				<h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<ProductCard 
						title="Agentic Support" 
						description="Level-3 support agent with tools, memory, and escalation." 
					/>
					<ProductCard 
						title="Sales Copilot" 
						description="Outbound multi-agent prospector that writes and schedules outreach." 
					/>
					<ProductCard 
						title="Data Analyst" 
						description="Chat with your data warehouse with verifiable SQL." 
					/>
				</div>
			</div>

			{/* Why Choose Us Section */}
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">Why Choose FC Segment AI?</h2>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="card-lovely p-6 text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
							<svg className="w-8 h-8 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 className="font-bold mb-2 text-brand-300">Lightning Fast</h3>
						<p className="text-sm text-gray-300">AI-powered solutions that deliver results in real-time</p>
					</div>
					<div className="card-lovely p-6 text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
							<svg className="w-8 h-8 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
							</svg>
						</div>
						<h3 className="font-bold mb-2 text-brand-300">Secure & Reliable</h3>
						<p className="text-sm text-gray-300">Enterprise-grade security with 99.9% uptime guarantee</p>
					</div>
					<div className="card-lovely p-6 text-center">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-500/20 flex items-center justify-center">
							<svg className="w-8 h-8 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
							</svg>
						</div>
						<h3 className="font-bold mb-2 text-brand-300">Scalable Solutions</h3>
						<p className="text-sm text-gray-300">Grow from startup to enterprise without limitations</p>
					</div>
				</div>
			</div>
		</div>
	)
}




