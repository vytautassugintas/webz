const onbserverConfig: MutationObserverInit = {
  attributes: true,
  childList: true,
  subtree: true
};

const mutationCallback: MutationCallback = function(
  mutationsList: MutationRecord[]
): void {
  for (const mutation of mutationsList) {
    console.log(mutation.target.textContent);
  }
};

const observer = new MutationObserver(mutationCallback);
const container: HTMLElement = document.getElementById("container");

let clickCount: number = 0;

const onClickListener = container.addEventListener("click", () => {
  clickCount = clickCount + 1;
  container.innerHTML = `${clickCount}`;
});

observer.observe(container, onbserverConfig);
