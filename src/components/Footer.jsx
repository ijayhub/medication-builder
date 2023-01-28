import React, { useState } from 'react'
import Template from './Template';
import useLocalStorage from '../hooks/useLocalStorage'


const Footer = ({title}) => {
	const [name, setName] = useState('');
	const [type, setType] = useState('Capsule');
	const [drug, setDrug] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [number, setNumber] = useState('');
	const [meds, setMeds] = useLocalStorage('meds', [])
	const [isPending, setIsPending] = useState(false)

	

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && type && drug && date && time && number) {
			const medicine = { id: Math.random(), name, type, date, drug, time,number };
			setMeds((meds) => {
				setIsPending(true);
				return [...meds, medicine]
			})
		}; 
		setName('');
		setType('');
		setDate('');
		setNumber('');
		setDrug('');
		setTime('')
	};
	// function to handleDelte
	const handleDelete = (id) => {
		const newMedicine= meds.filter((med) => med.id !== id)
		setMeds(newMedicine)
	}
	// function for button
	setTimeout(() => {
		if (isPending) {
			setIsPending(false);
				alert('medication history created');
		}
	
	}, 300);

	return (
		<div>
			<div className='mb-4'>
				<h2 className='h2-header'>{title}</h2>
			</div>
			{meds && <Template meds={meds} handleDelete={handleDelete} />}
			<footer className='p-4 lg:p-8 bg-blue-200 text-blue-900'>
				<form
					onSubmit={handleSubmit}
					className='lg:items-center justify-center'>
					<div className="lg:flex">
						<div className='field mr-8'>
							<label htmlFor='text' className='font-bold'>
								Name of doctor that prescribed
							</label>
							<br />
							<input
								type='text'
								id='text'
								name='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='p-2 rounded-md my-4 w-full'
							/>
						</div>
						<div className='field mr-8'>
							<label htmlFor='type' className='font-bold'>
								Type of drug
							</label>
							<br />
							<select
								className='p-2 rounded-md my-4 w-full'
								id='type'
								name='type'
								value={type}
								onChange={(e) => setType(e.target.value)}>
								<option value='Capsule'>Capsule</option>
								<option value='Tablet'>Tablet</option>
								<option value='Injection'>Injection</option>
							</select>
						</div>
						<div className='field mr-8 '>
							<label htmlFor='drug' className='font-bold'>
								Name of drug
							</label>
							<br />
							<input
								type='text'
								name='text'
								id='drug'
								value={drug}
								onChange={(e) => setDrug(e.target.value)}
								className='p-2 rounded-md my-4 w-full'
							/>
						</div>
						<div className='field mr-8'>
							<label htmlFor='date' className='font-bold'>
								What day did you start taking the drug?
							</label>
							<br />
							<input
								type='date'
								id='date'
								name='date'
								min='2023-01-28'
								max='2023-12-31'
								value={date}
								onChange={(e) => setDate(e.target.value)}
								className='p-2 rounded-md my-4 w-full'
							/>
						</div>
						<div className='field mr-8'>
							<label htmlFor='time' className='font-bold'>
								Time to take drug
							</label>
							<br />
							<input
								type='time'
								name='time'
								id='time'
								value={time}
								onChange={(e) => setTime(e.target.value)}
								className='p-2 rounded-md my-4  w-full'
							/>
						</div>
						<div className='field mr-8'>
							<label htmlFor='number ' className='font-bold'>
								Number of days to take drug
							</label>
							<br />
							<input
								type='number'
								name='number'
								id='number'
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								className='p-2 rounded-md my-4  w-full'
								placeholder='days'
							/>
						</div>
					</div>
					<div className='field mt-2 flex justify-center items-center'>
						{!isPending && (
							<button
								type='submit'
								className='bg-blue-900 rounded-md text-white p-2 my-4 flex justify-center items-center'>
								Add prescribed drug
							</button>
						)}
						{isPending && (
							<button
								disabled
								className='bg-blue-900 rounded-md text-white p-2 mt-2 my-4'>
								Adding prescribed drug....
							</button>
						)}
					</div>
				</form>

				<div className='flex items-center justify-center mt-12'>
					<p>@copyright Ijeoma💖</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer

