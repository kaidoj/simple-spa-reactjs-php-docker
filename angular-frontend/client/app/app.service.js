import { ITEMS_URL } from './app.config';
import { calculateLimit } from './utils/calculateLimit';

class AppService {
  constructor($http) {
    'ngInject';

    this.http = $http;
    this.state = {
      navOpen: false, // mobile navigation state
      selectedTag: 'all', // current selected tag
      items: [],
      page: 0,
      sort: 'title',
      keyword: '',
      limit: calculateLimit(12),
    };
  }

  changeNavOpen() {
    this.updateState({
      navOpen: !this.state.navOpen
    });
  }

  setSelectedTag(tag) {
    this.updateState({
      selectedTag: tag,
      keyword: '',
      page: 0,
    });
    this.loadItems();
  }

  changeSort(sort) {
    this.updateState({
      sort: sort,
      page: 0
    });
    this.loadItems();
  }

  changeKeyword(keyword) {
    this.updateState({
      keyword: keyword,
      selectedTag: 'all',
      page: 0
    });
    this.loadItems();
  }

  loadItems() {
    const {
      selectedTag,
      keyword,
      sort,
      limit
    } = this.state;

    const page = this.state.page + 1;
    this.updateState({ page });
    if (page === 1) {
      this.updateState({
        items: []
      });
    }

    const params = new URLSearchParams({
      tag: selectedTag,
      search: keyword,
      page,
      sort,
      limit
    }).toString()

    this.http({ method: 'GET', url: ITEMS_URL + '?' + params })
      .then((resp) => {
        if (resp.data) {
          this.updateState({
            items: [...this.state.items, ...resp.data]
          })
        }
      });
  }

  updateState(newState) {
    this.state = Object.assign({}, this.state, newState);
  }
}

export default AppService;