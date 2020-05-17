
class ItemsController {
  constructor(AppService) {
    'ngInject';

    this.service = AppService;
  }

  $onInit() {
    this.loadItems();
  }

  loadItems() {
    return this.service.loadItems();
  }

  getItems() {
    return this.service.state.items;
  }
}

export default ItemsController