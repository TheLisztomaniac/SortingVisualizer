function getQuickSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return;

	console.log(array);

	quickSort(array, 0, array.length - 1, animations);

	console.log(array);

	return animations;
}

function quickSort(array, start, end, animations) {
	if (start < end) {
		let pivot = end;
		let i = start;

		animations.push([pivot, false, false]);

		for (let j = start; j <= end - 1; j++) {
			animations.push([i, j]);
			if (array[j] < array[pivot]) {
                [array[j], array[i]] = [array[i], array[j]];
				animations.push([i, j, array[i], array[j]]);
				i++;
			}
		}

		[array[i], array[pivot]] = [array[pivot], array[i]];
        animations.push([i, pivot, array[i], array[pivot]]);
        animations.push([pivot, true, false])
		pivot = i;

		quickSort(array, start, pivot - 1, animations);
		quickSort(array, pivot + 1, end, animations);
	}
}

export default getQuickSortAnimations;
