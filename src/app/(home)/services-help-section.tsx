import Image from 'next/image';
import Link from 'next/link';

export function ServicesHelpSection() {
	return (
		<div className="flex w-full flex-wrap justify-between gap-4">
			<div className="flex max-w-[416px] flex-col justify-between overflow-hidden rounded-lg bg-zinc-100">
				<div className="flex flex-col gap-4 p-8">
					<span className="text-title text-xl font-bold">Perguntas mais frequentes</span>
					<span className="text-sm font-semibold">
						Tem alguma dúvida sobre como comprar? Tire suas dúvidas no nosso{' '}
						<Link href="#" className="underline">
							FAQ
						</Link>
						.
					</span>
				</div>

				<div>
					<Image
						src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
						width={1020}
						height={980}
						className="h-[260px] w-full"
					/>
				</div>
			</div>

			<div className="flex max-w-[416px] flex-col justify-between overflow-hidden rounded-lg bg-zinc-100">
				<div className="flex flex-col gap-4 p-8">
					<span className="text-title text-xl font-bold">Pagamento online</span>
					<span className="text-sm font-semibold">
						Toda forma de pagamento é online e segura.{' '}
						<Link href="#" className="underline">
							Veja mais sobre as formas de pagamentos
						</Link>
						.
					</span>
				</div>

				<div>
					<Image
						src="https://images.unsplash.com/photo-1713947506242-8fcae733d158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lJTIwcGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D"
						alt=""
						width={1020}
						height={980}
						className="h-[260px] w-full"
					/>
				</div>
			</div>

			<div className="flex max-w-[416px] flex-col justify-between overflow-hidden rounded-lg bg-zinc-100">
				<div className="flex flex-col gap-4 p-8">
					<span className="text-title text-xl font-bold">Entrega em casa</span>
					<span className="text-sm font-semibold">
						Saiba mais sobre os{' '}
						<Link href="#" className="underline">
							meios de entrega.
						</Link>
					</span>
				</div>

				<Image
					src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
					width={1020}
					height={980}
					className="h-[260px] w-full"
				/>
			</div>
		</div>
	);
}
