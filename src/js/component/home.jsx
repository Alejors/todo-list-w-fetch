import React, { useState } from "react";
import List from "./list.js";
import Footer from "./footer.js";

let hardcodedtask = ['brush teeth', 'wash hands', 'walk the dog', 'feed the cats'];

const Home = () => {
	const [task, setTask] = useState(hardcodedtask);

	//ADD TODO
	let handlesubmit = (e) => {
		if (e.key === 'Enter') {
			let auxarr = [...task];
			auxarr.push(e.target.value);
			setTask(auxarr);
			e.target.value = '';
		}
	}

	//DELETE TODO
	let deletetodo = (index) => {
		let auxarr = [...task];
		auxarr[index] = null;
		let filtered = auxarr.filter((e) => e !== null);
		setTask(filtered);
	}

	return (
		<div className="d-flex justify-content-center">
			<ul className="list-group col-md-6 mt-5">
				<li className="list-group-item">
					<input className="form-control" type="text" placeholder="What needs to be done?" onKeyDown={(e) => handlesubmit(e)} />
				</li>
				<List task={task} deletetodo={deletetodo} />
				<Footer task={task} />
			</ul>
		</div>
	);
};

export default Home;