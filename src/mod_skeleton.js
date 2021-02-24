export default function skeletonLoad() {
	const divContent = document.getElementById('content');

	divContent.innerHTML = `
	<header>
	<h1>A Casa</h1>
	<nav>
		<button>Home</button>
		<button>Menu</button>
		<button>Contact</button>
	</nav>
	</header>
	<main>
	</main>
	<div class='signature'><p>made with 🧠  by <a style='font-weight:bold; text-decoration: none; color:#e4c4c6;' href='https://github.com/buondevid' target="_blank" rel='noopener noreferrer'>buondevid</a></p></div>
`;
}
