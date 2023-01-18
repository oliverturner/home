export function initNav() {
	const rootEl = document.querySelector<HTMLHtmlElement>(":root")!;
	const navBtn = document.querySelector<HTMLButtonElement>("#nav-btn")!;

	if (!rootEl || !navBtn) return;

	const navIcon = navBtn.querySelector("use")!;

	const toggleNav = () => {
		const navOpen = rootEl.classList.toggle("nav-open");
		const iconId = navOpen ? "#icon-close" : "#icon-burger";
		navIcon.setAttribute("href", "/spritesheet.svg" + iconId);
	};

	navBtn.addEventListener("click", toggleNav);
}

initNav();
