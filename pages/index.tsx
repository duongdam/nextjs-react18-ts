import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Header from "./components/headers";
import MyContents from "./components/contents";
import Footer from "./components/footers";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <MyContents/>
            <Footer/>
        </div>
    )
}

export default Home
