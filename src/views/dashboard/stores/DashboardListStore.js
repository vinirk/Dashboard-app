import { action, extendObservable, toJS } from 'mobx';
import set from 'lodash/set';

class DashboardListStore {

  constructor() {
    extendObservable(this, {
      //general
      allTours: [],
      allBookingLeadTime: [],
      allTotalBookings: [],
      allTotalEvents: [],
      allAverageCapacity: [],

      //current
      currentDepartureTime: [],

      //keep filter change
      values: {},

      //control fetching data
      fetching: false,

      //list linearly tours
      tours: [],
    });
  }

  // keep state from change filter
  setValue = action((path, value) => {
    const values = { ...this.values };
    const newValues = set(values, path, value);
    this.values = newValues;
  });

  // get value changed
  getValues = () => {
    return toJS(this.values)
  }

  // first method called
  init = action(() => {
    this.load();
  });

  // called when changed select component
  loadByTour = action(() => {
    this.fetching = true;
    this.currentDepartureTime = [];
    this.allBookingLeadTime = [];
    this.allTotalBookings = [];
    this.allTotalEvents = [];
    this.allAverageCapacity = [];
    fetch(`${process.env.PUBLIC_URL}/data/capacity_and_booking_lead_time.json`)
      .then((res) => res.json())
      .then((data) => {
        if (this.values.tour === 'All') {
          Object.keys(data).forEach(key => {
            if (data[key]['Summary Statistics']['Booking Lead Time']) {
              this.allBookingLeadTime.push(data[key]['Summary Statistics']['Booking Lead Time']);
            } else {
              this.allBookingLeadTime.push(0);
            }

            if (data[key]['Summary Statistics']['Total Bookings']) {
              this.allTotalBookings.push(data[key]['Summary Statistics']['Total Bookings']);
            } else {
              this.allTotalBookings.push(0);
            }

            if (data[key]['Summary Statistics']['Total Events']) {
              this.allTotalEvents.push(data[key]['Summary Statistics']['Total Events']);
            } else {
              this.allTotalEvents.push(0);
            }

            if (data[key]['Summary Statistics']['Average Capacity']) {
              this.allAverageCapacity.push(data[key]['Summary Statistics']['Average Capacity']);
            } else {
              this.allAverageCapacity.push(0);
            }
            this.allTours.push(key);
          });
        } else {
          Object.keys(data[this.values.tour]['Departure Time']).forEach(key => {
            this.currentDepartureTime.push({hour: key, value: data[this.values.tour]['Departure Time'][key]});
          });
        }
        this.fetching = false;
    });
  });

  // call on init
  load = action(() => {
    this.fetching = true;
    fetch(`${process.env.PUBLIC_URL}/data/capacity_and_booking_lead_time.json`)
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach(key => {
        this.tours.push({label: key, value: key})
      });
      this.tours.unshift({label: 'All', value: 'All'});
      this.fetching = false;
    });
  });
}

const dashboardListStore = new DashboardListStore();

export default dashboardListStore;
