<?php
namespace Kaidoj\SDKS;

use Exception;
use Kaidoj\SDKS\Response\JSON;
use Kaidoj\SDKS\Response\ResponseInterface;

class Application
{
  /**
   * Filter
   *
   * @var Filter
   */
  protected $filter;

  /**
   * Application data
   *
   * @var Data
   */
  protected $data;

  /**
   * How many tags we allow to display on single page
   *
   * @var integer
   */
  protected $tagsPerPage = 12;

  public function __construct(Filter $filter, Data $data)
  {
    $this->filter = $filter;
    $this->data = $data;
  }

    /**
     * Start application
     *
     * @param string $requestURI
     * @param Data $data
     * @return ResponseInterface
     * @throws Exception
     */
  public static function run(string $requestURI, Data $data): ResponseInterface
  { 
    $application = new Application(
      new Filter(),
      $data
    );
    return $application->listen($requestURI);
  }

    /**
     * Listens for server request uri and returns output based on them
     *
     * @param $requestURI
     * @return ResponseInterface
     * @throws Exception
     */
  public function listen(string $requestURI): ResponseInterface
  {
    $url = parse_url($requestURI);
    $path = explode( '/', $url['path']);
    $query = [];

    if (isset($url['query'])) {
      parse_str($url['query'], $query);
    }

    $tag = filter_var($query['tag'] ?? '', FILTER_SANITIZE_STRING);
    $tag = $tag === 'all' ? '' : $tag;

    $search = filter_var($query['search'] ?? '', FILTER_SANITIZE_STRING);
    $sort = filter_var($query['sort'] ?? 'title', FILTER_SANITIZE_STRING);
    $page = (int) ($query['page'] ?? 1);
    $limit = (int) ($query['limit'] ?? 12);

    switch ($path[1]) {
      case 'tags':
        return new JSON(200, $this->filter
          ->setItems($this->data->tags())
          ->paginate($page, $this->tagsPerPage));
      break;
      case 'items':
        return new JSON(200, $this->filter
          ->setItems($this->data->items())
          ->query($tag, $search)
          ->sort($sort)
          ->paginate($page, $limit));
      break;
      default:
        return new JSON(400, [
          'error' => 'Given endpoint does not exist'
        ]);
      break;
    }
  }
}