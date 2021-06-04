const CreateRoutine = () => {
	return (
		<>
			<p>Name</p>
			<input type="text">Name</input>
			<p>Goal</p>
			<input type="text">Goal</input>
		</>
	)
}

const MyRoutineContent = () => {
	return (
		<div>
			<header>
				<h1>My Routines</h1>
			</header>
			<main>
				{/* <CreateRoutine /> */}
			</main>
		</div>
	)
}

export default MyRoutineContent