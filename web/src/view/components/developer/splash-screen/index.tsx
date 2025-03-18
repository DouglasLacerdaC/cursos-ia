import { AnimatePresence, motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export function SplashScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed top-0 left-0 w-screen h-screen grid place-items-center bg-white"
        >
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin stroke-primary" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
