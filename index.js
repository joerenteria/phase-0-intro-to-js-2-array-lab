const cats= [`Milo`,`Otis`,`Garfield`];

function destructivelyAppendCat(){cats.push(`Ralph`)};

function destructivelyPrependCat(){cats.unshift(`Bob`)};

function destructivelyRemoveLastCat(){cats.pop()};

function destructivelyRemoveFirstCat(){cats.shift(0)};

function appendCat(name){  
    const catsapp = [...cats,`${name}`];
    return catsapp;};

function prependCat(name){
    const catspre = [`${name}`,...cats];
    return catspre;};

function removeLastCat(){
const catslast = cats.slice(0,2);

return catslast;
};

function removeFirstCat(){
    const catsfirst = cats.slice(1);
    return catsfirst;
}

