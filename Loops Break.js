<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
  var i =0 ;
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}


document.getElementById("demo").innerHTML = i;
</script>

</body>
</html>