
class AppHeaderController {
  constructor(AppService) {
    'ngInject';

    this.service = AppService;
  }

  getService() {
    return this.service;
  }

  isOpen() {
    return this.service.state.navOpen;
  }
}

export default AppHeaderController