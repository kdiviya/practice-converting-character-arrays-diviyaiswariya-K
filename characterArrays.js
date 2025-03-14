//Task 1: Decode the Following Reversed Messages
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let decodeMsg1 = message1.split("").reverse().join("");
console.log("Message1: ", decodeMsg1);

let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let decodeMsg2 = message2.split("").reverse().join("");
console.log("Message2: ", decodeMsg2);

let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let decodeMsg3 = message3.split("").reverse().join("");
console.log("Message3: ", decodeMsg3);

let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let decodeMsg4 = message4.split("").reverse().join("");
console.log("Message4: ", decodeMsg4);

//Task 2: Write your own reverse messages
let message = "Believe you can and you're halfway there.";
let decodeMsg = message.split("").reverse().join("");
console.log("My message: ", decodeMsg);