'use client';

import { twMerge } from 'tailwind-merge';
import { useInView } from 'react-intersection-observer';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { TopCategoriesSection } from './top-categories-section';
import { BestOffersSection } from './best-offers-section';
import { DiscountedProductsSection } from './discounted-products-section';
import { useEffect } from 'react';
import { CashBackProductsSection } from './cash-back-products-section';
import { ServicesHelpSection } from './services-help-section';

export default function Home() {
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			console.log('image in view!');
		}
	}, [inView]);

	return (
		<div className="flex flex-col gap-8">
			<div className="relative h-[590px] w-full">
				<Image src="/cover_group.png" alt="hero" width={5000} height={600} className="h-[590px] object-cover" />

				<div className="absolute top-1/2 left-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-8">
					<div className="flex flex-col gap-8 rounded-lg bg-black/30 p-4">
						<div className="flex flex-col gap-2">
							<span className="text-justify text-5xl font-bold text-white">Tudo o que você precisa</span>
							<span className="text-justify text-5xl font-bold text-white">em um só lugar.</span>
						</div>

						<span className="text-xl font-semibold text-white">Austra Shop — simplificando suas compras online.</span>
					</div>

					<div>
						<Button size="lg">Veja mais</Button>
					</div>
				</div>
			</div>

			<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 p-4">
				<TopCategoriesSection />

				<BestOffersSection />
			</div>

			<div className="relative w-full bg-linear-to-tr from-[#f1f1f3] via-[#fbfbfb] to-[#f0eff2]">
				<div className="h-[620px] w-full overflow-hidden">
					<Image
						ref={ref}
						src="https://images.unsplash.com/photo-1713256752744-fad1d7a8684c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="hero"
						width={5000}
						height={600}
						className={twMerge([
							'zoom-in-50 h-[620px] object-contain object-left transition-transform duration-500 ease-in-out',
							inView ? 'scale-110' : 'scale-100',
						])}
					/>
				</div>

				<div className="bg-title absolute top-1/2 right-1/12 flex max-w-[420px] -translate-y-1/2 flex-col gap-8 p-8">
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<span className="text-5xl font-bold text-white">Cupons de descontos</span>
						</div>

						<span className="text-xl text-white">
							Veja os cupons disponíveis e consiga descontos incríveis nas suas compras.
						</span>

						<div>
							<Button size="lg" variant="secondary">
								Saber mais
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 p-4">
				<span className="text-title text-2xl font-bold">Confira os mais vendidos!</span>

				<DiscountedProductsSection />
			</div>

			<div className="relative flex h-[280px] w-full items-center justify-evenly bg-linear-to-tr from-[#ffe6cc] to-[#ffe6cc]">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-6">
						<span className="text-title text-5xl font-bold">Cash Back de 5%</span>
						<span className="text-title text-lg font-bold">Aqui no austrashop.com</span>
					</div>

					<div>
						<Button size="lg">Saiba mais</Button>
					</div>
				</div>

				<Image
					src="https://plus.unsplash.com/premium_photo-1681819806705-82a1968cf5f6?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="hero"
					width={5000}
					height={600}
					className="h-[220px] w-[340px] rounded-lg object-cover"
				/>
			</div>

			<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 p-4">
				<CashBackProductsSection />
			</div>

			<div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 p-4">
				<span className="text-title text-2xl font-bold">Serviço para te ajudar a comprar melhor</span>

				<ServicesHelpSection />
			</div>
		</div>
	);
}
