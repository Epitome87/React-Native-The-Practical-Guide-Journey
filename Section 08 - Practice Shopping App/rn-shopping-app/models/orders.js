import moment from 'moment';

class Order {
  constructor(id, items, total, date) {
    this.id = id;
    this.items = items;
    this.total = total;
    this.date = date;
  }

  get readableDate() {
    // Not compatible with Android for some reason -- so we'll use the moment library!
    // return this.date.toLocaleDateString('en-EN', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
