<?php 
namespace Kaidoj\SDKS;

class Data
{
  /**
   * Application data
   *
   * @var array
   */
  protected $data = [];

  /**
   * List of tags
   *
   * @var array
   */
  protected $tags = [];

  public function __construct(array $data)
  {
    $this->cleanData($data);
    // could cache the results here but ignore for now
  }

  /**
   * Cleans data of empty title values
   *
   * @param array $data
   * @return Data
   */
  public function cleanData(array $data): Data
  {
    foreach ($data as $row) {
      if (empty($row['title'])) {
        continue;
      }
      $this->data[$row['id']] = $row;

      // extract tags
      if (!is_array($row['tags'])) {
        continue;
      }
      
      foreach ($row['tags'] as $tag) {
        if (empty($tag)) {
          continue;
        }

        $this->tags[$tag] = $tag;
      }
    }

    // reset indexes
    $this->data = array_values($this->data);
    $this->tags = array_values($this->tags);

    return $this;
  }

  /**
   * Return items
   *
   * @return array
   */
  public function items(): array
  {
    return $this->data;
  }
  
  /**
   * Return unique tags
   * 
   * @return array
   */
  public function tags(): array
  {
    return $this->tags;
  }
}