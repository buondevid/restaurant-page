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
	<section class='home'>
		<p><span>A Casa</span> it's a cozy family-owned restaurant, produly in business since 1958.</p>
		<p>Our main focus is to make you feel home, and that's where our name comes from: in <span>Italian</span>, A Casa means At Home.</p>
		<p>You will discover a truly innovative taste combined with an authentic <span>traditional</span> expertise... <span>Buon Appetito!</span></p>
	</section>
	</main>
	<div class='signature'><p>made with 🧠  by <a style='font-weight:bold; text-decoration: none; color:#CB434C;' href='https://github.com/buondevid' target="_blank" rel='noopener noreferrer'>buondevid</a></p></div>
`;
}
