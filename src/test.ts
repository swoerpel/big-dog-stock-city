const animals = ['cats','dogs','birds','fish','jaguars'];

const vowelCount = animals.map((str: string): number => {
	let count = 0;
	for(let i = 0; i < str.length; i ++) {
		if (str[i] == "a" ||
		    str[i] == "e" ||
		    str[i] == "i" ||
		    str[i] == "o" ||
		    str[i] == "u" ||
		    str[i] == "y") {
		   count ++;
		   console.log(str[i]);
		}
	}
	return count;
})

console.log("vowelCount", vowelCount);
