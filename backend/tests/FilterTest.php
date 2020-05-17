<?php

use Kaidoj\SDKS\Filter;

class FilterTest extends BaseTestCase
{

  protected $sortData = [
    [
      'title' => 'b',
      'tags' => [
        'g',
        'f'
      ]
      ],
      [
        'title' => 'a',
        'tags' => [
          'b',
          'f'
        ]
      ],
      [
        'title' => 'c',
        'tags' => [
          'g',
          'a'
        ]
      ]
  ];

  public function testShouldFilterByTag()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->byTag('tag2');
    $this->assertSame(2, count($resp->getItems()));
  }

  public function testShouldFilterbyTitle()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->byTitle('test2');
    $this->assertSame(2, count($resp->getItems()));
  }

  public function testShouldReturnEmptyWhenNoMatch()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->byTitle('test34');
    $this->assertSame(0, count($resp->getItems()));
  }
  
  public function testShouldPaginate()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->paginate(2, 1);
    $this->assertSame([$this->testData[1]], $resp);
    $resp = $t->paginate(2, 2);
    $this->assertSame([$this->testData[2], $this->testData[3]], $resp);
  }

  public function testQueryShouldReturnFiltredbyTitle()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->query('', '2');
    $this->assertSame(2, count($resp->getItems()));
  }

  public function testQueryShouldReturnFiltredByTag()
  {
    $t = new Filter();
    $t->setItems($this->testData);
    $resp = $t->query('tag2', '');
    $this->assertSame(2, count($resp->getItems()));
  }

  public function testDoesSortTitleASC()
  {
    $t = new Filter();
    $t->setItems($this->sortData);
    $t->sort('title');
    $resp = $t->getItems();
    $this->assertSame($this->sortData[1], $resp[0]);
    $this->assertSame($this->sortData[0], $resp[1]);
    $this->assertSame($this->sortData[2], $resp[2]);
  }

  public function testDoesSortTagsASC()
  {
    $t = new Filter();
    $t->setItems($this->sortData);
    $t->sort('tags');
    $resp = $t->getItems();
    $this->assertSame($this->sortData[2], $resp[0]);
    $this->assertSame($this->sortData[1], $resp[1]);
    $this->assertSame($this->sortData[0], $resp[2]);
  }

  public function testDoesSortTagsTitleASC()
  {
    $t = new Filter();
    $t->setItems($this->sortData);
    $t->sort('tagsandtitle');
    $resp = $t->getItems();
    $this->assertSame($this->sortData[2], $resp[0]);
    $this->assertSame($this->sortData[1], $resp[1]);
    $this->assertSame($this->sortData[0], $resp[2]);
  }
}