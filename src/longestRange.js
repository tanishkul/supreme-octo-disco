const array = [9, 6, 1, 3, 8, 10, 12, 11];
// Output : [8,12]

// looping over the array Total complexity: O(nlogn)
const longestRange = (arr) => {
    arr.sort((a, b) => (a - b));
    let count = 0;
    let max_count = 0;
    let u = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;
        if (arr[i] === arr[i - 1] + 1) {
            count++;
            if (count > max_count) {
                max_count = count;
                u = arr[i];
            }
        } else {
            count = 1;
        }
    }
    return [u - max_count + 1, u];
}

console.log(longestRange([1, 3, 4, 2, 8, 9, 11, 15, 13, 12, 10, 14]));

const longestRangeEfficientSolution = (arr) => {
    if (arr.length === 0) return [];
    // An implicit neighborhood through unordered map
    const present = new Map();
    for (const item of arr) {
        present.set(item);
    }
    let max_count = 1;
    let l_bound = arr[0];
    let u_bound = arr[0];
    // Standard variables for BFS
    const visited = new Map();
    const q = [];
    // Main BFS loop for finding the longest component
    for (const [key, value] of present) {
        if (visited.get(key) != visited.size) {
            continue;
        }
        let count = 1;
        visited.set(x);
        q.push(x);
        while (q.length !== 0) {
            let cur = q.pop();
            if (present.get(cur + 1) != present.size && visited.get(cur + 1) == visited.size) {
                q.push(cur + 1);
                visited.set(cur + 1);
                count++;
                if (count > max_count) {
                    max_count = count;
                    u_bound = cur + 1;
                }
            }
            if (present.get(cur - 1) != present.size && visited.get(cur - 1) == visited.size) {
                q.push(cur - 1);
                visited.set(cur - 1);
                count++;
                if (count > max_count) {
                    max_count = count;
                    l_bound = cur - 1;
                }
            }
        }
    }
    return [l_bound, u_bound];
}
console.log(longestRangeEfficientSolution([1, 3, 4, 2, 8, 9, 11, 15, 13, 12, 10, 14]));