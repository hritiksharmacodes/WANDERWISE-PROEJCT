// =============================================================================
// WanderWise — data/fares.js
// 200+ Taxi/Auto Fare Routes | All Short Forms | Metro Costs | Tips
// =============================================================================

// All fare keys use canonical location names (lowercase)
// Short forms are resolved via resolveLocation() before lookup
// Format: "from|to" : { min, max, metroAlt, note, tip }

const FARES = {
  // ── FROM AIRPORT (IGI) ────────────────────────────────────────────────────
  "airport|connaught place":    {min:350,max:500,metroAlt:"₹100 Airport Express",note:"35–50 min by cab",tip:"Airport Express to New Delhi Metro, then Yellow Line to Rajiv Chowk"},
  "airport|paharganj":          {min:350,max:500,metroAlt:"₹100 Airport Express",note:"Airport Express drops at New Delhi Stn, then 5 min walk",tip:"Airport Express is fastest — avoid road cabs during peak"},
  "airport|karol bagh":         {min:300,max:450,metroAlt:"₹110 Airport+Metro",note:"30–45 min by cab",tip:"Airport Express → New Delhi → Blue Line to Karol Bagh"},
  "airport|saket":              {min:200,max:300,metroAlt:"₹150 Metro",note:"Closest major area from airport",tip:"Airport Express → Green Park/Hauz Khas area by cab"},
  "airport|hauz khas":          {min:250,max:380,metroAlt:"₹150 Metro+Auto",note:"30–40 min by cab",tip:"Airport Express → Green Park Metro — nearest Yellow Line"},
  "airport|dwarka":             {min:150,max:250,metroAlt:"₹60 Blue Line",note:"Closest residential area; Metro much cheaper",tip:"Take Metro Blue Line from Dwarka — very fast"},
  "airport|vasant kunj":        {min:180,max:280,metroAlt:"₹130 Metro+cab",note:"Very close — 15–20 min",tip:"Nearest option from airport"},
  "airport|gurgaon":            {min:350,max:500,metroAlt:"₹150 Airport+Yellow",note:"Can be 45–60 min with traffic",tip:"Airport Express → New Delhi → Yellow Line to HUDA City Centre"},
  "airport|rohini":             {min:500,max:700,metroAlt:"₹180 Metro",note:"Very long — use Metro",tip:"Airport Express → New Delhi → Yellow → Red Line to Rohini"},
  "airport|noida sector 18":    {min:500,max:700,metroAlt:"₹200 Metro",note:"Very long — use Metro via Blue Line",tip:"Airport Express → New Delhi → Blue Line to Noida Sector 18"},
  "airport|old delhi":          {min:400,max:550,metroAlt:"₹120 Airport+Metro",note:"40–55 min by cab",tip:"Airport Express → New Delhi → Yellow Line to Chandni Chowk"},
  "airport|lajpat nagar":       {min:280,max:400,metroAlt:"₹160 Metro",note:"35–45 min by cab",tip:"Airport Express → Yellow Line → Pink Line to Lajpat Nagar"},
  "airport|south extension":    {min:260,max:380,metroAlt:"₹160 Metro",note:"30–40 min by cab",tip:"Airport Express → Yellow Line → INA, then auto"},
  "airport|nehru place":        {min:280,max:420,metroAlt:"₹180 Metro",note:"35–45 min by cab",tip:"Airport Express → New Delhi → Blue Line → Nehru Place"},
  "airport|aerocity":           {min:100,max:200,metroAlt:"₹30 Airport Express",note:"Airport Express next stop",tip:"Just take Airport Express — 3 min!"},
  "airport|janakpuri":          {min:200,max:300,metroAlt:"₹90 Metro",note:"25–35 min by cab",tip:"Airport Express → New Delhi → Blue Line"},
  "airport|india gate":         {min:300,max:450,metroAlt:"₹120 Metro",note:"30–40 min",tip:"Metro recommended"},
  "airport|akshardham":         {min:450,max:600,metroAlt:"₹160 Metro",note:"Very long with traffic",tip:"Metro strongly recommended"},
  "airport|mayur vihar":        {min:500,max:700,metroAlt:"₹170 Metro",note:"Very long — Metro best",tip:"Blue Line via New Delhi"},
  "airport|anand vihar":        {min:550,max:750,metroAlt:"₹190 Metro",note:"Very long",tip:"Metro only recommended"},
  "airport|new delhi station":  {min:350,max:500,metroAlt:"₹100 Airport Express",note:"Airport Express terminates here",tip:"Airport Express is the cheapest & fastest"},
  "airport|vasant vihar":       {min:200,max:300,metroAlt:"₹140 Metro",note:"20–30 min by cab",tip:"Close to airport"},
  "airport|faridabad":          {min:500,max:700,metroAlt:"₹220 Metro+Violet",note:"Very long",tip:"Metro via Violet Line"},
  "airport|noida city centre":  {min:600,max:800,metroAlt:"₹220 Metro",note:"Across Delhi — Metro best",tip:"Airport Express → Blue Line"},

  // ── FROM CONNAUGHT PLACE (CP / RAJIV CHOWK) ──────────────────────────────
  "connaught place|paharganj":  {min:60,max:120,metroAlt:"₹20 Metro (1 stop)",note:"Walk 12 min or 1 stop Metro",tip:"Honestly — just walk or take Metro"},
  "connaught place|karol bagh": {min:80,max:150,metroAlt:"₹30 Metro (2 stops)",note:"Blue Line 2 stops — Metro fastest",tip:"Blue Line from Rajiv Chowk"},
  "connaught place|saket":      {min:200,max:300,metroAlt:"₹40 Yellow Line",note:"Yellow Line direct in 20 min",tip:"Yellow Line south from Rajiv Chowk"},
  "connaught place|old delhi":  {min:100,max:180,metroAlt:"₹30 Yellow Line",note:"Yellow Line to Chandni Chowk",tip:"Metro is much faster in traffic"},
  "connaught place|hauz khas":  {min:200,max:320,metroAlt:"₹40 Yellow Line",note:"Yellow Line direct",tip:"Yellow Line to Hauz Khas Metro"},
  "connaught place|south extension":{min:150,max:250,metroAlt:"₹40 Metro",note:"INA Metro → South Ex",tip:"Yellow Line then Pink"},
  "connaught place|lajpat nagar":{min:150,max:250,metroAlt:"₹50 Metro",note:"Yellow → Pink Line",tip:"Metro is faster"},
  "connaught place|nehru place": {min:180,max:280,metroAlt:"₹50 Metro",note:"Violet Line via Mandi House",tip:"Blue/Violet interchange at Mandi House"},
  "connaught place|dwarka":      {min:350,max:500,metroAlt:"₹50 Blue Line",note:"Blue Line to Dwarka Sector 21",tip:"Metro far cheaper — ₹50 vs ₹350+"},
  "connaught place|airport":     {min:350,max:500,metroAlt:"₹100 Airport Express",note:"Airport Express from New Delhi Stn",tip:"Airport Express is fastest & cheapest"},
  "connaught place|akshardham":  {min:180,max:280,metroAlt:"₹40 Blue Line",note:"Blue Line to Akshardham",tip:"Metro recommended"},
  "connaught place|india gate":  {min:80,max:150,metroAlt:"₹25 Metro",note:"Central Secretariat — 2 stops",tip:"Yellow Line 2 stops south"},
  "connaught place|rohini":      {min:300,max:450,metroAlt:"₹60 Metro",note:"Yellow → Red Line interchange",tip:"Metro strongly recommended"},
  "connaught place|vasant kunj": {min:300,max:450,metroAlt:"₹80 Metro+cab",note:"35–45 min",tip:"Yellow Line south"},
  "connaught place|gurgaon":     {min:400,max:600,metroAlt:"₹60 Yellow Line",note:"Yellow Line to HUDA City Centre",tip:"Metro is far cheaper"},
  "connaught place|noida sector 18":{min:350,max:500,metroAlt:"₹60 Blue Line",note:"Blue Line to Noida Sec 18",tip:"Metro recommended"},
  "connaught place|greater kailash":{min:250,max:400,metroAlt:"₹60 Metro",note:"Pink Line to GK",tip:"Metro recommended"},
  "connaught place|janakpuri":   {min:280,max:420,metroAlt:"₹50 Blue Line",note:"Blue Line direct",tip:"Metro recommended"},
  "connaught place|new delhi station":{min:50,max:100,metroAlt:"₹20 Metro (same station area)",note:"New Delhi Metro is next to station",tip:"Walk to New Delhi Metro — just 2 min"},
  "connaught place|kashmere gate":{min:120,max:200,metroAlt:"₹30 Yellow Line",note:"Yellow Line 3 stops north",tip:"Metro is faster & cheaper"},
  "connaught place|anand vihar": {min:280,max:420,metroAlt:"₹60 Metro",note:"Blue or Pink Line",tip:"Metro recommended"},
  "connaught place|nizamuddin":  {min:200,max:300,metroAlt:"₹50 Metro",note:"Violet/Pink Line",tip:"Metro recommended"},
  "connaught place|majnu ka tila":{min:200,max:300,metroAlt:"₹40 Yellow+Red",note:"Yellow → Red Line interchange",tip:"Metro to Vidhan Sabha"},
  "connaught place|faridabad":   {min:400,max:600,metroAlt:"₹80 Metro",note:"Long NCR route",tip:"Violet Line from Kashmere Gate area"},
  "connaught place|vaishali":    {min:350,max:500,metroAlt:"₹70 Blue Line",note:"Blue Line terminus",tip:"Metro recommended"},
  "connaught place|sarojini nagar":{min:150,max:230,metroAlt:"₹40 Yellow+Pink",note:"Via INA",tip:"Metro recommended"},
  "connaught place|dilli haat":  {min:150,max:230,metroAlt:"₹40 Yellow",note:"Via INA Metro",tip:"Yellow Line to INA"},
  "connaught place|qutub minar": {min:250,max:380,metroAlt:"₹45 Yellow Line",note:"Yellow Line direct",tip:"Yellow Line terminus — Qutub Minar"},
  "connaught place|humayuns tomb":{min:150,max:230,metroAlt:"₹45 Metro",note:"Violet Line via ITO",tip:"Metro recommended"},
  "connaught place|red fort":    {min:100,max:180,metroAlt:"₹30 Yellow Line",note:"Chandni Chowk or Lal Quila stop",tip:"Metro recommended"},
  "connaught place|jama masjid": {min:100,max:180,metroAlt:"₹35 Metro",note:"Jama Masjid Metro (Violet)",tip:"Yellow to Violet interchange at Kashmere Gate"},
  "connaught place|iit delhi":   {min:200,max:320,metroAlt:"₹40 Yellow Line",note:"Yellow Line to Hauz Khas",tip:"Metro recommended"},
  "connaught place|north campus du":{min:150,max:250,metroAlt:"₹30 Yellow Line",note:"Yellow Line to Vishwavidyalaya",tip:"Metro direct"},
  "connaught place|civil lines": {min:150,max:230,metroAlt:"₹30 Yellow Line",note:"Yellow Line north",tip:"Metro to Civil Lines"},
  "connaught place|pitampura":   {min:280,max:420,metroAlt:"₹60 Red Line",note:"Yellow → Red Line",tip:"Metro recommended"},
  "connaught place|lodi garden": {min:150,max:230,metroAlt:"₹35 Metro",note:"Jor Bagh Metro",tip:"Yellow Line to Jor Bagh"},
  "connaught place|khan market": {min:100,max:180,metroAlt:"₹35 Metro",note:"Violet Line to Khan Market",tip:"Metro fast"},
  "connaught place|mandi house": {min:50,max:100,metroAlt:"₹15 Blue/Violet",note:"Adjacent Metro stations",tip:"1–2 stops on Blue or Violet Line"},
  "connaught place|ito":         {min:80,max:150,metroAlt:"₹25 Violet Line",note:"ITO Metro close",tip:"Violet Line from Mandi House"},
  "connaught place|janpath":     {min:30,max:80,metroAlt:"Walking",note:"5 min walk from Rajiv Chowk",tip:"Just walk from CP — it is adjacent"},

  // ── FROM PAHARGANJ ────────────────────────────────────────────────────────
  "paharganj|connaught place":   {min:60,max:120,metroAlt:"₹20 Metro",note:"1 stop Metro",tip:"Walk or take 1-stop Yellow Line"},
  "paharganj|old delhi":         {min:80,max:150,metroAlt:"₹25 Yellow Line",note:"Yellow Line to Chandni Chowk",tip:"Metro faster in traffic"},
  "paharganj|karol bagh":        {min:80,max:140,metroAlt:"₹30 Blue Line",note:"CP → Blue Line to Karol Bagh",tip:"Metro recommended"},
  "paharganj|airport":           {min:350,max:500,metroAlt:"₹100 Airport Express",note:"Airport Express at New Delhi Stn — steps away",tip:"Walk to New Delhi Station, take Airport Express"},
  "paharganj|saket":             {min:200,max:320,metroAlt:"₹50 Yellow Line",note:"Yellow Line south",tip:"Metro recommended"},
  "paharganj|hauz khas":         {min:220,max:340,metroAlt:"₹50 Yellow Line",note:"Yellow Line to Hauz Khas",tip:"Metro recommended"},
  "paharganj|lajpat nagar":      {min:180,max:280,metroAlt:"₹55 Metro",note:"Yellow → Pink Line",tip:"Metro recommended"},
  "paharganj|anand vihar":       {min:200,max:320,metroAlt:"₹60 Blue Line",note:"Blue Line east",tip:"Metro recommended"},
  "paharganj|akshardham":        {min:200,max:320,metroAlt:"₹50 Blue Line",note:"Blue Line to Akshardham",tip:"Metro recommended"},
  "paharganj|gurgaon":           {min:450,max:650,metroAlt:"₹70 Metro",note:"Long NCR route",tip:"Yellow Line all the way — Metro"},
  "paharganj|nizamuddin":        {min:200,max:300,metroAlt:"₹55 Metro",note:"Via Violet or Pink Line",tip:"Metro recommended"},
  "paharganj|dwarka":            {min:380,max:550,metroAlt:"₹55 Blue Line",note:"Blue Line to Dwarka",tip:"Metro far cheaper"},

  // ── FROM KAROL BAGH ────────────────────────────────────────────────────────
  "karol bagh|connaught place":  {min:80,max:150,metroAlt:"₹30 Blue Line",note:"Blue Line 2 stops",tip:"Blue Line to Rajiv Chowk"},
  "karol bagh|paharganj":        {min:80,max:140,metroAlt:"₹30 Blue Line",note:"Blue Line to New Delhi",tip:"Metro or short auto ride"},
  "karol bagh|old delhi":        {min:130,max:210,metroAlt:"₹40 Metro",note:"Blue → Yellow interchange at Rajiv Chowk",tip:"Metro recommended"},
  "karol bagh|saket":            {min:220,max:340,metroAlt:"₹50 Metro",note:"Blue → Yellow interchange",tip:"Metro recommended"},
  "karol bagh|lajpat nagar":     {min:180,max:280,metroAlt:"₹55 Metro",note:"Blue → Pink interchange",tip:"Metro recommended"},
  "karol bagh|airport":          {min:300,max:450,metroAlt:"₹110 Metro",note:"Blue Line → New Delhi → Airport Express",tip:"Metro recommended"},
  "karol bagh|gurgaon":          {min:400,max:600,metroAlt:"₹65 Metro",note:"Blue → Yellow Line to HUDA City",tip:"Metro recommended"},
  "karol bagh|hauz khas":        {min:230,max:360,metroAlt:"₹55 Metro",note:"Blue → Yellow interchange",tip:"Metro recommended"},
  "karol bagh|nehru place":      {min:200,max:320,metroAlt:"₹55 Metro",note:"Blue → Violet interchange",tip:"Metro recommended"},
  "karol bagh|rohini":           {min:280,max:420,metroAlt:"₹55 Red+Blue",note:"Blue → Red interchange at Inderlok",tip:"Metro recommended"},
  "karol bagh|anand vihar":      {min:250,max:380,metroAlt:"₹60 Blue Line",note:"Blue Line to Anand Vihar",tip:"Metro recommended"},
  "karol bagh|janakpuri":        {min:200,max:300,metroAlt:"₹40 Blue Line",note:"Blue Line west",tip:"Metro recommended"},

  // ── FROM OLD DELHI ────────────────────────────────────────────────────────
  "old delhi|connaught place":   {min:100,max:180,metroAlt:"₹30 Yellow Line",note:"Yellow Line from Chandni Chowk",tip:"Metro faster — 4 stops"},
  "old delhi|paharganj":         {min:80,max:150,metroAlt:"₹25 Yellow Line",note:"Yellow Line to New Delhi",tip:"Metro recommended"},
  "old delhi|karol bagh":        {min:130,max:210,metroAlt:"₹40 Metro",note:"Yellow → Blue interchange at Rajiv Chowk",tip:"Metro recommended"},
  "old delhi|airport":           {min:450,max:600,metroAlt:"₹120 Metro",note:"Yellow → Airport Express at New Delhi",tip:"Metro recommended — saves ₹300+"},
  "old delhi|saket":             {min:280,max:400,metroAlt:"₹50 Yellow Line",note:"Yellow Line south",tip:"Metro recommended"},
  "old delhi|hauz khas":         {min:280,max:420,metroAlt:"₹55 Yellow Line",note:"Yellow Line direct",tip:"Metro recommended"},
  "old delhi|lajpat nagar":      {min:230,max:360,metroAlt:"₹55 Metro",note:"Yellow → Pink Line",tip:"Metro recommended"},
  "old delhi|gurgaon":           {min:500,max:700,metroAlt:"₹75 Metro",note:"Yellow Line all way to HUDA City",tip:"Metro far cheaper"},
  "old delhi|nizamuddin":        {min:200,max:320,metroAlt:"₹55 Metro",note:"Via Violet/Pink interchange",tip:"Metro recommended"},
  "old delhi|anand vihar":       {min:250,max:380,metroAlt:"₹60 Metro",note:"Yellow → Blue interchange",tip:"Metro recommended"},

  // ── FROM HAUZ KHAS ────────────────────────────────────────────────────────
  "hauz khas|connaught place":   {min:200,max:320,metroAlt:"₹40 Yellow Line",note:"Yellow Line 4 stops north",tip:"Metro fast & cheap"},
  "hauz khas|saket":             {min:150,max:230,metroAlt:"₹25 Yellow Line",note:"2 stops south on Yellow Line",tip:"Very close — Metro or auto"},
  "hauz khas|airport":           {min:250,max:380,metroAlt:"₹150 Metro+Express",note:"Yellow → Airport Express at New Delhi",tip:"Metro recommended"},
  "hauz khas|gurgaon":           {min:250,max:400,metroAlt:"₹50 Yellow Line",note:"Yellow Line to HUDA City Centre",tip:"Metro direct"},
  "hauz khas|lajpat nagar":      {min:150,max:230,metroAlt:"₹40 Metro",note:"Yellow → Pink Line",tip:"Metro recommended"},
  "hauz khas|nehru place":       {min:180,max:280,metroAlt:"₹45 Metro",note:"Yellow → Violet Line interchange",tip:"Metro recommended"},
  "hauz khas|paharganj":         {min:220,max:340,metroAlt:"₹50 Yellow Line",note:"Yellow Line north",tip:"Metro recommended"},
  "hauz khas|old delhi":         {min:280,max:420,metroAlt:"₹55 Yellow Line",note:"Yellow Line to Chandni Chowk",tip:"Metro recommended"},
  "hauz khas|iit delhi":         {min:60,max:120,metroAlt:"₹20 Metro or Walk",note:"Very close — adjacent area",tip:"Walk (10 min) or 1-stop auto"},
  "hauz khas|qutub minar":       {min:150,max:230,metroAlt:"₹35 Yellow Line",note:"Yellow Line south to terminus",tip:"Yellow Line direct"},
  "hauz khas|rohini":            {min:380,max:550,metroAlt:"₹90 Metro",note:"Very long",tip:"Yellow → Red Line Metro"},
  "hauz khas|anand vihar":       {min:380,max:550,metroAlt:"₹90 Metro",note:"Very long",tip:"Metro recommended"},
  "hauz khas|noida sector 18":   {min:380,max:550,metroAlt:"₹90 Metro",note:"Very long",tip:"Blue Line Metro recommended"},

  // ── FROM SAKET ────────────────────────────────────────────────────────────
  "saket|connaught place":       {min:200,max:300,metroAlt:"₹40 Yellow Line",note:"Yellow Line north — 4 stops",tip:"Metro fast & comfortable"},
  "saket|airport":               {min:200,max:300,metroAlt:"₹150 Metro",note:"Yellow → Airport Express",tip:"Metro recommended"},
  "saket|hauz khas":             {min:150,max:230,metroAlt:"₹25 Yellow Line",note:"2 stops north on Yellow Line",tip:"Metro fast"},
  "saket|gurgaon":               {min:300,max:450,metroAlt:"₹55 Yellow Line",note:"Yellow Line all way south",tip:"Metro far cheaper"},
  "saket|lajpat nagar":          {min:150,max:230,metroAlt:"₹40 Metro",note:"Yellow → Pink Line",tip:"Metro recommended"},
  "saket|karol bagh":            {min:220,max:340,metroAlt:"₹50 Metro",note:"Yellow → Blue interchange",tip:"Metro recommended"},
  "saket|nehru place":           {min:200,max:300,metroAlt:"₹45 Metro",note:"Yellow → Violet Line",tip:"Metro recommended"},
  "saket|paharganj":             {min:200,max:320,metroAlt:"₹50 Yellow Line",note:"Yellow Line north",tip:"Metro recommended"},
  "saket|old delhi":             {min:280,max:400,metroAlt:"₹55 Yellow Line",note:"Yellow Line north to Chandni Chowk",tip:"Metro recommended"},
  "saket|qutub minar":           {min:120,max:200,metroAlt:"₹25 Yellow Line",note:"2–3 stops on Yellow Line",tip:"Metro fast"},

  // ── FROM GURGAON ──────────────────────────────────────────────────────────
  "gurgaon|connaught place":     {min:400,max:600,metroAlt:"₹60 Yellow Line",note:"Yellow Line from HUDA City Centre",tip:"Metro strongly recommended — saves 45 min in traffic"},
  "gurgaon|airport":             {min:350,max:500,metroAlt:"₹150 Metro",note:"Yellow → Airport Express at New Delhi",tip:"Metro recommended"},
  "gurgaon|saket":               {min:300,max:450,metroAlt:"₹55 Yellow Line",note:"Yellow Line north",tip:"Metro recommended"},
  "gurgaon|hauz khas":           {min:250,max:400,metroAlt:"₹50 Yellow Line",note:"2–3 stops north",tip:"Metro very fast"},
  "gurgaon|paharganj":           {min:450,max:650,metroAlt:"₹70 Yellow Line",note:"Yellow Line to New Delhi",tip:"Metro far cheaper"},
  "gurgaon|old delhi":           {min:500,max:700,metroAlt:"₹75 Yellow Line",note:"Yellow Line all way to Chandni Chowk",tip:"Metro recommended"},
  "gurgaon|noida sector 18":     {min:700,max:1000,metroAlt:"₹100 Metro",note:"Very long cross-city route",tip:"Metro via Yellow+Blue Line"},

  // ── FROM NEHRU PLACE ──────────────────────────────────────────────────────
  "nehru place|connaught place": {min:180,max:280,metroAlt:"₹50 Violet Line",note:"Violet Line to Mandi House → Rajiv Chowk",tip:"Metro recommended"},
  "nehru place|airport":         {min:280,max:420,metroAlt:"₹180 Metro",note:"Violet → Blue → Airport Express",tip:"Metro recommended"},
  "nehru place|saket":           {min:200,max:300,metroAlt:"₹45 Metro",note:"Via Yellow or Violet Line",tip:"Metro recommended"},
  "nehru place|lajpat nagar":    {min:150,max:230,metroAlt:"₹40 Metro",note:"Via Kalkaji/Violet Line",tip:"Metro recommended"},
  "nehru place|old delhi":       {min:250,max:380,metroAlt:"₹55 Metro",note:"Via Violet or Yellow Line",tip:"Metro recommended"},
  "nehru place|hauz khas":       {min:180,max:280,metroAlt:"₹45 Metro",note:"Via Yellow Line south",tip:"Metro recommended"},
  "nehru place|gurgaon":         {min:350,max:500,metroAlt:"₹70 Metro",note:"Via Yellow Line all way",tip:"Metro recommended"},

  // ── FROM NOIDA ────────────────────────────────────────────────────────────
  "noida sector 18|connaught place":{min:350,max:500,metroAlt:"₹60 Blue Line",note:"Blue Line direct",tip:"Metro is far cheaper & faster"},
  "noida sector 18|airport":     {min:500,max:700,metroAlt:"₹200 Metro",note:"Very long",tip:"Metro via Blue Line → Airport Express"},
  "noida sector 18|old delhi":   {min:350,max:500,metroAlt:"₹65 Blue Line",note:"Blue Line to Rajiv Chowk → Chandni Chowk",tip:"Metro recommended"},
  "noida sector 18|gurgaon":     {min:700,max:1000,metroAlt:"₹100 Metro",note:"Cross NCR — very long cab ride",tip:"Metro strongly recommended"},
  "noida city centre|connaught place":{min:400,max:550,metroAlt:"₹65 Blue Line",note:"Blue Line terminus to Rajiv Chowk",tip:"Metro strongly recommended"},
  "noida city centre|airport":   {min:600,max:800,metroAlt:"₹220 Metro",note:"Longest NCR-Airport route",tip:"Metro via Blue → Airport Express"},

  // ── FROM DWARKA ────────────────────────────────────────────────────────────
  "dwarka|airport":              {min:150,max:250,metroAlt:"₹60 Blue Line",note:"Very close — Blue Line goes to airport area",tip:"Metro far cheaper"},
  "dwarka|connaught place":      {min:350,max:500,metroAlt:"₹50 Blue Line",note:"Blue Line to Rajiv Chowk",tip:"Metro strongly recommended"},
  "dwarka|gurgaon":              {min:300,max:450,metroAlt:"₹90 Metro",note:"Blue → Yellow interchange",tip:"Metro recommended"},
  "dwarka|karol bagh":           {min:300,max:450,metroAlt:"₹50 Blue Line",note:"Blue Line direct",tip:"Metro recommended"},
  "dwarka|old delhi":            {min:450,max:650,metroAlt:"₹70 Metro",note:"Very long by road",tip:"Metro strongly recommended"},

  // ── FROM ROHINI ───────────────────────────────────────────────────────────
  "rohini|connaught place":      {min:280,max:420,metroAlt:"₹60 Red+Yellow",note:"Red → Yellow interchange at Kashmere Gate",tip:"Metro recommended"},
  "rohini|airport":              {min:500,max:700,metroAlt:"₹180 Metro",note:"Very long",tip:"Metro via Red → Yellow → Airport Express"},
  "rohini|pitampura":            {min:80,max:150,metroAlt:"₹20 Red Line",note:"2–3 stops on Red Line",tip:"Metro or short auto"},
  "rohini|old delhi":            {min:280,max:420,metroAlt:"₹60 Red Line",note:"Red Line south",tip:"Metro recommended"},
  "rohini|karol bagh":           {min:250,max:380,metroAlt:"₹55 Metro",note:"Red → Blue interchange",tip:"Metro recommended"},
  "rohini|paharganj":            {min:280,max:420,metroAlt:"₹60 Red+Yellow",note:"Red → Yellow interchange",tip:"Metro recommended"},

  // ── FROM ANAND VIHAR ──────────────────────────────────────────────────────
  "anand vihar|connaught place": {min:280,max:420,metroAlt:"₹60 Blue Line",note:"Blue Line direct",tip:"Metro recommended"},
  "anand vihar|old delhi":       {min:250,max:380,metroAlt:"₹55 Metro",note:"Blue → Yellow interchange",tip:"Metro recommended"},
  "anand vihar|paharganj":       {min:200,max:320,metroAlt:"₹60 Blue Line",note:"Blue Line to New Delhi",tip:"Metro recommended"},
  "anand vihar|akshardham":      {min:100,max:180,metroAlt:"₹30 Blue Line",note:"Few stops west on Blue Line",tip:"Metro recommended"},
  "anand vihar|airport":         {min:550,max:750,metroAlt:"₹190 Metro",note:"Very long",tip:"Metro strongly recommended"},

  // ── FROM AKSHARDHAM ───────────────────────────────────────────────────────
  "akshardham|connaught place":  {min:180,max:280,metroAlt:"₹40 Blue Line",note:"Blue Line to Rajiv Chowk",tip:"Metro recommended"},
  "akshardham|airport":          {min:450,max:600,metroAlt:"₹160 Metro",note:"Blue → Airport Express",tip:"Metro recommended"},
  "akshardham|anand vihar":      {min:100,max:180,metroAlt:"₹30 Blue Line",note:"Few stops east on Blue Line",tip:"Metro fast & cheap"},
  "akshardham|old delhi":        {min:200,max:320,metroAlt:"₹50 Metro",note:"Blue → Yellow interchange",tip:"Metro recommended"},
  "akshardham|paharganj":        {min:200,max:320,metroAlt:"₹50 Blue Line",note:"Blue Line to New Delhi",tip:"Metro recommended"},

  // ── FROM NEW DELHI STATION ─────────────────────────────────────────────────
  "new delhi station|airport":   {min:350,max:500,metroAlt:"₹100 Airport Express",note:"Airport Express direct from platform below",tip:"Take Airport Express — just walk downstairs!"},
  "new delhi station|paharganj": {min:40,max:80,metroAlt:"Walking (5 min)",note:"Paharganj is across the road from exit 2",tip:"Walk — literally across the road"},
  "new delhi station|connaught place":{min:50,max:100,metroAlt:"₹20 Yellow Line",note:"1 stop on Yellow Line",tip:"Metro or very short auto"},
  "new delhi station|old delhi": {min:80,max:150,metroAlt:"₹25 Yellow Line",note:"Yellow Line to Chandni Chowk",tip:"Metro fast"},
  "new delhi station|gurgaon":   {min:450,max:650,metroAlt:"₹70 Yellow Line",note:"Yellow Line all way south",tip:"Metro strongly recommended"},

  // ── FROM KASHMERE GATE ────────────────────────────────────────────────────
  "kashmere gate|connaught place":{min:120,max:200,metroAlt:"₹30 Yellow Line",note:"Yellow Line south",tip:"Metro fast — 3 stops"},
  "kashmere gate|old delhi":     {min:80,max:150,metroAlt:"₹25 Yellow Line",note:"Yellow Line 1 stop south",tip:"Metro or cycle rickshaw"},
  "kashmere gate|airport":       {min:400,max:600,metroAlt:"₹130 Metro",note:"Yellow → Airport Express",tip:"Metro recommended"},
  "kashmere gate|anand vihar":   {min:200,max:320,metroAlt:"₹50 Metro",note:"Red or Blue Line",tip:"Metro recommended"},
  "kashmere gate|rohini":        {min:200,max:320,metroAlt:"₹50 Red Line",note:"Red Line north",tip:"Metro recommended"},

  // ── FROM FARIDABAD ────────────────────────────────────────────────────────
  "faridabad|connaught place":   {min:400,max:600,metroAlt:"₹80 Violet Line",note:"Violet Line north",tip:"Metro recommended"},
  "faridabad|airport":           {min:500,max:700,metroAlt:"₹220 Metro",note:"Very long",tip:"Metro via Violet Line"},
  "faridabad|nehru place":       {min:200,max:320,metroAlt:"₹60 Violet Line",note:"Violet Line",tip:"Metro recommended"},
  "faridabad|old delhi":         {min:350,max:500,metroAlt:"₹75 Metro",note:"Violet → Yellow Line",tip:"Metro recommended"},

  // ── FROM LAJPAT NAGAR ─────────────────────────────────────────────────────
  "lajpat nagar|connaught place":{min:150,max:250,metroAlt:"₹50 Pink Line",note:"Pink Line to Rajiv Chowk area",tip:"Metro recommended"},
  "lajpat nagar|airport":        {min:280,max:400,metroAlt:"₹160 Metro",note:"Pink → Yellow → Airport Express",tip:"Metro recommended"},
  "lajpat nagar|saket":          {min:150,max:230,metroAlt:"₹40 Metro",note:"Via Yellow or Pink Line",tip:"Metro recommended"},
  "lajpat nagar|hauz khas":      {min:150,max:230,metroAlt:"₹40 Metro",note:"Via Yellow Line",tip:"Metro recommended"},
  "lajpat nagar|south extension":{min:80,max:150,metroAlt:"₹25 Metro",note:"Adjacent — 1 stop",tip:"Metro or walk (15 min)"},
  "lajpat nagar|nehru place":    {min:150,max:230,metroAlt:"₹40 Metro",note:"Via Violet or Pink Line",tip:"Metro recommended"},
  "lajpat nagar|greater kailash":{min:100,max:180,metroAlt:"₹30 Pink Line",note:"2 stops on Pink Line",tip:"Metro fast"},
  "lajpat nagar|old delhi":      {min:230,max:360,metroAlt:"₹55 Metro",note:"Pink → Yellow interchange",tip:"Metro recommended"},
  "lajpat nagar|gurgaon":        {min:350,max:500,metroAlt:"₹70 Metro",note:"Pink → Yellow → Gurgaon",tip:"Metro recommended"},

  // ── FROM QUTUB MINAR ──────────────────────────────────────────────────────
  "qutub minar|connaught place": {min:250,max:380,metroAlt:"₹45 Yellow Line",note:"Yellow Line north — 5 stops",tip:"Metro fast & cheap"},
  "qutub minar|hauz khas":       {min:150,max:230,metroAlt:"₹30 Yellow Line",note:"2 stops north",tip:"Metro fast"},
  "qutub minar|airport":         {min:300,max:450,metroAlt:"₹165 Metro",note:"Yellow → Airport Express",tip:"Metro recommended"},
  "qutub minar|gurgaon":         {min:250,max:380,metroAlt:"₹55 Yellow Line",note:"Yellow Line south toward Gurgaon",tip:"Metro recommended"},
  "qutub minar|saket":           {min:120,max:200,metroAlt:"₹25 Yellow Line",note:"2–3 stops north",tip:"Metro fast"},

  // ── VAISHALI ──────────────────────────────────────────────────────────────
  "vaishali|connaught place":    {min:350,max:500,metroAlt:"₹70 Blue Line",note:"Blue Line terminus to Rajiv Chowk",tip:"Metro strongly recommended"},
  "vaishali|airport":            {min:600,max:800,metroAlt:"₹220 Metro",note:"Very long cross NCR",tip:"Metro recommended"},
  "vaishali|noida sector 18":    {min:200,max:320,metroAlt:"₹40 Blue Line",note:"Blue Line few stops",tip:"Metro fast"},
  "vaishali|anand vihar":        {min:100,max:180,metroAlt:"₹25 Blue Line",note:"Very close — 2 stops",tip:"Metro recommended"},
};

