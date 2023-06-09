"use strict";

/**
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {string} string
 * @return {string} Compressed string or original string if equal or smaller than compressed
 */
export default function compressString(string) {
    if (!string || string.length < 2) return string;

    let countConsecutive = 0;
    const compressedStringBuilder = [];

    for (let i = 0; i < string.length; i++) {
        countConsecutive++;

        const currentLetter = string.charAt(i);
        const nextLetter = string.charAt(i + 1);
        const isLastLetter = i + 1 >= string.length;

        if (isLastLetter || currentLetter !== nextLetter) {
            compressedStringBuilder.push(currentLetter, countConsecutive);
            countConsecutive = 0;
        }
    }

    const compressedString = compressedStringBuilder.join("");

    return compressedString.length >= string.length ? string : compressedString;
}
