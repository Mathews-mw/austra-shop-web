'use client';

import { useEffect, useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

import { SlidersHorizontal } from 'lucide-react';

const departments = [
	{ id: '1', value: 'Moda', label: 'Moda' },
	{ id: '2', value: 'Produtos Educacionais', label: 'Produtos Educacionais' },
	{ id: '6', value: 'Material de Escritório', label: 'Material de Escritório' },
	{ id: '7', value: 'Produtos de Beleza', label: 'Produtos de Beleza' },
	{ id: '8', value: 'Livros', label: 'Livros' },
	{ id: '9', value: 'Eletrônicos e Gadgets', label: 'Eletrônicos e Gadgets' },
	{ id: '10', value: 'Acessórios de Viagem', label: 'Acessórios de Viagem' },
	{ id: '11', value: 'Fitness', label: 'Fitness' },
	{ id: '12', value: 'Tênis', label: 'Tênis' },
	{ id: '13', value: 'Brinquedos', label: 'Brinquedos' },
	{ id: '14', value: 'Móveis', label: 'Móveis' },
];

export function ProductsFilters() {
	const [rangePriceFilter, setRangePriceFilter] = useState([50, 5000]);
	const [rangePriceFilterCommitted, setRangePriceFilterCommitted] = useState<number[] | undefined>();
	const [departmentFilter, setDepartmentFilter] = useState<string[]>([]);

	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams);
	const pathname = usePathname();
	const { replace } = useRouter();

	useEffect(() => {
		if (rangePriceFilterCommitted) {
			const [minPrice, maxPrice] = rangePriceFilterCommitted;
			params.set('minPrice', minPrice.toString());
			params.set('maxPrice', maxPrice.toString());
		} else {
			params.delete('minPrice');
			params.delete('maxPrice');
		}

		if (departmentFilter && departmentFilter.length > 0) {
			console.log(`departmentFilter: `, departmentFilter);
			params.set('departments', departmentFilter.join(','));
		} else {
			params.delete('departments');
		}

		replace(`${pathname}?${params.toString()}`);
	}, [rangePriceFilterCommitted, departmentFilter]);

	useEffect(() => {
		const minPriceParams = searchParams.get('minPrice');
		const maxPriceParams = searchParams.get('maxPrice');
		const departmentsParams = searchParams.get('departments');

		if (minPriceParams && maxPriceParams) {
			setRangePriceFilter([Number(minPriceParams), Number(maxPriceParams)]);
			setRangePriceFilterCommitted([Number(minPriceParams), Number(maxPriceParams)]);
		}
		if (departmentsParams) {
			setDepartmentFilter(departmentsParams.split(','));
		}
	}, []);

	return (
		<div className="lg:bg-background h-min space-y-4 p-4 lg:rounded-xl lg:border lg:p-6 lg:shadow-sm">
			<div className="flex items-center justify-between">
				<h4 className="text-lg font-semibold">Filtros</h4>
				<SlidersHorizontal className="text-muted-foreground h-5 w-5" />
			</div>

			<Separator />

			<div className="space-y-4">
				<h6 className="font-semibold">Preço</h6>
				<div>
					<Slider.Root
						defaultValue={[50, 5000]}
						min={50}
						max={10000}
						minStepsBetweenThumbs={1}
						value={rangePriceFilter}
						onValueChange={setRangePriceFilter}
						onValueCommit={(value) => setRangePriceFilterCommitted(value)}
						className="relative flex w-full touch-none items-center select-none"
					>
						<Slider.Track className="bg-secondary relative h-2 w-full grow overflow-hidden rounded-full">
							<Slider.Range className="bg-primary absolute h-full" />
						</Slider.Track>
						<Slider.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
						<Slider.Thumb className="border-primary bg-background ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
					</Slider.Root>
				</div>

				<div className="flex justify-evenly">
					<div>
						<div className="text-muted-foreground w-min rounded border px-2 py-1 text-sm text-nowrap">
							<span>Mín: R$ {rangePriceFilter[0]}</span>
						</div>
					</div>

					<div>
						<span className="text-muted-foreground"> - </span>
					</div>

					<div>
						<div className="text-muted-foreground w-min rounded border px-2 py-1 text-sm text-nowrap">
							<span>Máx: R$ {rangePriceFilter[1]}</span>
						</div>
					</div>
				</div>
			</div>

			<Separator />

			<div className="space-y-4">
				<h6 className="font-semibold">Departamento</h6>

				<div className="flex flex-col gap-4">
					{departments.map((department) => {
						return (
							<div key={department.id} className="flex items-center gap-1.5">
								<Checkbox
									checked={departmentFilter.includes(department.id)}
									onCheckedChange={(checked) => {
										if (departmentFilter.includes(department.id)) {
											setDepartmentFilter((prev) => prev.filter((item) => item !== department.id));
											return checked;
										}

										setDepartmentFilter((prev) => [...prev, department.id]);
										return checked;
									}}
								/>
								<Label className="text-muted-foreground">{department.label}</Label>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
