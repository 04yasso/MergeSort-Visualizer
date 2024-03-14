export function generateMergeSortAnimations(data) {
    const changes = [];
    if (data.length <= 1) return data;
    const tempArray = data.slice();
    mergeSortProcess(data, 0, data.length - 1, tempArray, changes);
    return changes;
}

function mergeSortProcess(
    primaryArray,
    startInd,
    endInd,
    tempArray,
    changes,
) {
    if (startInd === endInd) return;
    const midInd = Math.floor((startInd + endInd) / 2);
    mergeSortProcess(tempArray, startInd, midInd, primaryArray, changes);
    mergeSortProcess(tempArray, midInd + 1, endInd, primaryArray, changes);
    merge(primaryArray, startInd, midInd, endInd, tempArray, changes);
}

function merge(
    primaryArray,
    startInd,
    midInd,
    endInd,
    tempArray,
    changes,
) {
    let k = startInd;
    let i = startInd;
    let j = midInd + 1;
    while (i <= midInd && j <= endInd) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        changes.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        changes.push([i, j]);
        if (tempArray[i] <= tempArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            changes.push([k, tempArray[i]]);
            primaryArray[k++] = tempArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            changes.push([k, tempArray[j]]);
            primaryArray[k++] = tempArray[j++];
        }
    }
    while (i <= midInd) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        changes.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        changes.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        changes.push([k, tempArray[i]]);
        primaryArray[k++] = tempArray[i++];
    }
    while (j <= endInd) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        changes.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        changes.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        changes.push([k, tempArray[j]]);
        primaryArray[k++] = tempArray[j++];
    }
}