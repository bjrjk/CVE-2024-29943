function opt(a) {
    return Object.keys(a).length;
}

let arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = 1;
    opt(arr);
}

for (let i = 0; i < (1 << 28) + 3; i++) {
    arr[i] = 1;
}

print(opt(arr));
