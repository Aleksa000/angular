export interface Travel {
  id: number;
  name: string;
  price: number;
  description: string;
  negative: number;
  positive: number;
  quantity: number;
  category: string;
  image: string;
  photo: string;
  from: string;
  to: string;
  departureDate: string;
  arrivalDate: string;
  departureTime: string;
  arrivalTime: string;
  stars: string;
  comments: string;
  priceless: string;
  seats: string;
  qtn: number;
}

export const travels = [ 
    {
      id: 1,
      name: 'Air Serbia',
      price: 110,
      description: 'Air Serbia operates scheduled, seasonal and charter flights to over 70 destinations in Europe.',
      negative: 120,
      positive: 367,
      quantity: 3,
      category: 'Economy class',
      image: 'assets/images/1.jpg',
      photo: 'assets/photo/1.png',
      from:'Belgrade, SRB',
      to:'Budapest, HUN',
      departureDate:'12/12/2022',
      arrivalDate:'12/12/2022',
      departureTime: '15:00h',
      arrivalTime: '15:45h',
      stars:'★★★★★',
      comments:'Very good company flights are never late',
      priceless: 'Normal',
      seats: '3F,2F,5G',
      qtn: 3
    },
    {
      id: 2,
      name: 'Adria Airways',
      price: 90,
      description: 'Adria Airways became Slovenias national air carrier and its operational structure changed.',
      negative: 90,
      positive: 401,
      quantity: 0,
      category: 'Economy class',
      image: 'assets/images/2.jpg',
      photo: 'assets/photo/2.png',
      from:'Belgrade, SRB',
      to:'Ljubljana, SLO',
      departureDate:'20/12/2022',
      arrivalDate:'20/12/2022',
      departureTime: '11:00h',
      arrivalTime: '11:45h',
      stars:'★★★★☆',
      comments:'The company is not bad, but it always feels like it',
      priceless: 'Good',
      seats: '2A,5F,4C,2B',
      qtn: 4
    },
    {
      id: 3,
      name: 'Aeroflot',
      price: 150,
      description: 'Aeroflot Group is active in key market segments, from premium to budget, providing passengers.',
      negative: 11,
      positive: 47,
      quantity: 5,
      category: 'Business class',
      image: 'assets/images/3.jpg',
      photo: 'assets/photo/3.jpg',
      from:'Belgrade, SRB',
      to:'Moscow, RUS',
      departureDate:'25/12/2022',
      arrivalDate:'25/12/2022',
      departureTime: '10:00h',
      arrivalTime: '18:45h',
      stars:'★★★☆☆',
      comments:'Service, food, seats, everything is great',
      priceless: 'Normal',
      seats: '2B,4F,3C,1B,6G',
      qtn: 5
    },
    {
      id: 4,
      name: 'Air Berlin',
      price: 90,
      description: 'Air Berlin became a German-owned company in 1991, shortly after the reunification of Germany.',
      negative: 67,
      positive: 201,
      quantity: 0,
      category: 'Economy class',
      image: 'assets/images/4.png',
      photo: 'assets/photo/4.png',
      from:'Belgrade, SRB',
      to:'Berlin, GER',
      departureDate:'09/12/2022',
      arrivalDate:'09/12/2022',
      departureTime: '09:00h',
      arrivalTime: '12:00h',
      stars:'★★★★★',
      comments:'I am delighted with the speed of release',
      priceless: 'Good',
      seats: '4H,6J',
      qtn: 2
    },
    {
      id: 5,
      name: 'Air France',
      price: 80,
      description: 'Together, Air France and KLM carry more than 77 million passengers per year. The best in Europe airlines flights.',
      negative: 98,
      positive: 206,
      quantity: 3,
      category: 'Business class',
      image: 'assets/images/5.jpg',
      photo: 'assets/photo/5.png',
      from:'Belgrade, SRB',
      to:'Paris, FRA',
      departureDate:'25/12/2022',
      arrivalDate:'25/12/2022',
      departureTime: '13:00h',
      arrivalTime: '14:00h',
      stars:'★★★★☆',
      comments:'Best trip so far :)',
      priceless: 'Good',
      seats: '1A,1B,1C',
      qtn: 3
    },
    {
      id: 6,
      name: 'AtlasGlobal',
      price: 150,
      description: 'AtlasGlobal, named Atlasjet until 31 March 2015, was a Turkish airline headquartered in Istanbul',
      negative: 84,
      positive: 380,
      quantity: 4,
      category: 'Business class',
      image: 'assets/images/6.png',
      photo: 'assets/photo/6.jpg',
      from:'Belgrade, SRB',
      to:'Instanbul, TUR',
      departureDate:'10/12/2022',
      arrivalDate:'10/12/2022',
      departureTime: '17:00h',
      arrivalTime: '19:00h',
      stars:'★★☆☆☆',
      comments:'Uncomfortable seats late flight I didn`t really like it :(',
      priceless: 'Normal',
      seats: 'A2,A3,A4,A5',
      qtn: 4
    },
    {
      id: 7,
      name: 'BritishAirways',
      price: 200,
      description: 'British Airways is a global airline and the UKs flag carrier, flying customers to where they need to be for more than 100 years.',
      negative: 23,
      positive: 98,
      quantity: 5,
      category: 'Business class',
      image: 'assets/images/7.png',
      photo: 'assets/photo/7.png',
      from:'Belgrade, SRB',
      to:'London, ENG',
      departureDate:'24/12/2022',
      arrivalDate:'24/12/2022',
      departureTime: '18:00h',
      arrivalTime: '19:30h',
      stars:'★★★★★',
      comments:'Phenomenal, I have no comment',
      priceless: 'Normal',
      seats: '8A,9F,6C,7K,8K',
      qtn: 5
    },
    {
      id: 8,
      name: 'Emirates',
      price: 350,
      description: 'Emirates connects the world to, and through, our global hub in Dubai. We operate modern, efficient and comfortable aircraft, and our culturally diverse.',
      negative: 16,
      positive: 46,
      quantity: 3,
      category: 'Business class',
      image: 'assets/images/8.jpg',
      photo: 'assets/photo/8.png',
      from:'Belgrade, SRB',
      to:'Dubai, UAE',
      departureDate:'15/12/2022',
      arrivalDate:'16/12/2022',
      departureTime: '12:00h',
      arrivalTime: '22:00h',
      stars:'★★★★★',
      comments:'Real enjoyment',
      priceless: 'Luxury',
      seats: '2B,3B,2A',
      qtn: 3
    },
    {
      id: 9,
      name: 'EtihadAirways',
      price: 400,
      description: 'Etihad Airways is a national airline company of the UAE headquartered in Abu Dhabi. It was founded in 2003. The airline operates more than 1,000 flights.',
      negative: 66,
      positive: 195,
      quantity: 3,
      category: 'Business class',
      image: 'assets/images/9.jpg',
      photo: 'assets/photo/9.png',
      from:'Belgrade, SRB',
      to:'Abu Dhabi, UAE',
      departureDate:'08/12/2022',
      arrivalDate:'08/12/2022',
      departureTime: '10:00h',
      arrivalTime: '20:00h',
      stars:'★★★★★',
      comments:'It is a privilege to go with  EtihadAirways',
      priceless: 'Luxury',
      seats: '1A,2A,4A',
      qtn: 3
    },
    {
      id: 10,
      name: 'FlyBosnia',
      price: 50,
      description: 'FLYBOSNIA is a new, young and dynamic airline based in Sarajevo that offers professional, reliable and safe service to its passengers.',
      negative: 78,
      positive: 250,
      quantity: 0,
      category: 'Economy class',
      image: 'assets/images/10.png',
      photo: 'assets/photo/10.jpg',
      from:'Belgrade, SRB',
      to:'Sarajevo, BIH',
      departureDate:'28/12/2022',
      arrivalDate:'28/12/2022',
      departureTime: '16:00h',
      arrivalTime: '16:45h',
      stars:'★☆☆☆☆',
      comments:'Unfortunately nothing works :(',
      priceless: 'Good',
      seats: '6C,7B,8G,9J,7K',
      qtn: 5
    },
    {
      id: 11,
      name: 'MontenegroAirlines',
      price: 70,
      description: 'The airline was founded on 24 October 1994, by the government of the Federal Republic of Yugoslavia.The first aircraft, a Fokker 28 Mk4000.',
      negative: 19,
      positive: 95,
      quantity: 1,
      category: 'Economy class',
      image: 'assets/images/11.jpg',
      photo: 'assets/photo/11.png',
      from:'Belgrade, SRB',
      to:'Budva, MON',
      departureDate:'01/12/2022',
      arrivalDate:'01/12/2022',
      departureTime: '19:00h',
      arrivalTime: '19:30h',
      stars:'★★★☆☆',
      comments:'Solid',
      priceless: 'Good',
      seats: '7K',
      qtn: 1
    },
    {
      id: 12,
      name: 'QatarAirways',
      price: 450,
      description: 'Qatar Airways is proud to be one of the youngest global airlines to serve all six continents, and thanks to our customers response to our offerings.',
      negative: 100,
      positive: 401,
      quantity: 6,
      category: 'Business class',
      image: 'assets/images/12.png',
      photo: 'assets/photo/12.png',
      from:'Belgrade, SRB',
      to:'Doha, QTR',
      departureDate:'02/12/2022',
      arrivalDate:'03/12/2022',
      departureTime: '08:00h',
      arrivalTime: '18:00h',
      stars:'★★★★☆',
      comments:'It was phenomenal especially because I went to watch the soccer world cup',
      priceless: 'Luxury',
      seats: '3A,3B,3C,9H,8J,7G',
      qtn: 6
    },
    {
      id: 13,
      name: 'TurkishAirlines',
      price: 150,
      description: 'Turkish Airlines (Turkish: Türk Hava Yollar) is the national flag carrier airline of Turkey. As of 2022, it operates scheduled services to 340 destinations. The one of best Turkish airlines. Only go with us and enjoy! We will give evrything.',
      negative: 160,
      positive: 780,
      quantity: 2,
      category: 'Economy class',
      image: 'assets/images/13.png',
      photo: 'assets/photo/6.jpg',
      from:'Belgrade, SRB',
      to:'Istanbul, TUR',
      departureDate:'04/12/2022',
      arrivalDate:'04/12/2022',
      departureTime: '22:00h',
      arrivalTime: '00:00h',
      stars:'★★★★★',
      comments:'Very good',
      priceless: 'Normal',
      seats: '5A,5B',
      qtn: 2
    },
    {
      id: 14,
      name: 'TunisAirlines',
      price: 120,
      description: 'Société Tunisienne de lAir, or Tunisair (Arabic: الخطوط التونسية) is the national airline of Tunisia.Formed in 1948, it operates scheduled international services.',
      negative: 55,
      positive: 205,
      quantity: 4,
      category: 'Economy class',
      image: 'assets/images/14.png',
      photo: 'assets/photo/13.png',
      from:'Belgrade, SRB',
      to:'Tunis, TUN',
      departureDate:'03/12/2022',
      arrivalDate:'03/12/2022',
      departureTime: '10:00h',
      arrivalTime: '12:30h',
      stars:'★★☆☆☆',
      comments:'Very nice',
      priceless: 'Normal',
      seats: '9A,9F,9C,9B',
      qtn: 4
    },
    {
      id: 15,
      name: 'El AL Airlines',
      price: 280,
      description: 'EL AL: Established in 1948 as the National Airline of Israel, we have grown into a prestigious international carrier.EL AL presents its all-Boeing fleet.',
      negative: 105,
      positive: 360,
      quantity: 3,
      category: 'Business class',
      image: 'assets/images/15.png',
      photo: 'assets/photo/14.png',
      from:'Belgrade, SRB',
      to:'Tel Aviv, ISR',
      departureDate:'11/12/2022',
      arrivalDate:'11/12/2022',
      departureTime: '19:00h',
      arrivalTime: '21:00h',
      stars:'★★★★☆',
      comments:'Words are superfluous',
      priceless: 'Luxury',
      seats: '4A,5A,A2',
      qtn: 3
    },
    {
      id: 16,
      name: 'KLM',
      price: 90,
      description: 'Together, Air France and KLM carry more than 77 million passengers per year.The best in Europe airlines flights.',
      negative: 12,
      positive: 44,
      quantity: 1,
      category: 'Economy class',
      image: 'assets/images/16.png',
      photo: 'assets/photo/15.jpg',
      from:'Belgrade, SRB',
      to:'Amsterdam, NED',
      departureDate:'17/12/2022',
      arrivalDate:'17/12/2022',
      departureTime: '00:00h',
      arrivalTime: '02:00h',
      stars:'★★★☆☆',
      comments:'Could be better i think',
      priceless: 'Good',
      seats: '10A',
      qtn: 1
    },
    {
      id: 17,
      name: 'CroatiaAirlines',
      price: 95,
      description: 'Croatia Airlines Ltd. is the state-owned flag carrier airline of Croatia.Its headquarters are in Buzin near Zagreb.',
      negative: 111,
      positive: 365,
      quantity: 2,
      category: 'Economy class',
      image: 'assets/images/17.png',
      photo: 'assets/photo/16.png',
      from:'Belgrade, SRB',
      to:'Zagreb, CRO',
      departureDate:'18/12/2022',
      arrivalDate:'18/12/2022',
      departureTime: '12:00h',
      arrivalTime: '13:00h',
      stars:'★★★★☆',
      comments:'It`s good',
      priceless: 'Good',
      seats: '7F,9J',
      qtn: 2
    }
];