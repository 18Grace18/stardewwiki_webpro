<?php
$something=$_GET["something"];

if($something==""){}
else{

mysql_connect("localhost","root","");
mysql_select_db("sec3_gr4_database");
$res=mysql_query("SELECT * FROM Information WHERE search like('$something%')");
echo "<center>";
echo "<table>";
while($row=mysql_fetch_array($res))
{
    echo "<tr>";
    echo "<td>"; echo $row["Searchname"] echo "</td>";
    echo "</tr>";
}
echo "</table>";
echo "</center>";
}
?>