import { IconButton,useColorModeValue, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";


const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{display: 'inline-block'}}
            key={useColorModeValue('light','dark')}
            animate={{scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["20%", "20%", "70%", "70%", "20%"],opacity: 1}}
            exit={{x: 20,opacity: 0 }}
            transition={{duration: 0.5}}>
        <IconButton aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
        onClick={toggleColorMode}>
        </IconButton>
        </motion.div>
        </AnimatePresence>
    )
}

export default ThemeToggleButton