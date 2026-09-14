import { motion, AnimatePresence } from "framer-motion";

const SuccessModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="
              fixed inset-0
              bg-black/50 dark:bg-black/70
              backdrop-blur-sm z-40
              transition-colors
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Wrapper */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Box */}
            <div
              className="
                bg-white dark:bg-gray-800
                rounded-2xl shadow-xl
                p-6 max-w-sm w-full text-center
                transition-colors
              "
            >
              <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                🎉 Thank You!
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Thank you for enrolling with us. Our team will contact you soon.
              </p>

              <button
                onClick={onClose}
                className="
                  mt-5 w-full
                  bg-green-600 hover:bg-green-700
                  dark:bg-green-500 dark:hover:bg-green-600
                  text-white py-2 rounded-xl
                  transition
                "
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
