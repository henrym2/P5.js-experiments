var keyboardInitial = (_=>[..."`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"].map(x=>(o+=`/${b='_'.repeat(w=x<y?2:' 667699'[x=["BS","TAB","CAPS","ENTER"][p++]||'SHIFT',p])}\\|`,m+=y+(x+'    ').slice(0,w)+y+y,n+=y+b+y+y,l+=' __'+b)[73]&&(k.push(l,m,n,o),l='',m=n=o=y),m=n=o=y='|',p=l=k=[])&&k.join`
`)();
var keyboardPrint = keyboardInitial;

function setup() {
 
    createCanvas(600, 500)
    background(0)
}

function draw() {
    
    background(0);
    fill(255,255,255);
    textFont('monospace')
    text(keyboardPrint, 0, 0, 600, 500)
    keyboardPrint = keyboardInitial;
    
}

function keyTyped(){
    console.log(key.toUpperCase())
    console.log(keyboardInitial);
    keyboardPrint = keyboardPrint.replace(key.toUpperCase(), " ");
}

