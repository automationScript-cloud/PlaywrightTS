import {test} from "@playwright/test";

test('vowel and consonant',async ({})=>{
const str = "Automation Jay";

let vowels = "";
let consonants = "";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // Convert uppercase letters manually to lowercase
    if (ch >= "A" && ch <= "Z") {
        ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    if (ch >= "a" && ch <= "z") {
        if (
            ch === "a" ||
            ch === "e" ||
            ch === "i" ||
            ch === "o" ||
            ch === "u"
        ) {
            vowels += ch + " ";
            vowelCount++;
        } else {
            consonants += ch + " ";
            consonantCount++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Vowel Count:", vowelCount);

console.log("Consonants:", consonants);
console.log("Consonant Count:", consonantCount);

});