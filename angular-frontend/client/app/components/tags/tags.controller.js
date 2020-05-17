import { TAGS_URL } from "../../app.config";

class TagsController {
  constructor($http, AppService) {
    'ngInject';
    this.service = AppService;
    this.http = $http;
    this.tags = ['all'];
  }

  $onInit() {
    this.loadTags();
  }

  loadTags() {
    this.http({method: 'GET', url: TAGS_URL })
      .then((resp) => {
        if (resp.data) {
          this.tags = [...this.tags, ...resp.data];
        }
    });
  }

  changeTag(tag) {
    this.service.setSelectedTag(tag);
  }
}

export default TagsController