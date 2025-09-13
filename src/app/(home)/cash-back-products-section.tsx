import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { Heart, Star } from 'lucide-react';
import { FaCartPlus } from 'react-icons/fa';

const products = [
	{
		id: 1,
		name: 'Câmera fotográfica profissional',
		imageUrl:
			'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: 1980.89,
	},
	{
		id: 2,
		name: 'Tênis Nike',
		imageUrl:
			'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: 599.99,
	},
	{
		id: 3,
		name: 'Laptop Apple MacBook Pro',
		imageUrl:
			'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fExhcHRvcHxlbnwwfHwwfHx8MA%3D%3D',
		price: 2499.0,
	},
	{
		id: 4,
		name: 'Playstation 5 Pro',
		imageUrl:
			'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGxheXN0YXRpb258ZW58MHx8MHx8fDA%3D',
		price: 1999.9,
	},
	{
		id: 5,
		name: 'Guitarra Fender',
		imageUrl:
			'https://images.unsplash.com/photo-1607560105214-0aaa5f8fcba4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVsZXRyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D',
		price: 2499.0,
	},
	{
		id: 6,
		name: 'Smart Watch',
		imageUrl:
			'https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D',
		price: 899.9,
	},
];

export function CashBackProductsSection() {
	return (
		<div className="w-full space-y-8">
			<h4 className="text-title text-2xl font-bold">Compre e receba de volta!</h4>

			<Carousel opts={{ align: 'start', loop: true }}>
				<CarouselContent>
					{products.map((product) => {
						return (
							<CarouselItem key={product.id} className="basis-1/3 pl-8">
								<div className="relative flex flex-col gap-4">
									<div className="bg-muted flex rounded-lg">
										<Image
											src={product.imageUrl}
											alt=""
											width={1020}
											height={980}
											className="h-[300px] rounded-md object-cover"
										/>
									</div>

									<div className="flex w-full justify-between gap-4">
										<span title={product.name} className="line-clamp-1 font-bold">
											{product.name}
										</span>
										<span className="font-bold">
											{product.price.toLocaleString('currency', { currency: 'BRL', style: 'currency' })}
										</span>
									</div>

									<div className="flex items-center justify-between gap-4">
										<div className="flex gap-1">
											<div className="flex gap-1">
												<Star className="size-4 fill-amber-500 text-amber-500" />
												<Star className="size-4 fill-amber-500 text-amber-500" />
												<Star className="size-4 fill-amber-500 text-amber-500" />
												<Star className="size-4 fill-amber-500 text-amber-500" />
												<Star className="size-4 fill-amber-500 text-amber-500" />
											</div>
											<span className="text-muted-foreground text-xs">(121)</span>
										</div>

										<Button variant="outline">
											<FaCartPlus />
											Adicionar ao carrinho
										</Button>
									</div>

									<div>
										<Button variant="outline" size="icon" className="absolute top-4 right-4 rounded-full">
											<Heart />
										</Button>
									</div>
								</div>
							</CarouselItem>
						);
					})}
				</CarouselContent>

				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
