export const replaceRepetitiveLettersWithUnderscore = (str) => {
    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1] && str[i] !== '_') {
            count++;
        } else {
            if (count >= 3) {
                let underscoreCount = Math.floor(count / 3);
                result += '_'.repeat(underscoreCount);
            } else {
                result += str.slice(i - count + 1, i + 1);
            }
            count = 1;
        }
    }

    return result;
};