const mockItinerary = {
  // 🌍 Africa
  Egypt: [
    { activities: ["🏛️ Pyramids of Giza", "🏺 Egyptian Museum", "🌇 Khan el-Khalili, Cairo"] },
    { activities: ["🕌 Citadel of Saladin", "🌴 Nile River Cruise", "🎭 Sound & Light Show"] },
    { activities: ["🐪 Camel rides at Giza", "🛍️ Cairo Bazaar", "📸 Panoramic sunset view"] }
  ],
  "South Africa": [
    { activities: ["⛰️ Table Mountain", "🏖️ Camps Bay", "🐧 Boulders Beach"] },
    { activities: ["🍷 Stellenbosch Wine Tour", "🌿 Kirstenbosch Gardens", "🛍️ V&A Waterfront"] },
    { activities: ["🚶 Robben Island", "🏞️ Cape Point", "🐋 Whale Watching"] }
  ],
  Kenya: [
    { activities: ["🦁 Maasai Mara Safari", "🦓 Great Migration Spotting", "🔥 Tribal Campfire"] },
    { activities: ["🌄 Sunrise Jeep Ride", "📷 Wildlife Photography", "🌿 Nature Walk"] },
    { activities: ["🎨 Maasai Village Tour", "🐘 Elephant Orphanage", "🛍️ Local Craft Market"] }
  ],
  Morocco: [
    { activities: ["🌆 Marrakech Medina", "🕌 Koutoubia Mosque", "🛁 Hammam Spa Experience"] },
    { activities: ["🌄 Atlas Mountains Trip", "🌴 Palmeraie Camel Ride", "🍽️ Moroccan Dinner"] },
    { activities: ["🏛️ Bahia Palace", "🎨 Fes Tannery", "🛍️ Traditional Souks"] }
  ],
  Tanzania: [
    { activities: ["🦒 Serengeti Safari", "🏞️ Ngorongoro Crater", "🔥 Sunset at Lake Manyara"] },
    { activities: ["⛺ Glamping in Savannah", "🚙 Game Drives", "📷 Bird Watching"] },
    { activities: ["🌅 Hot Air Balloon", "🎣 Fishing Village Visit", "🛍️ Local Art Markets"] }
  ],

  // 🌏 Asia
  China: [
    { activities: ["🧱 Great Wall", "🏯 Forbidden City", "🛍️ Beijing Silk Market"] },
    { activities: ["🌆 Summer Palace", "🍜 Hutong Food Tour", "🎭 Chinese Opera"] },
    { activities: ["🚴 Cycle Beijing Streets", "📸 Temple of Heaven", "🧧 Cultural Show"] }
  ],
  Japan: [
    { activities: ["⛩️ Fushimi Inari Shrine", "🍵 Matcha Ceremony", "🛍️ Kyoto Gion District"] },
    { activities: ["🌸 Arashiyama Bamboo Forest", "🚅 Bullet Train", "🧖 Onsen Relaxation"] },
    { activities: ["🗼 Tokyo Skytree", "🎮 Akihabara", "🍣 Tsukiji Sushi Market"] }
  ],
  India: [
    { activities: ["🕌 Taj Mahal", "🎨 Agra Fort", "🛍️ Sadar Bazaar"] },
    { activities: ["🌄 Mehtab Bagh", "🐘 Elephant Sanctuary", "🍛 Mughlai Food Tour"] },
    { activities: ["🏯 Fatehpur Sikri", "📸 Sunrise View", "🧵 Handicraft Village"] }
  ],
  Thailand: [
    { activities: ["🌆 Bangkok Grand Palace", "🛶 Floating Market", "🍜 Street Food Tour"] },
    { activities: ["🕉️ Wat Arun Temple", "🌴 Relax in Chiang Mai", "🐘 Elephant Sanctuary"] },
    { activities: ["🌄 Doi Suthep View", "🛍️ Chiang Mai Night Bazaar", "💆 Thai Massage"] }
  ],
  "South Korea": [
    { activities: ["🌆 Seoul Tower", "🍲 Gwangjang Market", "🎮 K-pop Street"] },
    { activities: ["🏯 Gyeongbokgung Palace", "🌸 Hanbok Experience", "🧖 Jjimjilbang Spa"] },
    { activities: ["🌊 Jeju Island", "🚴 Coastal Walks", "🌋 Hallasan Volcano"] }
  ],

  // 🌍 Europe
  Italy: [
    { activities: ["🏛️ Colosseum", "🍕 Roman Food Tour", "⛲ Trevi Fountain"] },
    { activities: ["🚤 Venice Gondola", "🎭 St. Mark’s Basilica", "🛍️ Rialto Bridge"] },
    { activities: ["🎨 Florence Duomo", "🎨 Uffizi Gallery", "🌄 Tuscany Wine Trip"] }
  ],
  France: [
    { activities: ["🗼 Eiffel Tower", "🖼️ Louvre Museum", "🥐 Café in Montmartre"] },
    { activities: ["🛥️ Seine River Cruise", "🌸 Tuileries Garden", "🍷 Wine + Cheese Tasting"] },
    { activities: ["🎭 Opera Garnier", "🛍️ Champs-Élysées", "🌌 Eiffel Night Lights"] }
  ],
  "United Kingdom": [
    { activities: ["🏰 Buckingham Palace", "🎡 London Eye", "🍵 Afternoon Tea"] },
    { activities: ["🎓 Oxford Day Trip", "🕵️ Sherlock Museum", "🌆 Sky Garden"] },
    { activities: ["🏞️ Edinburgh Castle", "🛍️ Royal Mile", "🌉 Arthur’s Seat"] }
  ],
  Germany: [
    { activities: ["🏰 Neuschwanstein Castle", "🍻 Oktoberfest", "🖼️ Berlin Wall Tour"] },
    { activities: ["🚶 Brandenburg Gate", "🌳 Tiergarten", "🏛️ Museum Island"] },
    { activities: ["🚂 Train to Munich", "🎨 BMW Museum", "🎄 Christmas Market"] }
  ],
  Spain: [
    { activities: ["🏖️ Barcelona Beaches", "🎨 Sagrada Familia", "🛍️ La Rambla"] },
    { activities: ["🕍 Gothic Quarter", "🍷 Tapas Tour", "💃 Flamenco Night"] },
    { activities: ["🏰 Alhambra Granada", "🌅 Seville Alcazar", "🎭 Plaza de España"] }
  ],

  // 🌎 North America
  "United States": [
    { activities: ["🗽 Statue of Liberty", "🌆 Times Square", "🎭 Broadway Show"] },
    { activities: ["🏞️ Grand Canyon", "🌁 Golden Gate Bridge", "🎢 Universal Studios"] },
    { activities: ["🎨 MoMA", "🚁 Helicopter Ride NYC", "🛍️ 5th Ave Shopping"] }
  ],
  Canada: [
    { activities: ["🏞️ Banff National Park", "🌄 Lake Louise", "🚠 Jasper SkyTram"] },
    { activities: ["🏙️ Toronto CN Tower", "🛍️ Eaton Centre", "🎭 Distillery District"] },
    { activities: ["🌆 Niagara Falls", "🍁 Maple Syrup Tasting", "🧖 Nordic Spa"] }
  ],
  Mexico: [
    { activities: ["🏝️ Cancun Beach", "🌊 Cenote Swim", "🛶 Isla Mujeres Trip"] },
    { activities: ["🌄 Chichen Itza", "🧀 Street Food Tour", "🎭 Mariachi Night"] },
    { activities: ["🌆 Mexico City Zócalo", "🖼️ Frida Kahlo Museum", "🍫 Chocolate Workshop"] }
  ],

  // 🌎 South America
  Brazil: [
    { activities: ["🌇 Rio de Janeiro", "🏖️ Copacabana", "🗽 Christ the Redeemer"] },
    { activities: ["🛶 Amazon Rainforest", "🐒 Jungle Trek", "🎋 River Cruise"] },
    { activities: ["🍍 Tropical Fruit Market", "🎭 Samba Night", "🛍️ Artisan Market"] }
  ],
  Peru: [
    { activities: ["⛰️ Machu Picchu Trek", "🛕 Sacred Valley", "🛍️ Cusco Markets"] },
    { activities: ["🎒 Inca Trail Hike", "🧘 Hot Springs", "🎨 Artisan Workshops"] },
    { activities: ["🍲 Traditional Peruvian Food", "🌄 Sunrise Photoshoot", "🚂 Train Ride"] }
  ],
  Argentina: [
    { activities: ["🌃 Buenos Aires", "💃 Tango Show", "🥩 Steakhouse Dinner"] },
    { activities: ["🌊 Iguazu Falls", "🚣 Boat Safari", "🌈 Rainbow Walk"] },
    { activities: ["🎭 Teatro Colón", "🛍️ San Telmo Market", "🍷 Wine Tour"] }
  ],
  Chile: [
    { activities: ["🏞️ Torres del Paine Hike", "🏕️ Glacier Camping", "🐧 Penguin Spotting"] },
    { activities: ["🌋 Atacama Desert", "🔭 Stargazing Tour", "🏜️ Salt Flats"] },
    { activities: ["🍷 Santiago Wine Trail", "🎭 Street Art Tour", "🎨 Museum Visit"] }
  ],
  Colombia: [
    { activities: ["🌅 Cartagena Old City", "🏰 San Felipe Fortress", "🌊 Playa Blanca"] },
    { activities: ["🌴 Rosario Islands", "🧘 Yoga on the Beach", "🛍️ Handmade Souvenirs"] },
    { activities: ["🎉 Salsa Night", "🍹 Tropical Cocktails", "📷 Sunset Photo Tour"] }
  ],

  // 🌏 Oceania
  Australia: [
    { activities: ["🎭 Sydney Opera House", "🌉 Harbour Bridge", "🏖️ Bondi Beach"] },
    { activities: ["🐠 Great Barrier Reef", "🚁 Helicopter Tour", "🏜️ Outback Safari"] },
    { activities: ["🦘 Wildlife Park", "🌌 Stargazing", "🏄 Surfing Lesson"] }
  ],
  "New Zealand": [
    { activities: ["🌄 Queenstown Adventure", "🛶 Milford Sound", "🎿 Ski Trip"] },
    { activities: ["🧙 Hobbiton Movie Set", "🌋 Rotorua Geysers", "💆 Spa Day"] },
    { activities: ["🚴 Biking Tour", "🎨 Maori Culture Show", "📸 Lake Tekapo"] }
  ],

  // 🌍 Middle East
  "United Arab Emirates": [
    { activities: ["🌆 Burj Khalifa", "🛍️ Dubai Mall", "🚢 Dhow Cruise Marina"] },
    { activities: ["🏜️ Desert Safari", "🐫 Camel Ride", "🔥 BBQ Dinner"] },
    { activities: ["🏰 Sheikh Zayed Grand Mosque", "🎨 Louvre Abu Dhabi", "🌇 Corniche Walk"] }
  ],
  Israel: [
    { activities: ["🕍 Jerusalem Old City", "🕊️ Western Wall", "🛍️ Mahane Yehuda Market"] },
    { activities: ["🌊 Dead Sea Float", "🧖 Spa Resort", "🛕 Masada Sunrise Hike"] },
    { activities: ["🌅 Tel Aviv Beach", "🎭 Cultural Tour", "🍽️ Israeli Cuisine"] }
  ],
  Turkey: [
    { activities: ["🌉 Bosphorus Cruise", "🕌 Blue Mosque", "🛍️ Grand Bazaar"] },
    { activities: ["🎈 Cappadocia Balloons", "🏚️ Underground City", "🍽️ Turkish Breakfast"] },
    { activities: ["🏰 Hagia Sophia", "🎨 Mosaic Museum", "💆 Turkish Hammam"] }
  ],
  Jordan: [
    { activities: ["🏜️ Petra", "🗿 Treasury Viewpoint", "🐫 Wadi Rum Safari"] },
    { activities: ["🌊 Dead Sea Dip", "🧖 Mud Bath", "🛕 Mount Nebo"] },
    { activities: ["📸 Desert Stargazing", "🎒 Hiking Trails", "🍽️ Bedouin Feast"] }
  ],

  // ❄️ Antarctica
  Antarctica: [
    { activities: ["❄️ Iceberg Tours", "🐧 Penguin Watching", "🚢 Zodiac Boat Ride"] },
    { activities: ["🧊 Research Station Visit", "📷 Landscape Photography", "🌨️ Snow Hike"] },
    { activities: ["🧥 Gear Up with Crew", "🌬️ Snowfield Walk", "🎥 Nature Documentary"] }
  ]
}

export default mockItinerary

