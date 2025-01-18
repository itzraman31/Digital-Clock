import React, { useState } from 'react'
import './clock.css'
import { hrs1, hrs2, min1, min2, sec1, sec2 } from './Hours'
import Display from './Display';
import dayLap from './Images/dayLap.jpg'
import dayMob from './Images/dayMob.jpeg'
import nightLap from './Images/nightLap.jpg'
import nightMob from './Images/nightMob.jpg'

const Clock = () => {

  let colors1 = {
    color: 'white',
    fontFamily: 'EB Garamond '
  }
  let colors2 = {
    color: 'black'
  }

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date();
  let second = date.getSeconds();
  let mintue = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  let dateonly = date.toLocaleDateString();
  const [day1, setday1] = useState(day)
  const [dateonly1, setdateonly1] = useState(dateonly)
  const [seconds1, setseconds1] = useState(Math.floor(second / 10));
  const [seconds2, setseconds2] = useState(second % 10);
  const [mint1, setmint1] = useState(Math.floor(mintue / 10));
  const [mint2, setmint2] = useState(mintue % 10);
  const [hr1, sethr1] = useState(Math.floor(hours / 10));
  const [hr2, sethr2] = useState(hours % 10);
  const [style, setstyle] = useState();

  setInterval(() => {
    let date = new Date();
    let second = date.getSeconds();
    let mintue = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
    let dateonly = date.toLocaleDateString();
    setdateonly1(dateonly)
    setday1(day);
    setseconds1(Math.floor(second / 10))
    setseconds2(second % 10)
    setmint1(Math.floor(mintue / 10))
    setmint2(mintue % 10)
    sethr1(Math.floor(hours / 10))
    sethr2(hours % 10)


    if (hours >= 0 & hours <= 12) {
      // setstyle({
      //   BackgroundImage: `url(${dayLap})`
      // })

      setstyle({
        '--bg-image': `url(${dayLap})`,
      });
    }
    else {
      // setstyle({
      //   backgroundImage: `url(${nightLap})`
      // })

      setstyle({
        '--bg-image': `url(${nightLap})`,
      });
    }
  }, 1000);

  return (
    <>
      <div style={style} className='outerdiv'>

        <div className='divforAll'>

          <div className='container1 c1'>
            {hrs1.map((value) => {
              return <Display key={value.name} clrs={value.name === hr1 ? colors2 : colors1} time={value.name} />
            })}
          </div>
          <div className='container1 c2'>
            {hrs2.map((value) => {
              return <Display key={value.name} clrs={value.name === hr2 ? colors2 : colors1} time={value.name} />
            })}
          </div>

          <h1>:</h1>

          <div className='container1'>
            {min1.map((value) => {
              return <Display key={value.name} clrs={value.name === mint1 ? colors2 : colors1} time={value.name} />
            })}
          </div>
          <div className='container1'>
            {min2.map((value) => {
              return <Display key={value.name} clrs={value.name === mint2 ? colors2 : colors1} time={value.name} />
            })}
          </div>

          <h1>:</h1>

          <div className='container1'>
            {sec1.map((value) => {
              return <Display key={value.name} clrs={value.name === seconds1 ? colors2 : colors1} time={value.name} />
            })}
          </div>
          <div className='container1'>
            {sec2.map((value) => {
              return <Display key={value.name} clrs={value.name === seconds2 ? colors2 : colors1} time={value.name} />
            })}
          </div>

        </div>

        <div className='daydate'>
          <h4 className='daydateh4' >{weekday[day1]}, {dateonly1}</h4>
        </div>
      </div>
    </>
  )
}

export default Clock