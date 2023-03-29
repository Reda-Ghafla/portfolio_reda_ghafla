import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import emailjs from '@emailjs/browser';
import styles from '../styles/contact.module.css';
import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const Contact = () => {
  const [valueInput, setValueInput] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [status, setStatus] = useState(false);

  const form = useRef();

  useEffect(() => {
    let time = setTimeout(() => {
      <Message valueInput={valueInput} />;
      setStatus(false);
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [status, valueInput]);

  const handelChange = (e) => {
    // const nameTarget = e.target.name;
    // const valueTarget = e.target.value;
    const { name, value } = e.target;

    // console.log(name, value);
    if (name && value) {
      setValueInput({ ...valueInput, [name]: value });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (valueInput.user_email && valueInput.user_email && valueInput.message) {
      emailjs
        .sendForm(
          'service_9wpn3mt',
          'template_9ygw7dt',
          form.current,
          'Wnv5Er_eMdzAYAP18'
        )
        .then(
          (result) => {
            console.log(form.current);
            if (result.text) {
              setStatus(true);
            }

            // console.log(form.current.input);
            setValueInput({ user_name: '', user_email: '', message: '' });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log('Your input are empty');
    }
    // if (value.name && value.email && value.message) {

    // }
  };
  return (
    <section className={styles.container} id="contact">
      <header className={styles.header}>
        <div className={styles.title}>
          <h2>Contact</h2>
          <div className={styles.underline}></div>
        </div>
      </header>
      <div className={styles.sousContainer}>
        <div className={styles.left}>
          <div className={styles.titleForm}>
            <form className={styles.form} ref={form} onSubmit={sendEmail}>
              <div className={styles.label}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={valueInput.user_name}
                  placeholder="Enter your name"
                  className={styles.input}
                  onChange={handelChange}
                  required
                />
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  name="user_email"
                  placeholder="Your Email"
                  className={styles.input}
                  value={valueInput.user_email}
                  onChange={handelChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message ..."
                  className={styles.textextArea}
                  value={valueInput.message}
                  onChange={handelChange}
                  required
                />
              </div>
              <button
                type="submit"
                onClick={sendEmail}
                className={`btn ${styles.btn}`}
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.socialMedia}>Contact me On</h1>
          <div className={styles.underline2}></div>
          <ul className={styles.lists}>
            <li className={styles.item}>
              <Link href={'https:/www.facebook.com'}>
                <a className={styles.link} target="_blank">
                  <span>
                    <AiFillFacebook className={styles.span} />
                  </span>
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'https:/www.facebook.com'}>
                <a className={styles.link} target="_blank">
                  <span>
                    <AiFillInstagram className={styles.span} />
                  </span>
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'https:/www.facebook.com'}>
                <a className={styles.link} target="_blank">
                  <span>
                    <AiFillLinkedin className={styles.span} />
                  </span>
                </a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={'https:/www.facebook.com'}>
                <a className={styles.link} target="_blank">
                  <span>
                    <AiFillGithub className={styles.span} />
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {status && (
        <Message
          user_name={valueInput.user_name}
          user_email={valueInput.user_email}
        />
      )}
    </section>
  );
};

export default Contact;
