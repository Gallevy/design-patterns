export class Singleton {
  static _instance = null;

  constructor() {
    // Block constructor
  }

  static getInstance() {
    // Add Locking mechanism if accessed from multiple threads
    if (!this._instance) {
      console.log("Creating new instance");
      this._instance = new Singleton();

      return this._instance;
    }

    console.log("Reusing previous instance");
    return this._instance;
  }
}
