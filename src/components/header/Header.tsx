import React from 'react'
import styles from './Header.module.scss'
import { addFlag } from '../../store/slice/setClassName'
import { useAppDispatch } from '../../hooks/redux';

const Header = () => {

   const dispatch = useAppDispatch();

   const showForm = () => {
      dispatch(addFlag())
   }

   return (

      <div className={styles.header}>
         
         <h1 className={styles.h1} >Список користувачів</h1>

         <div className={styles.buttonBlock} onClick={() => showForm()}>
            <button className={styles.openForm} >
               <img src="assets/logo/close.svg" alt="" />
            </button>
         </div>

      </div>
   )
}

export default Header