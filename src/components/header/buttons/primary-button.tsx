import Image from 'next/image';
import styles from './button.module.scss';

const Button = ({ content } : {content: string}) => {
  return (
    <>
      <button type='button' className={styles.primary}>
        {content}
        <Image src='/Right.png' alt='arrow' width={18} height={18} className={styles.arrowRight}/>
      </button>
    </>
  );
};

export default Button;
