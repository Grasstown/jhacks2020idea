<?php

// jotting down the stuff from the input form with my limited knowledge of php
$name = $_POST['name'];
$bio = $_POST['bio'];

$foreignPolicy = $_POST['Foreign Policy Stance']
$abortion = $_POST['Abortion Stance']
$education = $_POST['Education Stance']

$foreignPolicyImp = $_POST['Foreign Policy Importance']
$abortionImp = $_POST['Abortion Importance']
$educationImp = $_POST['Education Importance']

// export to a csv file?
header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="sample.csv"');

$user_CSV[0] = array('Name', 'Issue', 'Opinion', 'Rank');

$user_CSV[1] = array($Name, 'Foreign Policy', $foreignPolicy, $foreignPolicyImp);
$user_CSV[2] = array($Name, 'Abortion', $abortion, $abortionImp);
$user_CSV[3] = array($Name, 'Education', $education, $eduationImp);

$fp = fopen('php://output', 'wb');
foreach ($user_CSV as $line) {
    fputcsv($fp, $line, ',');
}
fclose($fp);


?>