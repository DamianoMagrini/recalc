export interface CalculatorButtonProps {
	children: string;
	onClick: () => void;
	width?: 1 | 2;
}

export const CalculatorButton: React.FC<CalculatorButtonProps> = ({ children, onClick, width }) => {
	return (
		<button
			className={`h-12 flex justify-center items-center m-1 font-semibold border-2 rounded-md text-white border-opacity-5 border-white bg-white bg-opacity-5 hover:bg-opacity-10 ${
				width === 2 ? 'col-span-2' : 'col-span-1'
			} ring-white ring-opacity-50 focus:ring outline-none active:bg-opacity-10`}
			onClick={onClick}>
			{children}
		</button>
	);
};
