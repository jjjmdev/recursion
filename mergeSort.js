function mergeSort(arr) {
	if (arr.length === 1) {
		return arr
	}

	let half_length = Math.ceil(arr.length / 2)
	let half = arr.slice(0, half_length)
	let secondHalf = arr.slice(half_length, arr.length)

	return merge(mergeSort(half), mergeSort(secondHalf))
}

function merge(arr1, arr2) {
	let arr3 = []
	let i = 0
	let j = 0

	while (i < arr1.length || j < arr2.length) {
		// console.log("Arr3:", arr3);
		if (i < arr1.length && j < arr2.length) {
			if (arr1[i] <= arr2[j]) {
				arr3.push(arr1[i])
				i++
			} else {
				arr3.push(arr2[j])
				j++
			}
		} else if (i < arr1.length) {
			arr3.push(arr1[i])
			i++
		} else if (j < arr2.length) {
			arr3.push(arr2[j])
			j++
		}
	}

	return arr3
}

let arr = [7, 2, 5, 4, 1, 6, 0, 3, 2]
console.log(mergeSort(arr))
