import React from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
			<>
				<nav className='nav'>
					<div className='navContainer'>
						<h1 className='flex items-center gap-1'>
							{' '}
							<BsCircleFill className='text-blue-800' />
							MCR
						</h1>
					</div>
					<div className='flex justify-center items-center m-20 lg:pt-16 '>
						<div className='leading-loose text-center'>
							<h2 className='lg:text-7xl font-extrabold mb-5 text-white'>
								Real-Time Medication
								<br /> Management
							</h2>
							<div className='font-extrabold'>
								<p>Mcr medication management offers you real-time</p>
								<p>insight to keep record of your drug</p>
							</div>
							<div className='mt-8 w-full'>
								<Link to='/medibuilder'>
									<button className='btn-header'>Sign in</button>
								</Link>
							</div>
						</div>
					</div>
					
				</nav>
			</>
		);
}

export default Header
