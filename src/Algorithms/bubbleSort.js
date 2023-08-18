function getBubbleSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return;

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			animations.push([j, j]);
			animations.push([j, j]);

			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}

			animations.push([j, array[j]]);
			animations.push([j + 1, array[j + 1]]);
		}
	}

	return animations;
}

export default getBubbleSortAnimations;