// ── FARE LOOKUP ENGINE ────────────────────────────────────────────────────────
function lookupFare(from, to) {
  const f = from.toLowerCase().trim();
  const t = to.toLowerCase().trim();
  const key = `${f}|${t}`;
  const revKey = `${t}|${f}`;
  return FARES[key] || FARES[revKey] || null;
}

// Smart fare lookup that resolves aliases first
function smartFareLookup(fromInput, toInput) {
  const fromLoc = resolveLocation(fromInput);
  const toLoc = resolveLocation(toInput);

  if (fromLoc && toLoc) {
    const fromKey = fromLoc.name.toLowerCase();
    const toKey = toLoc.name.toLowerCase();
    const result = lookupFare(fromKey, toKey);
    if (result) {
      return {
        ...result,
        fromName: fromLoc.name,
        toName: toLoc.name,
        found: true
      };
    }
    // Not in table — estimate by distance heuristic
    return {
      min: 80, max: 200,
      note: "Exact route not in database — estimated at ₹15–20/km",
      tip: "Always use Ola/Uber for transparent pricing",
      fromName: fromLoc.name,
      toName: toLoc.name,
      found: false,
      estimated: true
    };
  }
  return null;
}

// Get all fares FROM a location
function getAllFaresFrom(locationInput) {
  const loc = resolveLocation(locationInput);
  if (!loc) return null;
  const locKey = loc.name.toLowerCase();
  const results = [];
  for (const [key, fare] of Object.entries(FARES)) {
    const [from, to] = key.split("|");
    if (from === locKey) {
      results.push({ to: to.replace(/\b\w/g, c => c.toUpperCase()), ...fare });
    }
    if (to === locKey) {
      results.push({ to: from.replace(/\b\w/g, c => c.toUpperCase()), ...fare });
    }
  }
  return results.length > 0 ? { fromName: loc.name, fares: results } : null;
}
