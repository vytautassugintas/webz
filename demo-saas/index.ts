const UNIT = "px";
const AUTO = "auto";
const MOBILE_HEIGHT = 812;

const HERO_PADDING = 56;
const NAV_HEIGHT = 72;

const windowHeight = window.innerHeight;
const screenHeight = screen.height;

const landingContainer: HTMLElement = document.getElementById("landing");
const landingContainerHeight = windowHeight - HERO_PADDING * 2 - NAV_HEIGHT;

if (screenHeight >= MOBILE_HEIGHT) {
  landingContainer.style.height = `${landingContainerHeight}${UNIT}`;
}
