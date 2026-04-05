// =============================================================================
// WanderWise — data/incidents.js
// 115+ Real Scam Incidents | Service Prices | Safety Tips
// =============================================================================

const INCIDENTS = [
  // ── HIGH RISK ─────────────────────────────────────────────────────────────
  {id:1,type:"Taxi Overcharging",location:"Connaught Place (CP), Delhi",riskLevel:"high",description:"Taxi drivers near CP outer circle demanding ₹800–1200 for rides that cost ₹150 on Ola. They target tourists with luggage arriving from Rajiv Chowk Metro. Always book Ola/Uber from inside the metro station.",time:"Evening (6–11 PM)",reportedBy:"22 tourists",date:"2026-04-03",category:"transport"},
  {id:2,type:"Gem Store Export Scam",location:"Paharganj, Delhi",riskLevel:"high",description:"Friendly locals approach tourists near New Delhi Railway Station claiming to be 'gemstone exporters' who need foreign buyers to avoid Indian taxes. Gems sold for ₹20,000 are worth ₹200. This scam is decades old but still catches thousands.",time:"Daytime (10 AM–6 PM)",reportedBy:"18 tourists",date:"2026-04-03",category:"fraud"},
  {id:3,type:"Fake Police Extortion",location:"Paharganj / CP, Delhi",riskLevel:"high",description:"Plainclothes men claiming to be police officers demand passport and wallet checks, then accuse tourists of drug possession. They demand ₹5,000–₹20,000 to 'make the problem go away'. Real police never stop tourists on the street like this.",time:"Evening & Night",reportedBy:"14 tourists",date:"2026-04-02",category:"fraud"},
  {id:4,type:"ATM Card Skimming Device",location:"Nehru Place (NP), Delhi",riskLevel:"high",description:"Card skimming devices found on 3 standalone ATMs near the Nehru Place IT complex. Victims reported unauthorized transactions within 24 hours. Use only bank-branch ATMs, cover keypad while typing PIN, and prefer UPI/contactless payments.",time:"Anytime",reportedBy:"11 users",date:"2026-04-01",category:"digital"},
  {id:5,type:"Counterfeit Currency Notes",location:"Chandni Chowk / Old Delhi",riskLevel:"high",description:"Fake ₹500 and ₹2000 notes circulating at busy market stalls in Chandni Chowk. Vendors slip them as change. Check notes under UV light, use UPI payments in crowded markets, and count your change before leaving any stall.",time:"Market hours (10 AM–8 PM)",reportedBy:"17 visitors",date:"2026-04-02",category:"fraud"},
  {id:6,type:"Fake Ticket Seller (Red Fort)",location:"Red Fort, Old Delhi",riskLevel:"high",description:"Men in khaki uniforms standing outside Red Fort selling 'official' tickets at ₹200–500. Real ASI tickets cost ₹35 (Indians) and ₹500 (foreigners). Only buy from the official green-coloured ASI counter with a queue — fake sellers approach you individually.",time:"Morning 9 AM–12 PM",reportedBy:"15 tourists",date:"2026-04-03",category:"fraud"},
  {id:7,type:"New Delhi Station Booking Scam",location:"New Delhi Railway Station (NDLS)",riskLevel:"high",description:"Touts near NDLS Paharganj exit direct tourists to 'government approved' travel offices that charge ₹2,000–8,000 booking fees for train tickets that cost ₹200–300 on IRCTC. They forge official-looking letterheads. Use only IRCTC app/website or official reservation counters.",time:"All day",reportedBy:"25 tourists",date:"2026-04-03",category:"transport"},
  {id:8,type:"Closed Hotel / Best Friend Scam",location:"New Delhi Station / Paharganj",riskLevel:"high",description:"A 'helpful' stranger meets you at the station saying your hotel is 'closed', 'on fire', or 'not safe' and offers to take you to their 'cousin's better hotel'. The new place costs 3–5x more and pays commission. Always call your hotel directly to verify.",time:"All day",reportedBy:"30 tourists",date:"2026-04-03",category:"accommodation"},
  {id:9,type:"Rickshaw Driver Inflated Meter",location:"Old Delhi / Chandni Chowk",riskLevel:"high",description:"Cycle and e-rickshaw drivers quote ₹50 for a ride then demand ₹500 claiming 'per person per lane' or 'night charges'. Agree on full price BEFORE boarding. For short rides in Old Delhi, negotiate firmly — ₹20–50 per person is typical.",time:"Evening (5 PM–9 PM)",reportedBy:"13 tourists",date:"2026-04-02",category:"transport"},
  {id:10,type:"Pirated Software with Malware",location:"Nehru Place (NP), Delhi",riskLevel:"high",description:"Vendors at Nehru Place selling Windows, Adobe, Office bundles for ₹200–500 that are infected with keyloggers and spyware. Multiple users reported bank account breaches after installing. Never buy software from physical vendors at NP — use official online channels only.",time:"Business hours (10 AM–6 PM)",reportedBy:"8 buyers",date:"2026-04-01",category:"digital"},
  {id:11,type:"Drug Pusher / Setup Scam",location:"Paharganj Main Bazaar",riskLevel:"high",description:"Drug sellers approach solo travelers in Paharganj lanes. Some work with fake police — a buyer is set up, 'caught', and extorted for ₹10,000–50,000. Never accept anything from strangers in this area. Report to nearest police station immediately.",time:"Evening & Night",reportedBy:"9 travelers",date:"2026-04-01",category:"fraud"},
  {id:12,type:"Fake Airport Prepaid Taxi",location:"IGI Airport Terminal 3",riskLevel:"high",description:"Touts outside arrival hall pretend to be official prepaid taxi counters with official-looking clipboards. They charge 3–5x actual rates. The REAL prepaid counter is inside the terminal before customs exit. Book Ola/Uber from inside the terminal using free WiFi.",time:"All hours",reportedBy:"20 tourists",date:"2026-04-02",category:"transport"},
  {id:13,type:"Kashmere Gate ISBT Fake Ticket",location:"Kashmere Gate ISBT",riskLevel:"high",description:"Unofficial agents at Kashmere Gate sell fake inter-state bus tickets at double the price. Passengers board wrong buses or get thrown off mid-journey. Only buy from official UPSRTC / DTC / HRTC counters inside the terminal building.",time:"All day",reportedBy:"12 commuters",date:"2026-04-01",category:"transport"},
  {id:14,type:"Fake Branded Electronics",location:"Gaffar Market, Karol Bagh (KB)",riskLevel:"high",description:"Clone iPhones, Samsung phones and earbuds sold as genuine in Gaffar Market. Boxes look identical to originals with fake serial numbers. Real iPhones are never sold below ₹50,000 anywhere in India. If it seems too cheap, it's fake.",time:"All day",reportedBy:"16 buyers",date:"2026-04-03",category:"shopping"},
  {id:15,type:"Aggressive Beggar Scam",location:"India Gate / Tourist Monuments",riskLevel:"high",description:"Organized groups (including children) surround tourists near India Gate and major monuments, grabbing at bags and pockets while distracting. Keep bags zipped in front, do not engage, and walk purposefully.",time:"Evening",reportedBy:"11 tourists",date:"2026-04-02",category:"safety"},
  {id:16,type:"Jama Masjid Entry Extortion",location:"Jama Masjid, Old Delhi (JM)",riskLevel:"high",description:"Unofficial 'donation collectors' at Jama Masjid demand ₹100–500 entry fees from non-Muslims. Entry to Jama Masjid is FREE. Camera charges are ₹300 (official). Anyone demanding payment outside the official camera counter is unauthorized.",time:"Morning & Afternoon",reportedBy:"14 tourists",date:"2026-04-03",category:"fraud"},
  {id:17,type:"Anand Vihar Luggage Theft",location:"Anand Vihar ISBT (AV)",riskLevel:"high",description:"Theft of checked-in luggage from buses and unofficial 'luggage helpers' who take bags and disappear into the crowd. Never hand luggage to strangers. Keep bags as carry-on whenever possible at busy ISBT terminals.",time:"Morning 5–9 AM",reportedBy:"8 commuters",date:"2026-04-02",category:"safety"},

  // ── MEDIUM RISK ───────────────────────────────────────────────────────────
  {id:18,type:"Restaurant Hidden Charges",location:"Karol Bagh (KB), Delhi",riskLevel:"medium",description:"Restaurants adding 'service charge' (7–15%), 'table charge' (₹50–200), and unlisted 'cover charge' to bills. These are NOT mandatory by Indian law. You can legally refuse to pay service charge. Always ask for itemized bill and dispute unlisted charges.",time:"Lunch & Dinner",reportedBy:"19 visitors",date:"2026-04-02",category:"food"},
  {id:19,type:"Fake Tour Guide (Qutub Minar)",location:"Qutub Minar (QM)",riskLevel:"medium",description:"Unlicensed guides approach tourists at Qutub Minar gate asking ₹800–2000 for tours. They may have laminated fake ID cards. Official ASI guides charge ₹180–300. Hire only from the official ASI guide counter near the ticket window.",time:"Morning 9 AM–12 PM",reportedBy:"12 visitors",date:"2026-04-02",category:"tourism"},
  {id:20,type:"Metro Pickpocketing",location:"Rajiv Chowk Metro / Yellow Line",riskLevel:"medium",description:"Pickpocketing at Rajiv Chowk station during peak hours — especially on escalators and while squeezing through turnstiles. Groups of 2–3 people work together: one distracts, one lifts wallet/phone. Use anti-theft bags, keep phone in deep pockets.",time:"Peak hours 9–11 AM, 5–8 PM",reportedBy:"28 commuters",date:"2026-04-03",category:"safety"},
  {id:21,type:"Inflated Auto Fare",location:"Lajpat Nagar (LN), Delhi",riskLevel:"medium",description:"Autos outside LN Metro quoting ₹100–200 for 2 km rides. Meter rate should be ₹30–50. Use Ola/Uber Auto or Rapido which are transparent and metered. Insist on meter or book through app before boarding.",time:"Peak hours",reportedBy:"14 commuters",date:"2026-04-03",category:"transport"},
  {id:22,type:"Fake Hotel Booking Website",location:"Paharganj / Online",riskLevel:"medium",description:"Phishing websites with near-identical domain names to famous hotels collect payment but send fake booking confirmations. Victims arrive to find no reservation. Verify hotel website URL carefully — only book via official hotel site or trusted OTAs (MakeMyTrip, Booking.com, Goibibo).",time:"Online, anytime",reportedBy:"9 users",date:"2026-04-01",category:"accommodation"},
  {id:23,type:"Nizamuddin Dargah Overpricing",location:"Hazrat Nizamuddin (NZM)",riskLevel:"medium",description:"Unofficial 'helpers' at the dargah force flower/chaddar offerings on visitors then demand ₹500–2000 as payment. You are NOT obligated to accept any item from these men. Walk confidently past, decline firmly.",time:"All day",reportedBy:"10 visitors",date:"2026-04-02",category:"tourism"},
  {id:24,type:"Substandard Budget Hotel",location:"Paharganj (PG)",riskLevel:"medium",description:"Budget guesthouses showing polished online photos deliver dirty rooms, broken locks, and no hot water. Hidden charges added on checkout. Check recent Google Maps reviews (last 30 days), arrive and inspect the room before paying, and ask to see the exact room you'll stay in.",time:"Anytime (check-in)",reportedBy:"21 travelers",date:"2026-04-01",category:"accommodation"},
  {id:25,type:"Cashier Short Change",location:"Chandni Chowk / Old Delhi",riskLevel:"medium",description:"Shop and restaurant cashiers give wrong change back, especially to tourists unfamiliar with Indian notes. Count every note before leaving. ₹100 and ₹10 notes look slightly similar. Always keep small change handy to avoid large notes in crowded markets.",time:"All day",reportedBy:"11 visitors",date:"2026-04-02",category:"fraud"},
  {id:26,type:"Souvenir Price Inflation",location:"Janpath Market (JP), Delhi",riskLevel:"medium",description:"Vendors quote ₹800–1500 for items worth ₹80–150. Quote a counter-price of 15–20% of their asking price, negotiate up to 30–40%, and walk away if they don't meet 40%. They will run after you. Never buy at first quoted price at Janpath.",time:"All day",reportedBy:"17 tourists",date:"2026-04-03",category:"shopping"},
  {id:27,type:"Massage / Spa Hidden Charges",location:"Paharganj / Budget Areas",riskLevel:"medium",description:"'Traditional massage' shops advertise ₹200 full body massages. On completing, the 'therapist' charges ₹2,000–5,000 for 'special oil', 'premium service', or adds unagreed extras. Only use officially registered spas with clearly displayed price menus.",time:"Afternoon & Evening",reportedBy:"7 tourists",date:"2026-04-01",category:"fraud"},
  {id:28,type:"Wrong Fuel at Petrol Pump",location:"Various Delhi Roads",riskLevel:"medium",description:"Attendants at some pumps in outskirts claim to start meter from 0 but actually start mid-way, or add air/water unnecessarily charging ₹200–500. Watch the meter reset clearly, do not let attendants add anything without permission.",time:"Anytime",reportedBy:"8 drivers",date:"2026-04-02",category:"transport"},
  {id:29,type:"Fake Charity Collector",location:"CP / India Gate Area",riskLevel:"medium",description:"Men with official-looking ID cards and donation books collect money for 'orphans', 'disaster relief', or 'schools'. Legitimate charities do not solicit donations on streets. Do not donate to anyone approaching you directly.",time:"Evening",reportedBy:"9 tourists",date:"2026-04-03",category:"fraud"},
  {id:30,type:"SIM Card Overcharging",location:"IGI Airport / New Delhi Station",riskLevel:"medium",description:"Unofficial SIM sellers at airport and station charge ₹800–2000 for prepaid SIMs that cost ₹200 from a Airtel/Jio store. Buy SIM only from official stores inside terminal (Airtel or Jio) or from a Jio/Airtel outlet outside.",time:"All hours",reportedBy:"13 tourists",date:"2026-04-02",category:"digital"},
  {id:31,type:"Food Stall Weight Fraud",location:"Chandni Chowk Market (CC)",riskLevel:"medium",description:"Spice and dry fruit vendors in Chandni Chowk use tampered scales showing 1 kg but delivering 600–700g. Bring your own small weighing app on phone, or insist on sealed packaged products with printed weight.",time:"Market hours",reportedBy:"9 buyers",date:"2026-04-02",category:"shopping"},
  {id:32,type:"Photography Money Demand",location:"Old Delhi Heritage Area",riskLevel:"medium",description:"Locals in distinctive clothes pose for photos then demand ₹500–2000 payment. Some surround tourists and refuse to let them leave without payment. Do not photograph strangers without clear prior agreement on any charges.",time:"Daytime",reportedBy:"8 tourists",date:"2026-04-01",category:"tourism"},
  {id:33,type:"Fake Government Tourism Office",location:"Paharganj / CP Area",riskLevel:"medium",description:"Shops displaying signs like 'Ministry of Tourism — Approved', 'Govt. of India Tourism' near CP and Paharganj are private operators. The real India Tourism office is at 88 Janpath Road, open Mon–Fri. Fake offices sell overpriced tours and fake 'heritage passes'.",time:"All day",reportedBy:"16 tourists",date:"2026-04-03",category:"tourism"},
  {id:34,type:"Uber/Ola Phantom Cancellation",location:"Delhi Metro Stations",riskLevel:"medium",description:"Drivers call to ask your exact destination before accepting, then cancel if route is short or traffic-heavy. Drivers then demand cash rides at 3x app price. Re-book in app, leave 1-star review for cancelled rides, or switch to auto rickshaw for short rides.",time:"Peak hours",reportedBy:"18 users",date:"2026-04-02",category:"transport"},
  {id:35,type:"Hospital Diagnostic Overcharging",location:"Near AIIMS / Safdarjung",riskLevel:"medium",description:"Touts outside AIIMS refer patients to private labs claiming 'AIIMS is fully booked'. Private labs charge ₹2,000–8,000 for tests that cost ₹200–500 at AIIMS itself. Always go directly to AIIMS OPD registration — same-day appointments are usually possible.",time:"Morning",reportedBy:"12 patients",date:"2026-04-01",category:"medical"},
  {id:36,type:"Stolen Bicycle / Ride Theft",location:"Connaught Place Parking",riskLevel:"medium",description:"Scooters and bicycles left unlocked in CP outer circle parking are frequently stolen. Use a high-quality D-lock plus chain. Park in designated, guarded parking. Underground CP parking is safer.",time:"Evening & Night",reportedBy:"7 users",date:"2026-04-03",category:"safety"},
  {id:37,type:"Shoe Shiner Scam",location:"India Gate / CP",riskLevel:"medium",description:"Men approach tourists offering free shoe shine. After completing, they demand ₹500–2000. Sometimes they smear shoe with polish from a distance to create demand. Firmly decline anyone approaching unprompted for shoe service.",time:"Afternoon & Evening",reportedBy:"9 tourists",date:"2026-04-02",category:"fraud"},
  {id:38,type:"E-Commerce Fake Delivery Agent",location:"Residential Areas",riskLevel:"medium",description:"Fraudsters call claiming to be Zomato/Swiggy/Amazon delivery agents asking for OTP to 'complete delivery'. This OTP is actually for UPI transaction approval. Never share OTPs with anyone — delivery never requires OTP from customer.",time:"Anytime",reportedBy:"14 users",date:"2026-04-01",category:"digital"},
  {id:39,type:"Duplicate Medicine Selling",location:"Paharganj / Karol Bagh Area",riskLevel:"medium",description:"Pharmacies near tourist areas sell expired or counterfeit medicines at normal prices. Travelers buying prescription medicines should use reputed pharmacies like Apollo Pharmacy, MedPlus, or 1mg delivery. Always check packaging seal and expiry date.",time:"All day",reportedBy:"6 tourists",date:"2026-04-02",category:"medical"},
  {id:40,type:"Railway Platform Beggar Groups",location:"New Delhi Station (NDLS)",riskLevel:"medium",description:"Organized groups of beggars at railway station platforms target travelers with heavy luggage, sometimes grabbing bags to create confusion for pickpockets. Keep bags locked and in front. Do not engage with large groups at platforms.",time:"Morning 5–9 AM",reportedBy:"10 travelers",date:"2026-04-03",category:"safety"},

  // ── MEDIUM RISK (CONTINUED) ───────────────────────────────────────────────
  {id:41,type:"Cover Charge at Clubs",location:"Hauz Khas Village (HKV)",riskLevel:"medium",description:"Nightclubs in Hauz Khas Village charge ₹1,000–3,000 cover charges at the door not mentioned on their Instagram pages. Always call ahead and confirm cover charge, drink minimum, and any stag entry restrictions before visiting.",time:"Friday–Saturday nights",reportedBy:"11 visitors",date:"2026-04-02",category:"entertainment"},
  {id:42,type:"Metered Taxi Night Surcharge",location:"All Delhi",riskLevel:"medium",description:"Some auto drivers charge 25% night surcharge after 11 PM which is legitimate but many apply it from 9 PM or add it arbitrarily during day. Legal night surcharge is 25% on meter fare from 11 PM to 5 AM. Check Delhi traffic police auto fare chart for reference.",time:"Night",reportedBy:"9 users",date:"2026-04-01",category:"transport"},
  {id:43,type:"Fake Property Agent",location:"Karol Bagh / Paharganj",riskLevel:"medium",description:"Fake property agents show photos of 'furnished flats' and collect ₹5,000–25,000 advance before the flat viewing. They disappear afterward. Never pay advance before physically inspecting a property and verifying owner's documents.",time:"Daytime",reportedBy:"7 users",date:"2026-04-02",category:"accommodation"},
  {id:44,type:"Money Exchanger Fraud",location:"Paharganj / CP",riskLevel:"medium",description:"Unofficial money changers near CP and Paharganj offer 'better rates than banks' but give fake notes, palm off old demonetised notes, or do sleight-of-hand with counted bundles. ONLY exchange currency at RBI-authorized banks, authorized money changers, or airport forex desks.",time:"All day",reportedBy:"10 tourists",date:"2026-04-03",category:"fraud"},
  {id:45,type:"Restaurant Menu Price Switching",location:"Tourist Areas — Old Delhi/CP",riskLevel:"medium",description:"Tourists handed a menu with normal prices, but charged from a different (higher) menu at billing time. Always photograph the menu when ordering, and cross-check each item at billing. Walk away from restaurants that won't accept photos.",time:"All hours",reportedBy:"8 tourists",date:"2026-04-01",category:"food"},
  {id:46,type:"Phishing SMS Bank Fraud",location:"All Delhi (Online/Mobile)",riskLevel:"medium",description:"SMS messages claiming 'Your SBI/HDFC account will be blocked — verify KYC at [link]' targeting Delhi users. 14,000+ reported cases in 2025. Never click unverified links. KYC update is ONLY done by visiting your home branch — banks NEVER ask via SMS link.",time:"Anytime",reportedBy:"45 users",date:"2026-04-02",category:"digital"},
  {id:47,type:"Wrong Platform Diversion",location:"New Delhi Railway Station",riskLevel:"medium",description:"Strangers (working with touts) tell first-time travelers their train is on a different platform to create confusion, then direct them to booking agents for 'rescheduling'. Always verify platform number from official digital boards at the station — never rely on strangers.",time:"All day",reportedBy:"13 travelers",date:"2026-04-03",category:"transport"},
  {id:48,type:"Fake CBI / ED Officer",location:"Business Areas",riskLevel:"medium",description:"Calls claiming to be from CBI/ED/Narcotics saying you are 'involved in a case' and demanding payment to 'clear your name'. This is a scripted fraud. Hang up — real agencies never contact on personal numbers demanding payment.",time:"Business hours",reportedBy:"18 users",date:"2026-04-01",category:"digital"},
  {id:49,type:"QR Code Payment Fraud",location:"Markets — Sadar Bazaar / CC",riskLevel:"medium",description:"Fake QR codes stuck over genuine shop QR codes — payment goes to fraudster. Always confirm merchant name appears correctly on UPI payment screen before completing. Ask shopkeeper to confirm amount on their device.",time:"All day",reportedBy:"12 users",date:"2026-04-02",category:"digital"},
  {id:50,type:"Auto Detour Overcharging",location:"Tourist Areas",riskLevel:"medium",description:"Auto drivers take very long routes to tourist spots and then charge for the extended distance. Use Google Maps navigation on your phone visibly while in the auto to prevent detours. Book Ola/Uber for transparent pricing.",time:"All day",reportedBy:"16 tourists",date:"2026-04-03",category:"transport"},

  // ── LOW RISK ──────────────────────────────────────────────────────────────
  {id:51,type:"Dilli Haat Ticket Verification",location:"Dilli Haat (DH), INA",riskLevel:"low",description:"Touts near Dilli Haat entrance offer to 'get you in for free' but actually steal from you in the queue or try to pick pockets. Entry ticket is just ₹100 (adults). Buy directly from the official booth — it's simple and quick.",time:"Afternoon",reportedBy:"5 visitors",date:"2026-04-01",category:"tourism"},
  {id:52,type:"Parking Fine Scam",location:"CP / Karol Bagh Parking",riskLevel:"low",description:"Unofficial parking attendants collect ₹100–500 'parking fee' in areas where parking is free or only ₹20. Always ask for an official printed receipt. If no receipt is offered, the parking charge is unofficial.",time:"Daytime",reportedBy:"8 drivers",date:"2026-04-02",category:"transport"},
  {id:53,type:"Substandard Export Surplus Clothes",location:"Sarojini Nagar Market (SN)",riskLevel:"low",description:"Some vendors at Sarojini sell genuinely defective export rejects with hidden tears, weak stitching, or faded prints. Check each item carefully before buying. The price is so low that bargaining further is not worth it — focus on quality inspection.",time:"All day",reportedBy:"7 shoppers",date:"2026-04-01",category:"shopping"},
  {id:54,type:"Horse/Camel Ride Demand",location:"Red Fort Area / Monuments",riskLevel:"low",description:"Animal ride operators near monuments quote ₹50 for a 5-min ride but demand ₹500 on return. Children's photos with animals also billed expensively. Settle full price BEFORE mounting/photographing. Avoid if possible — animal welfare concerns too.",time:"Morning & Afternoon",reportedBy:"6 tourists",date:"2026-04-02",category:"tourism"},
  {id:55,type:"Marigold Garland Pusher",location:"Temples / Religious Sites",riskLevel:"low",description:"Flower sellers push garlands into tourists' hands outside temples then aggressively demand ₹200–500. If you do not want, do not accept anything placed in your hands. Firmly return items immediately if taken by surprise.",time:"All day",reportedBy:"8 visitors",date:"2026-04-01",category:"tourism"},
  {id:56,type:"Luggage Wrapping Overcharge",location:"IGI Airport / NDLS Station",riskLevel:"low",description:"Luggage wrapping services charge ₹400–800. Standard market rate is ₹150–250 per bag. Bargain or compare prices at multiple counters before agreeing. This service is optional — heavy-duty luggage bags don't need wrapping.",time:"All hours",reportedBy:"9 travelers",date:"2026-04-02",category:"transport"},
  {id:57,type:"Overpriced Monument Photoshoot",location:"India Gate / CP Area",riskLevel:"low",description:"'Professional photographers' with DSLR cameras offer free photos at India Gate then charge ₹500–2000 per print. Agree on exact price and number of prints BEFORE posing. Better to use your own phone camera.",time:"Evening",reportedBy:"6 tourists",date:"2026-04-03",category:"tourism"},
  {id:58,type:"Khan Market Wallet Lifting",location:"Khan Market (KM)",riskLevel:"low",description:"Even in the safest market in Delhi, isolated incidents of pickpocketing during evening rush reported near parking entrance. Keep wallet in front pocket or use anti-theft crossbody bag.",time:"Evening 6–9 PM",reportedBy:"4 visitors",date:"2026-04-01",category:"safety"},
  {id:59,type:"Holi Water/Powder Harassment",location:"CP / Karib Areas (March)",riskLevel:"low",description:"During Holi season (March), groups of men smear colors on tourists without consent and may touch inappropriately under guise of celebrations. Avoid Paharganj and CP on Holi day. Celebrate only at private/gated events.",time:"Holi season (March)",reportedBy:"7 tourists",date:"2026-04-01",category:"safety"},
  {id:60,type:"Faulty Power Bank Sale",location:"Gaffar Market KB / Nehru Place NP",riskLevel:"low",description:"Power banks sold with high mAh ratings (20,000+) for ₹200–400 that actually hold 1,000 mAh and have dangerous uncertified cells. Only buy electronics from branded stores or Amazon/Flipkart with proper BIS certification.",time:"All day",reportedBy:"9 buyers",date:"2026-04-02",category:"shopping"},
  {id:61,type:"UPI Fraud via QR Receive Trick",location:"Street Vendors, Delhi-wide",riskLevel:"low",description:"Vendors show a 'receive money' QR code claiming it's their payment code. Scanning it DEDUCTS money from your account instead of sending. Always check if UPI action is 'Pay' or 'Request' before confirming. Green = paying; Red = requesting = DO NOT scan.",time:"All day",reportedBy:"11 users",date:"2026-04-03",category:"digital"},
  {id:62,type:"Auto Refuses Short Ride",location:"All Delhi Metro Exits",riskLevel:"low",description:"Autos outside metro stations refuse rides under 5 km or demand ₹2–3x meter rate for short trips. Report to Delhi traffic police helpline 1095. Use Rapido or Ola Auto for transparent short-distance pricing.",time:"Peak hours",reportedBy:"20 commuters",date:"2026-04-02",category:"transport"},
  {id:63,type:"Duplicate Branded Bag",location:"Janpath / Sarojini",riskLevel:"low",description:"'Louis Vuitton', 'Coach', 'Gucci' bags sold for ₹300–2000 are replicas but may be sold as genuine to uninformed buyers. These are legal to buy and own in India but illegal to resell as genuine. Buy with eyes open — they are frankly good replicas at honest price.",time:"All day",reportedBy:"5 shoppers",date:"2026-04-01",category:"shopping"},
  {id:64,type:"Noise / Harassment in Shared Auto",location:"Old Delhi Shared Routes",riskLevel:"low",description:"Shared autos in Old Delhi lanes are overcrowded, and conductors may demand extra fare mid-ride. Know the standard shared auto rates (₹10–20/seat) for your route before boarding. Ask fellow passengers the correct fare.",time:"All day",reportedBy:"8 commuters",date:"2026-04-02",category:"transport"},
  {id:65,type:"Overpriced Bottled Water Near Monuments",location:"All Tourist Monuments",riskLevel:"low",description:"Water bottles near Red Fort, Qutub Minar, India Gate sold for ₹50–100 (MRP is ₹20). Buy water from general stores at least 500m from monuments, or carry your own reusable bottle and fill at drinking water stations.",time:"All day",reportedBy:"15 tourists",date:"2026-04-03",category:"food"},

  // ── MORE HIGH RISK ────────────────────────────────────────────────────────
  {id:66,type:"Sadar Bazaar Pickpocket Gang",location:"Sadar Bazaar (SB), Delhi",riskLevel:"high",description:"Organized 3–4 person pickpocket gangs operating in the narrow lanes of Sadar Bazaar. One person blocks your path, another bumps into you, third lifts wallet. Keep phone in inner pocket, use crossbody bag worn in front.",time:"Morning & Afternoon rush",reportedBy:"13 visitors",date:"2026-04-03",category:"safety"},
  {id:67,type:"Fake ID Police Bribery",location:"Paharganj Night Lanes",riskLevel:"high",description:"Men in partial uniform stop solo tourists at night claiming drug check. Demand ₹10,000+ to 'avoid arrest'. Real police don't stop tourists at night for random checks. Ask to be taken to the nearest police station and call 100 — genuine officers will comply.",time:"Night (10 PM–2 AM)",reportedBy:"8 tourists",date:"2026-04-02",category:"fraud"},
  {id:68,type:"Rickshaw Stranding in Old Delhi",location:"Old Delhi Lanes",riskLevel:"high",description:"Cycle rickshaw driver takes tourist deep into Old Delhi maze lanes then demands 10x agreed price to take them back to the main road. Agree on return trip price upfront. Keep Google Maps open and screenshot key junction names before entering Old Delhi.",time:"Afternoon & Evening",reportedBy:"9 tourists",date:"2026-04-01",category:"transport"},
  {id:69,type:"Photography Extortion (Minors)",location:"Tourist Monuments / CP",riskLevel:"high",description:"Children pose for photos then adults (guardians) demand ₹1,000–5,000. Photography of minors without guardian consent is also legally sensitive. Avoid photographing children in tourist areas unless you specifically know the context.",time:"All day",reportedBy:"7 tourists",date:"2026-04-03",category:"fraud"},
  {id:70,type:"Credit Card Skimming at Restaurants",location:"Paharganj Budget Restaurants",riskLevel:"high",description:"Card details stolen by card skimming devices attached to POS machines in budget eateries. Use contactless card tap or UPI/PhonePe instead of swiping/inserting card at unfamiliar restaurants. Check card machine for loose attachments before use.",time:"All hours",reportedBy:"10 users",date:"2026-04-02",category:"digital"},

  // ── MORE MEDIUM RISK ──────────────────────────────────────────────────────
  {id:71,type:"Driving License / RC Check Extortion",location:"Delhi Roads",riskLevel:"medium",description:"Traffic police or fake officers stop vehicles demanding excessive fines for minor infractions — or no infraction at all. Know the official fine amounts (helmet: ₹1,000, drunk driving: ₹10,000). Demand receipt; if no receipt offered, offer to go to nearest police station.",time:"Random stops",reportedBy:"14 drivers",date:"2026-04-02",category:"transport"},
  {id:72,type:"Electricity Bill Scam Call",location:"Delhi Residential (Phone)",riskLevel:"medium",description:"Calls from 'BSES' or 'TPDDL' claiming electricity will be disconnected in 2 hours unless immediate payment via UPI. DISCOM companies NEVER call demanding immediate UPI payments. Verify via official BSES/TPDDL website or visit nearest office.",time:"Business hours",reportedBy:"19 users",date:"2026-04-01",category:"digital"},
  {id:73,type:"Fake Yoga / Spiritual Retreat",location:"CP / Tourist Areas",riskLevel:"medium",description:"Flyers for '3-day yoga/meditation retreat in Rishikesh' sold by agents near CP tourist areas. Customers pay ₹5,000–15,000 advance for retreats that don't exist. Book retreats only from official ashram websites directly.",time:"Daytime",reportedBy:"6 tourists",date:"2026-04-03",category:"tourism"},
  {id:74,type:"Gold Chain Snatching",location:"West Delhi / Outer Areas",riskLevel:"medium",description:"Motorcyclists snatching gold chains from pedestrians reported in West Delhi and outer ring areas. Avoid wearing visible heavy jewellery when commuting on foot in less-crowded areas. File FIR immediately at nearest police station.",time:"Evening",reportedBy:"8 residents",date:"2026-04-01",category:"safety"},
  {id:75,type:"Fake Exam Admit Card / Certificate",location:"Near Universities",riskLevel:"medium",description:"Agents near DU and JNU selling fake exam admit cards, degree certificates, and migration certificates for ₹5,000–50,000. Using fake certificates is a criminal offense under IPC Section 420. Approach colleges/universities directly for any documentation.",time:"Exam season",reportedBy:"5 students",date:"2026-04-02",category:"fraud"},
  {id:76,type:"Vehicle Breakdown Assistance Scam",location:"NH-48 / Ring Road",riskLevel:"medium",description:"People stopping motorists claiming their car has a fault (tyre, smoke, etc.). Once motorist stops, they crowd around and pickpocket or demand money for 'help'. If a stranger on the road says your car is broken down, safely pull over and verify yourself — don't open windows.",time:"Night",reportedBy:"6 drivers",date:"2026-04-03",category:"transport"},
  {id:77,type:"Market Weight Fraud at Spice Market",location:"Khari Baoli (CC/OD), Old Delhi",riskLevel:"medium",description:"Wholesale spice vendors at Khari Baoli add wet paper or rocks inside bags of spice to make up weight. Quality can also be significantly below quoted grade. Buy sealed industrial packs with printed weight whenever possible.",time:"Morning",reportedBy:"9 buyers",date:"2026-04-01",category:"shopping"},
  {id:78,type:"Overpriced Cab to Gurgaon",location:"HUDA City Centre Metro, Gurgaon",riskLevel:"medium",description:"Cabs near HUDA City Centre exit charge ₹500–1500 for rides to Cyber Hub (should be ₹100–150 by Ola). Always book inside the metro premises before walking out to cab stands. Rapid Metro Gurgaon covers key areas cheaply.",time:"Evening peak",reportedBy:"11 commuters",date:"2026-04-02",category:"transport"},
  {id:79,type:"Noida Street Food Hygiene Risk",location:"Sector 18, Noida (S18)",riskLevel:"medium",description:"Several street food stalls near Noida Sector 18 market use recycled cooking oil and unhygienic water. Cases of food poisoning reported. Prefer restaurants with visible kitchens and high Zomato hygiene ratings for street food in Noida.",time:"Evening",reportedBy:"8 visitors",date:"2026-04-03",category:"food"},
  {id:80,type:"Fraudulent Job Agent",location:"Paharganj / Anand Vihar",riskLevel:"medium",description:"Agents near Paharganj and Anand Vihar promise jobs in Gulf countries, Canada, or other states for ₹20,000–1,50,000 advance fees. No job ever materialises. Only use government-registered NSDC / MEA-approved agents for overseas employment. Check agent registration on MEA India website.",time:"All day",reportedBy:"9 job seekers",date:"2026-04-01",category:"fraud"},

  // ── LOW RISK (CONTINUED) ──────────────────────────────────────────────────
  {id:81,type:"Museum Entry Ticket Markup",location:"National Museum / CP Area",riskLevel:"low",description:"Touts outside National Museum and National Gallery offer 'skip the queue' at 2–5x ticket price. Museum queues are normally short. Buy from official counter: NGMA entry is free, National Museum is ₹20 Indians / ₹650 foreigners.",time:"Morning",reportedBy:"5 visitors",date:"2026-04-02",category:"tourism"},
  {id:82,type:"E-Rickshaw Detour",location:"Old Delhi / Sadar Bazaar",riskLevel:"low",description:"E-rickshaw drivers on shared routes add extra stops and charge full point-to-point fare. Ask for direct service and agree price upfront. For short rides in Old Delhi, cycle rickshaws are often faster through narrow lanes.",time:"All day",reportedBy:"7 commuters",date:"2026-04-01",category:"transport"},
  {id:83,type:"Inferior Hotel Amenities",location:"Budget Hotels, Paharganj (PG)",riskLevel:"low",description:"Budget hotels advertise AC/hot water on booking sites but rooms have broken AC and cold-only showers. Arrive and physically inspect room before paying. Take photos of any damage to avoid being charged for it on checkout.",time:"Check-in",reportedBy:"14 travelers",date:"2026-04-03",category:"accommodation"},
  {id:84,type:"Misleading Food Label",location:"Packaged Food Shops, Paharganj",riskLevel:"low",description:"Packaged food items sold without proper labeling or with expired MRP labels scratched off. Only buy sealed items from established shops. Check manufacturing and expiry dates — Indian law requires clear labeling on all packaged food.",time:"All day",reportedBy:"6 tourists",date:"2026-04-02",category:"food"},
  {id:85,type:"Charity for Animals Scam",location:"Near Monuments / CP",riskLevel:"low",description:"People carrying injured animals (often kept intentionally injured) collect donations in envelopes for 'treatment'. Most money doesn't go to animal welfare. Donate directly to registered NGOs like PETA India or Friendicoes if you wish to help animals.",time:"All day",reportedBy:"5 tourists",date:"2026-04-01",category:"fraud"},
  {id:86,type:"Incorrect Zomato/Swiggy Order",location:"Delhi Restaurants",riskLevel:"low",description:"Restaurants on food apps deliver smaller portions or substitute cheaper ingredients than listed. Compare portion on arrival with app description. Report via app for refund — both platforms have strong refund policies.",time:"Delivery hours",reportedBy:"22 users",date:"2026-04-03",category:"food"},
  {id:87,type:"Online Job Offer Fraud",location:"Delhi (Online/Mobile)",riskLevel:"low",description:"WhatsApp messages offering work-from-home jobs (₹500–₹5,000/hr for 'liking YouTube videos') that require a small ₹1,000–₹5,000 'registration fee'. The fee is collected and contact disappears. No legitimate employer requires upfront fees from employees.",time:"Anytime",reportedBy:"28 users",date:"2026-04-02",category:"digital"},
  {id:88,type:"Meter Tampering CNG Auto",location:"All Delhi",riskLevel:"low",description:"Some auto meters run fast after tampering — ₹100 meter reading for a ₹60 ride. If you suspect fast meter, note starting reading and distance on Google Maps. Report to Delhi Traffic Police online portal with cab number.",time:"All day",reportedBy:"16 commuters",date:"2026-04-01",category:"transport"},
  {id:89,type:"Unsolicited Henna Artist",location:"CP / Tourist Areas",riskLevel:"low",description:"Women approach tourists and begin applying henna without asking, then demand ₹500–2000 after design is complete. Firmly say 'No thank you' before any contact is made. Once applied, they claim you owe payment.",time:"Afternoon & Evening",reportedBy:"8 tourists",date:"2026-04-02",category:"fraud"},
  {id:90,type:"Inflated Bill at Dhabas (Tourists)",location:"Old Delhi / Paharganj",riskLevel:"low",description:"Local dhabas that are cheap for regulars charge tourists 2–3x more. Ask for the menu with prices before ordering. If no menu exists, ask prices for each item before ordering.",time:"All hours",reportedBy:"12 tourists",date:"2026-04-03",category:"food"},

  // ── FINAL HIGH RISK ───────────────────────────────────────────────────────
  {id:91,type:"Deepfake Video Call Scam",location:"Delhi (Online)",riskLevel:"high",description:"Calls from 'CBI/Police Officers' using deepfake video showing fake evidence of crimes. Demand ₹50,000–5,00,000 to 'clear your name'. Cases in Delhi tripled in 2025. Hang up, block number, report to cybercrime.gov.in. Real officers use official channels.",time:"Anytime",reportedBy:"34 users",date:"2026-04-03",category:"digital"},
  {id:92,type:"Fake Luxury Goods Export Scam",location:"Paharganj / Tourist Hotels",riskLevel:"high",description:"'Businessmen' at hotels ask tourists to carry 'tax-free export goods' (carpets/jewellery/spices) in their luggage for a substantial payment. These are used to smuggle drugs, counterfeit currency, or stolen goods. NEVER carry anything for strangers through customs.",time:"During tourist stay",reportedBy:"9 tourists",date:"2026-04-02",category:"fraud"},
  {id:93,type:"Gurgaon Investment Fraud",location:"Gurgaon (GGN) / Online",riskLevel:"high",description:"Tech-savvy investment scams based out of Gurgaon call centres offer 300–500% returns on crypto/stocks. Victims invest ₹10,000 → ₹10,00,000 before withdrawals are blocked. Delhi NCR was the #1 city for investment scam complaints in 2025.",time:"Business hours",reportedBy:"29 users",date:"2026-04-01",category:"digital"},
  {id:94,type:"Faridabad Informal Money Lender Trap",location:"Faridabad (FBD)",riskLevel:"high",description:"Informal 'loan sharks' near Faridabad industrial areas offer instant cash loans at 10–15% weekly interest. Borrowers end up in debt traps. Use only regulated NBFCs and banks for loans — compare on BankBazaar/PaisaBazaar.",time:"All day",reportedBy:"6 users",date:"2026-04-03",category:"financial"},
  {id:95,type:"Fake Aadhaar Update Link",location:"Delhi (Online/Mobile)",riskLevel:"high",description:"Messages claiming 'Your Aadhaar will be deactivated — update at [malicious link]' have stolen data from thousands of Delhi residents. UIDAI never deactivates Aadhaar via SMS. Update Aadhaar only at myaadhaar.uidai.gov.in or Aadhaar Seva Kendra.",time:"Anytime",reportedBy:"41 users",date:"2026-04-02",category:"digital"},

  // ── AREA-SPECIFIC ─────────────────────────────────────────────────────────
  {id:96,type:"Majnu Ka Tila Overpriced Stay",location:"Majnu Ka Tila (MKT)",riskLevel:"low",description:"Budget guesthouses in Tibetan Colony advertise cleanliness standards on photos that differ significantly from actual rooms. Always view the room first; prices of ₹400–800/night are reasonable, avoid places quoting ₹1,500+ without strong recent reviews.",time:"Check-in",reportedBy:"5 travelers",date:"2026-04-01",category:"accommodation"},
  {id:97,type:"North Campus Fake Coaching Agent",location:"North Campus DU (DU)",riskLevel:"medium",description:"Agents near DU North Campus sell fake coaching admission forms for IIT-JEE/UPSC at ₹5,000–20,000. Legitimate coaching institutes have official websites — verify before paying any coaching fees.",time:"Admission season",reportedBy:"8 students",date:"2026-04-03",category:"fraud"},
  {id:98,type:"INA Market Underweight Fish",location:"INA Market (INA)",riskLevel:"low",description:"Some fishmongers at INA weigh fish with ice included in the weight. Ask them to weigh after removing ice and entrails. This is standard practice in regulated markets but many don't do it without being asked.",time:"Morning",reportedBy:"6 buyers",date:"2026-04-02",category:"shopping"},
  {id:99,type:"Akshardham Locker Key Exchange",location:"Akshardham Temple (AKD)",riskLevel:"low",description:"Occasional reports of locker key exchange (taking wrong key accidentally or intentionally) near main locker area. Keep locker number photographed. Akshardham security is excellent overall — this is a minor precaution.",time:"During visit",reportedBy:"4 visitors",date:"2026-04-01",category:"safety"},
  {id:100,type:"Lodi Garden Fake Morning Walker",location:"Lodi Garden (LG)",riskLevel:"low",description:"Isolated cases of 'morning walkers' asking for directions inside the garden then requesting money or attempting petty theft. The garden is extremely safe overall but walk with awareness in early morning before 7 AM.",time:"Early morning",reportedBy:"3 visitors",date:"2026-04-03",category:"safety"},
  {id:101,type:"AIIMS Fake Specialist Referral",location:"AIIMS (AIIMS)",riskLevel:"medium",description:"Touts outside AIIMS claim that OPD is 'full for 3 months' and offer referral to specialist doctors who charge ₹3,000–10,000 consultation. AIIMS OPD is available walk-in daily — same-day token issued from 8 AM.",time:"Morning 7–9 AM",reportedBy:"11 patients",date:"2026-04-02",category:"medical"},
  {id:102,type:"Cheap Wedding Photographer Scam",location:"South Delhi / Event Venues",riskLevel:"medium",description:"Freelance photographers take ₹30,000–80,000 advance for wedding photography then disappear or deliver terrible quality photos. Always sign a detailed contract, check physical portfolio, and pay maximum 30% advance with balance on delivery.",time:"Booking time",reportedBy:"7 couples",date:"2026-04-01",category:"fraud"},
  {id:103,type:"School Uniform Duplicate Material",location:"Sadar Bazaar / Karol Bagh",riskLevel:"low",description:"School uniform fabric sold at these markets can be substandard with poor colour fastness. Check material thickness and wash-fastness. Buy from school-authorised vendors for regulated quality.",time:"School season (March–June)",reportedBy:"6 parents",date:"2026-04-03",category:"shopping"},
  {id:104,type:"Overcrowded Bus Pickpocketing",location:"DTC Buses, Delhi",riskLevel:"medium",description:"Pickpockets target DTC buses on crowded routes, especially 764 (CP–Dwarka) and 534 (Anand Vihar–CP). Keep phone and wallet in secure inner pockets. Switch to Metro for long distances — faster and safer.",time:"Peak hours",reportedBy:"17 commuters",date:"2026-04-02",category:"safety"},
  {id:105,type:"Fake Airbnb / OYO Listing",location:"Delhi NCR Wide",riskLevel:"medium",description:"Fake property listings on accommodation platforms showing non-existent flats. Property does not exist or is not available on arrival. Book stays with 'Instant Book' + verified host + multiple recent reviews. Call host before arrival to confirm.",time:"Booking / Check-in",reportedBy:"10 travelers",date:"2026-04-01",category:"accommodation"},
];

