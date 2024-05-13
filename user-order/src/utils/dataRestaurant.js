import category_1 from './image/appetizer.png'
import category_2 from './image/main_course.png'
import category_3 from './image/desert.png'

import SateAyam from './image/sate.jpg'
import SiomayBandung from './image/siomaybandung.jpg'
import RujakBuah from './image/rujakbuah.jpg'
import PerkedelKentang from './image/perkedelkentang.jpg'
import MartabakTelur from './image/martabaktelor.jpg'
import NasiGoreng from './image/nasgor.png'
import Rendang from './image/rendang.png'
import AyamBakar from './image/ayambakar.jpg'
import Rawon from './image/rawon.jpg'
import SotoMadura from './image/sotomadura.jpg'
import Gudeg from './image/gudeg.jpg'
import EsCampur from './image/escampur.png'
import EsCincau from './image/escincau.jpg'
import Klepon from './image/kelpon.jpg'

export const category_list = [
  {
    category_food: "Appetizer",
    menu_image: category_1
  },
  {
    category_food: "Main Course",
    menu_image: category_2
  },
  {
    category_food: "Desert",
    menu_image: category_3
  }
];

export const menu_list = [
  {
    _id: "1",
    name: "Sate Ayam",
    image: SateAyam,
    price: 25000,
    rating: 8,
    description: "Daging ayam yang dibumbui dengan rempah khas Indonesia dan disajikan dengan bumbu kacang yang kaya rasa.",
    category: "Appetizer"
  },
  {
    _id: "2",
    name: "Siomay Bandung",
    image: SiomayBandung,
    price: 30000,
    rating: 8,
    description: "Siomay terdiri dari daging ikan tenggiri dan udang yang dibungkus dengan kulit pangsit, disajikan dengan saus kacang dan sambal.",
    category: "Appetizer"
  },
  {
    _id: "3",
    name: "Rujak Buah",
    image: RujakBuah,
    price: 20000,
    rating: 8,
    description: "Campuran buah segar seperti mangga, nanas, jambu, dan mentimun yang disajikan dengan bumbu rujak yang segar dan pedas.",
    category: "Appetizer"
  },
  {
    _id: "4",
    name: "Perkedel Kentang",
    image: PerkedelKentang,
    price: 10000,
    rating: 9,
    description: "Perkedel kentang yang renyah di luar, lembut di dalam, dibuat dari kentang yang dihaluskan dan dicampur dengan bumbu-bumbu rempah.",
    category: "Appetizer"
  },
  {
    _id: "5",
    name: "Martabak Telur",
    image: MartabakTelur,
    price: 25000,
    rating: 10,
    description: "Martabak dengan kulit tipis yang diisi dengan telur, daun bawang, daging cincang, bawang merah, dan bumbu rempah.",
    category: "Appetizer"
  },
  {
    _id: "6",
    name: "Nasi Goreng",
    image: NasiGoreng,
    price: 35000,
    rating: 9,
    description: "Nasi goreng yang diolah dengan bumbu-bumbu rempah khas Indonesia, disajikan dengan irisan telur dadar, daging ayam, kerupuk, dan acar.",
    category: "Main Course"
  },
  {
    _id: "7",
    name: "Rendang",
    image: Rendang,
    price: 40000,
    rating: 10,
    description: "Daging sapi yang dimasak dengan santan dan rempah-rempah khas Minangkabau hingga empuk dan beraroma. Disajikan dengan nasi putih.",
    category: "Main Course"
  },
  {
    _id: "8",
    name: "Ayam Bakar",
    image: AyamBakar,
    price: 35000,
    rating: 9,
    description: "Potongan ayam yang dimasak dengan bumbu rempah, kemudian dipanggang hingga matang. Disajikan dengan sambal terasi dan lalapan.",
    category: "Main Course"
  },
  {
    _id: "9",
    name: "Rawon",
    image: Rawon,
    price: 40000,
    rating: 8,
    description: "Sup daging sapi yang berwarna hitam pekat, dimasak dengan kluwek dan rempah-rempah, dengan irisan daging sapi, dan tauge.",
    category: "Main Course"
  },
  {
    _id: "10",
    name: "Soto Madura",
    image: SotoMadura,
    price: 35000,
    rating: 8,
    description: "Sup daging sapi yang kaya rempah, disajikan dengan potongan daging sapi, telur rebus, tauge, koya, dan sambal.",
    category: "Main Course"
  },
  {
    _id: "11",
    name: "Gudeg",
    image: Gudeg,
    price: 40000,
    rating: 7,
    description: "Olahan nangka muda yang dimasak dengan santan dan bumbu rempah, disajikan dengan telur, ayam suwir, tahu, dan sambal goreng krecek.",
    category: "Main Course"
  },
  {
    _id: "12",
    name: "Es Campur",
    image: EsCampur,
    price: 15000,
    rating: 8,
    description: "Campuran es serut, jelly, nata de coco, kolang-kaling, dan berbagai buah segar yang disiram dengan sirup dan santan.",
    category: "Desert"
  },
  {
    _id: "13",
    name: "Es Cincau",
    image: EsCincau,
    price: 10000,
    rating: 8,
    description: "Cincau yang dipotong kecil-kecil dan disajikan dengan air gula merah dan es serut. Yang siap menyegarkan badan anda.",
    category: "Desert"
  },
  {
    _id: "14",
    name: "Klepon",
    image: Klepon,
    price: 15000,
    rating: 9,
    description: "Kue tradisional berbentuk bulat kecil yang terbuat dari tepung ketan yang diisi dengan gula merah cair.",
    category: "Desert"
  }
]
