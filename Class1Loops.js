for(let i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("fizzbuzz");
    }
    else if(i%3==0)
    {
        console.log("fizz");
    }
    else if(i%5==0)
    {
        console.log("buzz");
    }
    else
    {
        console.log(i);
    }
}

str="";
for(let i=0;i<5;i++)
{
for(let j=0;j<=i;j++)
{
    str += "*";
}
str+="\n";
}
console.log(str);

stri='';
for(let i=0;i<5;i++)
{
    for(j=0;j<5-i;j++)
    {
        stri += '*';
    }
    stri+="\n";
}
console.log(stri);

strin="";
for(let i=0;i<5;i++)
{
    for(j=0;j<(2*i)+1;j++)
    {
        strin +="*";
    }
    strin +="\n";
}
console.log(strin)