function test1(){
    console.log(sum1([])); // => 0
    console.log(sum1([42, 404, 1337])); // => 1783
}

function test2() {
    console.log(sum2([])); // => 0
    console.log(sum2([42, 404, 1337])); // => 1783
}

function test3() {
    console.log(longestWord(["lot", "of", "words", "of", "different", "sizes"])); // => different 
}

function test4() {
    console.log(range(3, 8, 1)); // => [3, 4, 5, 6, 7, 8]
    console.log(range(40, 90, 20)); // => [40, 60, 80]
}

function test5() {
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1
}

function test6(){
    console.log(flatten2D([[1,2], [3,4], [5,6]]));
    console.log(flatten2D([[1,2], [3,4,5], [6]]));
}

function test7(){
    console.log(name(["Bob","Julien","Roger"],"Quentin"));
}

function test8(){
    multiplication();
}

function repeatTests(){
    test1();
    console.log("--------------------------------");
    test2();
    console.log("--------------------------------");
    test3();
    console.log("--------------------------------");
    test4();
    console.log("--------------------------------");
    test5();
    console.log("--------------------------------");
    test6();
    console.log("--------------------------------");
    test7();
    console.log("--------------------------------");
    test8();
    console.log("--------------------------------");
}