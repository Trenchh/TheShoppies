import React from 'react';
import './MovieList.css'

const AddNomination = () => {
	return (
		<>
			<span className='mr-2 nomText'>Add to Nominations</span>
			<svg
				width='1.3em'
				height='1em'
				viewBox='0 0 16 16'
				class='bi bi-heart-fill'
				fill='#8fd50a'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
                    fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</>
	);
};

export default AddNomination;