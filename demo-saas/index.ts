const UNIT = "px";
const AUTO = "auto";
const MOBILE_HEIGHT = 812;

const HERO_PADDING = 112;
const NAV_HEIGHT = 72;

const windowHeight = window.innerHeight;
const screenHeight = screen.height;

const heroContainer: HTMLElement = document.getElementById("hero");
const featuresSectionContainer: HTMLElement = document.getElementById(
  "features-section"
);

const landingContainerHeight = windowHeight - HERO_PADDING - NAV_HEIGHT;

function removeScrollIcon() {
  const scrollIcon = document.getElementById("scroll-icon");
  scrollIcon && scrollIcon.parentNode.removeChild(scrollIcon);
}

if (screenHeight >= MOBILE_HEIGHT) {
  heroContainer.style.height = `${landingContainerHeight}${UNIT}`;
  featuresSectionContainer.style.height = `${windowHeight}${UNIT}`;
} else {
  removeScrollIcon();
}
