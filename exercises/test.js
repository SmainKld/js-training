process.stdin.resume() 
process.stdin.setEncoding('utf8') 
console.log('Quel est ton age ? ')
process.stdin.on('data', (age) => {
if(typeof age === "number" || age>0 && age<99){
console.log (('Tu es né en ')+(new Date ().getFullYear() - age))
process.exit();
        }
console.log("Cela est peu probable...")
})