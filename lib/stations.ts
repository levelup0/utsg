export interface Station {
  id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  hasCafe: boolean;
  hasShop: boolean;
  hasTireInflation: boolean;
  hasVacuum: boolean;
  hasCarWash: boolean;
  fuelTypes: string[];
}

export const stations: Station[] = [
  {
    id: "8m",
    name: "АЗС №8М",
    address: "г. Ульяновск, ул. Нариманова",
    lat: 54.361511,
    lon: 48.338607,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["Пропан"],
  },
  {
    id: "8",
    name: "АЗС №8",
    address:
      "Ульяновская обл., Чердаклинский район, 18 км а/д Ульяновск-Димитровград",
    lat: 54.2597,
    lon: 48.8765,
    hasCafe: true,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "12",
    name: "АЗС №12",
    address: "г. Ульяновск, ул. Ефремова, 50А",
    lat: 54.2889,
    lon: 48.2883,
    hasCafe: true,
    hasShop: true,
    hasTireInflation: true,
    hasVacuum: true,
    hasCarWash: true,
    fuelTypes: ["АИ-92", "АИ-95", "АИ-98", "ДТ", "Пропан"],
  },
  {
    id: "13",
    name: "АЗС №13",
    address:
      "Ульяновская обл., Старомайнский район, р.п. Старая Майна, ул. Сидорова, 23",
    lat: 54.6049,
    lon: 48.9474,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "19",
    name: "АЗС №19",
    address: "Ульяновская обл., Майнский район, р.п. Майна, ул. Советская, 63",
    lat: 54.1118,
    lon: 47.6209,
    hasCafe: true,
    hasShop: true,
    hasTireInflation: true,
    hasVacuum: true,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "1m",
    name: "АЗС №1М",
    address: "Ульяновская обл., Теренгульский район, с. Солдатская Ташла",
    lat: 54.0123,
    lon: 48.2078,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "2m",
    name: "АЗС №2М",
    address:
      'Ульяновская обл., Чердаклинский район, 25-й км трассы "Ульяновск-Самара"',
    lat: 54.2597,
    lon: 48.8765,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "АИ-98", "ДТ", "Пропан"],
  },
  {
    id: "3m",
    name: "АЗС №3М",
    address: 'г. Ульяновск, трасса "Ульяновск-Сызрань", с. Белый Ключ',
    lat: 54.221,
    lon: 48.2949,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "5m",
    name: "АЗС №5М",
    address: "г. Ульяновск, ул. Диспетчерская, д. 16",
    lat: 54.275,
    lon: 48.3306,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
  {
    id: "6m",
    name: "АЗС №6М",
    address:
      "Ульяновская обл., г. Сенгилей, пересечение ул. Красноармейской и объездной дороги Ульяновск-Сенгилей-Молвино",
    lat: 53.9556,
    lon: 48.8072,
    hasCafe: false,
    hasShop: true,
    hasTireInflation: false,
    hasVacuum: false,
    hasCarWash: false,
    fuelTypes: ["АИ-92", "АИ-95", "ДТ", "Пропан"],
  },
];
