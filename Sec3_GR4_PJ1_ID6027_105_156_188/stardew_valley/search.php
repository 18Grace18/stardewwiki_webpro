<!DOCTYPE HTML>
<html>
<head> <title> View port </title> </head>
<body>

<center> <input type="text" name="help" onKeyUp="test();" autocomplete="off"></center><br>
<div id="pls"> TEST </div>

<script type="text/javascript">
funtion test()
{
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET", "select.php?something="+document.getElementById("help").value,false);
    xmlhttp.send(null);
    document.getElementById("pls").innerHTML=xmlhttp.responseText;
    document.getElementById("pls").style.visibility='visible';
}
</script>
</body>
</html>