<?php
use Kaidoj\SDKS\Application;
use Kaidoj\SDKS\Data;

require_once dirname(__FILE__) . '/../vendor/autoload.php';

try {
    echo Application::run(
        $_SERVER['REQUEST_URI'],
        new Data(require dirname(__FILE__) . '/../data/sdks.php')
    );
} catch (Exception $e) {
    echo json_encode([
       'error' => 'Something bad happened :('
    ]);
}