<?php 
namespace Kaidoj\SDKS\Response;

class JSON implements ResponseInterface
{
  /**
   * Response
   *
   * @var array
   */
  protected $response;

  /**
   * Status
   * 
   * @var array
   */
  protected $status;

  /**
   * Status code
   *
   * @var int
   */
  protected $statusCode;

  /**
   * When we would like cache to expire
   *
   * @var int
   */
  protected $cacheExpire = 60;

  /**
   * Response statuses
   *
   * @var array
   */
  protected $statuses = [
      200 => 'OK',
      400 => 'Bad Request'
  ];

  public function __construct(int $code, array $response = [], ?int $cacheExpire = null)
  {
    if (!isset($this->statuses[$code])) {
      throw new \Exception(sprintf('Status with code %s not found', $code));
    }
    $this->status = $this->statuses[$code];
    $this->statusCode = $code;
    $this->response = $response;
    if ($cacheExpire) {
      $this->cacheExpire = $cacheExpire;
    }
  }

  /**
   * Returns json headers and json string
   *
   * @return string
   */
  public function getResponse(): string
  {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Methods: GET');
    header('Cache-Control: max-age=' . $this->cacheExpire);
    header('HTTP/1.1 ' . $this->statusCode . ' ' . $this->status);
    return json_encode($this->response, JSON_PRETTY_PRINT);
  }

  public function __toString()
  {
    return $this->getResponse();
  }
}