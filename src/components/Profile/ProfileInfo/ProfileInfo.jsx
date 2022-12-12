import React from 'react'
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://playsector.ru/images/img/2020/02/02/playsectorru_20200202180716.jpg' />
      </div>
      <div className={s.description__block}>
        ava + description
      </div>
    </div>
  )
}
