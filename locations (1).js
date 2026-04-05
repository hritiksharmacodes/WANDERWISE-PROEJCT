// =============================================================================
// WanderWise — data/locations.js
// 100+ Delhi Locations with All Short Forms, Aliases & Safety Data
// =============================================================================

const LOCATIONS = {

  // ── CENTRAL DELHI ────────────────────────────────────────────────────────
  "connaught place": {
    name: "Connaught Place", shortForm: "CP",
    aliases: ["cp","c.p.","c p","rajiv chowk","rajivchowk","cannought","connought","connaught","inner circle","outer circle","cp outer","cp inner","rchowk","super market cp"],
    zone: "Central Delhi", areaType: "Shopping & Commercial Hub",
    nearestMetro: "Rajiv Chowk (Blue + Yellow)", metroLine: "Blue & Yellow",
    popularFor: "Shopping, Food, Banking, Nightlife, F-Block",
    bestTime: "Morning & Evening", riskLevel: "moderate",
    riskNote: "Beware of overcharging taxis, gem stores near Palika, fake guides, 'closed hotel' scam",
    hotspots: ["Janpath Market","Palika Bazaar","Central Park","F-Block Market","Connaught Lane","Regal Building"],
    transport: ["Metro: Rajiv Chowk (Blue + Yellow Line)","DTC Buses from nearby","Autos & Cabs available"],
    scamTypes: ["Gem Store Scam","Fake Tour Guide","Taxi Overcharging","Closed Hotel Scam"],
    safetyScore: 6, emoji: "🏛️"
  },

  "chandni chowk": {
    name: "Chandni Chowk", shortForm: "CC",
    aliases: ["chandni chowk","cc","chandi chowk","chandni","chandnichowk","cc delhi","lal quila road","chawri bazaar area"],
    zone: "Old Delhi", areaType: "Heritage Market",
    nearestMetro: "Chandni Chowk (Yellow)", metroLine: "Yellow",
    popularFor: "Spices, Street Food, Textiles, Sweets, Wedding Shopping",
    bestTime: "Morning (before 11 AM)", riskLevel: "high",
    riskNote: "Extremely crowded; pickpockets, overcharging & fake products very common",
    hotspots: ["Paranthe Wali Gali","Kinari Bazaar","Khari Baoli","Fatehpuri Mosque","Dariba Kalan (Jewellery)"],
    transport: ["Metro: Chandni Chowk (Yellow Line)","Cycle Rickshaw inside lanes"],
    scamTypes: ["Pickpocketing","Counterfeit Currency","Overcharging","Fake Products"],
    safetyScore: 4, emoji: "🕌"
  },

  "paharganj": {
    name: "Paharganj", shortForm: "PG",
    aliases: ["paharganj","pg","main bazaar","pahar ganj","pahargant","pharganj","phargunge","pahargunge","pgj","backpacker area","main bazar delhi"],
    zone: "Central Delhi", areaType: "Budget Tourism Hub",
    nearestMetro: "New Delhi (Yellow + Airport Express)", metroLine: "Yellow",
    popularFor: "Budget Hotels, Backpacker Market, Railway Station proximity",
    bestTime: "Evening", riskLevel: "high",
    riskNote: "Highest scam concentration in Delhi — touts, drug pushers, gem scams, fake police, closed guesthouse trick",
    hotspots: ["Main Bazaar","Chuna Mandi","Arakashan Road","Laxmi Narayan Temple","Khanna Market"],
    transport: ["Metro: New Delhi (Yellow + Airport Express)","Walk 5 min to New Delhi Railway Stn"],
    scamTypes: ["Gem Store Scam","Fake Police","Drug Pushing","Fake Hotel Booking","Closed Hotel Scam","Taxi Overcharging"],
    safetyScore: 3, emoji: "🎒"
  },

  "old delhi": {
    name: "Old Delhi", shortForm: "OD",
    aliases: ["old delhi","od","old dilli","purani dilli","dilli 6","delhi 6","shajahanabad","old del","walled city"],
    zone: "Old Delhi", areaType: "Heritage & Walled City",
    nearestMetro: "Chandni Chowk / Chawri Bazaar", metroLine: "Yellow & Violet",
    popularFor: "Street Food, Spices, Heritage, Mughal Architecture, Weddings",
    bestTime: "Morning", riskLevel: "high",
    riskNote: "Extremely crowded; pickpocketing, overcharging & scams very common; lanes confusing",
    hotspots: ["Chandni Chowk","Jama Masjid","Red Fort","Khari Baoli (Spice Market)","Ballimaran","Dariba Kalan"],
    transport: ["Metro: Chandni Chowk (Yellow)","Cycle Rickshaw in lanes"],
    scamTypes: ["Pickpocketing","Counterfeit Currency","Overpriced Rickshaw","Fake Tour Guide"],
    safetyScore: 3, emoji: "🏰"
  },

  "india gate": {
    name: "India Gate", shortForm: "IG",
    aliases: ["india gate","ig","india gate area","rajpath","kartavya path","kartavya","amar jawan","national war memorial","war memorial"],
    zone: "Central Delhi", areaType: "Heritage Landmark & Picnic Spot",
    nearestMetro: "Central Secretariat (Yellow)", metroLine: "Yellow",
    popularFor: "War Memorial, Picnics, Boating, Evening Walks, Food Stalls",
    bestTime: "Evening", riskLevel: "moderate",
    riskNote: "Tourist hotspot — overpriced food stalls (3–5x), touts & unofficial guides",
    hotspots: ["India Gate Arch","Amar Jawan Jyoti","National War Memorial","Kartavya Path","Boat Club"],
    transport: ["Metro: Central Secretariat","Cabs & Autos"],
    scamTypes: ["Overpriced Food","Unofficial Guide","Souvenir Overpricing"],
    safetyScore: 6, emoji: "🗿"
  },

  "red fort": {
    name: "Red Fort", shortForm: "LQ",
    aliases: ["red fort","lal qila","lal kila","redfort","lal quila","red fort area","fort area"],
    zone: "Old Delhi", areaType: "UNESCO Heritage Monument",
    nearestMetro: "Chandni Chowk / Lal Quila (Violet)", metroLine: "Yellow & Violet",
    popularFor: "UNESCO Site, Independence Day, Mughal History",
    bestTime: "Morning (open 9:30 AM–4:30 PM)", riskLevel: "high",
    riskNote: "Fake ticket sellers, overpriced tours, pickpockets very active near main gate",
    hotspots: ["Red Fort Main Gate","Diwan-i-Aam","Diwan-i-Khas","Sound & Light Show","Meena Bazaar inside"],
    transport: ["Metro: Chandni Chowk / Lal Quila (Violet)","Autos & Cycle Rickshaws"],
    scamTypes: ["Fake Ticket Seller","Unofficial Guide","Pickpocketing","Overpriced Souvenir"],
    safetyScore: 4, emoji: "🔴"
  },

  "jama masjid": {
    name: "Jama Masjid", shortForm: "JM",
    aliases: ["jama masjid","jm","jami masjid","jama mosque","masjid-i-jahan-numa","friday mosque","jamma masjid"],
    zone: "Old Delhi", areaType: "Heritage & Religious",
    nearestMetro: "Jama Masjid (Violet)", metroLine: "Violet",
    popularFor: "Mosque, Street Food, Old Delhi Heritage, Photography",
    bestTime: "Morning & Evening (avoid Friday prayer 12–2 PM)",
    riskLevel: "high",
    riskNote: "Very crowded; pickpockets active, overpriced food outside, unofficial guides overcharge",
    hotspots: ["Jama Masjid Mosque","Karim's Restaurant","Meena Bazaar","Al Jawahar"],
    transport: ["Metro: Jama Masjid (Violet)","Cycle Rickshaws from Chandni Chowk"],
    scamTypes: ["Unofficial Guide","Overpriced Food","Pickpocketing","Dress Code Extortion"],
    safetyScore: 4, emoji: "🕌"
  },

  "humayuns tomb": {
    name: "Humayun's Tomb", shortForm: "HT",
    aliases: ["humayun tomb","humayuns tomb","humayun's tomb","humayun","humayuntomb","humayun's garden","humayun monument"],
    zone: "Central Delhi", areaType: "UNESCO Heritage Monument",
    nearestMetro: "JLN Stadium (Violet)", metroLine: "Violet",
    popularFor: "UNESCO World Heritage, Mughal Architecture, Photography",
    bestTime: "Morning (open 6 AM–6 PM)", riskLevel: "low",
    riskNote: "Safe; only buy tickets from official ASI counter — fake ticket sellers near gate",
    hotspots: ["Humayun's Tomb","Isa Khan's Tomb","Arab Serai","Charbagh Gardens"],
    transport: ["Metro: JLN Stadium (Violet)","Autos"],
    scamTypes: ["Fake Ticket Seller","Unofficial Guide"],
    safetyScore: 8, emoji: "🏛️"
  },

  "qutub minar": {
    name: "Qutub Minar", shortForm: "QM",
    aliases: ["qutub minar","qutab minar","kutub minar","qutab","qutub","kutab minar","qtb","qtbmnr","qutb minar","mehrauli monuments"],
    zone: "South Delhi", areaType: "UNESCO Heritage Monument",
    nearestMetro: "Qutub Minar (Yellow)", metroLine: "Yellow",
    popularFor: "UNESCO World Heritage, Photography, Iron Pillar",
    bestTime: "Morning (open 7 AM–5 PM)", riskLevel: "moderate",
    riskNote: "Overpriced guides, souvenir touts, fake tickets outside — ASI counter only",
    hotspots: ["Qutub Minar Tower","Iron Pillar","Alai Darwaza","Mehrauli Archaeological Park"],
    transport: ["Metro: Qutub Minar (Yellow)","Autos from metro"],
    scamTypes: ["Fake Ticket Seller","Unofficial Guide","Overpriced Souvenir"],
    safetyScore: 6, emoji: "🗼"
  },

  "akshardham": {
    name: "Akshardham Temple", shortForm: "AKD",
    aliases: ["akshardham","akshar dham","akshardham temple","swaminarayan akshardham","akd"],
    zone: "East Delhi", areaType: "Temple & Cultural Complex",
    nearestMetro: "Akshardham (Blue)", metroLine: "Blue",
    popularFor: "Temple, Cultural Shows, Boat Ride, Fountain Show",
    bestTime: "Afternoon & Evening (closed Monday)", riskLevel: "low",
    riskNote: "Safe; no phones/cameras inside; only unofficial guides outside",
    hotspots: ["Akshardham Temple","Musical Fountain","Boat Ride","IMAX Screen"],
    transport: ["Metro: Akshardham (Blue Line)","Autos"],
    scamTypes: ["Unofficial Guide"],
    safetyScore: 9, emoji: "🛕"
  },

  // ── SHOPPING HUBS ────────────────────────────────────────────────────────
  "karol bagh": {
    name: "Karol Bagh", shortForm: "KB",
    aliases: ["karol bagh","kb","carol bagh","karolbagh","karol","k.b.","karols","karol bagh market","gaffar market area"],
    zone: "West-Central Delhi", areaType: "Shopping & Residential",
    nearestMetro: "Karol Bagh (Blue)", metroLine: "Blue",
    popularFor: "Electronics, Gaffar Market, Clothes, Bridal Wear, Street Food",
    bestTime: "Morning & Afternoon", riskLevel: "moderate",
    riskNote: "Watch for duplicate electronics in Gaffar Market & fake branded goods; negotiate firmly",
    hotspots: ["Gaffar Market (Electronics)","Ajmal Khan Road","Tank Road","Pusa Road"],
    transport: ["Metro: Karol Bagh (Blue Line)","DTC Buses","Autos"],
    scamTypes: ["Fake Electronics","Duplicate Products","Overcharging Auto"],
    safetyScore: 6, emoji: "🛍️"
  },

  "lajpat nagar": {
    name: "Lajpat Nagar", shortForm: "LN",
    aliases: ["lajpat nagar","ln","lajpat","l.n.","lajpat market","lajpatnagar","lnagar","lajpat nagar central","ln market"],
    zone: "South Delhi", areaType: "Market & Residential",
    nearestMetro: "Lajpat Nagar (Pink)", metroLine: "Pink",
    popularFor: "Clothes, Fabrics, Street Food, Central Market",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Generally safe; standard market precautions; beware overcharging autos",
    hotspots: ["Lajpat Nagar Central Market","Ring Road","South Ex adjacent"],
    transport: ["Metro: Lajpat Nagar (Pink Line)","Autos"],
    scamTypes: ["Overcharging Auto","Duplicate Fabrics"],
    safetyScore: 7, emoji: "👗"
  },

  "sarojini nagar": {
    name: "Sarojini Nagar", shortForm: "SN",
    aliases: ["sarojini nagar","sn","sarojini","sarojini market","sarojini mkt","sarojini nagar market","export market"],
    zone: "South Delhi", areaType: "Budget Fashion Market",
    nearestMetro: "INA / Bhikaji Cama Place", metroLine: "Yellow & Pink",
    popularFor: "Export Surplus Clothes, Budget Fashion, Street Food",
    bestTime: "Morning (Saturdays best)", riskLevel: "low",
    riskNote: "Safe; prices negotiable — vendors may quote 3x for tourists",
    hotspots: ["Sarojini Nagar Market","INA Market","Bhikaji Cama Place"],
    transport: ["Metro: INA (Yellow+Pink)","Autos"],
    scamTypes: ["Price Overquoting","Defective Export Rejects"],
    safetyScore: 7, emoji: "👘"
  },

  "janpath": {
    name: "Janpath Market", shortForm: "JP",
    aliases: ["janpath","jp","janpath market","janpath delhi","tibetan market janpath","janpath bazaar","jnpth"],
    zone: "Central Delhi", areaType: "Street Shopping Market",
    nearestMetro: "Rajiv Chowk (Blue + Yellow)", metroLine: "Blue & Yellow",
    popularFor: "Handicrafts, Clothes, Souvenirs, Tibetan Market",
    bestTime: "Morning & Afternoon", riskLevel: "moderate",
    riskNote: "Bargaining mandatory; vendors overcharge by 200–400% from tourists",
    hotspots: ["Janpath Street Market","Tibetan Market","Central Cottage Industries Emporium"],
    transport: ["Metro: Rajiv Chowk","Walk from CP (5 min)"],
    scamTypes: ["Price Overquoting","Fake Handicrafts","Overpriced Souvenirs"],
    safetyScore: 6, emoji: "🎨"
  },

  "dilli haat": {
    name: "Dilli Haat", shortForm: "DH",
    aliases: ["dilli haat","dh","dili haat","delhi haat","ina dilli haat","dilli haat ina","dhaat"],
    zone: "South Delhi", areaType: "Govt Craft & Cultural Market",
    nearestMetro: "INA (Yellow + Pink)", metroLine: "Yellow & Pink",
    popularFor: "Authentic Handicrafts, Regional Cuisine, Cultural Events",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Government-run; safest market — fixed prices, no bargaining needed",
    hotspots: ["Crafts Stalls","State Food Courts","Cultural Stage"],
    transport: ["Metro: INA (Yellow+Pink)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🏮"
  },

  "nehru place": {
    name: "Nehru Place", shortForm: "NP",
    aliases: ["nehru place","np","nehru plaza","nehru plz","n.p.","nehru plc","nehru place market","np market"],
    zone: "South Delhi", areaType: "IT & Electronics Hub",
    nearestMetro: "Nehru Place (Violet)", metroLine: "Violet",
    popularFor: "Computer Hardware, Software, IT Goods, Networking Equipment",
    bestTime: "Morning & Afternoon (Mon–Sat)", riskLevel: "high",
    riskNote: "Pirated software, fake products & overcharging very common; always get invoice",
    hotspots: ["Nehru Place Complex","Ansal Plaza","Outer Circle","Center Court"],
    transport: ["Metro: Nehru Place (Violet Line)","Autos"],
    scamTypes: ["Pirated Software","ATM Skimming","Fake Products","Invoice Fraud"],
    safetyScore: 4, emoji: "💻"
  },

  "south extension": {
    name: "South Extension", shortForm: "SE",
    aliases: ["south extension","se","south ex","s.e.","southex","south extension market","south ext","se market","south ex market","south ex 1","south ex 2","south ex part 1","south ex part 2"],
    zone: "South Delhi", areaType: "Upscale Shopping & Residential",
    nearestMetro: "South Extension (Pink)", metroLine: "Pink",
    popularFor: "Branded Shops, Cafes, Restaurants, Jewellery",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Generally safe, well-policed area",
    hotspots: ["South Ex Part I & II","Ring Road","Cafe Delhi Heights"],
    transport: ["Metro: South Extension (Pink)","Autos & Cabs"],
    scamTypes: [], safetyScore: 8, emoji: "🛒"
  },

  "greater kailash": {
    name: "Greater Kailash", shortForm: "GK",
    aliases: ["greater kailash","gk","gk1","gk2","g.k.","gk-1","gk-2","gk 1","gk 2","m block market","n block market","gk delhi"],
    zone: "South Delhi", areaType: "Upscale Residential & Shopping",
    nearestMetro: "Greater Kailash (Pink)", metroLine: "Pink",
    popularFor: "Shopping, Restaurants, Cafes, M-Block & N-Block Market",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe upscale area",
    hotspots: ["M-Block Market GK1","N-Block Market GK2","Amar Colony"],
    transport: ["Metro: Greater Kailash (Pink)","Autos & Cabs"],
    scamTypes: [], safetyScore: 8, emoji: "🏘️"
  },

  "khan market": {
    name: "Khan Market", shortForm: "KM",
    aliases: ["khan market","km","khan","khanmarket","khan mkt","khan market delhi"],
    zone: "Central South Delhi", areaType: "Upscale Shopping & Dining",
    nearestMetro: "Khan Market (Violet)", metroLine: "Violet",
    popularFor: "Bookshops, Cafes, Fine Dining, Boutiques, Expat Community",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safest shopping market in Delhi",
    hotspots: ["Bahri Sons Bookshop","The Big Chill Cafe","Cafe Lota","Full Circle Bookstore"],
    transport: ["Metro: Khan Market (Violet)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "📚"
  },

  "sadar bazaar": {
    name: "Sadar Bazaar", shortForm: "SB",
    aliases: ["sadar bazaar","sb","sadar bazar","sadar","sadar market","sadar b","sadar delhi"],
    zone: "Central Delhi", areaType: "Wholesale Market",
    nearestMetro: "Sadar Bazaar (Green)", metroLine: "Green",
    popularFor: "Wholesale Goods, Toys, Household Items, Stationary",
    bestTime: "Morning & Afternoon", riskLevel: "moderate",
    riskNote: "Crowded wholesale area; fake goods & pickpockets in busy lanes",
    hotspots: ["Sadar Bazaar Main Market","Nai Sarak","Katra Neel"],
    transport: ["Metro: Sadar Bazaar (Green)","Cycle Rickshaws"],
    scamTypes: ["Fake Products","Pickpocketing","Short Measuring"],
    safetyScore: 5, emoji: "🏪"
  },

  "kirti nagar": {
    name: "Kirti Nagar", shortForm: "KN",
    aliases: ["kirti nagar","kn","kirti","furniture market","kirti nagar furniture","west delhi furniture"],
    zone: "West Delhi", areaType: "Furniture & Home Decor Market",
    nearestMetro: "Kirti Nagar (Green)", metroLine: "Green",
    popularFor: "Furniture, Home Decor, Wholesale Market",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe; verify furniture quality and get warranty documents",
    hotspots: ["Kirti Nagar Furniture Market","Lawrence Road Industrial Area"],
    transport: ["Metro: Kirti Nagar (Green)","Autos"],
    scamTypes: ["Quality Fraud (Furniture)"], safetyScore: 7, emoji: "🪑"
  },

  "kamla nagar": {
    name: "Kamla Nagar", shortForm: "KLN",
    aliases: ["kamla nagar","kln","kamla","kamla market","north campus market","du market","kamlanagarmarket"],
    zone: "North Delhi", areaType: "Student Market & Commercial",
    nearestMetro: "Vishwavidyalaya (Yellow)", metroLine: "Yellow",
    popularFor: "Student Shopping, Budget Clothes, Street Food, DU North Campus",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe student-friendly area",
    hotspots: ["Kamla Nagar Market","DU North Campus Gate"],
    transport: ["Metro: Vishwavidyalaya (Yellow)","Cycle Rickshaws"],
    scamTypes: [], safetyScore: 8, emoji: "🎓"
  },

  // ── MALLS & ENTERTAINMENT ─────────────────────────────────────────────────
  "saket": {
    name: "Saket", shortForm: "SK",
    aliases: ["saket","sk","saket mall","select citywalk","saket delhi","dlf saket","select city walk","skkt"],
    zone: "South Delhi", areaType: "Mall & Residential",
    nearestMetro: "Saket (Yellow)", metroLine: "Yellow",
    popularFor: "Select Citywalk, DLF Place, PVR, Restaurants, Garden of Five Senses",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Very safe mall complex",
    hotspots: ["Select Citywalk","DLF Place Saket","PVR Saket","Garden of Five Senses"],
    transport: ["Metro: Saket (Yellow Line)","Cabs & Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🛍️"
  },

  "vasant kunj": {
    name: "Vasant Kunj", shortForm: "VK",
    aliases: ["vasant kunj","vk","vasant kunj mall","vasantkunj","ambience mall","dlf promenade","vk delhi"],
    zone: "South-West Delhi", areaType: "Upscale Residential & Mall",
    nearestMetro: "Vasant Vihar (Pink)", metroLine: "Pink",
    popularFor: "Ambience Mall, DLF Promenade, Upscale Dining",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Very safe upscale area; taxi surge can be high",
    hotspots: ["Ambience Mall","DLF Promenade","Vasant Kunj Market"],
    transport: ["Metro: Vasant Vihar (Pink)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "🏬"
  },

  "rohini": {
    name: "Rohini", shortForm: "RHN",
    aliases: ["rohini","rhn","rohini east","rohini west","rohini sec","rohini sector","rohini delhi"],
    zone: "North-West Delhi", areaType: "Planned Residential Sub-City",
    nearestMetro: "Rohini East / Rohini West (Red)", metroLine: "Red",
    popularFor: "Residential, City Square Mall, Sector 18 Market",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe planned area",
    hotspots: ["City Square Mall","Rohini Sector 18 Market","Rithala area"],
    transport: ["Metro: Rohini East/West (Red Line)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏙️"
  },

  "dwarka": {
    name: "Dwarka", shortForm: "DW",
    aliases: ["dwarka","dw","dwarka sector 21","dwarka 21","dwrk","dwarka sec 21","dwarka delhi","dwarka sec 10"],
    zone: "South-West Delhi", areaType: "Sub-City & Residential",
    nearestMetro: "Dwarka Sector 21 (Blue)", metroLine: "Blue",
    popularFor: "Residential, Sector 21 Hub, Sai Baba Temple, Stadium",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe well-planned area",
    hotspots: ["Sector 10 Market","Dwarka Sec 21 Hub","Sai Baba Temple Dwarka","Yashobhoomi"],
    transport: ["Metro: Dwarka Sec 21 (Blue Line)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🌆"
  },

  "janakpuri": {
    name: "Janakpuri", shortForm: "JNP",
    aliases: ["janakpuri","jnp","janakpuri west","janakpuri east","jpuri","jnkpri","jankpuri"],
    zone: "West Delhi", areaType: "Residential & Commercial",
    nearestMetro: "Janakpuri West (Blue)", metroLine: "Blue",
    popularFor: "District Centre, Shopping, Residential",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["District Centre Janakpuri","Janakpuri West Market"],
    transport: ["Metro: Janakpuri West (Blue Line)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏠"
  },

  // ── NIGHTLIFE & CAFES ────────────────────────────────────────────────────
  "hauz khas": {
    name: "Hauz Khas", shortForm: "HK",
    aliases: ["hauz khas","hk","haus khas","hauz khas village","hkv","h.k.","hauz khas fort","hk village","hauz khas delhi"],
    zone: "South Delhi", areaType: "Upscale Village & Nightlife",
    nearestMetro: "Hauz Khas (Yellow)", metroLine: "Yellow",
    popularFor: "Cafes, Art, Nightlife, Deer Park, Heritage Fort & Lake",
    bestTime: "Evening & Night", riskLevel: "low",
    riskNote: "Safe; be alert during late nights in isolated lanes; overpriced drinks in clubs",
    hotspots: ["Hauz Khas Village","Deer Park","HK Fort & Lake","IIT Delhi Gate","Aurobindo Market"],
    transport: ["Metro: Hauz Khas (Yellow Line)","Cabs"],
    scamTypes: ["Overpriced Drinks","Cover Charge Scam"], safetyScore: 7, emoji: "☕"
  },

  "lodi art district": {
    name: "Lodhi Art District", shortForm: "LAD",
    aliases: ["lodhi art","lad","lodhi art district","street art delhi","lodhi colony art","street art colony"],
    zone: "Central Delhi", areaType: "Street Art & Creative Hub",
    nearestMetro: "Jor Bagh (Yellow)", metroLine: "Yellow",
    popularFor: "India's First Street Art District, Photography, Cafes",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Very safe creative neighbourhood",
    hotspots: ["Lodhi Art Murals","The Piano Man","Big Fat Sandwich","Social Offline"],
    transport: ["Metro: Jor Bagh (Yellow)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "🎨"
  },

  "majnu ka tila": {
    name: "Majnu Ka Tila", shortForm: "MKT",
    aliases: ["majnu ka tila","mkt","tibetan colony","majnu ka tilla","tibetan camp","mkt delhi","majnutila"],
    zone: "North Delhi", areaType: "Tibetan Colony & Cultural",
    nearestMetro: "Vidhan Sabha (Red)", metroLine: "Red",
    popularFor: "Tibetan Food, Budget Stays, Tibetan Culture, Momos",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe; some budget guesthouses sub-standard — verify before booking",
    hotspots: ["Tibetan Market","Buddhist Monastery","Momo Stalls","Cafes"],
    transport: ["Metro: Vidhan Sabha (Red Line)","Autos"],
    scamTypes: ["Substandard Budget Hotel"], safetyScore: 8, emoji: "🥟"
  },

  "mandi house": {
    name: "Mandi House", shortForm: "MH",
    aliases: ["mandi house","mh","mandih house","copernicus marg","mandi house area","theatre area delhi"],
    zone: "Central Delhi", areaType: "Cultural & Media Hub",
    nearestMetro: "Mandi House (Blue + Violet)", metroLine: "Blue & Violet",
    popularFor: "Theatres, Doordarshan HQ, Art Galleries, Cultural Events",
    bestTime: "Evening", riskLevel: "low",
    riskNote: "Safe cultural area",
    hotspots: ["Kamani Auditorium","Shri Ram Centre","NSD (National School of Drama)","Lalit Kala Akademi"],
    transport: ["Metro: Mandi House (Blue+Violet)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🎭"
  },

  // ── TRANSIT HUBS ─────────────────────────────────────────────────────────
  "airport": {
    name: "IGI Airport", shortForm: "IGI",
    aliases: ["airport","igi","igi airport","indira gandhi airport","t1","t2","t3","terminal 1","terminal 2","terminal 3","delhi airport","igi t3","t3 airport","t1 airport","delhi igi","terminal 3 delhi","terminal1","terminal2","terminal3"],
    zone: "South-West Delhi", areaType: "International Airport",
    nearestMetro: "IGI Airport (Airport Express — Orange)", metroLine: "Orange (Airport Express)",
    popularFor: "Air Travel, Transit, Aerocity Hotels",
    bestTime: "Anytime", riskLevel: "low",
    riskNote: "Fully secured; ONLY use prepaid counter or Ola/Uber — never roadside touts (they overcharge 5x)",
    hotspots: ["Terminal 3 (International+Domestic)","Terminal 1 (IndiGo/SpiceJet)","Aerocity","Delhi Duty Free"],
    transport: ["Airport Express Metro ₹100 to CP","Prepaid Taxi Counter","Ola/Uber"],
    scamTypes: ["Fake Prepaid Taxi","Baggage Carrier Overcharging","SIM Card Scam"],
    safetyScore: 8, emoji: "✈️"
  },

  "new delhi station": {
    name: "New Delhi Railway Station", shortForm: "NDLS",
    aliases: ["new delhi","ndls","new delhi station","new delhi railway station","delhi railway","ndls station","new delhi rly","new delhi train station","pnbe station side","paharganj station"],
    zone: "Central Delhi", areaType: "Railway & Transit Hub",
    nearestMetro: "New Delhi (Yellow + Airport Express)", metroLine: "Yellow & Orange",
    popularFor: "Major Railway Terminal, Platform 1–18",
    bestTime: "Morning (avoid peak)", riskLevel: "high",
    riskNote: "Major scam hotspot — touts, fake booking agents, unofficial porters, 'station closed' trick",
    hotspots: ["Paharganj Side Exit","Ajmeri Gate Side","Prepaid Taxi Counter","Retiring Room"],
    transport: ["Metro: New Delhi (Yellow+Airport Express)","DTC Buses","Prepaid Taxi"],
    scamTypes: ["Fake Booking Agent","Unofficial Porter","Station Closed Trick","Wrong Platform Scam"],
    safetyScore: 3, emoji: "🚉"
  },

  "hazrat nizamuddin": {
    name: "Hazrat Nizamuddin Station", shortForm: "NZM",
    aliases: ["nizamuddin","nzm","hazrat nizamuddin","nizamuddin dargah","nizamuddin station","nizam","hazrat nzm","nzm station"],
    zone: "South-Central Delhi", areaType: "Railway Station & Heritage Dargah",
    nearestMetro: "Hazrat Nizamuddin (Pink)", metroLine: "Pink",
    popularFor: "Railway Station, Dargah, Qawwali Nights",
    bestTime: "Evening (Qawwali on Thursday nights)", riskLevel: "moderate",
    riskNote: "Crowded dargah area — pickpockets & overpriced offerings near shrine",
    hotspots: ["Hazrat Nizamuddin Dargah","Nizamuddin Basti","Khan Market nearby"],
    transport: ["Metro: Hazrat Nizamuddin (Pink)","Autos"],
    scamTypes: ["Pickpocketing","Overpriced Offerings","Unofficial Porter"],
    safetyScore: 6, emoji: "🕌"
  },

  "kashmere gate": {
    name: "Kashmere Gate ISBT", shortForm: "KG",
    aliases: ["kashmere gate","kg","kashmir gate","isbt kashmere gate","kashmiri gate","kashmere gate isbt","kashmere gate bus stand","isbt"],
    zone: "North Delhi", areaType: "Transit Hub & Heritage",
    nearestMetro: "Kashmere Gate (Yellow + Red + Violet)", metroLine: "Yellow, Red & Violet",
    popularFor: "ISBT Bus Terminal, Historical Gate, Electronics Market",
    bestTime: "Morning", riskLevel: "high",
    riskNote: "Busy transit — pickpockets, touts & overcharging common near ISBT",
    hotspots: ["Kashmere Gate ISBT","Kashmere Gate Monument","Electronics Market"],
    transport: ["Metro: Kashmere Gate (3 Lines)","ISBT Interstate Buses"],
    scamTypes: ["Pickpocketing","Fake Bus Ticket","Overcharging Auto"],
    safetyScore: 4, emoji: "🚌"
  },

  "anand vihar": {
    name: "Anand Vihar", shortForm: "AV",
    aliases: ["anand vihar","av","anandvihar","anand vihar isbt","anand vihar railway","anand vihar terminal"],
    zone: "East Delhi", areaType: "Transit Hub & Residential",
    nearestMetro: "Anand Vihar ISBT (Blue + Pink)", metroLine: "Blue & Pink",
    popularFor: "ISBT, Railway Terminal, Gateway to East Delhi & UP",
    bestTime: "Morning", riskLevel: "high",
    riskNote: "Busy transit — pickpockets very active near ISBT; fake agents sell fake tickets",
    hotspots: ["Anand Vihar ISBT","Anand Vihar Railway Terminal"],
    transport: ["Metro: Anand Vihar ISBT (Blue+Pink)","ISBT Buses"],
    scamTypes: ["Pickpocketing","Fake Bus Ticket","Unofficial Porter"],
    safetyScore: 4, emoji: "🚌"
  },

  // ── MEDICAL HUBS ────────────────────────────────────────────────────────
  "aiims": {
    name: "AIIMS", shortForm: "AIIMS",
    aliases: ["aiims","aiims delhi","all india institute","aiims hospital","aiims metro","all india medical","aiim"],
    zone: "South Delhi", areaType: "Premier Medical Hub",
    nearestMetro: "AIIMS (Yellow)", metroLine: "Yellow",
    popularFor: "All India Institute of Medical Sciences — India's Top Hospital",
    bestTime: "Morning (OPD opens 8 AM)", riskLevel: "moderate",
    riskNote: "Hospital touts outside overcharge for accommodation, diagnostics & fake doctors",
    hotspots: ["AIIMS OPD Block","Emergency Department","Safdarjung Enclave nearby"],
    transport: ["Metro: AIIMS (Yellow Line)","Autos","Cabs"],
    scamTypes: ["Hospital Tout","Fake Doctor Referral","Overpriced Diagnostics"],
    safetyScore: 6, emoji: "🏥"
  },

  "safdarjung hospital": {
    name: "Safdarjung Hospital", shortForm: "SFJ",
    aliases: ["safdarjung","sfj","safdar jung","safdarjung hospital","safdarjung enclave","safdar hospital"],
    zone: "South Delhi", areaType: "Government Medical",
    nearestMetro: "AIIMS (Yellow)", metroLine: "Yellow",
    popularFor: "Major Government Hospital, Safdarjung Tomb",
    bestTime: "Morning", riskLevel: "low",
    riskNote: "Generally safe; hospital touts outside",
    hotspots: ["Safdarjung Hospital","Safdarjung Tomb","Safdarjung Enclave"],
    transport: ["Metro: AIIMS (Yellow)","Autos"],
    scamTypes: ["Hospital Tout"], safetyScore: 7, emoji: "🏥"
  },

  "apollo hospital": {
    name: "Apollo Hospital", shortForm: "APL",
    aliases: ["apollo hospital","apl","apollo delhi","apollo indraprastha","indraprastha apollo","apollo sarita vihar"],
    zone: "South Delhi", areaType: "Private Hospital",
    nearestMetro: "Jasola Vihar Shaheen Bagh (Pink)", metroLine: "Pink",
    popularFor: "Apollo Hospital — Premier Private Hospital",
    bestTime: "Anytime", riskLevel: "low",
    riskNote: "Safe hospital; beware of medical billing fraud",
    hotspots: ["Apollo Hospital Main","Sarita Vihar"],
    transport: ["Metro: Jasola Vihar (Pink)","Cabs"],
    scamTypes: ["Medical Billing Fraud"], safetyScore: 8, emoji: "🏥"
  },

  // ── GOVERNMENT & INSTITUTIONAL ───────────────────────────────────────────
  "ito": {
    name: "ITO", shortForm: "ITO",
    aliases: ["ito","income tax office","ito delhi","ito metro","i.t.o."],
    zone: "Central Delhi", areaType: "Government & Media Hub",
    nearestMetro: "ITO (Violet)", metroLine: "Violet",
    popularFor: "Government Offices, Press Club, Delhi HC nearby",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe government area",
    hotspots: ["Income Tax Office","Delhi HC","Bahadur Shah Zafar Marg","PTI Building"],
    transport: ["Metro: ITO (Violet Line)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏛️"
  },

  "pragati maidan": {
    name: "Pragati Maidan / Bharat Mandapam", shortForm: "PM",
    aliases: ["pragati maidan","pm","bharat mandapam","iitf","trade fair","expo center","bharat mandapam delhi","yashobhoomi"],
    zone: "Central East Delhi", areaType: "Exhibition & Convention Center",
    nearestMetro: "Pragati Maidan (Blue)", metroLine: "Blue",
    popularFor: "IITF Trade Fair, G20 Venue, Bharat Mandapam, Exhibitions",
    bestTime: "Morning & Afternoon (event days)", riskLevel: "low",
    riskNote: "Secure during events; buy official tickets only from authorized counters",
    hotspots: ["Bharat Mandapam","Yashobhoomi (Dwarka)","Purana Qila adjacent"],
    transport: ["Metro: Pragati Maidan (Blue)","Autos"],
    scamTypes: ["Fake Event Tickets"], safetyScore: 8, emoji: "🏟️"
  },

  "civil lines": {
    name: "Civil Lines", shortForm: "CL",
    aliases: ["civil lines","cl","civl lines","civillines","civil lines delhi"],
    zone: "North Delhi", areaType: "Heritage Residential & Govt",
    nearestMetro: "Civil Lines (Yellow)", metroLine: "Yellow",
    popularFor: "Colonial Bungalows, Government Offices, Qudsia Garden",
    bestTime: "Morning", riskLevel: "low",
    riskNote: "Very safe heritage residential area",
    hotspots: ["Qudsia Garden","Delhi HC","Metcalfe House","Coronation Park"],
    transport: ["Metro: Civil Lines (Yellow)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🌳"
  },

  // ── PARKS & GARDENS ──────────────────────────────────────────────────────
  "lodi garden": {
    name: "Lodi Garden", shortForm: "LG",
    aliases: ["lodi garden","lg","lodhi garden","lodi colony","lodhi colony","lodi","lodhi","lodhi gardens"],
    zone: "Central South Delhi", areaType: "Heritage Garden & Tombs",
    nearestMetro: "Jor Bagh (Yellow)", metroLine: "Yellow",
    popularFor: "Heritage Tombs, Morning Walk, Photography, Joggers",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Very safe heritage area",
    hotspots: ["Lodi Garden","Sheesh Gumbad","Bara Gumbad","IIC (India International Centre)"],
    transport: ["Metro: Jor Bagh (Yellow)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "🌿"
  },

  "delhi zoo": {
    name: "Delhi Zoo", shortForm: "ZOO",
    aliases: ["zoo","delhi zoo","national zoological park","delhizoo","zoo delhi","national zoo"],
    zone: "Central Delhi", areaType: "Zoo & Nature",
    nearestMetro: "Pragati Maidan (Blue)", metroLine: "Blue",
    popularFor: "National Zoological Park, Family Outing",
    bestTime: "Morning (closed Friday)", riskLevel: "low",
    riskNote: "Safe; buy tickets only from official counter",
    hotspots: ["National Zoological Park","Purana Qila (adjacent)","Sher Mandal"],
    transport: ["Metro: Pragati Maidan (Blue)","Autos"],
    scamTypes: ["Fake Ticket Seller"], safetyScore: 9, emoji: "🦁"
  },

  // ── UNIVERSITIES ─────────────────────────────────────────────────────────
  "north campus du": {
    name: "North Campus (DU)", shortForm: "DU",
    aliases: ["north campus","du north campus","north campus du","delhi university","du","delhi uni","north campus delhi","vishwavidyalaya metro"],
    zone: "North Delhi", areaType: "University & Student Hub",
    nearestMetro: "Vishwavidyalaya (Yellow)", metroLine: "Yellow",
    popularFor: "Delhi University North Campus, Student Life, Hudson Lane",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe student area; beware of fake course/college agents",
    hotspots: ["Hudson Lane","Kamla Nagar","North Campus Colleges","Miranda House","St. Stephen's"],
    transport: ["Metro: Vishwavidyalaya (Yellow)","Cycle Rickshaws","Autos"],
    scamTypes: ["Fake College Agent"], safetyScore: 8, emoji: "🎓"
  },

  "jnu": {
    name: "JNU Campus", shortForm: "JNU",
    aliases: ["jnu","jawaharlal nehru university","jnu campus","jnuit","jnu delhi"],
    zone: "South-West Delhi", areaType: "University Campus",
    nearestMetro: "Vasant Vihar (Pink)", metroLine: "Pink",
    popularFor: "Jawaharlal Nehru University, Canteen Culture, Debates",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe large green campus",
    hotspots: ["JNU Library","Ganga Dhaba","Sabarmati Dhaba","Tapti Hostel Area"],
    transport: ["Metro: Vasant Vihar (Pink)","Autos","DTC Bus"],
    scamTypes: [], safetyScore: 9, emoji: "🌿"
  },

  "iit delhi": {
    name: "IIT Delhi", shortForm: "IITD",
    aliases: ["iit delhi","iit","iit d","iitd","iit delhi campus"],
    zone: "South Delhi", areaType: "Premier Engineering University",
    nearestMetro: "Hauz Khas (Yellow)", metroLine: "Yellow",
    popularFor: "IIT Delhi — India's Top Engineering College",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe campus",
    hotspots: ["IIT Main Gate","Sports Complex","Lecture Hall Complex"],
    transport: ["Metro: Hauz Khas (Yellow)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "⚙️"
  },

  // ── NCR AREAS ────────────────────────────────────────────────────────────
  "gurgaon": {
    name: "Gurgaon (Gurugram)", shortForm: "GGN",
    aliases: ["gurgaon","ggn","gurugram","cyber city","cyber hub","mg road gurgaon","dlf cyber city","dlf","gug","gur","gurugram haryana","millennium city"],
    zone: "NCR — Haryana", areaType: "NCR Tech & Commercial Hub",
    nearestMetro: "HUDA City Centre (Yellow)", metroLine: "Yellow",
    popularFor: "Cyber Hub, Ambience Mall, IT Offices, Nightlife, Golf Course Road",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe; Ola/Uber surge very high during peak hours; Rapid Metro inside city",
    hotspots: ["Cyber Hub","Ambience Mall Gurgaon","Kingdom of Dreams","Golf Course Road","MG Road"],
    transport: ["Metro: HUDA City Centre (Yellow)","Rapid Metro Gurgaon","Cabs"],
    scamTypes: ["Surge Pricing Overcharge"], safetyScore: 8, emoji: "🏙️"
  },

  "noida sector 18": {
    name: "Noida Sector 18", shortForm: "S18",
    aliases: ["noida sector 18","sec 18","s18","sector 18","noida 18","noida sec 18","atta market noida","sec 18 noida"],
    zone: "NCR — Uttar Pradesh", areaType: "Commercial & Shopping",
    nearestMetro: "Noida Sector 18 (Blue)", metroLine: "Blue",
    popularFor: "Atta Market, Shopping, Restaurants, Malls",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe commercial area",
    hotspots: ["Atta Market","Sector 18 Market","Logix Mall"],
    transport: ["Metro: Noida Sector 18 (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🛒"
  },

  "noida city centre": {
    name: "Noida City Centre", shortForm: "NCC",
    aliases: ["noida city centre","ncc","city centre noida","noida cc","noida city center"],
    zone: "NCR — Uttar Pradesh", areaType: "Commercial & Residential",
    nearestMetro: "Noida City Centre (Blue)", metroLine: "Blue",
    popularFor: "DLF Mall of India, Offices, Restaurants",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe commercial area",
    hotspots: ["DLF Mall of India","Logix City Centre","Worlds of Wonder"],
    transport: ["Metro: Noida City Centre (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🛍️"
  },

  "faridabad": {
    name: "Faridabad", shortForm: "FBD",
    aliases: ["faridabad","fbd","fareedabad","faridabad haryana","old faridabad"],
    zone: "NCR — Haryana", areaType: "Industrial & Residential",
    nearestMetro: "Badarpur Border / YMCA Chowk", metroLine: "Violet",
    popularFor: "Industrial Area, Crown Plaza, Surajkund Craft Mela",
    bestTime: "Morning & Afternoon", riskLevel: "moderate",
    riskNote: "Some poorly lit industrial areas at night; standard precautions",
    hotspots: ["Crown Interiorz Mall","Surajkund (craft mela)","Sector 14 Market"],
    transport: ["Metro: Violet Line to Faridabad","HR DTC Buses"],
    scamTypes: ["Overcharging Auto"], safetyScore: 6, emoji: "🏭"
  },

  "vaishali": {
    name: "Vaishali", shortForm: "VSL",
    aliases: ["vaishali","vsl","vaishali ghaziabad","vaishali ghz","vaishali ncr","vaishali metro"],
    zone: "NCR — Uttar Pradesh", areaType: "Residential & Commercial",
    nearestMetro: "Vaishali (Blue)", metroLine: "Blue",
    popularFor: "GIP Mall, Residential NCR, Kaushambi",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe NCR area",
    hotspots: ["GIP Mall (Great India Place)","Vaishali Market","Kaushambi"],
    transport: ["Metro: Vaishali (Blue terminus)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏘️"
  },

  // ── RESIDENTIAL AREAS ────────────────────────────────────────────────────
  "vasant vihar": {
    name: "Vasant Vihar", shortForm: "VV",
    aliases: ["vasant vihar","vv","vasantvihar","vasant vihar delhi"],
    zone: "South-West Delhi", areaType: "Upscale Residential & Diplomatic",
    nearestMetro: "Vasant Vihar (Pink)", metroLine: "Pink",
    popularFor: "Embassies, Upscale Restaurants, Market",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Very safe diplomatic area",
    hotspots: ["Vasant Vihar Market","US Embassy area","JNU Gate"],
    transport: ["Metro: Vasant Vihar (Pink)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "🏡"
  },

  "rajouri garden": {
    name: "Rajouri Garden", shortForm: "RG",
    aliases: ["rajouri garden","rg","rajori garden","rajouri","rajourigarden"],
    zone: "West Delhi", areaType: "Shopping & Residential",
    nearestMetro: "Rajouri Garden (Blue + Pink)", metroLine: "Blue & Pink",
    popularFor: "Shopping, Restaurants, TDI Mall, Nightlife",
    bestTime: "Afternoon & Evening", riskLevel: "low",
    riskNote: "Safe area",
    hotspots: ["Rajouri Garden Main Market","TDI Mall","Pacific Mall Tagore Garden"],
    transport: ["Metro: Rajouri Garden (Blue+Pink)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🛍️"
  },

  "pitampura": {
    name: "Pitampura", shortForm: "PTP",
    aliases: ["pitampura","ptp","pitampur","pitampura delhi","tv tower","doordarshan tower"],
    zone: "North-West Delhi", areaType: "Residential & Media Hub",
    nearestMetro: "Pitampura (Red)", metroLine: "Red",
    popularFor: "Doordarshan Tower, TV Studios, Netaji Subhash Place",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["Pitampura TV Tower","Netaji Subhash Place Shopping Complex"],
    transport: ["Metro: Pitampura (Red Line)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "📺"
  },

  "shalimar bagh": {
    name: "Shalimar Bagh", shortForm: "SHB",
    aliases: ["shalimar bagh","shb","shalimar","shalimarbagh"],
    zone: "North-West Delhi", areaType: "Residential",
    nearestMetro: "Shalimar Bagh (Pink)", metroLine: "Pink",
    popularFor: "Residential Colony, Local Markets",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["Shalimar Bagh Market","Ring Road"],
    transport: ["Metro: Shalimar Bagh (Pink)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏠"
  },

  "model town": {
    name: "Model Town", shortForm: "MT",
    aliases: ["model town","mt","model town delhi","modeltown"],
    zone: "North Delhi", areaType: "Residential & Market",
    nearestMetro: "Model Town (Yellow)", metroLine: "Yellow",
    popularFor: "Residential Colony, Local Market, Garden",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe area",
    hotspots: ["Model Town Market","Model Town Park"],
    transport: ["Metro: Model Town (Yellow)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🌳"
  },

  "mayur vihar": {
    name: "Mayur Vihar", shortForm: "MV",
    aliases: ["mayur vihar","mv","mayur vihar phase 1","mayur vihar 1","mvp1","mayur vihar ph 1","mayur vihar delhi"],
    zone: "East Delhi", areaType: "Residential",
    nearestMetro: "Mayur Vihar Phase-1 (Blue)", metroLine: "Blue",
    popularFor: "Residential, Local Markets, Akshardham proximity",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["Mayur Vihar Market","Akshardham nearby","Vinod Nagar Market"],
    transport: ["Metro: Mayur Vihar Ph-1 (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏘️"
  },

  "vikaspuri": {
    name: "Vikaspuri", shortForm: "VKP",
    aliases: ["vikaspuri","vkp","vikas puri","vikashpuri"],
    zone: "West Delhi", areaType: "Residential",
    nearestMetro: "Vikaspuri (Blue)", metroLine: "Blue",
    popularFor: "Residential Area, Local Markets",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["Vikaspuri Market","Subhash Nagar nearby"],
    transport: ["Metro: Vikaspuri (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏠"
  },

  "aerocity": {
    name: "Aerocity", shortForm: "ARC",
    aliases: ["aerocity","arc","aero city","hospitality district","aerocity delhi","delhi aerocity","ibis aerocity"],
    zone: "South-West Delhi", areaType: "Airport Business District",
    nearestMetro: "Aerocity (Airport Express)", metroLine: "Orange (Airport Express)",
    popularFor: "5-Star Hotels, Business Hub, Airport Transit Hotels",
    bestTime: "Anytime", riskLevel: "low",
    riskNote: "Well-secured; only use official cabs; inflated hotel prices",
    hotspots: ["JW Marriott Aerocity","Pullman Hotel","Worldmark Aerocity","Accor Hotels"],
    transport: ["Airport Express Metro (same line as Airport)","Hotel Shuttles","Cab/Taxi"],
    scamTypes: ["Overpriced Unofficial Cab"], safetyScore: 9, emoji: "🏨"
  },

  "green park": {
    name: "Green Park", shortForm: "GP",
    aliases: ["green park","gp","greenpark","green park delhi","aurobindo market"],
    zone: "South Delhi", areaType: "Residential & Market",
    nearestMetro: "Green Park (Yellow)", metroLine: "Yellow",
    popularFor: "Aurobindo Market, Hauz Khas adjacency, Cafes",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe area",
    hotspots: ["Aurobindo Market","Green Park Extension","Panchsheel Park"],
    transport: ["Metro: Green Park (Yellow)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🌿"
  },

  "okhla": {
    name: "Okhla", shortForm: "OKL",
    aliases: ["okhla","okl","okhla industrial","okhla delhi","batla house","jamia area"],
    zone: "South-East Delhi", areaType: "Industrial & Educational",
    nearestMetro: "Okhla (Violet)", metroLine: "Violet",
    popularFor: "Industrial Area, Jamia Millia Islamia, Batla House",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe during business hours; standard precautions at night",
    hotspots: ["Okhla Industrial Estate","Jamia Millia Islamia","Batla House"],
    transport: ["Metro: Okhla (Violet)","DTC Buses"],
    scamTypes: [], safetyScore: 7, emoji: "🏭"
  },

  "ina market": {
    name: "INA Market", shortForm: "INA",
    aliases: ["ina market","ina","ina colony","ina delhi","ina metro","ina fresh market"],
    zone: "South Delhi", areaType: "Fresh Produce & Food Market",
    nearestMetro: "INA (Yellow + Pink)", metroLine: "Yellow & Pink",
    popularFor: "Fresh Produce, Meat, Imported Grocery, Dilli Haat adjacent",
    bestTime: "Morning", riskLevel: "low",
    riskNote: "Safe food market",
    hotspots: ["INA Fresh Market","Dilli Haat (right beside)","South Extension nearby"],
    transport: ["Metro: INA (Yellow+Pink)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🥦"
  },

  "cr park": {
    name: "Chittaranjan Park", shortForm: "CR Park",
    aliases: ["cr park","chittaranjan park","crp","c r park","c.r. park","cr park delhi","bengali colony"],
    zone: "South Delhi", areaType: "Residential & Cultural",
    nearestMetro: "Kalkaji Mandir (Violet)", metroLine: "Violet",
    popularFor: "Bengali Community Hub, Fish Market, Durga Puja, Bengali Sweets",
    bestTime: "Evening (Durga Puja season: Oct)", riskLevel: "low",
    riskNote: "Safe well-maintained colony",
    hotspots: ["CR Park Fish Market","Kali Mandir CR Park","Bengali Sweet Shops"],
    transport: ["Metro: Kalkaji Mandir (Violet)","Autos"],
    scamTypes: [], safetyScore: 9, emoji: "🐟"
  },

  "safdarjung enclave": {
    name: "Safdarjung Enclave", shortForm: "SJE",
    aliases: ["safdarjung enclave","sje","safdarjung colony","sfd enclave"],
    zone: "South-Central Delhi", areaType: "Upscale Residential",
    nearestMetro: "AIIMS (Yellow)", metroLine: "Yellow",
    popularFor: "Posh Residential, Restaurants, Safdarjung Airport (small aircraft)",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Very safe upscale area",
    hotspots: ["Safdarjung Enclave Market","Safdarjung Airport"],
    transport: ["Metro: AIIMS (Yellow)","Cabs"],
    scamTypes: [], safetyScore: 9, emoji: "🏡"
  },

  "tilak nagar": {
    name: "Tilak Nagar", shortForm: "TLK",
    aliases: ["tilak nagar","tlk","tilak","tilak nagar west","west delhi market","tlknagar"],
    zone: "West Delhi", areaType: "Residential & Commercial",
    nearestMetro: "Tilak Nagar (Blue)", metroLine: "Blue",
    popularFor: "West Delhi Residential, Local Market",
    bestTime: "Morning & Afternoon", riskLevel: "low",
    riskNote: "Safe area",
    hotspots: ["Tilak Nagar Market","Subhash Nagar Metro nearby"],
    transport: ["Metro: Tilak Nagar (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏠"
  },

  "uttam nagar": {
    name: "Uttam Nagar", shortForm: "UN",
    aliases: ["uttam nagar","un","uttam","uttam nagar east","uttam nagar west","unw","une"],
    zone: "West Delhi", areaType: "Residential & Commercial",
    nearestMetro: "Uttam Nagar West (Blue)", metroLine: "Blue",
    popularFor: "West Delhi Residential, Market",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe residential area",
    hotspots: ["Uttam Nagar Market"],
    transport: ["Metro: Uttam Nagar West/East (Blue)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🏘️"
  },

  "yamuna bank": {
    name: "Yamuna Bank", shortForm: "YB",
    aliases: ["yamuna bank","yb","yamunabank","yamuna interchange"],
    zone: "East Delhi", areaType: "Metro Interchange & Residential",
    nearestMetro: "Yamuna Bank (Blue + Pink)", metroLine: "Blue & Pink",
    popularFor: "Blue & Pink Line Interchange, Yamuna River View",
    bestTime: "Morning & Evening", riskLevel: "low",
    riskNote: "Safe metro interchange",
    hotspots: ["Yamuna Bank Metro Station","Yamuna River View","Akshardham nearby"],
    transport: ["Metro: Yamuna Bank (Blue+Pink)","Autos"],
    scamTypes: [], safetyScore: 8, emoji: "🌊"
  }
};

// Resolve any alias or short form to canonical location object
function resolveLocation(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();
  if (LOCATIONS[q]) return LOCATIONS[q];
  for (const loc of Object.values(LOCATIONS)) {
    if (loc.aliases && loc.aliases.includes(q)) return loc;
  }
  // Partial match fallback
  for (const [key, loc] of Object.entries(LOCATIONS)) {
    if (key.includes(q) || q.includes(key)) return loc;
    if (loc.aliases && loc.aliases.some(a => a.includes(q) || q.includes(a))) return loc;
    if (loc.name.toLowerCase().includes(q)) return loc;
  }
  return null;
}
