<?php

use Kaidoj\SDKS\Response\JSON;

class JSONTest extends BaseTestCase
{
  /**
   * @runInSeparateProcess
   */
  public function testShouldReturnJsonString()
  {
    $t = new JSON(200, ['test' => 1]);
    $this->assertJson('{"test": 1}', $t->getResponse());
  }
}