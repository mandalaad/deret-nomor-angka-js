function isPalindrome(str) {
    str = str.toLowerCase(); // Konversi input ke lowercase agar tidak case sensitive
    return str === str.split('').reverse().join('');
}

function countVowelConsonant(str) {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    str = str.toLowerCase(); // Konversi input ke lowercase agar tidak case sensitive
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        } else if (consonants.includes(str[i])) {
            consonantCount++;
        }
    }

    return {
        vowelCount,
        consonantCount
    };
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const isPalindromeResult = isPalindrome(inputText);
    const {
        vowelCount,
        consonantCount
    } = countVowelConsonant(inputText);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Hasil:</p>
        <p>Kalimat "${inputText}" ${isPalindromeResult ? 'termasuk' : 'tidak termasuk'} palindrome</p>
        <p>Jumlah Konsonan: ${consonantCount}</p>
        <p>Jumlah Vokal: ${vowelCount}</p>
    `;
}