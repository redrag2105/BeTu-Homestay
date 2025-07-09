export const HOMESTAY_INFO = {
  name: "BeTu Homestay",
  address: "357/10/13 Nguyễn Thị Thập, Phường 6, Mỹ Tho",
  phone: "0931 077 099",
  email: "contact@betuhomestay.com",
  description:
    "Trải nghiệm không gian ấm cúng và hiện đại tại BeTu Homestay - nơi mang đến cho bạn cảm giác như ở nhà giữa lòng Mỹ Tho.",
  features: [
    "Phòng nghỉ tiện nghi",
    "Wi-Fi miễn phí",
    "Bãi đậu xe",
    "Hỗ trợ 24/7",
  ],
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Trang Chủ", href: "home", id: "home" },
  { name: "Liên Hệ", href: "contact", id: "contact" },
] as const;

export const ROOMS = [
  {
    id: 1,
    name: "Phòng DELUXE Ban Công",
    priceNight: "500.000",
    priceDayNight: "550.000",
    image:
      "/deluxe/deluxe.png",
    gallery: [
      "/deluxe/deluxe1.png",
      "/deluxe/deluxe2.png",
      "/deluxe/deluxe3.png",
      "/slides/slide3.png",
      "/deluxe/deluxe4.png",
      "/deluxe/deluxe.png",
    ],
    features: [
      "Tivi",
      "Tủ lạnh",
      "Điều hòa",
      "Nhà tắm riêng",
      "Bếp chung",
      "Bàn trang điểm",
      "Tủ quần áo",
      "Máy sấy, bàn ủi",
      "Ghế bập bênh đôi",
      "Ban công",
    ],
    description: "Giá giờ: 290.000đ/ combo 2h",
    description1: "Giờ tiếp theo 80k/h | 430.000đ/ combo 4h",
  },
  {
    id: 2,
    name: "Phòng Standard Plus Máy chiếu",
    priceNight: "450.000",
    priceDayNight: "500.000",
    image:
      "/standard/standard1.png",
    gallery: [
      "/standard/standard1.png",
      "/standard/standard2.png",
      "/standard/standard3.png",
      "/standard/standard4.png",
      "/standard/standard5.png",
    ],
    features: [
      "Nhà tắm riêng",
      "Bếp chung",
      "Tủ lạnh",
      "Tủ quần áo",
      "Bàn trang điểm",
      "Máy sấy, bàn ủi",
      "Ghế thư giãn",
      "Máy chiếu",
      "Điều hòa",
    ],
    description: "Giá giờ:  260.000đ/ combo 2h",
    description1: "Giờ tiếp theo 80k/h | 400.000đ/ combo 4h",
  },
] as const;
