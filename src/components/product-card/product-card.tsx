'use client';

import Link from 'next/link';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { LoginAlert } from './login-alert';
import { Button } from '../ui/button';

import { Heart, Loader2, ShoppingBasket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import { StarsRating } from '../rating/stars-rating';
import { StarsRatingView } from '../rating/stars-rating-view';

interface IProductCardProps {
	product: IProduct;
	isFavorite?: boolean;
}

export function ProductCard({ product, isFavorite = false }: IProductCardProps) {
	// const { status } = useSession();
	// const { isLoadingFavoriteProducts, toggleFavoriteProduct } = useFavoriteProducts();

	const status = 'authenticated';

	const isLoadingFavoriteProducts = false;

	function toggleFavoriteProduct(productId: string) {
		console.log('Toggling favorite for product ID:', productId);
	}

	return (
		<Card className="relative max-w-[320px] duration-200 ease-in-out hover:scale-[1.02]">
			<div className="absolute top-4 left-4 z-10 flex items-center gap-1">
				<StarsRatingView score={product.averageRating ?? 0} iconsSize={12} />
				<span className="text-muted-foreground text-xs">({product.reviewCount})</span>
			</div>

			{status === 'authenticated' ? (
				<Button
					size="icon"
					variant="ghost"
					disabled={isLoadingFavoriteProducts}
					onClick={() => toggleFavoriteProduct(product.id)}
					className="absolute top-2 right-2 z-10"
				>
					{isLoadingFavoriteProducts ? (
						<Loader2 className="text-primary animate-spin" />
					) : (
						<Heart
							strokeWidth={3}
							className={twMerge(['text-primary h-6 w-6', `${isFavorite ? 'fill-primary' : 'fill-none'}`])}
						/>
					)}
				</Button>
			) : (
				<LoginAlert />
			)}

			<Link href={`/produtos/${product.id}/detalhes`}>
				<CardHeader>
					<div>
						<Image
							src={product.imageUrl}
							alt=""
							width={320}
							height={300}
							className="h-[250px] rounded-lg object-cover"
						/>
					</div>
					<CardDescription
						className="text-title line-clamp-2 text-[16px] leading-tight font-semibold"
						title={product.name}
					>
						{product.name}
					</CardDescription>
				</CardHeader>

				<CardContent className="mt-4">
					<div className="flex flex-col gap-2">
						<span className="text-primary text-xl font-bold">
							{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
						</span>
					</div>
				</CardContent>
			</Link>

			<CardFooter className="flex w-full flex-col gap-2">
				<Button asChild className="w-full">
					<Link href={`/produtos/${product.id}/detalhes`}>
						<ShoppingBasket />
						Escolher
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
}
