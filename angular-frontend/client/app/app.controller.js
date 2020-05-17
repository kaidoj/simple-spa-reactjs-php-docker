class AppController {
  constructor(AppService) {
    'ngInject';
    
    this.service = AppService;
  }

  isOpen() {
    return this.service.state.navOpen;
  }

}

export default AppController;