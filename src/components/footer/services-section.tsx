'use client';

import { motion } from 'motion/react';

const items = ['Gift cards', 'Aplicativo móvel', 'Envio e entrega', 'Retirada do pedido', 'Cadastro de conta'];

export function ServicesSection() {
	return (
		<div className="flex flex-col gap-6">
			<span className="font-bold">Serviços</span>

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
