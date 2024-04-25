import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(value) {
    return this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    return this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice(amount, currency) {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
