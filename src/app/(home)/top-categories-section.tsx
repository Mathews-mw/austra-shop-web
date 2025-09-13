'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const topCategories = [
	{
		id: 1,
		name: 'Tech',
		imageUrl:
			'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 2,
		name: 'Tênis',
		imageUrl:
			'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 3,
		name: 'Móveis',
		imageUrl:
			'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 4,
		name: 'Video games',
		imageUrl:
			'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZpZGVvZ2FtZXxlbnwwfHwwfHx8MA%3D%3D',
	},
	{
		id: 5,
		name: 'Livros',
		imageUrl:
			'https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 6,
		name: 'Instrumentos Musicais',
		imageUrl:
			'https://images.unsplash.com/photo-1563357989-f6cdbbae76cb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

export function TopCategoriesSection() {
	return (
		<div className="w-full space-y-8">
			<h4 className="text-title text-2xl font-bold">Melhores categorias</h4>

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
				{topCategories.map((item) => {
					return (
						<motion.div
							key={item.id}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="relative h-[250px] w-[194px] cursor-pointer"
						>
							<div className="absolute top-8 left-1/2 flex -translate-1/2 items-center justify-center rounded-lg bg-black/30 px-2 py-1">
								<span className="text-center text-lg leading-none font-bold text-white">{item.name}</span>
							</div>

							<Image
								src={item.imageUrl}
								alt=""
								width={1240}
								height={1900}
								className="h-[250px] w-[194px] rounded-lg object-cover"
							/>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
