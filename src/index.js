import skeletonLoad from './mod_skeleton';
import homeLoad from './mod_home';
import menuLoad from './mod_menu';
import contactLoad from './mod_contact';

skeletonLoad(); // render title, nav and signature
homeLoad(); // render home
setTimeout(fadeIn, 1);
setActiveButton(document.querySelector('button'));

function clearButtonClasses() {
	const buttons = document.querySelectorAll('button');
	buttons.forEach((btn) => btn.classList.remove('activeButton'));
}

function setActiveButton(target) {
	target.classList.add('activeButton');
}

function fadeIn() {
	document.querySelector('section').classList.remove('fade');
}

(function switchTabs() {
	const nav = document.querySelector('nav');
	nav.addEventListener('click', (e) => {
		if (e.target.nodeName === 'BUTTON') {
			clearButtonClasses();
			switch (e.target.innerHTML) {
			case 'Home':
				setActiveButton(e.target);
				homeLoad();
				setTimeout(fadeIn, 100);
				break;
			case 'Menu':
				setActiveButton(e.target);
				menuLoad();
				setTimeout(fadeIn, 100);
				break;
			case 'Contact':
				setActiveButton(e.target);
				contactLoad();
				setTimeout(fadeIn, 100);
				break;
			default:
			}
		}
	});
}());
