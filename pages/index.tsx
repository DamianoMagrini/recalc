import type { NextPage } from 'next';
import { useState } from 'react';
import { CalculatorButton } from '../components/CalculatorButton';

const Home: NextPage = () => {
	const [expression, setExpression] = useState('');
	const [result, setResult] = useState(0);

	return (
		<div className='flex justify-center items-center h-screen bg-gray-50 select-none'>
			<div className='bg-white grid grid-cols-4 w-72 p-2 rounded-md shadow-xl shadow-pink-200 bg-gradient-to-br from-pink-500 to-red-500'>
				<div className='col-span-4 my-2 mx-1'>
					<p className='text-white opacity-75 text-right overflow-x-auto whitespace-nowrap'>
						{expression}=
					</p>
					<p className='text-white text-right text-3xl mt-1 text-ellipsis overflow-hidden select-text'>
						{result.toLocaleString()}
					</p>
				</div>
				<CalculatorButton
					onClick={() => {
						setExpression('');
						setResult(0);
					}}>
					AC
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '(')}>
					(
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + ')')}>
					)
				</CalculatorButton>
				<CalculatorButton
					onClick={() => setExpression((_expression) => '(' + _expression + ')**2')}>
					x²
				</CalculatorButton>
				<CalculatorButton
					onClick={() => setExpression((_expression) => 'Math.sqrt(' + _expression + ')')}>
					√
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => '-(' + _expression + ')')}>
					±
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '/100')}>
					%
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '/')}>
					÷
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '7')}>
					7
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '8')}>
					8
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '9')}>
					9
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '*')}>
					×
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '4')}>
					4
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '5')}>
					5
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '6')}>
					6
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '-')}>
					–
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '1')}>
					1
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '2')}>
					2
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '3')}>
					3
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '+')}>
					+
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '0')}>
					0
				</CalculatorButton>
				<CalculatorButton onClick={() => setExpression((_expression) => _expression + '.')}>
					.
				</CalculatorButton>
				<CalculatorButton
					onClick={() => {
						try {
							const _result = eval(expression);
							setResult(_result);
						} catch {}
					}}
					width={2}>
					=
				</CalculatorButton>
			</div>
		</div>
	);
};

export default Home;