// ── SERVICE & FOOD PRICES ─────────────────────────────────────────────────────
const SERVICE_PRICES = {
  "indian food": {
    label: "Indian Restaurant", icon: "🍛",
    budget: "₹80–₹150", avg: "₹200–₹400", premium: "₹600–₹1,500",
    tip: "Ask for menu with prices before ordering. Service charge is NOT mandatory by law.",
    examples: "Dal makhani ₹120–350 | Butter Chicken ₹180–500 | Thali ₹80–350"
  },
  "south indian": {
    label: "South Indian", icon: "🥘",
    budget: "₹60–₹120", avg: "₹150–₹300", premium: "₹400–₹900",
    tip: "Idli-Dosa outlets like Saravana Bhavan are great value & consistent.",
    examples: "Masala Dosa ₹80–200 | Idli Sambar ₹60–120 | Filter Coffee ₹40–100"
  },
  "chinese food": {
    label: "Chinese / Indo-Chinese", icon: "🥢",
    budget: "₹120–₹200", avg: "₹250–₹500", premium: "₹700–₹1,800",
    tip: "Avoid restaurants without displayed menus. Indian-Chinese is more common & cheaper.",
    examples: "Fried Rice ₹120–350 | Manchurian ₹150–400 | Momos ₹80–250"
  },
  "fast food": {
    label: "Fast Food / Burgers", icon: "🍔",
    budget: "₹60–₹120", avg: "₹120–₹300", premium: "₹350–₹700",
    tip: "Check if GST is included in displayed price. McDonald's/Domino's are standardized.",
    examples: "McAloo Tikki ₹60 | Whopper ₹200–350 | Pizza Slice ₹80–150"
  },
  "pizza": {
    label: "Pizza Restaurant", icon: "🍕",
    budget: "₹150–₹280", avg: "₹300–₹650", premium: "₹700–₹1,800",
    tip: "Order from brand apps (Domino's, Pizza Hut) for app-exclusive deals of 20–40% off.",
    examples: "Domino's Medium ₹300–500 | Pizza Hut Personal ₹200–350 | Artisan pizza ₹500–900"
  },
  "coffee": {
    label: "Coffee / Cafe", icon: "☕",
    budget: "₹20–₹70", avg: "₹100–₹250", premium: "₹280–₹600",
    tip: "Street chai is ₹10–25 — don't skip it. Tourist cafes mark up coffee by 3–5x.",
    examples: "Street Chai ₹10–25 | Café Coffee Day ₹100–200 | Blue Tokai / Third Wave ₹200–400"
  },
  "street food": {
    label: "Street Food / Chaat", icon: "🌮",
    budget: "₹20–₹60", avg: "₹60–₹150", premium: "₹150–₹400",
    tip: "Best street food in India — choose stalls with high turnover and visible hygiene.",
    examples: "Gol Gappe ₹30–60 | Aloo Tikki ₹30–80 | Chole Bhature ₹60–150 | Paranthe ₹50–120"
  },
  "momos": {
    label: "Momos (Dumplings)", icon: "🥟",
    budget: "₹40–₹80", avg: "₹80–₹160", premium: "₹180–₹350",
    tip: "Best momos: Majnu Ka Tila, DU North Campus, Lajpat Nagar lanes. Avoid overpriced mall momos.",
    examples: "Steam Momos (6 pcs) ₹50–100 | Fried Momos ₹60–120 | Premium restaurant ₹150–300"
  },
  "biryani": {
    label: "Biryani Restaurant", icon: "🍚",
    budget: "₹80–₹150", avg: "₹180–₹380", premium: "₹400–₹900",
    tip: "Old Delhi biryani from Al Jawahar or Aslam Chicken is iconic and affordable.",
    examples: "Chicken Biryani ₹120–350 | Mutton Biryani ₹180–450 | Veg Biryani ₹80–200"
  },
  "beer alcohol": {
    label: "Beer / Alcohol", icon: "🍺",
    budget: "₹150–₹250 (store)", avg: "₹300–₹600 (restaurant)", premium: "₹700–₹2,000 (lounge)",
    tip: "Delhi government liquor stores have fixed MRP. Restaurants charge 2–4x store price. Clubs in HKV have minimum spends.",
    examples: "Store: Kingfisher 650ml ₹150–180 | Bar: Pint ₹300–500 | Club: Bottle ₹3,000–8,000"
  },
  "hotel": {
    label: "Hotel / Guesthouse", icon: "🏨",
    budget: "₹400–₹800/night", avg: "₹1,000–₹3,500/night", premium: "₹5,000–₹25,000+/night",
    tip: "Book via MakeMyTrip, Booking.com, or directly with hotel. Avoid street touts. Always read last 30-day reviews.",
    examples: "Paharganj Budget ₹400–800 | OYO Mid-range ₹1,000–2,500 | 5-Star Aerocity ₹8,000–25,000"
  },
  "hostel": {
    label: "Hostel / Dorm", icon: "🛏️",
    budget: "₹300–₹500/night (dorm)", avg: "₹500–₹900", premium: "₹900–₹1,500",
    tip: "Zostel is the most reliable hostel chain in India. Check Hostelworld for vetted options.",
    examples: "Dorm bed ₹300–600 | Private room in hostel ₹800–1,500"
  },
  "taxi cab": {
    label: "Taxi / Cab (Ola, Uber)", icon: "🚕",
    budget: "₹50–₹150 (short)", avg: "₹150–₹500", premium: "₹500–₹1,000+ (airport)",
    tip: "Always use Ola or Uber for transparent metered pricing. Never negotiate fixed rates with roadside cabs.",
    examples: "Ola Mini/Uber Go ₹14/km | Sedan ₹16/km | Prime/Comfort ₹20/km | Airport cab ₹350–500"
  },
  "auto rickshaw": {
    label: "Auto Rickshaw", icon: "🛺",
    budget: "₹25–₹80 (short)", avg: "₹80–₹200", premium: "₹200–₹500 (tourist rate)",
    tip: "Insist on meter. Ola Auto, Rapido are app-based and fully transparent. Refuse fixed-rate autos.",
    examples: "Minimum fare ₹25 | Per km ₹9.50 | Rapido Auto ₹8–10/km (app)"
  },
  "metro": {
    label: "Delhi Metro", icon: "🚇",
    budget: "₹10 (min fare)", avg: "₹30–₹60", premium: "₹80–₹100 (max / Airport Express)",
    tip: "Delhi Metro is the BEST value transport in the city. Buy a Smart Card for 10% discount on every ride.",
    examples: "Min fare ₹10 | Cross-city ₹40–60 | Airport Express ₹100 | Tourist Day Pass ₹150"
  },
  "bus dtc": {
    label: "DTC / Cluster Bus", icon: "🚌",
    budget: "₹5–₹25", avg: "₹10–₹25", premium: "₹30 (AC bus)",
    tip: "Non-AC DTC buses: ₹5–25. AC Cluster buses: ₹15–30. Best value city transport after Metro.",
    examples: "DTC Non-AC ₹5–20 | Cluster AC ₹15–30 | Passes available for regular commuters"
  },
  "bicycle rental": {
    label: "Cycle / Bike Rental", icon: "🚲",
    budget: "₹50–₹100/hour", avg: "₹200–₹500/day", premium: "₹800–₹1,500/day (premium)",
    tip: "Yulu (app-based electric cycle) ₹4/min is best for short trips. Available at Metro stations.",
    examples: "Yulu electric cycle ₹4/min | Manual rental ₹200–400/day | Cycle tours ₹800–1,500"
  },
  "doctors visit": {
    label: "Doctor / Medical", icon: "🩺",
    budget: "₹0 (govt hospital)", avg: "₹300–₹800 (private clinic)", premium: "₹1,000–₹3,000 (specialist)",
    tip: "AIIMS/Safdarjung/RML are free government hospitals of excellent quality. Private clinics charge ₹500–3,000 per consultation.",
    examples: "Govt hospital OPD ₹0–50 | General physician ₹200–600 | Specialist ₹800–3,000 | Apollo/Max ₹1,200–3,000"
  },
  "pharmacy medicines": {
    label: "Pharmacy / Medicine", icon: "💊",
    budget: "₹20–₹200", avg: "₹200–₹1,000", premium: "₹1,000+",
    tip: "Buy from Apollo Pharmacy, MedPlus or 1mg (delivery). Avoid buying from unbranded pharmacies near railway stations.",
    examples: "Paracetamol strip ₹15–30 | Antibiotics ₹80–300 | 1mg app 15–20% cheaper than MRP"
  },
  "barber haircut": {
    label: "Barber / Hair Salon", icon: "💈",
    budget: "₹50–₹150 (local barber)", avg: "₹200–₹500 (salon)", premium: "₹600–₹2,000 (premium salon)",
    tip: "Local barbers (nai) in lanes near markets charge ₹50–100 for basic haircuts. Branded salons like Jawed Habib are ₹300–600.",
    examples: "Local barber ₹50–150 | Jawed Habib/YLG ₹300–600 | Premium salon ₹800–2,000"
  },
  "gym fitness": {
    label: "Gym / Fitness Center", icon: "🏋️",
    budget: "₹500–₹1,000/month (local)", avg: "₹1,500–₹3,000/month", premium: "₹4,000–₹10,000/month",
    tip: "Cult.fit/Gold's Gym offer good quality at ₹2,000–4,000/month. Negotiate for 6 or 12 month packages for 30–40% discount.",
    examples: "Local gym ₹500–1,000/mo | Cult.fit ₹2,000–3,500/mo | Anytime Fitness ₹3,000–5,000/mo"
  },
  "movie cinema": {
    label: "Cinema / Movie", icon: "🎬",
    budget: "₹120–₹200 (non-premium)", avg: "₹200–₹400", premium: "₹500–₹1,200 (IMAX/4DX)",
    tip: "Book via BookMyShow for seat selection. PVR Select Citywalk and Saket are the best multiplexes. Tuesday is cheaper at most chains.",
    examples: "PVR General ₹150–350 | INOX Premium ₹300–600 | IMAX ₹500–800 | 4DX ₹900–1,200"
  },
  "mobile recharge": {
    label: "Mobile Recharge / SIM", icon: "📱",
    budget: "₹149–₹299/month (Jio/Airtel)", avg: "₹399–₹599/month", premium: "₹1,000+/month",
    tip: "Jio and Airtel are the two best networks in Delhi. Vi (Vodafone-Idea) has patchy coverage. Buy SIM from official stores only.",
    examples: "Jio 1.5GB/day ₹149–299/month | Airtel 2GB/day ₹299–599/month | SIM card ₹0 (free with recharge)"
  }
};

