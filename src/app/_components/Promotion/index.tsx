'use client'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 3)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date()
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })

      if (timeDifference === 0) {
        clearInterval(timerInterval)
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
    }
  }, [])
  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before with our Deals of the Month! Every
          purchase comes with exclusive perks and offers, making this month a celebration of savvy
          choices and amazing deals. Don't miss out! 🎁🛒
        </p>
        <ul className={classes.stats}>
          <StartBox label="Days" value={time.days} />
          <StartBox label="Hours" value={time.hours} />
          <StartBox label="Minutes" value={time.minutes} />
          <StartBox label="Seconds" value={time.seconds} />
        </ul>
      </div>
      <Link href="/products">
        <Image src="/assets/images/image-4.svg" alt="Promotion" width={1000} height={1000} />
      </Link>
    </section>
  )
}
const StartBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <li className={classes.startBox}>
      <h4>{value}</h4>
      <p>{label}</p>
    </li>
  )
}
export default Promotion
