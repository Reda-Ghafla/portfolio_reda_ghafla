import styles from '../styles/message.module.css';

function Message({ user_name, user_email }) {
  //   log(user_email);
  // console.log(user_email, user_name);
  //   const { user_name, user_email } = valueInput;
  return (
    <div className={styles.message}>
      <p className={styles.content}>
        Your Message has been sent successfully
        {''}
      </p>
    </div>
  );
}

export default Message;
