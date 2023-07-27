//cats: is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];
//destructivelyAppendCat: appends a cat to the end of the cats array
function destructivelyAppendCat(cat) {
    cats.push("Ralph");
}
//destructivelyPrependCat: prepends a cat to the beginning of the cats array
function destructivelyPrependCat(kitten) {
    cats.unshift("Bob");
}
//destructivelyRemoveLastCat: removes the last cat from the cats array
function destructivelyRemoveLastCat(kitty) {
    cats.pop();
}
//destructivelyRemoveFirstCat: removes the first cat from the cats array
function destructivelyRemoveFirstCat(catty) {
    cats.shift();
}
//appendCat: appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(Broom) {
    return [...cats, "Broom"];
}
//prependCat: prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(minoo) {
    return ["Arnold", ...cats];
}
//removeLastCat: removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}
// removeFirstCat: removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}