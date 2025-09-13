'use client';

import { motion } from 'motion/react';

const department = [
	'Moda',
	'Produtos Educacionais',
	'Alimentos Congelados',
	'Bebidas',
	'Mercearia Orgânica',
	'Material de Escritório',
	'Produtos de Beleza',
	'Livros',
	'Eletrônicos e Gadgets',
	'Acessórios de Viagem',
	'Fitness',
	'Tênis',
	'Brinquedos',
	'Móveis',
];

export function DepartmentSection() {
	return (
		<div className="flex flex-col gap-6">
			<span className="font-bold">Departamentos</span>

			<nav>
				<ul className="space-y-2">
					{department.map((item) => {
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
