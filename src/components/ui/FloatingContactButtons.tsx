import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, X } from "lucide-react";
import { HOMESTAY_INFO } from "@/lib/constants";

import { ZaloSvg, PhoneSvg } from "@/components/Icons";

export default function FloatingContactButtons() {
  const [showZaloQR, setShowZaloQR] = useState(false);

  // Prevent body scroll when Zalo modal is open
  useEffect(() => {
    if (showZaloQR) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [showZaloQR]);

  const handlePhoneCall = () => {
    window.open(`tel:${HOMESTAY_INFO.phone}`);
  };

  const handleZaloClick = () => {
    setShowZaloQR(true);
  };


  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Zalo Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZaloClick}
          className="w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Chat Zalo"
        >
          <ZaloSvg />

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat Zalo
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        </motion.button>

        {/* Phone Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", bounce: 0.6 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePhoneCall}
          className="group relative w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          title="Gọi điện"
        >
          <PhoneSvg />

          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              {HOMESTAY_INFO.phone}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Zalo QR Modal */}
      <AnimatePresence>
        {showZaloQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setShowZaloQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowZaloQR(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ZaloSvg />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Kết nối Zalo
                </h3>
                <p className="text-gray-600">
                  Quét mã QR để kết bạn và chat trực tiếp với chúng tôi
                </p>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-gray-50 rounded-xl p-8 mb-6">
                <div className="w-48 h-48 mx-auto bg-white rounded-lg shadow-inner flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <img src="/QR.png" alt="QR Code" />
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <p>Mở ứng dụng Zalo trên điện thoại</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <p>Chọn biểu tượng QR và quét mã</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <p>Nhắn tin để được tư vấn ngay!</p>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500 mb-3">
                  Hoặc gọi điện trực tiếp:
                </p>
                <button
                  onClick={handlePhoneCall}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{HOMESTAY_INFO.phone}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
