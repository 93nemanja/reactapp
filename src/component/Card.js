import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Card = () => {
	const [data, setData] = useState({
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div id="PaymentForm">
			<Cards
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
			<form action="">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="expiry"
					placeholder="Expire Date"
					onChange={handleInputChange}
				/>
			</form>
			<div className="btn-wrap">
				<button type="submit" className="save-btn">Save</button>
			</div>
			<div className="cards-wrap">
				<Cards
					expiry={data.expiry}
					focus={data.focus}
					name={data.name}
					number={data.number}
				/>
				<button className="card-btn">+</button>
			</div>
		</div>
	);
};

export default Card;