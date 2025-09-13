'use client';

import { useRef } from 'react';

import { Search } from 'lucide-react';

export function SearchInput() {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDivClick = () => {
		inputRef.current?.focus();
	};

	return (
		<div
			onClick={handleDivClick}
			className="focus-within:border-ring focus-within:ring-ring/50 flex w-full max-w-[320px] cursor-text items-center justify-between rounded-full border px-4 py-1 transition focus-within:ring-[1px]"
		>
			<input
				ref={inputRef}
				type="text"
				placeholder="Pesquisar produtos"
				className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-8 w-full min-w-0 border-none text-base outline-none"
			/>

			<button className="hover:bg-muted cursor-pointer rounded-full p-2 transition-colors">
				<Search className="text-muted-foreground size-4" />
			</button>
		</div>
	);
}
