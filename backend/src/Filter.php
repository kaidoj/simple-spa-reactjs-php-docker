<?php
namespace Kaidoj\SDKS;

class Filter
{
  /**
   * items
   *
   * @var array
   */
  protected $items;

  /**
   * Runs filters based on given tag and search keyword
   *
   * @param string $tag
   * @param string $search
   * @return Filter
   */
  public function query(string $tag, string $search): Filter
  {
    if (!empty($tag)) {
      $this->byTag($tag);
    }

    if (!empty($search)) {
      $this->byTitle($search);
    }
    
    return $this;
  }

  /**
   * Filter items by name using given keyword
   *
   * @param string $keyword
   * @return self
   */
  public function byTitle(string $keyword): Filter
  {
    $this->items = array_filter($this->items, function($item) use($keyword) {
      return strpos(strtolower($item['title']), strtolower($keyword)) !== false;
    });

    return $this;
  }

  /**
   * Filter items by given tag
   *
   * @param string $tag
   * @return self
   */
  public function byTag(string $tag): Filter
  {
    $this->items = array_filter($this->items, function($item) use($tag) {
      if (!is_array($item['tags'])) {
        return false;
      }
      return array_search(
        strtolower($tag), array_map('strtolower', $item['tags'])
      ) !== false;
    });

    return $this;
  }

  /**
   * Paginate items
   *
   * @param integer $start
   * @param integer $limit
   * @return array
   */
  public function paginate(int $start, int $limit): array
  { 
    return array_slice($this->items, (($start - 1) * $limit), $limit);
  }

  /**
   * Sort items
   *
   * @param string $by
   * @return Filter
   */
  public function sort(string $by = 'title'): Filter
  {
    usort($this->items, function($a, $b) use($by) {
      switch ($by) {
        case 'tags':
          sort($a['tags']);
          sort($b['tags']);
          return strcasecmp($a['tags'][0], $b['tags'][0]) > 0;
        break;
        case 'tagsandtitle':
          sort($a['tags']);
          sort($b['tags']);
          return strcasecmp($a['tags'][0], $b['tags'][0]) > 0 
            && strcasecmp($a['title'], $b['title']) > 0;
        break;
        default:
          return strcasecmp($a['title'], $b['title']) > 0;
        break;
      }
    });

    return $this;
  }

  /**
   * Set items
   *
   * @param  array  $items  items
   *
   * @return  self
   */ 
  public function setItems(array $items): Filter
  {
    $this->items = $items;

    return $this;
  }

  /**
   * Get items
   *
   * @return  array
   */ 
  public function getItems(): array
  {
    return $this->items;
  }
}