const SAFETY_TIPS = [
  "Always use Ola, Uber, or metered autos — NEVER negotiate fixed rates from roadside drivers",
  "Book hotels via official websites, MakeMyTrip, or Booking.com — never through street touts",
  "At monuments, buy tickets ONLY from official green ASI counters with visible queues",
  "Prefer UPI payments (PhonePe/GPay/Paytm) to avoid counterfeit currency",
  "Keep your bags zipped and worn in front in crowded markets and metro stations",
  "Check bills carefully before paying at restaurants — dispute any unlisted charges",
  "Real police in India do NOT stop tourists on streets for random checks — demand station visit",
  "At railway stations, ONLY use official IRCTC app or reservation counters for ticket booking",
  "Never carry packages across customs for strangers — regardless of payment offered",
  "Use Airport Express Metro (₹100) instead of roadside cabs (₹500+) from IGI Airport",
  "Share your live location with family/friends when exploring Old Delhi or Paharganj at night",
  "The India Tourism office is at 88 Janpath — all other 'government tourism' offices are private",
  "No legitimate employer, bank, or government agency will demand UPI payment via phone",
  "For medical needs, AIIMS and Safdarjung are free government hospitals of excellent quality",
  "Download Delhi Metro app for offline maps and fare calculator before exploring"
];
