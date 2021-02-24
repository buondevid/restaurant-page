(()=>{"use strict";function t(){document.querySelector("main").innerHTML="\n\t<section class='home'>\n\t<p><span>A Casa</span> it's a cozy family-owned restaurant, produly in business since 1958.</p>\n\t<p>Our main focus is to make you feel home, and that's where our name comes from: in <span>Italian</span>, A Casa means At Home.</p>\n\t<p>You will discover a truly innovative taste combined with an authentic <span>traditional</span> expertise... <span>Buon Appetito!</span></p>\n\t<img src=\"images/philli-tweetie-pzdePziknBQ-unsplash.jpg\" alt='old woman chef' id='old-woman-chef'>\n</section>\n"}function n(t){t.classList.add("activeButton")}document.getElementById("content").innerHTML="\n\t<header>\n\t<h1>A Casa</h1>\n\t<nav>\n\t\t<button>Home</button>\n\t\t<button>Menu</button>\n\t\t<button>Contact</button>\n\t</nav>\n\t</header>\n\t<main>\n\t</main>\n\t<div class='signature'><p>made with 🧠  by <a style='font-weight:bold; text-decoration: none; color:#e4c4c6;' href='https://github.com/buondevid' target=\"_blank\" rel='noopener noreferrer'>buondevid</a></p></div>\n",t(),n(document.querySelector("button")),document.querySelector("nav").addEventListener("click",(a=>{if("BUTTON"===a.target.nodeName)switch(document.querySelectorAll("button").forEach((t=>t.classList.remove("activeButton"))),a.target.innerHTML){case"Home":n(a.target),t();break;case"Menu":n(a.target),document.querySelector("main").innerHTML="\n\t\t\t\t<section class='menu'>\n\t\t\t\t<ul>\n\t\t\t\t\t<h2>Starters</h2>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Carpaccio di manzo</h3>\n\t\t\t\t\t\t<p>Carpaccio crudo con scaglie di grana e olio EVO</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Tagliere di salumi e formaggi</h3>\n\t\t\t\t\t\t<p>Ricco tagliere dai nostri contadini locali</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<h2>Main courses</h2>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Penne all'arrabbiata</h3>\n\t\t\t\t\t\t<p>Pasta corta con pomodoro biologico e peperoncino calabrese</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Lasagne della nonna</h3>\n\t\t\t\t\t\t<p>Delicata sfoglia con ragù fatto in casa e besciamella gourmet</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Grigliata di carne</h3>\n\t\t\t\t\t\t<p>Mix di carni provenienti dai migliori tagli di macelleria</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<h2>Desserts</h2>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Tiramisù</h3>\n\t\t\t\t\t\t<p>Un evergreen secondo ricetta tramandata da 4 generazioni</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<h3>Torta A Casa</h3>\n\t\t\t\t\t\t<p>Il nostro simbolo: una crostata alla frutta con mousse pasticcera</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\t\t\t";break;case"Contact":n(a.target),document.querySelector("main").innerHTML='\n\t\t<section class="contact">\n\t\t\t<h2>Contact us!</h2>\n\t\t\t<div class="map">\n\t\t\t\t<iframe\n\t\t\t\t\tsrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279655.03886295605!2d-64.90809273276003!3d32.318832272621535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8a2d136355129b65%3A0x3f031a66876e881d!2sBermuda!5e0!3m2!1sen!2sno!4v1614088228519!5m2!1sen!2sno"\n\t\t\t\t\tstyle="border:0;" allowfullscreen="" loading="eager"></iframe>\n\t\t\t\t<p>You can easily reach us by car! Have a look at the map to find the shortest way.</p>\n\t\t\t</div>\n\t\t\t<div class="contact-links">\n\t\t\t\t<p class=\'p-email\'><i class="far fa-envelope"></i>Email us at <a href="mailto:">acasa@bermuda.com</a></p>\n\t\t\t\t<p class=\'p-tel\'><i class="fas fa-phone-alt"></i>Call us at <a href="tel:+">123 4567 890</a></p>\n\t\t\t</div>\n\t\t\t<p class="p-goodbye">We are waiting for you: come and feel like A Casa!</p>\n\t\t</section>\n'}}))})();