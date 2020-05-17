export const API_URL = process.env.API_URL ? process.env.API_URL : 'http://'+ window.location.hostname +':3000';
export const ITEMS_URL = API_URL + '/items';
export const TAGS_URL = API_URL + '/tags';