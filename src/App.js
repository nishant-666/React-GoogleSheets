import React, { useState } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [salary, setSalary] = useState('');
	const [hobby, setHobby] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, age, salary, hobby };

		axios
			.post(
				'https://sheet.best/api/sheets/8abefc9d-5af1-4c54-b1c3-e010462fd81a',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<Container fluid className="container">
			<Header as="h2">React google sheet</Header>
			<Form className="form">
				<Form.Field>
					<label>Name</label>
					<input
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Age</label>
					<input
						placeholder="Enter your Age"
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Salary</label>
					<input
						placeholder="Enter your Salary"
						onChange={(e) => setSalary(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Hobby</label>
					<input
						placeholder="Enter your Hobby"
						onChange={(e) => setHobby(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default App;
