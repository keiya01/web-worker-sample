const form = document.getElementById("form");
const input = document.getElementById("fibonacci");
const loadingContainer = document.getElementById("loading-container");
const result = document.getElementById("result");

if (window.Worker) {
	const worker = new Worker("worker.js");

	form.onsubmit = function(e) {
		e.preventDefault();
		worker.postMessage(input.value);
	};

	worker.onerror = function(ev) {
		console.error(ev);
	};

	worker.onmessage = function(e) {
		const data = e.data;
		if (data.isLoading) {
			loadingContainer.style.display = "block";
		} else {
			loadingContainer.style.display = "none";
			result.textContent = data.fibonacci;
		}
	};
}
