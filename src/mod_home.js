export default function homeLoad() {
	const main = document.querySelector('main');

	main.innerHTML = `
	<section class='home'>
	<p><span>A Casa</span> it's a cozy family-owned restaurant, produly in business since 1958.</p>
	<p>Our main focus is to make you feel home, and that's where our name comes from: in <span>Italian</span>, A Casa means At Home.</p>
	<p>You will discover a truly innovative taste combined with an authentic <span>traditional</span> expertise... <span>Buon Appetito!</span></p>
	<img src="/dist/images/philli-tweetie-pzdePziknBQ-unsplash.jpg" alt='old woman chef' id='old-woman-chef'>
</section>
`;
}
