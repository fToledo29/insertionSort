const insetionSort = (arr = []) => {

	let i = 1;

	 while (i < arr.length) {
		 
		 // Storing current item to be validated
		 let currentItem = arr[i];
		 
		 let j = i;
		 
		 /*
		  *  Validating if current item is smaller than the 
		  *  item one index before.
		  */
		 while (j > 0 && currentItem < arr[j - 1]) {
			/**
			 * If current item is smaler we move the item before (j - 1) one
			 * position above "j"
			 */
			arr[j] = arr[j - 1];

			// We decrease the index so we can validate below items.
			j--;
		}

		// Finally we assign the stored item to the final position of "j"
		arr[j] = currentItem; 

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
