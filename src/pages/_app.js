import "@/styles/index.css";
import "@/styles/App.scss";
import "@/styles/header.css";
import "@/styles/sign.scss";
import "@/styles/home.scss";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
