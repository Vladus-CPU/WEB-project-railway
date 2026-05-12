const trains = [
  {
    id: 1,
    trainNumber: '091К',
    from: 'Львів',
    to: 'Київ',
    departureDate: '2026-05-15',
    departureTime: '21:00',
    arrivalTime: '06:20',
    duration: '9 год 20 хв',
    trainType: 'Нічний експрес',
    price: 540,
    wagons: [
      {
        id: 1,
        number: 1,
        type: 'СВ',
        classCode: 'Л',
        seatCount: 18,
        layout: 'lux',
        description: 'Двомісні купе підвищеного комфорту'
      },
      {
        id: 2,
        number: 2,
        type: 'Купе',
        classCode: 'К',
        seatCount: 36,
        layout: 'coupe',
        description: 'Чотиримісні закриті купе'
      },
      {
        id: 3,
        number: 3,
        type: 'Плацкарт',
        classCode: 'П',
        seatCount: 54,
        layout: 'platzkart',
        description: 'Відкритий вагон з боковими місцями'
      }
    ]
  },
  {
    id: 2,
    trainNumber: '743О',
    from: 'Київ',
    to: 'Львів',
    departureDate: '2026-05-16',
    departureTime: '06:45',
    arrivalTime: '13:50',
    duration: '7 год 05 хв',
    trainType: 'Інтерсіті+',
    price: 690,
    wagons: [
      {
        id: 1,
        number: 1,
        type: 'Сидячий 1 клас',
        classCode: 'С1',
        seatCount: 48,
        layout: 'seatingFirst',
        description: 'Підвищений комфорт та більше простору'
      },
      {
        id: 2,
        number: 2,
        type: 'Сидячий 2 клас',
        classCode: 'С2',
        seatCount: 80,
        layout: 'seatingSecond',
        description: 'Стандартні сидячі місця'
      },
      {
        id: 3,
        number: 3,
        type: 'Сидячий 2 клас',
        classCode: 'С2',
        seatCount: 80,
        layout: 'seatingSecond',
        description: 'Стандартні сидячі місця'
      }
    ]
  },
  {
    id: 3,
    trainNumber: '026Л',
    from: 'Одеса',
    to: 'Львів',
    departureDate: '2026-05-16',
    departureTime: '18:30',
    arrivalTime: '08:10',
    duration: '13 год 40 хв',
    trainType: 'Нічний швидкий',
    price: 620,
    wagons: [
      {
        id: 1,
        number: 1,
        type: 'СВ',
        classCode: 'Л',
        seatCount: 18,
        layout: 'lux',
        description: 'Двомісні купе підвищеного комфорту'
      },
      {
        id: 2,
        number: 2,
        type: 'Купе',
        classCode: 'К',
        seatCount: 36,
        layout: 'coupe',
        description: 'Чотиримісні закриті купе'
      },
      {
        id: 3,
        number: 3,
        type: 'Плацкарт',
        classCode: 'П',
        seatCount: 54,
        layout: 'platzkart',
        description: 'Відкритий вагон з боковими місцями'
      }
    ]
  },
  {
    id: 4,
    trainNumber: '705К',
    from: 'Київ',
    to: 'Перемишль',
    departureDate: '2026-05-17',
    departureTime: '05:45',
    arrivalTime: '14:15',
    duration: '8 год 30 хв',
    trainType: 'Міжнародний',
    price: 980,
    wagons: [
      {
        id: 1,
        number: 1,
        type: 'RIC',
        classCode: 'RIC',
        seatCount: 30,
        layout: 'ric',
        description: 'Міжнародний вагон з трансформованими купе'
      },
      {
        id: 2,
        number: 2,
        type: 'Купе',
        classCode: 'К',
        seatCount: 36,
        layout: 'coupe',
        description: 'Чотиримісні закриті купе'
      },
      {
        id: 3,
        number: 3,
        type: 'СВ',
        classCode: 'Л',
        seatCount: 18,
        layout: 'lux',
        description: 'Двомісні купе підвищеного комфорту'
      }
    ]
  },
  {
    id: 5,
    trainNumber: '120П',
    from: 'Запоріжжя',
    to: 'Львів',
    departureDate: '2026-05-18',
    departureTime: '16:10',
    arrivalTime: '10:35',
    duration: '18 год 25 хв',
    trainType: 'Пасажирський',
    price: 470,
    wagons: [
      {
        id: 1,
        number: 1,
        type: 'Купе',
        classCode: 'К',
        seatCount: 36,
        layout: 'coupe',
        description: 'Чотиримісні закриті купе'
      },
      {
        id: 2,
        number: 2,
        type: 'Плацкарт',
        classCode: 'П',
        seatCount: 54,
        layout: 'platzkart',
        description: 'Відкритий вагон з боковими місцями'
      },
      {
        id: 3,
        number: 3,
        type: 'Загальний',
        classCode: 'З',
        seatCount: 81,
        layout: 'general',
        description: 'Економний вагон із сидячим розміщенням'
      }
    ]
  }
];

export default trains;