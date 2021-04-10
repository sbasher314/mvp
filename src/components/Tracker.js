import React, { Component } from 'react';
import Pixel from './Pixel.js';
class Tracker extends Component {
  constructor(props) {
    super(props);
  }

  getDayData(weekOf) {
    let weekData = [];
    let dates = [];
    for (var i = 0; i < 7; i++) {
      weekData[i] = {};
      dates.push(new Date(new Date(weekOf).setDate(weekOf.getDate() + i)).toDateString());
    }
    this.props.logs.forEach(log => {
      weekData[dates.indexOf(log.date.toDateString())] = log;
      if (weekData.length === 7) {
        return weekData;
      }
    });
    console.log(weekData);
    return weekData;
  }

  render() {
    let d = new Date(); //current day
    let firstDayOfWeek = new Date(new Date(d).setDate(d.getDate() - d.getDay()));
    let dayData = this.getDayData(firstDayOfWeek);
    if (!this.props.visible) {
      return <div></div>
    }
    if (!this.props.isSignedIn) {
      return <div>You must sign-in</div>
    }
    return (
      <div className='tracker'>
        <h1>{`${this.props.type}ly tracker:`}</h1>
        {this.props.type === 'week' &&
          <span>Week of - {firstDayOfWeek.toDateString()}</span>
        }
        <div className = 'visualizer'>
          <div className = 'visualizerLabel'>
             {this.props.type === 'week' &&
             <>
               <span>Sunday</span>
               <span>Monday</span>
               <span>Tuesday</span>
               <span>Wednesday</span>
               <span>Thursday</span>
               <span>Friday</span>
               <span>Saturday</span>
              </>
             }
          </div>
          <div className = 'visualizerPixels'>
            {this.props.type === 'week' &&
                dayData.map(data => (
                  <span>
                    <div className="mood"> Mood:
                      <text contenteditable="true">{data.mood}</text>
                    </div>
                    <div className="description"> Description:
                      <text contenteditable="true">{data.description}</text>
                    </div>
                    <Pixel mood={data.mood}/>
                    </span>
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;