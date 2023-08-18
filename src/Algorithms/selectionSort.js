function getSelectionSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return;

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			animations.push([i, j]);
			animations.push([i, j]);

			if (array[i] > array[j]) {
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}

			animations.push([i, array[i]]);
		}
	}

	console.log(array);

	return animations;
}

export default getSelectionSortAnimations;
