'use client';

import { twMerge } from 'tailwind-merge';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { ProductsFilters } from './products-filters';
import { useIsMobile } from '@/hooks/use-mobile';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { SortByFilter } from './sort-by-filter';
import { Separator } from '@radix-ui/react-separator';
import { ProductCard } from '@/components/product-card/product-card';
import { productsData } from '@/dummy-data/products-data';

export default function ProductsPage() {
	const isMobile = useIsMobile();

	const favoriteProducts = ['1', '4'];

	return (
		<div className="space-y-8">
			<h1>Products Page</h1>

			<div className={twMerge(['flex flex-col gap-4 lg:gap-8', 'lg:grid lg:grid-cols-4'])}>
				<div className="hidden lg:block">
					<ProductsFilters />
				</div>

				<div className="col-span-3 space-y-4">
					{isMobile ? (
						<div className="flex w-full items-center justify-between">
							<Drawer modal>
								<DrawerTrigger asChild>
									<Button variant="outline">
										<SlidersHorizontal className="text-muted-foreground h-5 w-5" />
										Filtros
									</Button>
								</DrawerTrigger>
								<DrawerContent>
									<DrawerHeader>
										<VisuallyHidden>
											<DrawerTitle>Filtros</DrawerTitle>
										</VisuallyHidden>
									</DrawerHeader>

									<ProductsFilters />
								</DrawerContent>
							</Drawer>

							<SortByFilter />
						</div>
					) : (
						<div className="flex items-center justify-between">
							<h2 className="text-xl font-semibold">Todos os móveis</h2>

							<SortByFilter />
						</div>
					)}

					<Separator />

					<div
						className={twMerge([
							'flex flex-col items-center gap-4',
							'sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3',
						])}
					>
						{productsData.map((product) => {
							return (
								<ProductCard key={product.id} product={product} isFavorite={favoriteProducts.includes(product.id)} />
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
