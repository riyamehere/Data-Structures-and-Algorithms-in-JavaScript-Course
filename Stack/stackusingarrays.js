let letter = [] //initialize empty array
let word = "racecar"
let revword = ""

for(let i=0;i<word.length;i++)
{
    letter.push(word[i])
}
for(let i=0;i<word.length;i++){
    revword += letter.pop()
}
if(revword === word)
{
    console.log(word + " is a palindrome")
}
else{
    console.log(word + " is not a palindrome")
}