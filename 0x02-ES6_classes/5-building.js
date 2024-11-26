export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a Number');
    this._sqft = sqft;
  }

  get sqft() {cd 
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') throw TypeError('sqft must be a Number');
    this._sqft = sqft;
  }
}
