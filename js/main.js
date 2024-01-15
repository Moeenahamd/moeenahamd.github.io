(function () {
	var header = document.getElementById("mainHeader");
	var installButton = document.getElementById("navInstallButton");

	console.log("Found installation button", installButton);

	function changeHeader(isHamburgerOpened = false) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || isHamburgerOpened);
		installButton.classList.toggle("header-background", scrollTop >= 50);
	}

	var didScroll = false;

	$(window).scroll(function () {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		const isOpened = document.body.classList.toggle("nav-open");
		changeHeader(forceBackground = isOpened);
	});

	$("a[href*=\\#]").on("click", function (event) {
		if (this.pathname === window.location.pathname) {
			event.preventDefault();

			$("html, body").animate({
				scrollTop: $(this.hash).offset().top
			}, 500);
		}
	});
})();
