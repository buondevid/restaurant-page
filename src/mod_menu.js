export default function menuLoad() {
	const main = document.querySelector('main');

	main.innerHTML = `
				<section class='menu fade'>
				<ul>
					<h2>Starters</h2>
					<li>
						<h3>Carpaccio di manzo</h3>
						<p>Carpaccio crudo con scaglie di grana e olio EVO</p>
					</li>
					<li>
						<h3>Tagliere di salumi e formaggi</h3>
						<p>Ricco tagliere dai nostri contadini locali</p>
					</li>
					<h2>Main courses</h2>
					<li>
						<h3>Penne all'arrabbiata</h3>
						<p>Pasta corta con pomodoro biologico e peperoncino calabrese</p>
					</li>
					<li>
						<h3>Lasagne della nonna</h3>
						<p>Delicata sfoglia con ragù fatto in casa e besciamella gourmet</p>
					</li>
					<li>
						<h3>Grigliata di carne</h3>
						<p>Mix di carni provenienti dai migliori tagli di macelleria</p>
					</li>
					<h2>Desserts</h2>
					<li>
						<h3>Tiramisù</h3>
						<p>Un evergreen secondo ricetta tramandata da 4 generazioni</p>
					</li>
					<li>
						<h3>Torta A Casa</h3>
						<p>Il nostro simbolo: una crostata alla frutta con mousse pasticcera</p>
					</li>
				</ul>
			</section>
			`;
}
