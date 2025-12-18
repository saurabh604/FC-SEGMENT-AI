export default function ProductCard({ title, description, tag = 'Agentic', cta = 'Learn more' }) {
	return (
		<div className="card-lovely p-6">
			<div className="flex items-center justify-between">
				<span className="text-xs font-bold uppercase tracking-wider text-brand-300">{tag}</span>
				<div className="h-2 w-2 rounded-full bg-brand-500 shadow-[0_0_10px_2px_rgba(63,109,255,0.8)]" />
			</div>
			<h3 className="mt-3 text-lg font-bold">{title}</h3>
			<p className="mt-2 text-sm text-gray-300">{description}</p>
			<div className="mt-4">
				<a className="btn-ghost" href="#contact">{cta}</a>
			</div>
		</div>
	)
}

