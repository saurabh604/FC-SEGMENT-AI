export default function Button({ children, variant = 'primary', className = '', ...props }) {
	const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition active:scale-[0.98]';
	const styles = variant === 'primary'
		? 'bg-brand-500 text-white shadow-lovable hover:bg-brand-600'
		: 'bg-white/5 text-white border border-white/10 hover:bg-white/10';
	return (
		<button className={`${base} ${styles} ${className}`} {...props}>
			{children}
		</button>
	)
}

