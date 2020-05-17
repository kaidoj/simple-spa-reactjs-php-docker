<?php

use PHPUnit\Framework\TestCase;

class BaseTestCase extends TestCase
{

  protected $testData = [
    [
      'title' => 'test1',
      'id' => 'test1',
      'tags' => [
        'tag1'
      ]
    ],
    [
      'title' => 'test2',
      'id' => 'test2',
      'tags' => [
        'tag1',
        'tag2'
      ]
    ],
    [
      'title' => 'test2',
      'id' => 'test3',
      'tags' => [
        'tag2',
        'tag3'
      ]
    ],
    [
      'title' => 'test3',
      'id' => 'test4',
      'tags' => ''
    ]
  ];

  protected $testTags = [
    'tag1',
    'tag2',
    'tag3'
  ];

  public function testDoesLoad()
  {
    $this->assertTrue(true);
  }
}
