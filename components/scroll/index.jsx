import { useTransform, motion, useScroll, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import style from './style.module.scss';

export default function Scroll({ children }) {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);



    const y = useTransform(smoothProgress, value => {
        if (typeof window !== 'undefined') {
            return value * -(contentHeight - window.innerHeight);
        }
    });
    console.log(y)
    const handleResize = () => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }
    useEffect(() => {


        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [contentRef, children]);

    return (
        <>
            <div style={{ height: contentHeight, width: 0 }} />

            <motion.div
                className={style.scrollBody}
                style={{ y }}
                ref={contentRef}
            >
                {children}
            </motion.div>

        </>
    )
}