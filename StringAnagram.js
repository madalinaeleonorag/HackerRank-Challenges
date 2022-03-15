/*
 * Complete the 'stringAnagram' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY dictionary
 *  2. STRING_ARRAY query
 */

function stringAnagram(dictionary, query) {
    let resultArray = [];
    query.forEach(queryItem => {
        let countManyAnagramsInDictionary = 0;
        dictionary.forEach(dictionaryItem => {
            const querySplit = queryItem.split("");
            const dictionarySplit = dictionaryItem.split("");
            if (querySplit.length === dictionarySplit.length) {
                let countIfAnagram = 0;
                querySplit.forEach(queryLetter => {
                    if (dictionarySplit.includes(queryLetter)) {
                        countIfAnagram++;
                    }
                   }
                );
                if(countIfAnagram === querySplit.length) {
                    countManyAnagramsInDictionary++;
                }
            }
        })
        resultArray.push(countManyAnagramsInDictionary);
    })
    return resultArray;
}
