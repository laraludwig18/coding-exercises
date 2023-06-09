"use strict";

/**
 * Time complexity: O(N * M)
 * Space complexity: O(N)
 *
 * @param {string} stringWithSpaces
 * @param {number} stringSize
 * @param {string} [character="%20"] Character to replace spaces
 * @return {string} New string using character instead of spaces
 */
export default function replaceSpacesWithCharacter(stringWithSpaces, stringSize, character = "%20") {
    let string = stringWithSpaces.split("");
    const space = " ";
    const spaceCount = countCharacter(string, stringSize, space);
    
    let newIndex = stringSize - 1 + spaceCount * (character.length - space.length);
    for (let oldIndex = stringSize - 1; oldIndex >= 0; oldIndex--) {
        if (string[oldIndex] === space) {
            for (let characterIndex = 0; characterIndex < character.length; characterIndex++) {
                string[newIndex - characterIndex] = character.charAt(character.length - (1 + characterIndex))
            }
            newIndex -= character.length;
        } else {
            string[newIndex] = string[oldIndex]
            newIndex--
        }
    }

    return string.join("");
}

function countCharacter(string, stringSize, target) {
    let count = 0;
    for (let i = 0; i < stringSize; i++) {
        if (string[i] === target) {
            count++;
        }
    }

    return count;
}
