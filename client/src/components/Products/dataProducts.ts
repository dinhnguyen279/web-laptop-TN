import img1 from "../../assets/images/capsac.jpg";
import imgAsus from "../../assets/images/asus.jpg";
import product1 from "../../assets/images/capsac.jpg";
import product2 from "../../assets/images/typeC1.jpg";
import product3 from "../../assets/images/typeC2.jpg";
import product4 from "../../assets/images/sacmini.jpg";
import product5 from "../../assets/images/sacnhanh2.jpg";
import product6 from "../../assets/images/sacnhanh3.jpg";
import product7 from "../../assets/images/PD3.2.png";
export interface DataBestSeller {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
}
export const fakeDataBestSeller = [
  {
    id: 1,
    image: img1,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
  {
    id: 2,
    image: product2,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
  {
    id: 3,
    image: product3,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
  {
    id: 4,
    image: product4,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
  {
    id: 5,
    image: product5,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
  {
    id: 6,
    image: product6,
    title: "Cáp sạc nhanh",
    description: "Sản phẩm chất lượng cao.",
    price: "399,000 ₫",
  },
];

export interface DataProducts {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  vga: string;
  cpu: string;
  display: string;
  ram: string;
}
export const FakeDataProduct = [
  {
    id: 1,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
  {
    id: 2,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
  {
    id: 3,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
  {
    id: 4,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
  {
    id: 5,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
  {
    id: 6,
    image: product7,
    title: "Củ sạc nhanh mini ",
    description: "Công nghệ GaN",
    price: "369.000 ₫",
    vga: "Type C",
    cpu: "18 tháng",
    display: "30W",
    ram: "nhỏ gọn",
  },
];

export interface DataCompanyProduct {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}
export const fakeDataCompanyProduct = [
  {
    id: 1,
    image: product1,
    title: "Củ sạc nhanh 20W CD318",
    subtitle: "Công nghệ GaN",
  },
  {
    id: 2,
    image: product2,
    title: "Củ sạc nhanh mini 30W CD319",
    subtitle: "Công nghệ GaN",
  },
  {
    id: 3,
    image: product3,
    title: "Trạm sạc 65W CD268",
    subtitle: "Công nghệ GaN",
  },
  {
    id: 4,
    image: product4,
    title: "Trạm sạc 100W CD270",
    subtitle: "Công nghệ GaN",
  },
  {
    id: 5,
    image: product5,
    title: "Chuột không dây 2.4G",
    subtitle: "Công nghệ GaN",
  },
  {
    id: 6,
    image: product6,
    title: "Sạc điện thoại",
    subtitle: "Công nghệ GaN",
  },
];
