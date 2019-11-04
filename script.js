var everyCha = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]
document.getElementById("button1")
.maxLength = "128"
document.getElementById("button1").minLength = "8"
for (i = 0; i < pLower.length; i++) {

}
function charGen() {
    for (i = 0; i < everyCha.length; i++) {
    userCode = everyCha[Math.floor(Math.Random() * everyCha.length)];
    }
}
alert ("your new code is: "+ randomChar)
