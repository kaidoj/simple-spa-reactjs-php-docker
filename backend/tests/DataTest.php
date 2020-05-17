<?php

use Kaidoj\SDKS\Data;

class DataTest extends BaseTestCase
{
  public function testShouldReturnUniqueTags()
  {
    $t = new Data($this->testData);
    $this->assertSame($this->testTags, $t->tags());
  }

  public function testShouldCleanData()
  {
    $t = new Data($this->testData);
    $this->assertSame($this->testTags, $t->tags());
  }
  // public function testShouldCleanData()
  // {
  //   $t = new Data([
  //     ['title' => 'test'],
  //     ['title' => ''],
  //     ['title' => 'test2']
  //   ]);
  //   $this->assertSame(2, count($t->items()));
  // }
}