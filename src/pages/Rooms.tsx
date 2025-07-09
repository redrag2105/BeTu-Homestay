import { motion } from "motion/react";
import {
  Bath,
  Star,
  Crown,
  Award,
  Film,
  ChefHat,
  Shirt,
  Wind,
  Sofa,
  PictureInPicture,
  Home,
  Eye,
  SunSnow,
  Flower,
  Tv,
  Refrigerator,
  RockingChair,
} from "lucide-react";
import { useState, useEffect } from "react";
import { HOMESTAY_INFO, ROOMS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ZaloSvg, PhoneSvg } from "@/components/Icons";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<
    null | (typeof ROOMS)[number]
  >(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showContactPopup, setShowContactPopup] = useState(false);

  // Debug log for selectedImage changes
  useEffect(() => {
    console.log("selectedImage changed:", selectedImage);
  }, [selectedImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedRoom || selectedImage || showContactPopup) {
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
  }, [selectedRoom, selectedImage, showContactPopup]);

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Tivi")) return <Tv className="w-4 h-4" />;
    if (feature.includes("Ghế bập bênh"))
      return <RockingChair className="w-4 h-4" />;
    if (feature.includes("Tủ lạnh"))
      return <Refrigerator className="w-4 h-4" />;
    if (feature.includes("tắm")) return <Bath className="w-4 h-4" />;
    if (feature.includes("Bếp")) return <ChefHat className="w-4 h-4" />;
    if (feature.includes("trang điểm")) return <Flower className="w-4 h-4" />;
    if (feature.includes("quần áo")) return <Shirt className="w-4 h-4" />;
    if (feature.includes("sấy") || feature.includes("ủi"))
      return <Wind className="w-4 h-4" />;
    if (feature.includes("chiếu")) return <Film className="w-4 h-4" />;
    if (feature.includes("Sofa") || feature.includes("Ghế"))
      return <Sofa className="w-4 h-4" />;
    if (feature.includes("Ban công")) return <Home className="w-4 h-4" />;
    if (feature.includes("Điều hòa")) return <SunSnow className="w-4 h-4" />;
    return <Award className="w-4 h-4" />;
  };

  return (
    <div className="relative overflow-hidden">
      {/* Rooms Grid */}
      <section id="room-selection" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ROOMS.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden glass-effect border-orange-200/50 hover:border-orange-300/70 hover:shadow-2xl transition-all duration-500 relative">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-72 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 space-y-1">
                      <div className="gradient-primary text-white px-3 py-1 rounded-full font-semibold text-sm shadow-glow">
                        {room.priceNight}₫/đêm (21:00 - 8:00)
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full font-semibold text-xs">
                        {room.priceDayNight}₫/ngày đêm (14:00 - 12:00)
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span>5.0</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 flex items-center justify-center">
                      <Button
                        onClick={() => setSelectedRoom(room)}
                        className="gradient-primary text-white hover:shadow-glow shadow-soft font-semibold px-6 py-3"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Xem Chi Tiết</span>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-800 drop-shadow-sm/30">
                        {room.name}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 gradient-secondary rounded-full flex items-center justify-center"
                      >
                        <Crown className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>

                    <p className="text-orange-600 mb-6 leading-relaxed drop-shadow-sm/20">
                      {room.description}
                      <br />
                      {room.description1}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-orange-800 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Tiện nghi đẳng cấp:</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-sm text-orange-700 bg-orange-50 rounded-lg px-3 py-2"
                          >
                            <div className="text-orange-500">
                              {getFeatureIcon(feature)}
                            </div>
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={() => setShowContactPopup(true)}
                        className="w-full gradient-primary text-white shadow-glow hover:shadow-2xl"
                      >
                        Đặt Phòng Ngay
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedRoom(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedRoom.name}
                  </h3>
                  <div className="flex space-x-2">
                    <div className="gradient-primary text-white px-3 py-1 rounded-full font-semibold text-sm shadow-glow">
                      {selectedRoom.priceNight}₫/đêm
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full font-semibold text-sm">
                      {selectedRoom.priceDayNight}₫/ngày đêm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-orange-700 text-lg mb-6 leading-relaxed">
                {selectedRoom.description}
                <br />
                {selectedRoom.description1}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-orange-800 text-lg mb-4 flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Tiện nghi đầy đủ:</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedRoom.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-orange-700 bg-orange-50 rounded-lg px-3 py-2 border border-orange-100"
                    >
                      <div className="text-orange-500">
                        {getFeatureIcon(feature)}
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-6">
                <h4 className="font-bold text-orange-800 text-lg mb-4 flex items-center space-x-2">
                  <PictureInPicture className="w-5 h-5" />
                  <span>Hình ảnh phòng:</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedRoom.gallery.map((imageUrl, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-orange-100 rounded-lg overflow-hidden group relative cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Image clicked:", imageUrl);
                        setSelectedImage(imageUrl);
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`${selectedRoom.name} view ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setShowContactPopup(true)}
                  className="flex-1 gradient-primary text-white shadow-glow hover:shadow-2xl"
                >
                  Đặt Phòng Ngay
                </Button>
                <Button
                  onClick={() => setSelectedRoom(null)}
                  variant="outline"
                  className="flex-1"
                >
                  Đóng
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-[9999]">
          <div className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => {
                console.log("Close button clicked");
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white z-20"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Room view"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => {
              console.log("Outside clicked");
              setSelectedImage(null);
            }}
          >
            {" "}
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setShowContactPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img src="logo.webp" alt="Logo" className="w-17 h-17"/>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-2">
                  Liên Hệ Đặt Phòng
                </h3>
                <p className="text-orange-600">
                  Hãy liên hệ với chúng tôi để đặt phòng và nhận ưu đãi tốt
                  nhất!
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4 mb-6">
                {/* Phone */}
                <motion.a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 pt-1 pb-1 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <PhoneSvg />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800">Gọi Điện</h4>
                    <p className="text-green-600">
                      {HOMESTAY_INFO.phone}
                    </p>
                  </div>
                  <div className="text-green-500 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </motion.a>

                {/* Zalo */}
                <motion.a
                  href={`https://zalo.me/${HOMESTAY_INFO.phone.replace(/\s/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 pt-1 pb-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    <ZaloSvg />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-800">Chat Zalo</h4>
                    <p className="text-blue-600">
                      {HOMESTAY_INFO.phone}
                    </p>
                  </div>
                  <div className="text-blue-500 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </motion.a>
              </div>

              {/* Close Button */}
              <Button
                onClick={() => setShowContactPopup(false)}
                variant="outline"
                className="w-full"
              >
                Đóng
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
