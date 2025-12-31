export default function Logo({ className = "h-12 w-16" }) {
	return (
		<div className={`flex items-center justify-center ${className} relative`}>
			<svg viewBox="0 0 120 80" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id="fcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{stopColor:"#5a4a3a", stopOpacity:1}} />
						<stop offset="50%" style={{stopColor:"#3d3528", stopOpacity:1}} />
						<stop offset="100%" style={{stopColor:"#4a4030", stopOpacity:1}} />
					</linearGradient>
					<linearGradient id="fcHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{stopColor:"#8b7355", stopOpacity:0.8}} />
						<stop offset="100%" style={{stopColor:"#5a4a3a", stopOpacity:0.4}} />
					</linearGradient>
				</defs>
				{/* F Letter */}
				<rect x="5" y="8" width="14" height="64" rx="2" fill="url(#fcGradient)" />
				<rect x="5" y="8" width="45" height="14" rx="2" fill="url(#fcGradient)" />
				<rect x="5" y="36" width="35" height="14" rx="2" fill="url(#fcGradient)" />
				<rect x="7" y="10" width="43" height="10" rx="1" fill="url(#fcHighlight)" opacity="0.6" />
				{/* C Letter */}
				<rect x="55" y="8" width="14" height="64" rx="2" fill="url(#fcGradient)" />
				<rect x="55" y="8" width="45" height="14" rx="2" fill="url(#fcGradient)" />
				<rect x="55" y="58" width="45" height="14" rx="2" fill="url(#fcGradient)" />
				<rect x="57" y="10" width="41" height="10" rx="1" fill="url(#fcHighlight)" opacity="0.6" />
			</svg>
		</div>
	)
}






