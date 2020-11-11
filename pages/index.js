import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>
      </div>
    </Layout>
  );
}

// Get all the data at build time so later on when we visit the page all the data will be available for us we don't to wait for any call to be resolve
// Remember: This is static it means that it will only be updated when we build the project
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
