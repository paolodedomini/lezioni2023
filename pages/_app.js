import "../sass/global.scss";
import LayoutPage from "../layout/page";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <LayoutPage>
          <Component {...pageProps} />
        </LayoutPage>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
