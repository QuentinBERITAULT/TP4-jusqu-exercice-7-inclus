function sum1(numbers){
    let n = 0;
    for(let i=0; i < numbers.length; i++){
        n = numbers[i] + n;
    }
    return n;
}

function sum2(numbers){
    let n = 0;
    for(num of numbers){
        n += num;
    }
    return n;
}

function longestWord(words){
    let taille = words.length;
    let longest = 0;
    let result;
    for(let i = 0; i < taille; i++){
        if(words[i].length>longest){
            result = words[i];
            longest = words[i].length;
        }
    }
    return result;
}

function range(min, max, step){
    let t = [];
    while(min <= max){
        t.push(min);
        min += step;
    }
    return t;
}

function nbOccurences(wordList, word){
    let number = 0;
    let tab = wordList.split(" ");
    for(let i = 0; i < tab.length; i++){
        if(tab[i] === word){
            number++;
        }
    }
    return number;
}

function flatten2D(array){
    let tab = [];
    let size = array.length;
    for(let i = 0; i < size; i++){
        for(let j = 0; j < array[i].length; j++){
            tab.push(array[i][j]);
        }
    }
    return tab;
}


function name(nameList,addName){
    for(let i = 0; i < nameList.length; i++){
        console.log(nameList[i]);
    }
    nameList.pop();
    nameList.push(addName);
    return nameList;    
}

function multiplication(){
    let tab = [];
    for(let i = 0; i <= 9; i++){
        console.log("Table de multiplication de " + i + " :");
        for(let j = 0; j <= 10; j++){
            tab[j] = j*i;
        }
        printTab(tab);
        console.log("");
    }
}

function printTab(tab){
    let chaine = "";
    for(let value of tab){
        chaine += value;
        chaine += " ";
    }
    console.log(chaine);
}