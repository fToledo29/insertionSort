const insetionSort = (arr = []) => {

	let i = 1;

	 while (i < arr.length) {
		 
		 let temp = arr[i];
		 
		 let j = i;
		 
		 while (j > 0 && arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j--;
		}

		arr[j] = temp; 

		i++;
	}

	return arr;
}

const inputArr = [
	9,34, 328, 232, 3, 5, 6, 4, 8776, 234, 4,
	2, 3823, 8273, 2383,43881, 32838, 43, 12, 
	0.123, 34, 66, 78, 13, 87, 3234, 645, 42,
	18, 19, 372, 1, 0.3247, 42, 65, 82, 98];

console.log('Input Array: ', inputArr);

const res = insetionSort(inputArr);

console.log('Result: ', res);
