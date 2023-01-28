import React from 'react'
import trash from '../img/trash-2.svg'

const Template = ({meds, handleDelete}) => {
    return (
			<div>
				{meds.map((med) => (
					<div
						key={med.id}
						className='grid grid-col-1 border border-blue-900 px-5 mb-5 '>
						<div>
							<div>
								<h3 className='medName'>Name of Dr</h3>
								<p className='medName1'>{med.name}</p>
							</div>

							<hr />
							<div className='text-blue-800 mb-3'>
								<h4 className='font-extrabold'>Type of drug</h4>{' '}
								<span>{med.type}</span>
								<h4 className='font-extrabold'>Name of drug</h4>
								<span>{med.drug}</span>
								<p className='font-extrabold'>
									What day did you start taking the drug?
								</p>
								<span> {med.date}</span>
								<p className='font-extrabold'>
									What time will you start taking the drug?
								</p>
								<span> {med.time}</span>
								<p className='font-extrabold'>Number of days to take drug</p>
								<span>{med.number}</span>
							</div>
							<div className='flex justify-end mb-2'>
								<img
									src={trash}
									alt={trash}
									onClick={() => handleDelete(med.id)}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		);
}

export default Template
