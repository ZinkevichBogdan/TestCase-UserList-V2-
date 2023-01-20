import React, { useEffect, useState } from 'react'
import { useGetUsersQuery, useDeleteUserMutation } from '../../services/UserServices'
import styles from './UsersList.module.scss'
import classNames from 'classnames'
import Placeholder from '../placeholder/Placeholder'



const UserList = () => {
   const { data = [], isLoading } = useGetUsersQuery('');
   const [deleteUser] = useDeleteUserMutation();
   const [offset, setOffset] = useState(9);

   const handleDeleteUser = async (id: number) => {
      await deleteUser(id).unwrap()
   }

   let users = data.slice(0, offset);

   useEffect(() => {
      users = data;
   }, [data]);

   window.addEventListener("scroll", () => {

      if (
         window.pageYOffset + document.documentElement.clientHeight >=
         document.documentElement.scrollHeight - 1
      ) {
         setOffset(offset + 3);
      }
   });


   return (
      <div className={styles.userCard}>

         {
            users.map(user => (
               isLoading

                  ? <Placeholder />

                  :
                  <div
                     key={user.id}
                     className={classNames(styles.containerCard)}>

                     <div className={classNames(styles.front, styles.side)}>
                        <div className={styles.content}>
                           <h2>{user.firstName} {user.lastName}</h2>
                           <div className={styles.textConteiner}>
                              <p>{user.text}</p>
                           </div>
                        </div>

                     </div>

                     <div className={classNames(styles.back, styles.side)}>

                        <div className={styles.content}>
                           <h1>Contact Me</h1>

                           <div className={styles.backInfo}>

                              <div className={styles.info}>
                                 <p >Your name :</p>
                                 <span> {user.firstName} </span>
                              </div>

                              <div className={styles.info}>
                                 <p >Your E-mail :</p>
                                 <span>{user.email}</span>
                              </div>

                              <div className={styles.info} >
                                 <p >Your message:</p>
                                 <span>{user.number}</span>
                              </div>

                           </div>

                           <div className={styles.buttonBlock}>
                              <button onClick={() => handleDeleteUser(user.id)} className={styles.deleteUser} >
                                 <img src="/assets/logo/trash.svg" alt="" />
                              </button>
                           </div>


                        </div>

                     </div>
                  </div>
            ))
         }
      </div>
   )
}

export default UserList

