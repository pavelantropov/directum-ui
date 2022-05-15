import { MenuItemType } from "../components/Menu/types";
import { TableItemType } from "../components/Table/types";
import pikachuImage from "../images/pikachu.png";

const defaultTableItemName = "Детектив пикачу";
const defaultTableItemDescription = "уморительный, остроумный и обаятельный сыщик";

export const DefaultTableItems: TableItemType[] = [
  {
    name: defaultTableItemName + "#1",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
  {
    name: defaultTableItemName + "#2",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
  {
    name: defaultTableItemName + "#3",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
  {
    name: defaultTableItemName + "#4",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
  {
    name: defaultTableItemName + "#5",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
  {
    name: defaultTableItemName + "#6",
    description: defaultTableItemDescription,
    imageSrc: pikachuImage,
  },
];

export const DefaultMenuItems: MenuItemType[] = [
  {
    title: "Профиль",
    ref: "#profile"
  },
  {
    title: "Настройки",
    ref: "#settings"
  },
  {
    title: "Перезагрузка",
    ref: "/"
  },
]
