# PHP Rest API

### API endpoints

```http
GET /items?tag=test&search=test&sort=title&page=1
```
| Parameter | Type     | Description                                                   |
| :-------- | :------- | :------------------------------------------------------------ |
| `tag`  | `string` | optional. Filters items by tag.                    |
| `search` | `string` | optional: Pass keyword to search by title.                      |
| `sort`    | `string` | default: title. possible values `tags`, `title`, `tagsandtitle`. |
| `page`    | `int` | default: 1. Returns {limit} number of items per page. |
| `limit`    | `int` | default: 12. How many results per page should be returned. |

Returns items basted on given filters in alphabetical order


```http
GET /tags
```
Returns tags in alphabetical order


#### Testing

Run ```vendor/bin/phpunit``` inside container in project root. If you have PHP and composer installed locally then run ```composer install``` first.