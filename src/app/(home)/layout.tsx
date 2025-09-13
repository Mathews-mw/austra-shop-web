import { ReactNode } from 'react';

import { Header } from '@/components/headers/header';
import { Footer } from '@/components/footer/footer';

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
			<Header />

			<main>{children}</main>

			<Footer />
		</div>
	);
}
