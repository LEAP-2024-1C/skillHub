"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Login = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    useEffect(() => {
        console.log("is in view", isInView);
    }, [isInView]);
    return (
        <div style={{height: "100vh",}}>
          
            <motion.div style={{
             height: "50vh",
                background: "black"
            }}
                
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}></motion.div>
            <div ref={ref} style={{
              height: "50vh",
                background: isInView ? "white" : "black",
                transition: "1s background",
              }}>

</div>
        </div>
    )
}
export default Login;