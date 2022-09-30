const jokeEl = document.getElementById('joke');
const jokeGenerationBtn = document.querySelector('.btn-joke');

function generateJoke() {
	const resource = 'https://icanhazdadjoke.com';
	const options = {
		headers: {
			Accept: 'application/json',
		},
	};

	fetch(resource, options)
		.then((res) => res.json())
		.then((data) => {
			jokeEl.innerHTML = data.joke;
		})
		.catch((err) => {
			console.log(err);
			jokeEl.innerHTML = `${err}`;
		});
}

// get a joke for the first time
generateJoke();

// get a joke on a button click
jokeGenerationBtn.addEventListener('click', generateJoke);
