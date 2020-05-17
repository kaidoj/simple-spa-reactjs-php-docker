
class SearchInputController {
  constructor(AppService) {
    'ngInject';

    this.service = AppService;
  }

  getService() {
    return this.service;
  }
  
}

export default SearchInputController;