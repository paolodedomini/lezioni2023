import "../sass/global.scss";
import LayoutPage from "../layout/page";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <motion.div>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </motion.div>
  );
}

export default MyApp;
