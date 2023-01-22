import React, { FC } from 'react'
import styles from './Header.module.scss'
import { addFlag } from '../../store/slice/setClassName'
import { useAppDispatch } from '../../hooks/redux';
import close from '../../assets/logo/close.svg'

const Header: FC = () => {

   const dispatch = useAppDispatch();

   const showForm = () => {
      dispatch(addFlag())
   }

   return (

      <div className={styles.header}>

         <h1 className={styles.h1} >Список користувачів</h1>

         <div className={styles.buttonBlock} onClick={() => showForm()}>
            <button className={styles.openForm} >
               <img src={close} alt="" />
            </button>
         </div>

      </div>
   )
}

export default Header