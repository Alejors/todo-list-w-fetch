import React, { useState, useEffect } from "react";
import List from "./list.js";
import Footer from "./footer.js";

// let hardcodedtask = ['brush teeth', 'wash hands', 'walk the dog', 'feed the cats'];

const Home = () => {
	const [task, setTask] = useState([]);

	useEffect(() =>
		fetch('http://assets.breatheco.de/apis/fake/todos/user/alejo')
			.then(response => response.json())
			.then(data => setTask(data))
			.catch(error => console.log(error))
		, [])

	useEffect(() => {
		if (task != []) {
			fetch('https://assets.breatheco.de/apis/fake/todos/user/alejo', {
				method: "PUT",
				body: JSON.stringify(task),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(resp => {
					console.log(resp.ok);
					console.log(resp.status);
					console.log(resp.text());
					return resp.json();
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, [task])

	//ADD TODO
	let handlesubmit = (e) => {
		if (e.key === 'Enter') {
			let auxarr = [...task];
			let newtask = { "label": e.target.value, "done": false }
			auxarr.push(newtask);
			setTask(auxarr);
			e.target.value = '';
		}
	}

	//DELETE TODO
	let deletetodo = (index) => {
		let auxarr = [...task];
		auxarr[index].done = true;
		let filtered = auxarr.filter((e) => e.done !== true);
		setTask(filtered);
	}

	const deleteeverything = () => {
		setTask([]);
	}

	return (
		<>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<h1 className="bg-dark mt-4 text-light text-center">My To-Do's</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-6 mt-2">
						<ul className="list-group">
							<li className="list-group-item">
								<input className="form-control" type="text" placeholder="What needs to be done?" onKeyDown={(e) => handlesubmit(e)} />
							</li>
							<List task={task} deletetodo={deletetodo} />
							<Footer task={task} />
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<button type="button" className="btn btn-danger mt-1 col-md-2" onClick={deleteeverything}>Delete everything!</button>
				</div>
			</div>
		</>
	);
};

export default Home;