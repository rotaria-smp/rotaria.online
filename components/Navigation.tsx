"use client";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const links: { discord_url?: string } | undefined = {};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 border-b-4 border-gray-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<span className="text-2xl font-bold text-orange-400 minecraft-title">Rotaria SMP</span>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<a href="#home" className="font-semibold hover:text-orange-400 transition-colors hover:scale-110">Home</a>
							<a href="#about" className="font-semibold hover:text-orange-400 transition-colors hover:scale-110">About</a>
							<a href="#seasons" className="font-semibold hover:text-orange-400 transition-colors hover:scale-110">Seasons</a>
							<a href="#staff" className="font-semibold hover:text-orange-400 transition-colors hover:scale-110">Staff</a>
							<a
								href={links?.discord_url || '#'}
								target="_blank"
								rel="noopener noreferrer"
								className="minecraft-button-primary px-6! py-2! text-base!"
							>
								Join Discord
							</a>
						</div>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-300 hover:text-white transition-colors"
						>
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden border-t-4 border-gray-950">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
						<a href="#home" className="block px-3 py-2 font-semibold hover:text-orange-400 transition-colors">Home</a>
						<a href="#about" className="block px-3 py-2 font-semibold hover:text-orange-400 transition-colors">About</a>
						<a href="#seasons" className="block px-3 py-2 font-semibold hover:text-orange-400 transition-colors">Seasons</a>
						<a href="#staff" className="block px-3 py-2 font-semibold hover:text-orange-400 transition-colors">Staff</a>
						<a
							href={links?.discord_url || '#'}
							target="_blank"
							rel="noopener noreferrer"
							className="block minecraft-button-primary px-3! py-2! text-sm! text-center"
						>
							Join Discord
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
