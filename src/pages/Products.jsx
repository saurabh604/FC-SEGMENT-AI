import ProductCard from '../components/ui/ProductCard'

export default function Products() {
	return (
		<div className="container-lovely py-12">
			<h1 className="text-3xl font-bold">Our Products</h1>
			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<ProductCard title="Agentic Support" description="Level-3 support agent with tools, memory, and escalation." />
				<ProductCard title="Sales Copilot" description="Outbound multi-agent prospector that writes and schedules outreach." />
				<ProductCard title="Data Analyst" description="Chat with your data warehouse with verifiable SQL." />
			</div>
		</div>
	)
}





