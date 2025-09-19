import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-[#E8A341] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-3xl">G</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Grupogirassol</h2>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-[#E8A341] rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600"
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;