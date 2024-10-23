function fiboRecursive(n, arr = [], counter = 0) {
	if (counter === 0 && n >= 1) {
		arr = arr.concat(0)
		return fiboRecursive(n, arr, counter + 1)
	}

	if (counter === 1 && n >= 2) {
		arr = arr.concat(1)
		return fiboRecursive(n, arr, counter + 1)
	}

	if (counter >= 2) {
		let sum = arr[counter - 1] + arr[counter - 2]
		arr = arr.concat(sum)

		if (counter + 1 != n) return fiboRecursive(n, arr, counter + 1)
		else return arr
	}
}

console.log(fiboRecursive(10))
