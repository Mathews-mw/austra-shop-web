import { ReactNode } from 'react';

import { HomeHeader } from '@/components/headers/home-header';
import { Footer } from '@/components/footer/footer';

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
			<HomeHeader />

			<main>{children}</main>

			<Footer />
		</div>
	);
}
