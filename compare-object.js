const first = { a: 1 };
const second = { b: 2 };
const third = first;
if (first === third) {
    // console.log("object are equal");
} else {
    // console.log('Object ar different');
}

// ------------------------------------
const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

function compareObjects(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    for (const prop in object1) {
        if (object1[prop] !== object2[prop]) {
            return false;
        }
    }
    return true;
}
console.log(compareObjects(first2, second2));