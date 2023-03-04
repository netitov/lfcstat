export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res)
  }

  getStandings() {
    return fetch(`${this._url}/standings`, {
      headers: {'Content-Type': 'application/json'}
    })
    .then(this._checkServerResponse);
  }

  getEvents() {
    return fetch(`${this._url}/events`, {
      headers: {'Content-Type': 'application/json'}
    })
    .then(this._checkServerResponse);
  }

  getRecord(record) {
    return fetch(`${this._url}/${record}`, {
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

  addRecord(record) {
    return fetch(`${this._url}`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(record)
    })
    .then(this._checkServerResponse);
  }

  deleteRecord(record) {
    return fetch(`${this._url}/${record}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkServerResponse);
  }

}
