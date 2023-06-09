"use strict";

/**
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean} True if strings are less than two edits away, otherwise false
 */
export default function areStringsLessThanTwoEditsAway(firstString, secondString) {
    const firstStringSize = firstString.length;
    const secondStringSize = secondString.length;

    if (firstStringSize === secondStringSize) return checkReplace(firstString, secondString);
    if (firstStringSize + 1 === secondStringSize) return checkInsert(secondString, firstString);
    if (firstStringSize - 1 === secondStringSize) return checkInsert(firstString, secondString);

    return false;
}

function checkReplace(firstString, secondString) {
    let foundDifference = false;

    for (let i = 0; i < firstString.length; i++) {
        if (firstString.charAt(i) !== secondString.charAt(i)) {
            if (foundDifference) return false;

            foundDifference = true;
        }
    }

    return true;
}

function checkInsert(biggerString, smallerString) {
    let biggerStringIndex = 0;
    let smallerStringIndex = 0;

    while (biggerStringIndex < biggerString.length && smallerStringIndex < smallerString.length) {
        if (biggerString.charAt(biggerStringIndex) !== smallerString.charAt(smallerStringIndex)) {
            if (biggerStringIndex !== smallerStringIndex) return false;

            biggerStringIndex++;
        } else {
            biggerStringIndex++;
            smallerStringIndex++;
        }
    }

    return true;
}
