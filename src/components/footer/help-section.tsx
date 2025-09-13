'use client';

import { motion } from 'motion/react';

const items = [
	'Carrinho de Compras',
	'Devoluções',
	'Rastrear Pedidos',
	'Fale Conosco',
	'Feedback',
	'Segurança e Fraude',
];

export function HelpSection() {
	return (
		<div className="flex flex-col gap-6">
			<span className="font-bold">Ajuda</span>

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
