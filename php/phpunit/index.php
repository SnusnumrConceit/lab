<?php
require_once "autoload.php";

try {
    $test = new Luci\Src\Test();
} catch (Exception $e) {
    echo $e->getMessage();
}
