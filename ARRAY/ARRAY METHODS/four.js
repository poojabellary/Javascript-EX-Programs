var Strings=["Rahul Gandhi"];

Strings=Strings.map(function(string){
    return string.replace(/[aeiou]/g,'');
});

console.log(Strings);

function reverse(s){
    let i=s.length,
    o = '';
    while(i>0){
        o +=s.substring(i-1,i);
        i--;
    }
    console.log(o);
    return o;
}
reverse("Rahul Gandhi")