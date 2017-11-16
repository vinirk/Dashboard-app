import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DashboardListFilterContainer from './DashboardListFilterContainer';
import Spinner from '../../../core/Spinner';
import Card from '../../../core/Card';
import { Radar, Line } from 'react-chartjs-2';


class DashboardList extends Component {

  static propTypes = {
    fetching: PropTypes.bool,
    allTours: PropTypes.arrayOf(PropTypes.string),
    allBookingLeadTime: PropTypes.arrayOf(PropTypes.number),
    allTotalBookings: PropTypes.arrayOf(PropTypes.number),
    allTotalEvents: PropTypes.arrayOf(PropTypes.number),
    allAverageCapacity: PropTypes.arrayOf(PropTypes.number),
    currentDepartureTime: PropTypes.shape({}),
  }

  static defaultProps = {
    fetching: false,
    currentDepartureTime: {},
    allTours: [],
    allBookingLeadTime: [],
    allTotalBookings: [],
    allTotalEvents: [],
    allAverageCapacity: [],
  }

  render() {

    //Week of year
    let currentWeekOfYearBookingLeadTimeLabels = [];
    let currentWeekOfYearBookingLeadTimeValues= [];
    let currentWeekOfYearAverageCapacityLabels = [];
    let currentWeekOfYearAverageCapacityValues= [];
    let currentWeekOfYearTotalBookingsLabels = [];
    let currentWeekOfYearTotalBookingsValues= [];
    let currentWeekOfYearTotalEventsLabels = [];
    let currentWeekOfYearTotalEventsValues= [];

    //Day of week
    let currentDayOfWeekBookingLeadTimeLabels = [];
    let currentDayOfWeekBookingLeadTimeValues= [];
    let currentDayOfWeekAverageCapacityLabels = [];
    let currentDayOfWeekAverageCapacityValues= [];
    let currentDayOfWeekTotalBookingsLabels = [];
    let currentDayOfWeekTotalBookingsValues= [];
    let currentDayOfWeekTotalEventsLabels = [];
    let currentDayOfWeekTotalEventsValues= [];

    //Month of year
    let currentMonthOfYearBookingLeadTimeLabels = [];
    let currentMonthOfYearBookingLeadTimeValues= [];
    let currentMonthOfYearAverageCapacityLabels = [];
    let currentMonthOfYearAverageCapacityValues= [];
    let currentMonthOfYearTotalBookingsLabels = [];
    let currentMonthOfYearTotalBookingsValues= [];
    let currentMonthOfYearTotalEventsLabels = [];
    let currentMonthOfYearTotalEventsValues= [];

    return (
      <Spinner fetching={this.props.fetching}>
        <DashboardListFilterContainer />
        {this.props.allTours.length && this.props.values.tour === 'All' ? (
          <Radar
            data={{
              labels: [...this.props.allTours],
              datasets: [
                {
                  label: 'Booking Lead Time',
                  backgroundColor: 'rgba(179,181,198,0.2)',
                  borderColor: 'rgba(179,181,198,1)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(179,181,198,1)',
                  data: [...this.props.allBookingLeadTime]
                },
                {
                  label: 'Total Booking',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  pointBackgroundColor: 'rgba(255,99,132,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(255,99,132,1)',
                  data: [...this.props.allTotalBookings]
                },
                {
                  label: 'Total Events',
                  backgroundColor: 'rgba(51, 204, 51,0.2)',
                  borderColor: 'rgba(51, 204, 51,1)',
                  pointBackgroundColor: 'rgba(51, 204, 51,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(51, 204, 51,1)',
                  data: [...this.props.allTotalEvents]
                },
                {
                  label: 'Average Capacity',
                  backgroundColor: 'rgba(26, 26, 255,0.2)',
                  borderColor: 'rgba(26, 26, 255,1)',
                  pointBackgroundColor: 'rgba(26, 26, 255,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(26, 26, 255,1)',
                  data: [...this.props.allAverageCapacity]
                },
              ]}}
            />
        ) : this.props.values.tour !== 'All' ? (
            this.props.currentDepartureTime.map(currentItem => {
              //Week of year
              currentWeekOfYearBookingLeadTimeLabels= [];
              currentWeekOfYearBookingLeadTimeValues = [];
              currentWeekOfYearAverageCapacityLabels = [];
              currentWeekOfYearAverageCapacityValues = [];
              currentWeekOfYearTotalBookingsLabels = [];
              currentWeekOfYearTotalBookingsValues = [];
              currentWeekOfYearTotalEventsLabels = [];
              currentWeekOfYearTotalEventsValues = [];

              //Day of week
              currentDayOfWeekBookingLeadTimeLabels= [];
              currentDayOfWeekBookingLeadTimeValues = [];
              currentDayOfWeekAverageCapacityLabels = [];
              currentDayOfWeekAverageCapacityValues = [];
              currentDayOfWeekTotalBookingsLabels = [];
              currentDayOfWeekTotalBookingsValues = [];
              currentDayOfWeekTotalEventsLabels = [];
              currentDayOfWeekTotalEventsValues = [];

              //Month of year
              currentMonthOfYearBookingLeadTimeLabels= [];
              currentMonthOfYearBookingLeadTimeValues = [];
              currentMonthOfYearAverageCapacityLabels = [];
              currentMonthOfYearAverageCapacityValues = [];
              currentMonthOfYearTotalBookingsLabels = [];
              currentMonthOfYearTotalBookingsValues = [];
              currentMonthOfYearTotalEventsLabels = [];
              currentMonthOfYearTotalEventsValues = [];
              return (
                <div
                  style={{
                    margin: 15,
                  }}
                  key={`${currentItem.hour}-${new Date()}`}
                >
                  <Card title={currentItem.hour}>
                    <div>
                      <div>Week of Year</div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <div>
                          {Object.entries(currentItem.value['Week of Year']).forEach(([key, value]) => {
                            currentWeekOfYearBookingLeadTimeLabels.push(key);
                            currentWeekOfYearBookingLeadTimeValues.push(value['Booking Lead Time']);
                          })}

                          {(currentWeekOfYearBookingLeadTimeLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentWeekOfYearBookingLeadTimeLabels],
                                datasets: [
                                  {
                                    label: 'Booking Lead Time',
                                    backgroundColor: 'rgba(179,181,198,0.2)',
                                    borderColor: 'rgba(179,181,198,1)',
                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                    data: [...currentWeekOfYearBookingLeadTimeValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Week of Year']).forEach(([key, value]) => {
                            currentWeekOfYearAverageCapacityLabels.push(key);
                            currentWeekOfYearAverageCapacityValues.push(value['Average Capacity']);
                          })}

                          {(currentWeekOfYearAverageCapacityLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentWeekOfYearAverageCapacityLabels],
                                datasets: [
                                  {
                                    label: 'Average Capacity',
                                    backgroundColor: 'rgba(26, 26, 255,0.2)',
                                    borderColor: 'rgba(26, 26, 255,1)',
                                    pointBackgroundColor: 'rgba(26, 26, 255,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(26, 26, 255,1)',
                                    data: [...currentWeekOfYearAverageCapacityValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Week of Year']).forEach(([key, value]) => {
                            currentWeekOfYearTotalBookingsLabels.push(key);
                            currentWeekOfYearTotalBookingsValues.push(value['Total Bookings']);
                          })}

                          {(currentWeekOfYearTotalBookingsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentWeekOfYearTotalBookingsLabels],
                                datasets: [
                                  {
                                    label: 'Total Bookings',
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    pointBackgroundColor: 'rgba(255,99,132,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                                    data: [...currentWeekOfYearTotalBookingsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Week of Year']).forEach(([key, value]) => {
                            currentWeekOfYearTotalEventsLabels.push(key);
                            currentWeekOfYearTotalEventsValues.push(value['Total Events']);
                          })}

                          {(currentWeekOfYearTotalEventsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentWeekOfYearTotalEventsLabels],
                                datasets: [
                                  {
                                    label: 'Total Events',
                                    backgroundColor: 'rgba(51, 204, 51,0.2)',
                                    borderColor: 'rgba(51, 204, 51,1)',
                                    pointBackgroundColor: 'rgba(51, 204, 51,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(51, 204, 51,1)',
                                    data: [...currentWeekOfYearTotalEventsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: '#000',
                      width: '100%',
                      height: 1}}
                    />

                    <div>
                      <div>Day of Week</div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <div>
                          {Object.entries(currentItem.value['Day of Week']).forEach(([key, value]) => {
                            currentDayOfWeekBookingLeadTimeLabels.push(key);
                            currentDayOfWeekBookingLeadTimeValues.push(value['Booking Lead Time']);
                          })}

                          {(currentDayOfWeekBookingLeadTimeLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentDayOfWeekBookingLeadTimeLabels],
                                datasets: [
                                  {
                                    label: 'Booking Lead Time',
                                    backgroundColor: 'rgba(179,181,198,0.2)',
                                    borderColor: 'rgba(179,181,198,1)',
                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                    data: [...currentDayOfWeekBookingLeadTimeValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Day of Week']).forEach(([key, value]) => {
                            currentDayOfWeekAverageCapacityLabels.push(key);
                            currentDayOfWeekAverageCapacityValues.push(value['Average Capacity']);
                          })}

                          {(currentDayOfWeekAverageCapacityLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentDayOfWeekAverageCapacityLabels],
                                datasets: [
                                  {
                                    label: 'Average Capacity',
                                    backgroundColor: 'rgba(26, 26, 255,0.2)',
                                    borderColor: 'rgba(26, 26, 255,1)',
                                    pointBackgroundColor: 'rgba(26, 26, 255,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(26, 26, 255,1)',
                                    data: [...currentDayOfWeekAverageCapacityValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Day of Week']).forEach(([key, value]) => {
                            currentDayOfWeekTotalBookingsLabels.push(key);
                            currentDayOfWeekTotalBookingsValues.push(value['Total Bookings']);
                          })}

                          {(currentDayOfWeekTotalBookingsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentDayOfWeekTotalBookingsLabels],
                                datasets: [
                                  {
                                    label: 'Total Bookings',
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    pointBackgroundColor: 'rgba(255,99,132,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                                    data: [...currentDayOfWeekTotalBookingsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Day of Week']).forEach(([key, value]) => {
                            currentDayOfWeekTotalEventsLabels.push(key);
                            currentDayOfWeekTotalEventsValues.push(value['Total Events']);
                          })}

                          {(currentDayOfWeekTotalEventsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentDayOfWeekTotalEventsLabels],
                                datasets: [
                                  {
                                    label: 'Total Events',
                                    backgroundColor: 'rgba(51, 204, 51,0.2)',
                                    borderColor: 'rgba(51, 204, 51,1)',
                                    pointBackgroundColor: 'rgba(51, 204, 51,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(51, 204, 51,1)',
                                    data: [...currentDayOfWeekTotalEventsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      backgroundColor: '#000',
                      width: '100%',
                      height: 1}}
                    />

                    <div>
                      <div>Month of Year</div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <div>
                          {Object.entries(currentItem.value['Month of Year']).forEach(([key, value]) => {
                            currentMonthOfYearBookingLeadTimeLabels.push(key);
                            currentMonthOfYearBookingLeadTimeValues.push(value['Booking Lead Time']);
                          })}

                          {(currentMonthOfYearBookingLeadTimeLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentMonthOfYearBookingLeadTimeLabels],
                                datasets: [
                                  {
                                    label: 'Booking Lead Time',
                                    backgroundColor: 'rgba(179,181,198,0.2)',
                                    borderColor: 'rgba(179,181,198,1)',
                                    pointBackgroundColor: 'rgba(179,181,198,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                                    data: [...currentMonthOfYearBookingLeadTimeValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Month of Year']).forEach(([key, value]) => {
                            currentMonthOfYearAverageCapacityLabels.push(key);
                            currentMonthOfYearAverageCapacityValues.push(value['Average Capacity']);
                          })}

                          {(currentMonthOfYearAverageCapacityLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentMonthOfYearAverageCapacityLabels],
                                datasets: [
                                  {
                                    label: 'Average Capacity',
                                    backgroundColor: 'rgba(26, 26, 255,0.2)',
                                    borderColor: 'rgba(26, 26, 255,1)',
                                    pointBackgroundColor: 'rgba(26, 26, 255,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(26, 26, 255,1)',
                                    data: [...currentMonthOfYearAverageCapacityValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Month of Year']).forEach(([key, value]) => {
                            currentMonthOfYearTotalBookingsLabels.push(key);
                            currentMonthOfYearTotalBookingsValues.push(value['Total Bookings']);
                          })}

                          {(currentMonthOfYearTotalBookingsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentMonthOfYearTotalBookingsLabels],
                                datasets: [
                                  {
                                    label: 'Total Bookings',
                                    backgroundColor: 'rgba(255,99,132,0.2)',
                                    borderColor: 'rgba(255,99,132,1)',
                                    pointBackgroundColor: 'rgba(255,99,132,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                                    data: [...currentMonthOfYearTotalBookingsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                        <div>
                          {Object.entries(currentItem.value['Month of Year']).forEach(([key, value]) => {
                            currentMonthOfYearTotalEventsLabels.push(key);
                            currentMonthOfYearTotalEventsValues.push(value['Total Events']);
                          })}

                          {(currentMonthOfYearTotalEventsLabels.length) && (
                            <Line
                              data={{
                                labels: [...currentMonthOfYearTotalEventsLabels],
                                datasets: [
                                  {
                                    label: 'Total Events',
                                    backgroundColor: 'rgba(51, 204, 51,0.2)',
                                    borderColor: 'rgba(51, 204, 51,1)',
                                    pointBackgroundColor: 'rgba(51, 204, 51,1)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgba(51, 204, 51,1)',
                                    data: [...currentMonthOfYearTotalEventsValues]
                                  },
                                ]
                            }}
                          />
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })
        ) : (
          <div
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginTop: 25,
            }}
          >
            No records!
          </div>
        )}
      </Spinner>
    )
  }
};

export default DashboardList;
