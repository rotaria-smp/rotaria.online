import Image from "next/image";

type PlayerHeadProps = {
	name: string;
	url: string;
	size?: number;
};

export function PlayerHead({ name, url, size = 64 }: PlayerHeadProps) {
	return (
		<div
			className="p-3 bg-orange-600"
			style={{
				boxShadow:
					"inset -2px -2px 0 rgba(0,0,0,0.3), inset 2px 2px 0 rgba(255,255,255,0.2)",
			}}
		>
			<Image
				src={url}
				alt={`${name} head`}
				width={size}
				height={size}
				className="block"
				unoptimized
			/>
		</div>
	);
}
