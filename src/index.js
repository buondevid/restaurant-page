import skeletonLoad from './mod_page-load';
import homeLoad from './mod_home';
import menuLoad from './mod_menu';

skeletonLoad(); // render title,nav and signature
homeLoad(); // render home

function clearButtonClasses() {
	const buttons = document.querySelectorAll('button');
	buttons.forEach((btn) => btn.classList.remove('activeButton'));
}

function setActiveButton(target) {
	target.classList.add('activeButton');
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
				break;
			case 'Menu':
				setActiveButton(e.target);
				menuLoad();
				break;
			// case 'Contact':
			// 	contactLoad();
			// 	break;
			default:
				console.log('nothing here');
			}
		}
	});
}());
// menuLoad(); // render menu
