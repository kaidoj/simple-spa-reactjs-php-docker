
class ToolbarController {
  constructor(AppService) {
    'ngInject';

    this.sortable = [
      {key: 'title', value: 'Title', label: 'order-by-title'},
      {key: 'tags', value: 'Tags', label: 'order-by-tags'},
      {key: 'tagsandtitle', value: 'Tags and title', label: 'order-by-tags-and-title'}
    ];

    this.service = AppService;
  }

  getService() {
    return this.service;
  }

  getSort() {
    return this.service.state.sort;
  }
}

export default ToolbarController;