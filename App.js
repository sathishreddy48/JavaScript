function b()
{
    var variable=2;
    console.log(variable);
}
function a()
{
    var variable=1;
    console.log(variable);
    b();
}
var variable=1;
console.log(variable);
a();