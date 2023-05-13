/* eslint no-underscore-dangle: 0 */
/* eslint-disable class-methods-use-this */

export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getStandings() {
    return fetch(`${this._url}/standings`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }

  getEvents() {
    return fetch(`${this._url}/events`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }

  getNews() {
    return fetch(`${this._url}/news`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }

  getTeamStats() {
    return fetch(`${this._url}/team-stats`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }

  getVideos() {
    return fetch(`${this._url}/videos`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }

  getPlayerStats() {
    return fetch(`${this._url}/player-stats`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(this._checkServerResponse);
  }
}
