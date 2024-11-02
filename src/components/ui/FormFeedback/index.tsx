'use client';
import styles from './index.module.css';
import { ReactNode, useState } from 'react';
import Form from 'next/form';
import feedbackAction from '@/services/feedbackAction';
import Link from 'next/link';
import { $PATH_PRIVACY_POLICY } from '@/data';
import IconArrow from '../Icons/IconArrow';
import IconCheckboxTrue from '../Icons/IconCheckboxTrue';
import IconCheckboxFalse from '../Icons/IconCheckboxFalse';

const FormFeedback = (): ReactNode => {
  const [isChecked, setIsChecked] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const handleChecked = () => setIsChecked((prev) => !prev);
  const clearInvalid = () => {
    if (!isInvalid) return;
    setIsInvalid(false);
  };
  const clearAll = () => {
    setIsChecked(false);
    setIsInvalid(false);
  };
  return (
    <Form action={feedbackAction} className={styles.form} onSubmit={clearAll}>
      <div className={`${styles.block} ${isInvalid ? styles._error : ''}`}>
        <input
          name="email"
          type="email"
          placeholder="Ваш e-mail"
          className={styles.email}
          onInvalid={() => setIsInvalid(true)}
          onChange={clearInvalid}
          required
        />
        <button type="submit" className={styles.btn + ' _transition'}>
          <IconArrow />
        </button>
      </div>
      {isInvalid && (
        <div className={styles.errorMessage}>Введите корректный e-mail</div>
      )}
      <div className={styles.permission}>
        <div className={styles.fake + ' _transition'} onClick={handleChecked}>
          {isChecked && <IconCheckboxTrue />}
          {!isChecked && <IconCheckboxFalse />}
        </div>
        <input
          type="checkbox"
          id="permission"
          name="permission"
          checked={isChecked}
          onChange={handleChecked}
          required
        />
        <label htmlFor="permission">
          Я соглашаюсь с условиями {`${''}`}
          <Link href={$PATH_PRIVACY_POLICY} className="_transition">
            Политики конфиденциальности
          </Link>
        </label>
      </div>
    </Form>
  );
};

export default FormFeedback;
