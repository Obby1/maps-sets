// Quick Question #1
[1,2,3,4]

//Quick Question #2
// [refr]

//Quick Questions #3
// {[1,2,3]=>true, [1,2,3]=> false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate= arr => (new Set(arr).size)!==arr.length? true: false;

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount (str){
    const vowels = `aeiou`;
    const m = new Map();
    for (let letter of str){
        if (vowels.includes(letter)){
            if (m.has(letter)){
                m.set(letter, m.get(letter) +1);
            }
            else 
            {
                m.set(letter, 1)
            }
        
        }
    }
    return m;
}