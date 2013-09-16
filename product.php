<?php

header('Content-type: application/json');
$id = intval(htmlspecialchars($_GET["id"]));

if($id > 0) {

	$xmlstring = file_get_contents("http://www.pouet.net/export/prod.xnfo.php?which=" . $id);
	$xmlstring = eregi_replace("(<[a-z]+ [^>]*>)([^\n<]+)", "\\1<data>\\2</data>", $xmlstring);
	$xml = simplexml_load_string($xmlstring);
	echo json_encode($xml);
} else {
	echo "{}";	
}


?>
