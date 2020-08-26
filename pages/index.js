import styles from '../styles/Home.module.css';
import Footer from './footer';
import Header from './header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <body>
        <div className="root"></div>
      </body>

      <Footer />
    </div>
  );
}
