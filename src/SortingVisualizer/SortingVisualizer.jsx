import React from "react";

import getMergeSortAnimations from "../Algorithms/mergeSort";
import getSelectionSortAnimations from "../Algorithms/selectionSort";
import getBubbleSortAnimations from "../Algorithms/bubbleSort";
import getQuickSortAnimations from "../Algorithms/quixkSort";
import getHeapSortAnimations from "../Algorithms/heapSort";

import "./SortingVisualizer.css";

const ANIMATION_SPEED_IN_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOUR = "lightgrey";
const SECONDARY_COLOUR = "grey";
const PIVOT_COLOUR = "lightgreen";

class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			array: [],
		};
	}

	componentDidMount() {
		this.resetArray();
	}

	resetArray() {
		const array = [];
		for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
			array.push(randomIntFromInterval(5, 600));
		}

		this.setState({ array });
	}

	mergeSort() {
		const animations = getMergeSortAnimations(this.state.array);

		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("array-bar");
			const isColorChange = i % 3 !== 2;

			if (isColorChange) {
				const [barOneIndex, barTwoIndex] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;
				const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;

				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_IN_MS);
			} else {
				setTimeout(() => {
					const [barOneIndex, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIndex].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_IN_MS);
			}
		}
	}

	selectionSort() {
		const animations = getSelectionSortAnimations(this.state.array);

		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("array-bar");
			const isColorChange = i % 3 !== 2;

			if (isColorChange) {
				const [barOneIndex, barTwoIndex] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;
				const color = i % 3 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;

				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_IN_MS);
			} else {
				const [barOneIndex, newHeight] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;

				setTimeout(() => {
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_IN_MS);
			}
		}
	}

	bubbleSort() {
		const animations = getBubbleSortAnimations(this.state.array);

		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("array-bar");
			const isColorChange = i % 4 < 2;

			if (isColorChange) {
				const [barOneIndex, barTwoIndex] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;
				const color = i % 4 === 0 ? SECONDARY_COLOUR : PRIMARY_COLOUR;

				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_IN_MS);
			} else {
				const [barOneIndex, newHeight] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;

				setTimeout(() => {
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_IN_MS);
			}
		}
	}

	quickSort() {
		const animations = getQuickSortAnimations(this.state.array);

		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName("array-bar");

			if (animations[i].length === 3) {
				console.log("Pivot: " + animations[i]);
				const pivotBarStyle = arrayBars[animations[i][0]].style;
				if (animations[i][1] === true) {
					setTimeout(() => {
						pivotBarStyle.backgroundColor = PRIMARY_COLOUR;
					}, i * ANIMATION_SPEED_IN_MS);
				} else {
					setTimeout(() => {
						pivotBarStyle.backgroundColor = PIVOT_COLOUR;
					}, i * ANIMATION_SPEED_IN_MS);
				}
			} else if (animations[i].length === 2) {
				console.log("Comparison: " + animations[i]);
				const [barOneIndex, barTwoIndex] = animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;

				setTimeout(() => {
					barOneStyle.backgroundColor = SECONDARY_COLOUR;
					barTwoStyle.backgroundColor = SECONDARY_COLOUR;
				}, i * ANIMATION_SPEED_IN_MS);

				setTimeout(() => {
					barOneStyle.backgroundColor = PRIMARY_COLOUR;
					barTwoStyle.backgroundColor = PRIMARY_COLOUR;
				}, (i + 1) * ANIMATION_SPEED_IN_MS);
			} else if (animations[i].length === 4) {
				console.log("Swap: " + animations[i]);
				const [barOneIndex, barTwoIndex, barOneHeight, barTwoHeight] =
					animations[i];
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;

				setTimeout(() => {
					barOneStyle.height = `${barOneHeight}px`;
					barTwoStyle.height = `${barTwoHeight}px`;
				}, i * ANIMATION_SPEED_IN_MS);
			}
		}
	}

	heapSort() {
		const animations = getHeapSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName("array-bar");

        for (let i = 0; i < animations.length; i++) {
            if (animations[i].length === 2) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOUR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOUR;
                }, i * ANIMATION_SPEED_IN_MS);

                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOUR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOUR;
                }, (i + 1) * ANIMATION_SPEED_IN_MS);
            } else if (animations[i].length === 4) {
                const [
                    barOneIndex,
                    barTwoIndex,
                    barOneHeight,
                    barTwoHeight,
                ] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight}px`;
                    barTwoStyle.height = `${barTwoHeight}px`;
                }, i * ANIMATION_SPEED_IN_MS);
            }
        }
	}

	testSortingAlgorithm() {
		for (let i = 0; i < 100; i++) {
			const array = [];
			const length = randomIntFromInterval(1, 1000);
			for (let j = 0; j < length; j++) {
				array.push(randomIntFromInterval(-1000, 1000));
			}
			const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
			const mergeSortedArray = getMergeSortAnimations(array.slice());
			console.log(arrayAreEqual(javaScriptSortedArray, mergeSortedArray));
		}
	}

	render() {
		const { array } = this.state;

		return (
			<div className="array-container">
				{array.map((value, index) => (
					<div
						className="array-bar"
						key={index}
						style={{
							backgroundColor: PRIMARY_COLOUR,
							height: `${value}px`,
						}}
					></div>
				))}

				<button onClick={() => this.resetArray()}>
					Generate New Array
				</button>
				<button onClick={() => this.mergeSort()}> Merge Sort </button>
				<button onClick={() => this.quickSort()}> Quick Sort </button>
				<button onClick={() => this.heapSort()}> Heap SOrt </button>
				<button onClick={() => this.bubbleSort()}> Bubble Sort </button>
				<button onClick={() => this.selectionSort()}>
					{" "}
					Selection Sort{" "}
				</button>
				<button onClick={() => this.testSortingAlgorithm()}>
					{" "}
					TestSortingAlgorithm{" "}
				</button>
			</div>
		);
	}
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayAreEqual(one, two) {
	if (one.length !== two.length) return false;
	for (let i = 0; i < one.length; i++) {
		if (one[i] != two[i]) return false;
	}

	return true;
}

export default SortingVisualizer;
