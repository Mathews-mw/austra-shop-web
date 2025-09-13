import { Separator } from '../ui/separator';
import { AboutUsSection } from './about-us';
import { MainSection } from './main-section';
import { HelpSection } from './help-section';
import { ServicesSection } from './services-section';
import { DepartmentSection } from './department-section';

import { Gift, HelpCircle } from 'lucide-react';

export function Footer() {
	return (
		<footer className="mx-auto flex w-full max-w-[1440px] flex-col p-4">
			<div className="my-4 w-full">
				<Separator />
			</div>

			<div className="grid grid-cols-6 gap-8">
				<MainSection />
				<DepartmentSection />
				<AboutUsSection />
				<ServicesSection />
				<HelpSection />
			</div>

			<div className="my-4 w-full">
				<Separator />
			</div>

			<div className="flex w-full justify-between">
				<div className="flex gap-8">
					<div className="flex items-center gap-2">
						<Gift className="text-primary size-5" />
						<span className="hover:text-primary text-muted-foreground cursor-pointer text-sm font-semibold">
							Gift cards
						</span>
					</div>

					<div className="flex items-center gap-2">
						<HelpCircle className="text-primary size-5" />
						<span className="hover:text-primary text-muted-foreground cursor-pointer text-sm font-semibold">
							Central de ajuda
						</span>
					</div>
				</div>

				<div className="flex gap-8">
					<span className="hover:text-primary text-muted-foreground cursor-pointer text-sm font-semibold">
						Termos de serviço
					</span>

					<span className="hover:text-primary text-muted-foreground cursor-pointer text-sm font-semibold">
						Políticas de privacidade
					</span>
				</div>

				<div>
					<span className="text-muted-foreground text-sm font-semibold">
						© Austra Shop | {new Date().getFullYear()}
					</span>
				</div>
			</div>
		</footer>
	);
}
