<!DOCTYPE html>
<html>
<body>

<p>Click the button to get a time-based greeting.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var time = new Date().getHours();
    var greeting;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting ="Good evening";
    }
document.getElementById("demo").innerHTML = greeting;
}
</script>

</body>
</html>
