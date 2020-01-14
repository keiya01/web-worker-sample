function fibonacci(num, prev = 1, current = 0, result = []) {
	if (current > num) {
		return result;
	}

	result.push(current);

	return fibonacci(num, current, prev + current, result);
}

onerror = function(ev) {
	console.error(ev);
};

onmessage = function(e) {
	postMessage({ isLoading: true });

	const num = Number(e.data);
	const result = fibonacci(num);

	postMessage({
		isLoading: false,
		fibonacci: result.join(", ")
	});
};
