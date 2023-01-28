import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from './Footer';


const MediBuilder = () => {
    
    return (
			<section>
				<div className='navContainer1'>
					<h1 className='flex items-center gap-1'>
						{' '}
						<BsFillCircleFill className='text-blue-800' />
						MCR
					</h1>
					<Link to='/'>
						<button className='btn-header1'>Sign out</button>
					</Link>
				</div>
				<Footer title='Medication Builder'/>
			</section>
		);
}

export default MediBuilder
