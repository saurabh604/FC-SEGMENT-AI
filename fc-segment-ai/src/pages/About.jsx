import { useState } from 'react'

export default function About() {
	const [imageError, setImageError] = useState(false)
	const [ctoImageError, setCtoImageError] = useState(false)
	
	return (
		<div className="container-lovely py-12">
			<div className="max-w-4xl mx-auto">
				{/* Founder Section */}
				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
					<div className="flex-1 text-center md:text-left order-2 md:order-1">
						<h2 className="text-2xl font-bold mb-2">Saurabh Tiwari</h2>
						<p className="text-brand-300 font-semibold mb-4">CO and Founder of FC SEGMENT AI</p>
						<p className="text-gray-300 leading-relaxed">
							A visionary leader passionate about transforming businesses through innovative AI solutions. 
							With expertise in Agentic AI and digital product development, Saurabh founded FC Segment AI 
							to revolutionize how organizations leverage technology for growth and efficiency.
						</p>
					</div>
					<div className="flex-shrink-0 order-1 md:order-2">
						<div className="card-lovely p-3 rounded-2xl">
							{!imageError ? (
								<img 
									src="/saurabh.jpg.png" 
									alt="Saurabh Tiwari"
									className="w-48 h-60 object-cover rounded-xl"
									onError={() => setImageError(true)}
								/>
							) : (
								<div className="w-48 h-60 rounded-xl bg-gradient-to-br from-brand-500/20 via-brand-600/20 to-brand-700/20 border-2 border-brand-500/30 flex flex-col items-center justify-center">
									<div className="w-24 h-24 rounded-full bg-brand-500/30 flex items-center justify-center mb-3">
										<svg className="w-12 h-12 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<span className="text-brand-300 text-xs font-semibold">Founder Photo</span>
									<span className="text-gray-400 text-[10px] mt-1">Add image to /public/</span>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* CTO Section */}
				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16">
					<div className="flex-1 text-center md:text-left order-2 md:order-1">
						<h2 className="text-2xl font-bold mb-2">Nirupam</h2>
						<p className="text-brand-300 font-semibold mb-4">Chief Technology Officer (CTO)</p>
						<p className="text-gray-300 leading-relaxed">
							A visionary technologist from IIT Delhi, Nirupam leads the innovation and development of advanced Agentic AI systems at FC Segment AI. With a strong foundation in artificial intelligence and automation, he drives the company's mission to build intelligent, scalable, and future-ready products that redefine business efficiency.
						</p>
					</div>
					<div className="flex-shrink-0 order-1 md:order-2">
						<div className="card-lovely p-3 rounded-2xl">
							{!ctoImageError ? (
								<img 
									src="/CTO_Image_01.jpg" 
									alt="Nirupam"
									className="w-48 h-60 object-cover rounded-xl"
									onError={() => setCtoImageError(true)}
								/>
							) : (
								<div className="w-48 h-60 rounded-xl bg-gradient-to-br from-brand-500/20 via-brand-600/20 to-brand-700/20 border-2 border-brand-500/30 flex flex-col items-center justify-center">
									<div className="w-24 h-24 rounded-full bg-brand-500/30 flex items-center justify-center mb-3">
										<svg className="w-12 h-12 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
									</div>
									<span className="text-brand-300 text-xs font-semibold">CTO Photo</span>
									<span className="text-gray-400 text-[10px] mt-1">Add image to /public/</span>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Company About Section */}
				<div className="space-y-6">
					<h1 className="text-4xl font-bold mb-8">About FC Segment AI</h1>
					
					<div className="card-lovely p-8 space-y-6">
						<p className="text-gray-300 leading-relaxed text-lg">
							Founded by <strong className="text-white">Saurabh Tiwari</strong>, FC Segment AI is a product-based IT company focused on creating innovative Agentic AI-driven solutions. We specialize in developing intelligent AI Agents and advanced digital products such as HRM and CRM systems, along with smart platforms like <strong className="text-brand-300">InsightFlow</strong> — an AI-powered analytics and automation tool designed to simplify business decision-making.
						</p>
						
						<div className="border-t border-white/10 pt-6 mt-6">
							<h3 className="text-xl font-bold mb-4 text-brand-300">Our Mission</h3>
							<p className="text-gray-300 leading-relaxed">
								At FC Segment AI, our mission is to revolutionize how businesses operate by integrating automation, intelligence, and seamless technology into everyday processes. We are passionate about building future-ready products that empower organizations to work smarter, faster, and more efficiently.
							</p>
						</div>
					</div>

					{/* Key Highlights */}
					<div className="grid md:grid-cols-3 gap-6 mt-12">
						<div className="card-lovely p-6">
							<h3 className="font-bold mb-2 text-brand-300">AI Agents</h3>
							<p className="text-sm text-gray-300">Intelligent, autonomous agents that automate complex workflows and decision-making processes.</p>
						</div>
						<div className="card-lovely p-6">
							<h3 className="font-bold mb-2 text-brand-300">Digital Products</h3>
							<p className="text-sm text-gray-300">Enterprise-grade HRM and CRM systems powered by cutting-edge AI technology.</p>
						</div>
						<div className="card-lovely p-6">
							<h3 className="font-bold mb-2 text-brand-300">InsightFlow</h3>
							<p className="text-sm text-gray-300">AI-powered analytics and automation platform that transforms business intelligence.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
