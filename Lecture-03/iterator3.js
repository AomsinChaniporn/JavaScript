let arrayLike = {
    0 : "Hello",
    1 : "World",
    length : 2
};
//(Error no Symbol iterator)
for (let item of arrayLike) {}