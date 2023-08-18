function getHeapSortAnimations(array) {
	const animations = [];
	const size = array.length;

	console.log(array);

	for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
		heapify(array, size, i, animations);
	}

	for (let i = size - 1; i > 0; i--) {
		[array[0], array[i]] = [array[i], array[0]];
        animations.push([0, i, array[0], array[i]]);
		heapify(array, i, 0, animations);
	}

	console.log(array);
    console.log(animations);

	return animations;
}

function heapify(array, size, index, animations) {
	let root = index;
	let leftChild = 2 * index + 1;
	let rightChild = 2 * index + 2;

	if (leftChild < size && array[leftChild] > array[root]) {
		animations.push([root, leftChild]);
		root = leftChild;
	}

	if (rightChild < size && array[rightChild] > array[root]) {
		animations.push([root, rightChild]);
		root = rightChild;
	}

	if (root !== index) {
		[array[root], array[index]] = [array[index], array[root]];
		animations.push([index, root, array[index], array[root]]);
		heapify(array, size, root, animations);
	}
}

export default getHeapSortAnimations;
