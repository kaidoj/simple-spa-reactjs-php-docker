<?php

use Kaidoj\SDKS\Application;
use Kaidoj\SDKS\Data;

class ApplicationTest extends BaseTestCase
{
  /**
   * @runInSeparateProcess
   */
  public function testDoesRunTagsEndpoint()
  {
    $resp = Application::run('/tags', new Data($this->testData));
    $this->assertSame(
      json_encode($this->testTags, JSON_PRETTY_PRINT), 
      $resp->getResponse()
    );
  }

  /**
   * @runInSeparateProcess
   */
  public function testDoesRunItemsEndpoint()
  {
    $resp = Application::run('/items', new Data($this->testData));
    $this->assertSame(
      json_encode($this->testData, JSON_PRETTY_PRINT), 
      $resp->getResponse()
    );
  }

  /**
   * @runInSeparateProcess
   */
  public function testDoesReturnError()
  {
    $resp = Application::run('/', new Data($this->testData));
    $this->assertTrue(strpos($resp->getResponse(), 'error') !== false);
  }

  /**
   * @runInSeparateProcess
   */
  public function testDoesFilterItems()
  {
    $resp = Application::run('/items?search=test2', new Data($this->testData));
    $this->assertSame(
      json_encode([$this->testData[1], $this->testData[2]], JSON_PRETTY_PRINT), 
      $resp->getResponse()
    );
  }
  
}