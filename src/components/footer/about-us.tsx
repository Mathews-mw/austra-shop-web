'use client';

import { motion } from 'motion/react';

const items = [
	'Sobre a Austrashop',
	'Carreiras',
	'Notícias e Blog',
	'Ajuda',
	'Central de Imprensa',
	'Comprar por localização',
	'Marcas e parceiros',
	'Afiliados e Parceiros',
	'Ideias e Guias',
];

export function AboutUsSection() {
	return (
		<div className="flex flex-col gap-6">
			<span className="font-bold">Sobre nós</span>

			<nav>
				<ul className="space-y-2">
					{items.map((item) => {
						return (
							<motion.li
								whileHover={{ x: 10 }}
								transition={{ type: 'spring', duration: 0.4 }}
								key={item}
								className="hover:text-primary cursor-pointer text-sm hover:font-semibold"
							>
								{item}
							</motion.li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
