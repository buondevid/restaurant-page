export default function contactLoad() {
	const main = document.querySelector('main');

	main.innerHTML = `
		<section class="contact">
			<h2>Contact us!</h2>
			<div class="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279655.03886295605!2d-64.90809273276003!3d32.318832272621535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a2d136355129b65%3A0x3f031a66876e881d!2sBermuda!5e0!3m2!1sen!2sno!4v1614088228519!5m2!1sen!2sno"
					style="border:0;" allowfullscreen="" loading="eager"></iframe>
				<p>You can easily reach us by car! Have a look at the map to find the shortest way.</p>
			</div>
			<div class="contact-links">
				<p class='p-email'><i class="far fa-envelope"></i>Email us at <a href="mailto:">acasa@bermuda.com</a></p>
				<p class='p-tel'><i class="fas fa-phone-alt"></i>Call us at <a href="tel:+">123 4567 890</a></p>
			</div>
			<p class="p-goodbye">We are waiting for you: come and feel like A Casa!</p>
		</section>
`;
}
