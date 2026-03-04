const MOCK_DATA = {
    locations: [
           { name: "Baringo", weather: "28°C, Sunny", crops: ["maize", "beans", "sorghum", "livestock", "green grams", "finger millet", "pigeon peas", "cowpeas", "mangoes"] },
            { name: "Bomet", weather: "22°C, Cloudy", crops: ["tea", "maize", "potatoes", "vegetables", "dairy", "avocado", "cabbages", "peas", "carrots"] },
            { name: "Bungoma", weather: "24°C, Light Rain", crops: ["sugarcane", "maize", "beans", "millet", "sweet potatoes", "bananas", "soya beans", "groundnuts", "sunflower"] },
            { name: "Busia", weather: "26°C, Humid", crops: ["cassava", "maize", "sorghum", "finger millet", "sweet potatoes", "groundnuts", "rice", "simsim", "cowpeas"] },
            { name: "Elgeyo-Marakwet", weather: "20°C, Cool", crops: ["potatoes", "maize", "wheat", "barley", "dairy", "peas", "carrots", "cabbages", "beetroot"] },
            { name: "Embu", weather: "23°C, Partly Cloudy", crops: ["coffee", "tea", "macadamia", "vegetables", "rice", "bananas", "avocado", "miraa", "passion fruit", "strawberries"] },
            { name: "Garissa", weather: "34°C, Very Hot", crops: ["sorghum", "livestock", "watermelon", "millet", "green grams", "mangoes", "camel milk", "drought-resistant vegetables"] },
            { name: "Homa Bay", weather: "27°C, Sunny", crops: ["maize", "sorghum", "sunflower", "sugarcane", "cotton", "tobacco", "beans", "fish farming", "groundnuts"] },
            { name: "Isiolo", weather: "31°C, Hot & Dry", crops: ["livestock", "sorghum", "millet", "green grams", "camel milk", "drought-resistant vegetables", "cowpeas"] },
            { name: "Kajiado", weather: "26°C, Windy", crops: ["livestock", "beans", "vegetables", "sorghum", "pigeon peas", "maize", "fodder", "watermelon", "peas"] },
            { name: "Kakamega", weather: "25°C, Showers", crops: ["sugarcane", "tea", "maize", "sweet potatoes", "bananas", "soya beans", "avocado", "vegetables", "dairy"] },
            { name: "Kericho", weather: "21°C, Drizzle", crops: ["tea", "maize", "vegetables", "potatoes", "dairy", "avocado", "peas", "cabbages"] },
            { name: "Kiambu", weather: "22°C, Cool & Cloudy", crops: ["coffee", "tea", "vegetables", "avocado", "potatoes", "dairy", "flowers", "herbs", "strawberries", "passion fruit", "cabbages", "onions"] },
            { name: "Kilifi", weather: "29°C, Humid & Sunny", crops: ["cashew", "cassava", "maize", "coconut", "mangoes", "green grams", "sisal", "citrus", "bixa", "simsim"] },
            { name: "Kirinyaga", weather: "24°C, Partly Cloudy", crops: ["rice", "coffee", "tea", "macadamia", "vegetables", "bananas", "avocado", "passion fruit"] },
            { name: "Kisii", weather: "23°C, Cloudy", crops: ["bananas", "tea", "maize", "avocado", "sweet potatoes", "macadamia", "dairy", "pyrethrum", "vegetables", "peas"] },
            { name: "Kisumu", weather: "28°C, Hot & Humid", crops: ["rice", "sugarcane", "maize", "sorghum", "vegetables", "fish farming", "cotton", "simsim", "cowpeas"] },
            { name: "Kitui", weather: "29°C, Sunny & Dry", crops: ["sorghum", "beans", "livestock", "green grams", "mangoes", "pigeon peas", "cowpeas", "watermelon", "drought-resistant vegetables"] },
            { name: "Kwale", weather: "30°C, Sunny", crops: ["cashew", "coconut", "maize", "cassava", "mangoes", "green grams", "sisal", "bixa", "simsim", "spices"] },
            { name: "Laikipia", weather: "24°C, Sunny", crops: ["wheat", "barley", "livestock", "potatoes", "cabbages", "peas", "dairy", "flowers", "carrots", "beetroot"] },
            { name: "Lamu", weather: "31°C, Hot & Humid", crops: ["cashew", "coconut", "cotton", "mangoes", "rice", "simsim", "bixa", "spices", "fish farming"] },
            { name: "Machakos", weather: "27°C, Partly Cloudy", crops: ["beans", "maize", "sorghum", "green grams", "mangoes", "pigeon peas", "cowpeas", "watermelon", "vegetables"] },
            { name: "Makueni", weather: "28°C, Sunny", crops: ["beans", "sorghum", "maize", "green grams", "mangoes", "livestock", "watermelon", "pigeon peas", "cowpeas", "drought-resistant vegetables"] },
            { name: "Mandera", weather: "35°C, Very Hot", crops: ["livestock", "sorghum", "millet", "camel milk", "drought-resistant vegetables"] },
            { name: "Marsabit", weather: "30°C, Windy & Dry", crops: ["livestock", "sorghum", "millet", "camel milk", "drought-resistant vegetables"] },
            { name: "Meru", weather: "22°C, Cool", crops: ["coffee", "tea", "bananas", "macadamia", "potatoes", "avocado", "miraa", "vegetables", "dairy", "passion fruit", "strawberries"] },
            { name: "Migori", weather: "26°C, Sunny", crops: ["sugarcane", "tobacco", "maize", "beans", "sorghum", "cotton", "groundnuts", "fish farming"] },
            { name: "Mombasa", weather: "31°C, Hot & Humid", crops: ["vegetables", "coconut", "mangoes", "cashew", "fish farming", "spices", "urban farming"] },
            { name: "Murang'a", weather: "23°C, Cloudy", crops: ["coffee", "tea", "avocado", "macadamia", "vegetables", "bananas", "dairy", "passion fruit"] },
            { name: "Nairobi", weather: "25°C, Partly Cloudy", crops: ["vegetables", "maize", "potatoes", "herbs", "flowers", "dairy", "urban farming", "strawberries", "onions"] },
            { name: "Nakuru", weather: "22°C, Sunny Intervals", crops: ["potatoes", "wheat", "maize", "barley", "cabbages", "dairy", "flowers", "peas", "carrots", "onions"] },
            { name: "Nandi", weather: "22°C, Light Showers", crops: ["tea", "maize", "sugarcane", "avocado", "dairy", "forest products", "vegetables", "bananas"] },
            { name: "Narok", weather: "24°C, Sunny", crops: ["wheat", "barley", "maize", "livestock", "potatoes", "peas", "sunflower", "dairy"] },
            { name: "Nyamira", weather: "22°C, Cloudy", crops: ["tea", "bananas", "maize", "avocado", "sweet potatoes", "macadamia", "dairy", "pyrethrum", "vegetables"] },
            { name: "Nyandarua", weather: "18°C, Cool & Misty", crops: ["potatoes", "peas", "carrots", "cabbages", "wheat", "dairy", "onions", "beetroot", "strawberries"] },
            { name: "Nyeri", weather: "21°C, Cool", crops: ["coffee", "tea", "potatoes", "vegetables", "macadamia", "dairy", "avocado", "passion fruit", "strawberries"] },
            { name: "Samburu", weather: "29°C, Sunny & Dry", crops: ["livestock", "sorghum", "millet", "camel milk", "drought-resistant vegetables"] },
            { name: "Siaya", weather: "27°C, Sunny", crops: ["maize", "sorghum", "cassava", "sugarcane", "beans", "cotton", "groundnuts", "fish farming", "cowpeas"] },
            { name: "Taita-Taveta", weather: "28°C, Partly Cloudy", crops: ["vegetables", "maize", "beans", "sorghum", "mangoes", "livestock", "sisal", "green grams", "cashew"] },
            { name: "Tana River", weather: "32°C, Hot", crops: ["rice", "maize", "livestock", "sorghum", "mangoes", "watermelon", "drought-resistant vegetables", "simsim"] },
            { name: "Tharaka-Nithi", weather: "25°C, Cloudy", crops: ["coffee", "sorghum", "beans", "green grams", "pigeon peas", "livestock", "miraa", "mangoes", "cowpeas"] },
            { name: "Trans Nzoia", weather: "23°C, Sunny", crops: ["maize", "wheat", "beans", "dairy", "sunflower", "peas", "soya beans", "barley", "potatoes"] },
            { name: "Turkana", weather: "33°C, Very Hot & Dry", crops: ["sorghum", "livestock", "millet", "camel milk", "drought-resistant vegetables", "cowpeas"] },
            { name: "Uasin Gishu", weather: "20°C, Cool & Sunny", crops: ["maize", "wheat", "sunflower", "barley", "dairy", "potatoes", "peas", "cabbages", "carrots", "onions"] },
            { name: "Vihiga", weather: "24°C, Cloudy", crops: ["tea", "maize", "bananas", "avocado", "sweet potatoes", "vegetables", "dairy", "macadamia"] },
            { name: "Wajir", weather: "34°C, Hot & Dry", crops: ["livestock", "sorghum", "millet", "camel milk", "drought-resistant vegetables"] },
            { name: "West Pokot", weather: "27°C, Sunny", crops: ["maize", "sorghum", "livestock", "beans", "millet", "green grams", "cowpeas"] }
    ],
    cropDetails: {
        'maize': {
            id: 'maize',
            name: 'Maize',
            guide: 'Maize requires well-drained loamy soils, adequate rainfall (600-1200mm annually), and temperatures between 20-30°C. Plant certified seeds at the onset of rains. Common varieties include PH series, H614. Fertilize with DAP at planting and CAN/Urea for top-dressing. Watch out for Maize Lethal Necrosis Disease (MLND) and fall armyworm.'
        },
        'beans': {
            id: 'beans',
            name: 'Beans',
            guide: 'Beans prefer well-drained soils with a pH of 6.0-7.0. They need moderate rainfall (300-600mm) and temperatures between 20-25°C. Plant early maturing varieties like GLP-2 (Rosecoco) or Canadian Wonder. Practice crop rotation to prevent diseases like anthracnose and rust.'
        },
        'potatoes': {
            id: 'potatoes',
            name: 'Potatoes',
            guide: 'Potatoes thrive in deep, well-drained, fertile loamy soils. They require cool temperatures (15-20°C) and consistent moisture. Use certified potato seeds. Key diseases include late blight and bacterial wilt. Popular varieties: Asante, Dutch Robijn.'
        },
        'cabbages': {
            id: 'cabbages',
            name: 'Cabbages',
            guide: 'Cabbages prefer well-drained, fertile soils with a pH of 6.0-6.8. They need cool to moderate temperatures (15-20°C) and consistent moisture. Plant seedlings in rows. Common pests include cutworms and aphids. Varieties: Copenhagen Market, Gloria.'
        },
        'tomatoes': {
            id: 'tomatoes',
            name: 'Tomatoes',
            guide: 'Tomatoes require well-drained, fertile soils with a pH of 6.0-6.8. They need warm temperatures (20-25°C) and consistent watering. Support plants with stakes. Susceptible to diseases like early and late blight, and pests like whiteflies and Tuta absoluta. Varieties: Rio Grande, Anna F1.'
        },
        'pyrethrum': {
            id: 'pyrethrum',
            name: 'Pyrethrum',
            guide: 'Pyrethrum thrives in cool, high-altitude areas with good rainfall and well-drained, slightly acidic soils. It\'s a perennial cash crop. Harvest flowers when fully open for maximum pyrethrin content.'
        },
        'wheat': {
            id: 'wheat',
            name: 'Wheat',
            guide: 'Wheat prefers cool, temperate climates and well-drained, fertile soils. Planting time is crucial, usually at the onset of short rains. Common varieties: Eagle 10, Robin. Important to manage rust diseases and stem borer pests.'
        },
        'barley': {
            id: 'barley',
            name: 'Barley',
            guide: 'Barley is a cool-season cereal that grows best in well-drained, fertile soils. It has a shorter growing season than wheat. Used for malting (beer) or animal feed. Key considerations are proper planting depth and disease control.'
        },
        'tea': {
            id: 'tea',
            name: 'Tea',
            guide: 'Tea thrives in high-altitude, cool areas with well-distributed rainfall (over 1200mm annually) and deep, acidic, well-drained soils. It\'s a perennial crop. Regular plucking of young shoots is essential for quality tea production. Common issues include Tea Mosquito Bug and Armillaria root rot.'
        },
        'sugarcane': {
            id: 'sugarcane',
            name: 'Sugarcane',
            guide: 'Sugarcane requires hot, humid conditions with high rainfall (1500mm+) and fertile, well-drained soils. Planted from stem cuttings. It\'s a long-duration crop. Key pests include stalk borer, and diseases like smut and rust.'
        },
        'millet': {
            id: 'millet',
            name: 'Millet',
            guide: 'Millet is a drought-tolerant cereal suitable for arid and semi-arid lands (ASALs). It grows well in poor soils and requires less water than maize. Good for food security in dry regions. Varieties: Finger Millet, Pearl Millet.'
        },
        'sorghum': {
            id: 'sorghum',
            name: 'Sorghum',
            guide: 'Sorghum is another drought-tolerant cereal, adaptable to various soil types, especially well-drained loams. It tolerates hot, dry conditions. Important for food and fodder in ASALs. Bird control is often a major concern during maturity.'
        },
        'sunflower': {
            id: 'sunflower',
            name: 'Sunflower',
            guide: 'Sunflower grows well in a wide range of soils but prefers well-drained loams. It\'s a moderate water user and tolerant to drought. Primarily grown for oil and animal feed. Important to control birds and diseases like rust.'
        },
        'dairy': {
            id: 'dairy',
            name: 'Dairy Farming',
            guide: 'Dairy farming involves raising cattle for milk production. Requires good pasture/fodder, proper housing, disease management (e.g., tick control, mastitis prevention), and selective breeding for high milk yields. Access to clean water is vital.'
        },
        'fish farming': {
            id: 'fish farming',
            name: 'Fish Farming',
            guide: 'Fish farming (aquaculture) involves raising fish in ponds or tanks. Tilapia and Catfish are common species in Kenya. Requires good water quality management, appropriate feeding, and disease prevention. Pond preparation and regular monitoring are key.'
        },
        'green grams': {
            id: 'green grams',
            name: 'Green Grams',
            guide: 'Green grams are drought-tolerant legumes suitable for ASALs. They improve soil fertility through nitrogen fixation. Prefer well-drained sandy loams. Relatively short maturity period. Pests include aphids and pod borers.'
        },
        'pigeon peas': {
            id: 'pigeon peas',
            name: 'Pigeon Peas',
            guide: 'Pigeon peas are hardy, drought-resistant legumes, often grown in semi-arid areas. They are perennial and provide food, fodder, and firewood. Improve soil fertility. Can be intercropped with cereals. Susceptible to pod borers.'
        },
        'cowpeas': {
            id: 'cowpeas',
            name: 'Cowpeas',
            guide: 'Cowpeas are versatile, drought-tolerant legumes suitable for marginal lands. Grown for grains (njahi), leaves (kunde), and fodder. They fix nitrogen. Pests like aphids and pod borers are common. Varieties like K80 are popular.'
        },
        'cassava': {
            id: 'cassava',
            name: 'Cassava',
            guide: 'Cassava is a staple food crop well-adapted to drought and poor soils. Grown for its starchy tubers. Relatively low management once established. Important to use disease-free cuttings and watch out for Cassava Mosaic Disease and Cassava Brown Streak Disease.'
        },
        'drought-resistant vegetables': {
            id: 'drought-resistant vegetables',
            name: 'Drought-Resistant Vegetables',
            guide: 'Examples include Amaranth (Mchicha), African Nightshade (Managu), Spider Plant (Sageti), and traditional leafy greens. These vegetables are well-adapted to dry conditions, provide essential nutrients, and often require less water than exotic varieties.'
        },
        'mangoes': {
            id: 'mangoes',
            name: 'Mangoes',
            guide: 'Mangoes thrive in tropical and subtropical climates with distinct wet and dry seasons. Require well-drained deep soils. Common varieties: Apple, Ngowe, Kent. Key pests are fruit flies and diseases like powdery mildew and anthracnose.'
        },
        'livestock': {
            id: 'livestock',
            name: 'Livestock Farming',
            guide: 'Livestock farming in dry areas often focuses on drought-tolerant animals like goats, sheep, and camels. Requires strategic grazing management, water provision, and disease control. Fodder production and conservation are crucial during dry spells.'
        },
        'honey': {
            id: 'honey',
            name: 'Beekeeping (Honey Production)',
            guide: 'Beekeeping involves managing bee colonies for honey, wax, and pollination. Requires knowledge of bee biology, hive management (e.g., Langstroth, traditional hives), pest/disease control (e.g., Varroa mites), and identifying nectar sources.'
        },
        'dates': {
            id: 'dates',
            name: 'Dates',
            guide: 'Date palms thrive in hot, arid climates with access to irrigation. They require deep sandy loam soils. Long-lived trees, producing sweet fruits. Important crop in very dry regions for food and income.'
        },
        'simsim': {
            id: 'simsim',
            name: 'Simsim (Sesame)',
            guide: 'Simsim is an oilseed crop tolerant to drought. Grows best in well-drained, light soils. Small seeds are rich in oil and protein. Can be grown as a cash crop in semi-arid areas. Harvesting is labor-intensive.'
        },
        'coffee': {
            id: 'coffee',
            name: 'Coffee',
            guide: 'Coffee thrives in high-altitude areas (1500-2100m) with well-distributed rainfall (1000-2000mm) and deep, well-drained, acidic soils. Arabica is the main type grown in Kenya. Key diseases include Coffee Berry Disease (CBD) and Coffee Leaf Rust.'
        },
        'macadamia': {
            id: 'macadamia',
            name: 'Macadamia',
            guide: 'Macadamia nuts grow best in subtropical climates with good rainfall and well-drained soils. Long-term investment. Requires proper spacing, pruning, and pest management. High-value cash crop.'
        },
        'miraa': {
            id: 'miraa',
            name: 'Miraa (Khat)',
            guide: 'Miraa is a stimulant plant grown in specific high-altitude areas, mainly Meru. It is a perennial shrub. Its cultivation and consumption have social and economic implications, and its legality varies by region.'
        },
        'horticulture': {
            id: 'horticulture',
            name: 'Horticulture (Fruits & Vegetables)',
            guide: 'Horticulture covers a wide range of high-value crops like flowers, fruits (e.g., avocado, passion fruit), and vegetables (e.g., French beans, snow peas). Often grown under irrigation or in greenhouses for export. Requires intensive management, precise nutrient application, and pest control.'
        },
        'strawberries': {
            id: 'strawberries',
            name: 'Strawberries',
            guide: 'Strawberries prefer cool, temperate climates and well-drained, slightly acidic soils rich in organic matter. Require consistent moisture and good sun exposure. Often grown on raised beds or in vertical farms. Susceptible to fungal diseases and slugs.'
        },
        'coconut': {
            id: 'coconut',
            name: 'Coconut',
            guide: 'Coconuts thrive in tropical coastal areas with sandy soils and high rainfall. Long-lived palm trees providing nuts for food, oil, and various other products. Important economic crop in coastal regions.'
        },
        'cashew nuts': {
            id: 'cashew nuts',
            name: 'Cashew Nuts',
            guide: 'Cashew trees grow well in tropical climates, tolerating poorer soils and some drought once established. Grown for their edible nuts and cashew apple. Important for coastal economies. Pests include cashew stem borer.'
        },
        'rice': {
            id: 'rice',
            name: 'Rice',
            guide: 'Rice is a major cereal crop, primarily grown in flooded paddies (irrigation schemes). Requires warm temperatures and abundant water. Key varieties: Basmati, IR. Important for food security in regions like Ahero and Mwea.'
        },
        'sweet potatoes': {
            id: 'sweet potatoes',
            name: 'Sweet Potatoes',
            guide: 'Sweet potatoes are versatile root crops, tolerant to a range of soils and some drought. Provide energy and vitamins. Propagated by vine cuttings. Pests include sweet potato weevil, and diseases like sweet potato virus disease.'
        },
        'groundnuts': {
            id: 'groundnuts',
            name: 'Groundnuts (Peanuts)',
            guide: 'Groundnuts are legumes that grow best in well-drained, sandy loams. Important for oil and protein. Fix nitrogen in the soil. Susceptible to aflatoxin contamination if not dried and stored properly. Pests include aphids and leaf miners.'
        },
        'tobacco': {
            id: 'tobacco',
            name: 'Tobacco',
            guide: 'Tobacco is a cash crop requiring specific climatic conditions and intensive management. Grown for its leaves. Its cultivation is regulated due to health concerns. Requires significant labor and specific curing processes.'
        },
        'finger millet': {
            id: 'finger millet',
            name: 'Finger Millet',
            guide: 'Finger millet is a highly nutritious, drought-tolerant cereal. It thrives in various soils but prefers well-drained loams. Important for food security, especially in semi-arid regions. Resistant to most pests and diseases.'
        },
        'onions': {
            id: 'onions',
            name: 'Onions',
            guide: 'Onions prefer well-drained, fertile loamy soils with a pH of 6.0-7.0. They require cool weather for vegetative growth and warm, dry weather for bulb formation. Common pests include thrips, and diseases like purple blotch.'
        },
        'organic matter': {
            id: 'organic matter',
            name: 'Organic Matter in Soil',
            guide: 'Organic matter in soil consists of decomposing plant and animal residues. It improves soil structure, increases water retention, enhances nutrient availability, and supports beneficial microbial life. Key to long-term soil health and fertility.'
        },
        'organic pest control': {
            id: 'organic pest control',
            name: 'Organic Pest Control',
            guide: 'Organic pest control methods include using beneficial insects (e.g., ladybugs for aphids), companion planting (e.g., marigolds to deter nematodes), neem oil, homemade insecticidal soaps, crop rotation, and physical barriers like netting.'
        },
        'phytophthora root rot': {
            id: 'phytophthora root rot',
            name: 'Phytophthora Root Rot',
            guide: 'Phytophthora root rot is a destructive soil-borne disease caused by water molds, thriving in waterlogged conditions. It causes roots to rot, leading to wilting, yellowing, and plant death. Management includes improving drainage, using resistant varieties, and applying appropriate fungicides.'
        },
        'aflatoxin contamination': {
            id: 'aflatoxin contamination',
            name: 'Aflatoxin Contamination',
            guide: 'Aflatoxins are toxic compounds produced by certain fungi (Aspergillus species), commonly affecting maize, groundnuts, and other cereals/oilseeds, especially under hot, humid, and poor storage conditions. Ingestion can cause severe health issues in humans and animals. Prevention involves proper drying to safe moisture levels, good storage practices, pest control, and using resistant crop varieties.'
        },
        'water quality': {
            id: 'water quality',
            name: 'Water Quality for Fish Farming',
            guide: 'Maintaining good water quality is crucial for healthy fish growth and preventing diseases in aquaculture. Key parameters to monitor include dissolved oxygen (DO), pH, ammonia, nitrite, nitrate, and temperature. Regular testing and aeration are often necessary. Excessive organic matter and sudden changes in parameters can stress fish.'
        },
        'soil erosion': {
            id: 'soil erosion',
            name: 'Soil Erosion',
            guide: 'Soil erosion is the process by which the topsoil is moved from one place to another by natural forces like wind and water, or by human activities like tillage. It leads to loss of fertile topsoil, reduced agricultural productivity, and sedimentation of water bodies. Control methods include terracing, contour farming, cover cropping, mulching, agroforestry, and planting permanent vegetation.'
        },
        'farm mechanization': {
            id: 'farm mechanization',
            name: 'Farm Mechanization',
            guide: 'Farm mechanization involves the use of agricultural machinery and equipment (tractors, plows, planters, harvesters, irrigation pumps) to perform farming operations. It aims to increase efficiency, reduce manual labor, improve timeliness of operations, and potentially increase yields and profitability. It ranges from basic tools to advanced precision agriculture technologies.'
        },
        'greenhouse farming': {
            id: 'greenhouse farming',
            name: 'Greenhouse Farming',
            guide: 'Greenhouse farming is a method of growing crops in a controlled environment under a transparent roof (glass or plastic). This allows for year-round production, protection from harsh weather (excessive rain, hail, extreme temperatures) and pests, and efficient use of resources like water and nutrients (e.g., through drip irrigation). It is commonly used for high-value crops like tomatoes, capsicum, and flowers.'
        },
        'urban farming': {
            id: 'urban farming',
            name: 'Urban Farming',
            guide: 'Urban farming, or urban agriculture, is the practice of cultivating, processing, and distributing food in or around urban areas. It includes community gardens, rooftop gardens, vertical farms, and backyard plots. Benefits include increased food access, reduced food miles, community building, and greening of urban spaces. Techniques like sack farming and hydroponics are common.'
        },
        'forest products': {
            id: 'forest products',
            name: 'Forest Products',
            guide: 'Forest products encompass a wide range of goods derived from forests, including timber (for construction, furniture), fuelwood, charcoal, pulpwood (for paper), non-timber forest products (NTFPs) such as medicinal plants, honey, wild fruits, nuts, resins, and gums. Sustainable management of forests is crucial for maintaining the supply of these products and ecological balance.'
        },
        'fodder': {
            id: 'fodder',
            name: 'Fodder Crops',
            guide: 'Fodder refers to plant material (such as hay, silage, pasture, or specially cultivated crops like Napier grass, Lucerne, Calliandra) grown and harvested specifically for feeding livestock. Adequate and nutritious fodder is essential for livestock health, growth, and productivity, especially during dry seasons. Fodder conservation techniques like ensiling or hay making are important.'
        },
        'spices': {
            id: 'spices',
            name: 'Spices',
            guide: 'Spices are aromatic plant parts (seeds, fruits, roots, bark, flowers) used to flavor and preserve food. Common spices grown in Kenya include ginger, turmeric, chili, coriander, and black pepper. They often require specific climatic conditions and careful post-harvest handling (drying, curing) to preserve their flavor and aroma. They can be high-value cash crops.'
        }
    },
     pestDiagnoses: {
            "yellow spots": "This could be a sign of a fungal infection like **Rust** (check for orange-brown pustules on underside of leaves) or a **nutrient deficiency** (Nitrogen or Magnesium). Consider a soil test. Rust management includes resistant varieties, proper spacing, and fungicides (e.g., Mancozeb). It could also be a symptom of a viral disease if accompanied by stunting or distortion.",
            "holes in leaves": "Holes are often caused by chewing pests like the **Fall Armyworm** (in maize), **Cabbage Worms**, **African Bollworm**, **cutworms**, or **slugs**. Look for caterpillars, their droppings, or slimy trails, especially on new leaves. Consider biological controls (e.g., Bt), hand-picking, or appropriate insecticides. Physical barriers like netting can also prevent damage.",
            "wilting": "Wilting can be caused by lack of water, **root diseases** like Bacterial Wilt or Fusarium Wilt, or **pests attacking the roots** (e.g., nematodes, cutworms, grubs). Check the soil moisture first. If soil is moist, inspect roots for damage or signs of rot. Bacterial wilt is soil-borne and managed through crop rotation and resistant varieties. Excessive heat or wind can also cause temporary wilting.",
            "white flies": "Whiteflies are tiny, white, sap-sucking insects that cluster on the underside of leaves and fly up when disturbed. They weaken the plant and transmit diseases like **Tomato Yellow Leaf Curl Virus** or **Cassava Mosaic Disease**. Consider using yellow sticky traps, insecticidal soaps, neem oil, or introducing natural predators like ladybugs. Good greenhouse ventilation can help prevent infestations.",
            "aphids": "Aphids are small, soft-bodied insects that cluster on new growth and the underside of leaves, sucking plant sap. This causes stunted growth, curled leaves, and honeydew (sticky residue) which can lead to sooty mold. They can also transmit viruses. Use insecticidal soap, neem oil, or encourage beneficial insects like ladybirds and hoverflies. Strong water sprays can dislodge them.",
            "powdery mildew": "This is a common fungal disease appearing as white, powdery spots on leaves, stems, and sometimes fruits. It thrives in humid conditions with poor air circulation. Common on cucurbits, peas, and tomatoes. Ensure good air circulation, prune affected parts, and consider fungicides (e.g., sulfur-based) if severe. Resistant varieties are also available. Avoid overhead watering.",
            "stunted growth": "Stunted growth can be due to severe **nutrient deficiency** (e.g., lack of N, P, K), **poor soil drainage**, **soil compaction**, **pest infestation** (e.g., nematodes, root-feeding insects), **root damage**, **water stress** (too much or too little), or **viral diseases** (e.g., maize lethal necrosis disease). A soil test and inspecting roots for abnormalities would be good next steps. Ensure proper fertilization and irrigation.",
            "leaf curling": "Leaf curling can indicate **viral infections** (like Mosaic Virus), **sap-sucking pests** (aphids, whiteflies, thrips, mites), **herbicide damage**, or **environmental stress** (e.g., heat, cold, drought). Check for pest presence on the underside of leaves and use disease-free planting material. Remove severely infected plants. Ensure plants are not exposed to herbicide drift.",
            "discoloration": "Leaf discoloration (other than yellow spots) can be a sign of various **nutrient deficiencies** (e.g., purpling for phosphorus, general paling for nitrogen, yellowing between veins for magnesium, pale green for sulfur) or certain **fungal diseases** (e.g., early blight, downy mildew). A soil test is highly recommended to pinpoint deficiencies. For fungal issues, ensure good air circulation and consider fungicides. It could also be due to water stress or extreme temperatures.",
            "fruit rot": "Fruit rot is often caused by **fungal or bacterial infections**, especially in humid conditions or due to fruit fly damage. Ensure good air circulation, proper pruning, and remove infected fruits immediately. Some types like **Anthracnose** cause sunken spots. **Blight** can also cause fruit rot. Preventing fruit damage and keeping fruits off the ground reduces incidence.",
            "borers": "Borers, like **stem borers** (in maize, sugarcane, sorghum), **fruit borers** (in tomatoes, cotton), or **pod borers** (in legumes), tunnel into stems, fruits, or pods, causing wilting, stunted growth, or direct damage to the produce. Look for entry holes and frass (sawdust-like excrement). Management often involves resistant varieties, proper residue management, or targeted insecticides. Pheromone traps can monitor populations.",
            "weevils": "Weevils are common pests of stored grains (e.g., **maize weevils**, **bean weevils**, **rice weevils**) and root crops (e.g., **sweet potato weevils**). They cause significant post-harvest losses. For grains, proper drying and airtight storage (e.g., hermetic bags) are crucial; for sweet potatoes, early harvest and resistant varieties help. Field weevils can also cause leaf damage. Good storage hygiene is essential.",
            "spider mites": "Tiny arachnid pests that suck sap, causing yellowing, stippling (tiny dots), and fine webbing on the underside of leaves. They thrive in hot, dry conditions. Use horticultural oils, insecticidal soaps, or miticides. Good hydration of plants can also deter them. Introduce predatory mites as biological control.",
            "blight": "Common fungal diseases (**Early Blight**, **Late Blight**) affecting potatoes and tomatoes, causing dark spots with concentric rings (early blight) or water-soaked lesions that rapidly blacken foliage (late blight). Late blight is highly destructive in cool, wet weather. Manage with resistant varieties, crop rotation, and timely fungicide application (e.g., Ridomil, Dithane M45). Good sanitation reduces inoculum.",
            "downy mildew": "A fungal disease causing yellow spots on the upper leaf surface and fuzzy grey or purplish growth on the underside. Thrives in cool, wet conditions, often confused with powdery mildew. Affects cucurbits, onions, and maize. Ensure good air circulation and apply appropriate fungicides. Avoid overhead watering, especially in the evening.",
            "leaf miner": "Pests that tunnel within leaf tissues, creating winding trails or blotches. They reduce photosynthetic capacity and can affect aesthetic value of leafy greens. Common on leafy greens, tomatoes, and citrus. Remove affected leaves, use yellow sticky traps, or consider systemic insecticides for severe infestations. Natural enemies often provide good control.",
            "cutworms": "Larvae that cut young seedlings at the soil line, often at night. They hide in the soil during the day. Protect young plants with collars (e.g., from plastic bottles) or use bait formulations. Cultivating the soil before planting can expose and kill larvae. Good field hygiene helps.",
            "termites": "Social insects that can damage roots and stems of various crops, especially in dry areas. They can also infest wooden structures. Management includes proper land preparation, removing crop residues, bait stations, and barrier treatments. Soil drenching with insecticides may be necessary for severe cases.",
            "nematodes": "Microscopic roundworms that live in the soil and attack plant roots, causing swellings (galls), stunted growth, and wilting. They can reduce nutrient uptake. Manage through crop rotation (using non-host crops), soil solarization, resistant varieties, and adding organic matter to improve soil health. Chemical nematicides are also available but should be used cautiously.",
            "gummosis": "A plant disease characterized by the oozing of gummy exudates from bark, often associated with cankers or wounds. Common in citrus and stone fruit trees. Can be caused by fungal infections (e.g., Phytophthora) or environmental stress. Management involves proper sanitation, avoiding bark injuries, and fungicidal applications.",
            "sooty mold": "A black, velvety fungal growth that covers plant surfaces. It grows on honeydew excreted by sap-sucking insects like aphids, whiteflies, and mealybugs. While not directly damaging to the plant tissue, it blocks sunlight, reducing photosynthesis. Control the underlying insect pest to eliminate the honeydew.",
            "damping off": "A fungal disease affecting seedlings, causing them to rot at the soil line and fall over. Often due to overly wet conditions, poor air circulation, and unsterilized soil. Use sterile potting mix and ensure good drainage. Fungicides can be used as seed treatments. Avoid overcrowding seedlings."
        },
    diseaseInformation: {
            "rust": "Rust is a fungal disease appearing as reddish-brown spots or pustules on leaves and stems. It thrives in humid conditions and can significantly reduce photosynthesis and yield. Affects maize, beans, wheat, coffee, and sunflowers. Management includes resistant varieties, proper spacing for air circulation, and timely application of fungicides (e.g., Mancozeb, Azoxystrobin).",
            "bacterial wilt": "Bacterial wilt causes sudden wilting and yellowing of plants, often without yellowing of lower leaves. It's soil-borne and can affect potatoes, tomatoes, bananas, and other solanaceous crops. Managed through crop rotation with non-host crops, resistant varieties, proper sanitation (cleaning tools, destroying infected plants), and avoiding movement of contaminated soil. No chemical cure, so prevention and removal of infected plants are key.",
            "mosaic virus": "Mosaic viruses cause mottled or distorted leaves, stunted growth, and reduced yields. They are often spread by insects like aphids, whiteflies, or thrips, and also by contaminated tools or seeds. Affects cassava, beans, maize, tomatoes, and sweet potatoes. Control insect vectors, use disease-free planting material, and remove severely infected plants to prevent spread.",
            "early blight": "Early blight is a fungal disease common in tomatoes and potatoes, characterized by dark, concentric spots (target spots) on older leaves. It can also affect stems and fruits. Crop rotation, resistant varieties, good field sanitation (removing crop debris), and fungicides help manage it. Adequate nutrition and water reduce plant stress.",
            "late blight": "Late blight is a highly destructive fungal disease, especially for potatoes and tomatoes, causing rapid wilting and blackening of foliage and tubers. It spreads quickly in cool, wet weather, leading to significant yield losses. Requires aggressive fungicide application, resistant varieties, and good sanitation. Historically responsible for the Irish potato famine.",
            "anthracnose": "A fungal disease causing sunken, dark lesions on fruits, leaves, and stems, particularly in humid conditions. Common on mangoes, beans, and cucurbits. Improve air circulation, prune infected parts, and use fungicides. Can cause significant post-harvest losses, so proper handling is crucial. Overhead irrigation can worsen it.",
            "damping-off": "A fungal disease affecting seedlings, causing them to rot at the soil line and fall over, often appearing as if they've been 'nipped off'. Often due to overly wet conditions, poor air circulation, and unsterilized soil. Use sterile potting mix, ensure good drainage, and avoid overwatering. Fungicides can be used as seed treatments, and ensuring proper seed spacing helps air circulation.",
            "fusarium wilt": "A soil-borne fungal disease that causes wilting and yellowing of leaves, often starting on one side of the plant. It can block water uptake in the plant's vascular system. Affects tomatoes, bananas, legumes, and cucurbits. Managed through resistant varieties, crop rotation with non-host crops, and good soil drainage. Fumigation can be an option in severe cases for high-value crops.",
            "black rot": "A bacterial disease affecting cruciferous crops (cabbages, kales, broccoli) causing V-shaped yellow lesions on leaves and blackening of veins. Spread by rain splash, contaminated seeds, and infected crop debris. Use disease-free seeds and practice good sanitation. Avoid overhead irrigation and rotate crops away from crucifers.",
            "maize lethal necrosis disease (MLND)": "A devastating viral disease of maize caused by co-infection of two viruses. Leads to severe stunting, leaf yellowing, drying (necrosis), and eventual plant death. No chemical cure. Control insect vectors (thrips, aphids), practice crop rotation, and use resistant maize varieties. Early removal of infected plants is vital to prevent spread.",
            "banana bacterial wilt (BBW)": "A highly destructive bacterial disease of bananas, causing sudden wilting, yellowing, and rotting of the plant, eventually leading to death of the entire mat. Spread by insects, contaminated farm tools, and infected suckers. Infected plants must be destroyed immediately (uprooting, burying, or burning) to prevent further spread. Use disease-free planting material.",
            "coffee berry disease (CBD)": "A major fungal disease affecting coffee berries, causing black, sunken lesions and premature berry drop, leading to significant yield losses. Thrives in cool, wet conditions, especially during the flowering and fruiting stages. Managed through resistant varieties, proper pruning for air circulation, and timely fungicide sprays. Good nutrition helps trees resist the disease.",
            "potato virus y (PVY)": "A common viral disease in potatoes causing mosaic patterns, leaf distortion, necrosis (tissue death), and reduced yields. Spread primarily by aphids and also mechanically through tools. Use certified seed potatoes that are virus-free, and control aphid populations. Remove infected plants promptly.",
            "sweet potato virus disease (SPVD)": "A complex of viral diseases causing stunted growth, leaf deformation, chlorosis (yellowing), and reduced root size in sweet potatoes. Transmitted by whiteflies and infected planting material. Use certified virus-free cuttings and control whiteflies. Resistant varieties are also available and recommended.",
            "bacterial blight (cotton)": "A bacterial disease of cotton that causes angular leaf spots, boll rot, and stem cankers. Favored by warm, humid conditions. Management involves using resistant varieties, acid delinting of seeds, and crop rotation. Good field hygiene helps reduce inoculum.",
            "anthracnose (mango)": "A widespread fungal disease on mangoes causing dark, sunken spots on leaves, flowers, and fruits, leading to flower blight and fruit rot. Worse in humid conditions. Managed by regular fungicide sprays, proper pruning for air circulation, and good sanitation (removing infected plant parts). Post-harvest dips can reduce fruit spoilage.",
            "citrus greening disease (HLB)": "A devastating bacterial disease of citrus, spread by the citrus psyllid. Causes yellow shoots, blotchy mottled leaves, stunted growth, and small, misshapen, bitter fruit. No cure once infected. Management focuses on controlling the psyllid vector, removing infected trees, and using certified disease-free nursery stock. A major threat to citrus production globally."
        },
         farmingPractices: {
            "conservation agriculture": "Conservation agriculture (CA) minimizes soil disturbance (no-tillage), maintains soil cover (mulching with crop residues), and promotes crop rotations. It significantly improves soil health, conserves moisture, reduces erosion, enhances biodiversity, and reduces labor and fuel costs. Highly recommended for sustainable farming in Kenya, especially in rain-fed areas.",
            "crop rotation": "Crop rotation involves alternating different types of crops in the same area across seasons. This helps manage pests and diseases by breaking their life cycles, improves soil fertility by balancing nutrient uptake, and reduces the need for synthetic fertilizers. For example, rotate maize with beans or sweet potatoes. It also improves soil structure and reduces weed pressure.",
            "intercropping": "Growing two or more crops simultaneously on the same piece of land. It can enhance land utilization, suppress weeds, reduce pest incidence (e.g., by attracting beneficial insects or providing a trap crop), improve overall yield, and diversify income. Common Kenyan examples include maize with beans or pigeon peas. Offers risk diversification against crop failure.",
            "organic farming": "A system that avoids synthetic fertilizers, pesticides, GMOs, and growth regulators. Relies on natural processes like composting, green manures, crop rotation, biological pest control, and companion planting to maintain soil fertility and plant health. Promotes environmental sustainability and produces healthy food. Requires strong understanding of ecological principles and can be labor-intensive but offers premium market access.",
            "agroforestry": "Integrating trees and shrubs into agricultural landscapes. Provides multiple benefits like soil conservation, improved biodiversity, shade for crops and livestock, and additional income from tree products (fruits, timber, fodder, fuelwood, medicinal plants). Examples: Grevillea robusta in maize fields, fruit trees on farm boundaries. Enhances ecosystem services and farm resilience.",
            "precision agriculture": "Uses data-driven techniques and technology (GPS, sensors, drones, satellite imagery, variable rate technology) to optimize crop health, soil conditions, and water use. Allows for precise application of inputs (fertilizers, water, pesticides) exactly where and when needed, leading to increased productivity, reduced waste, and resource efficiency. Requires initial investment but offers long-term benefits in terms of cost savings and environmental impact.",
            "drip irrigation": "An efficient irrigation method that delivers water directly to the plant roots in small, controlled amounts, minimizing water wastage and maximizing water use efficiency. Ideal for areas with water scarcity and high-value crops. Reduces weed growth and disease spread compared to overhead irrigation, and conserves nutrients. Can be installed as a simple system for small plots or as complex automated systems.",
            "rainwater harvesting": "Collecting and storing rainwater from rooftops, roads, or land surfaces for later use in agriculture. Essential for supplementing water supply, especially during dry spells and in ASALs. Techniques include farm ponds, tanks, contour trenches, and terracing. Improves water availability and reduces reliance on external water sources.",
            "soil testing": "Analyzing soil samples to determine nutrient levels (N, P, K, micronutrients), pH, organic matter content, soil texture, and salinity. Crucial for understanding soil health and making informed decisions about fertilizer application, lime requirements, and crop suitability. Regular testing (every 2-3 years) is recommended to track changes and optimize inputs.",
            "mulching": "Applying a layer of organic material (e.g., crop residues, straw, dried grass, wood chips, shredded leaves) or inorganic material (e.g., plastic sheeting) on the soil surface. Helps retain soil moisture, suppress weeds, regulate soil temperature, reduce erosion, and improve soil health (organic mulches contribute organic matter). Reduces evaporation and conserves water.",
            "composting": "Process of decomposing organic matter (plant residues, kitchen waste, animal manure, yard trimmings) into nutrient-rich compost under controlled conditions. Improves soil structure, fertility, water retention capacity, and provides beneficial microorganisms. An essential part of organic farming and waste management. Reduces the need for synthetic fertilizers.",
            "integrated pest management (IPM)": "A holistic approach to pest control that combines various strategies, including cultural (crop rotation, resistant varieties, sanitation), biological (natural enemies, beneficial insects), physical (traps, hand-picking, barriers), and judicious chemical methods (pesticides as a last resort, targeted and selective), to manage pests in an environmentally sound and economically viable way. Minimizes pesticide use and builds ecological resilience. Focuses on prevention and monitoring.",
            "value addition": "Processing raw agricultural produce into higher-value products (e.g., milling maize into flour, making juice from fruits, drying vegetables, packaging, branding). Increases shelf-life, market appeal, and farmer income. Requires investment in processing equipment, knowledge of food safety, and market linkages. Creates off-farm employment opportunities.",
            "seed selection": "Choosing the right seed variety is fundamental. Opt for certified seeds that are disease-free, high-yielding, and adapted to your local climate, soil conditions, and pest/disease pressures. Hybrid seeds often offer higher yields but require annual repurchase. Open-pollinated varieties can be saved for future planting. Consider drought-tolerant or early-maturing varieties in specific zones.",
            "farm record keeping": "Maintaining detailed records of all farm activities (planting dates, inputs used, costs, yields, sales, pest/disease outbreaks, weather data, labor costs). Essential for monitoring profitability, making informed decisions, identifying challenges and opportunities, and applying for loans or grants. Can be done using simple notebooks or digital apps/software.",
            "cover cropping": "Planting non-cash crops (e.g., legumes like desmodium or vetch, grasses like oats or rye) primarily to improve soil health, suppress weeds, control erosion, and enhance biodiversity. They are typically incorporated into the soil (green manure) or left as mulch. Benefits include increased organic matter, nitrogen fixation, reduced nutrient leaching, and improved soil structure.",
            "crop diversification": "Growing a variety of crops on the farm rather than a single crop (monoculture). Reduces risks associated with market fluctuations, pest/disease outbreaks affecting a single crop, and climate variability. Promotes biodiversity, improves soil health, and can create more stable and varied income streams throughout the year.",
            "no-till farming": "A conservation agriculture practice that involves growing crops without disturbing the soil through plowing or harrowing. Helps maintain soil structure, increases organic matter, conserves moisture, reduces erosion, and protects soil microorganisms. Requires specialized planting equipment and good residue and weed management strategies. Reduces fuel consumption.",
            "soil solarization": "A natural, non-chemical method for controlling soil-borne pests, diseases (fungi, bacteria, nematodes), and weeds by heating the soil. Involves covering moist soil with clear plastic sheeting for several weeks during hot weather. The sun's energy heats the soil to temperatures lethal to many pathogens and weed seeds. Environmentally friendly.",
            "raised beds": "Constructing elevated planting areas, often with borders. Improves soil drainage and aeration, warms the soil earlier in spring, and allows for more intensive planting in smaller spaces. Ideal for areas with poor soil, heavy clay, or drainage issues. Can be permanent or temporary structures, and are good for urban farming.",
            "contour farming": "Plowing and planting across a slope following its contours, rather than up and down. This practice helps to reduce water runoff, prevent soil erosion, and conserve moisture by creating small ridges that trap water. Highly effective on gently sloping lands.",
            "terracing": "Creating level steps or platforms on steep slopes for cultivation. This practice significantly reduces soil erosion and allows farming on otherwise unusable land. Common in high-rainfall, hilly areas for crops like rice, tea, and vegetables. Requires significant labor or machinery for construction.",
            "hydroponics": "A method of growing plants without soil, using mineral nutrient solutions dissolved in water. Plants are supported in an inert medium (like rockwool or coco coir) or directly in the nutrient solution. Offers benefits like faster growth, higher yields, and efficient water and nutrient use. Ideal for urban farming and areas with poor soil.",
            "aquaponics": "A sustainable food production system that combines aquaculture (raising aquatic animals like fish) with hydroponics (growing plants in water). The waste products from the fish provide nutrients for the plants, and the plants filter the water for the fish. Creates a symbiotic relationship, minimizing waste and maximizing resource use. Excellent for integrated food production."
        },
    generalFarmingAdvice: {
            "planting season": "Kenya typically has two main growing seasons: the Long Rains season (March to May) and the Short Rains season (October to November). Planting times vary by crop and region, but generally align with the onset of these rains. Always consider local weather patterns, specific crop requirements, and soil moisture levels. For dryland farming, planting early with the first reliable rains is crucial to maximize moisture utilization. Accessing localized weather forecasts is highly recommended.",
            "post-harvest storage": "Proper post-harvest handling and storage are crucial to minimize losses, which can be significant (up to 40% for some crops). For grains like maize and beans, ensure they are thoroughly dried to appropriate moisture levels (e.g., 13.5% for maize, 12% for beans) before storing in airtight containers (e.g., hermetic bags like Purdue Improved Crop Storage - PICS bags, or specialized silos) or well-ventilated granaries. Use appropriate pest control measures during storage (e.g., solarization, use of approved dusts). For perishable crops (fruits, vegetables), cool, dry, and well-ventilated storage is essential; consider cold storage, evaporative coolers, or processing for value addition to extend shelf life.",
            "climate change impacts": "Climate change in Kenya is characterized by unpredictable rainfall patterns (both prolonged droughts and excessive rains/floods), increased temperatures, and more frequent extreme weather events. This leads to crop failures, reduced yields, increased pest and disease pressure, water scarcity, soil degradation, and impacts on livestock. Farmers are advised to adopt drought-resistant crop varieties, efficient irrigation methods, conservation agriculture, and climate-smart practices like agroforestry, water harvesting, and diversification to build resilience.",
            "government role in agriculture": "The Kenyan government, primarily through the Ministry of Agriculture and Livestock Development, aims to ensure food security, increase agricultural productivity, promote value addition, and enhance farmer incomes. They implement policies (like ASTGS), support agricultural research and extension services (KALRO, KEPHIS), offer input subsidies, regulate markets, develop irrigation projects, and support farmer cooperatives. They also focus on livestock development, fisheries, and attracting youth to the sector.",
            "agricultural grants": "Several organizations, government initiatives, and international partners offer grants or concessional loans to small-scale farmers and farmer groups in Kenya. These often target specific value chains, sustainable practices, youth/women in agriculture, adoption of climate-smart technologies, or value addition. It's advisable to check with local agricultural offices (County Agricultural Departments), NGOs (e.g., One Acre Fund, FAO, USAID programs, AGRA), financial institutions (e.g., Agricultural Finance Corporation - AFC, microfinance banks), and commercial banks for current opportunities. Look for calls for proposals or specific program announcements, as these opportunities are often time-bound.",
            "food security": "Food security in Kenya means ensuring all people, at all times, have physical and economic access to sufficient, safe, and nutritious food to meet their dietary needs for an active and healthy life. It is a major focus of government policies and agricultural development efforts, emphasizing increased domestic production, diversification of food sources (including traditional crops), reduced post-harvest losses, strengthening food value chains, and establishment of strategic food reserves.",
            "sustainable agriculture": "Sustainable agriculture involves farming methods that are environmentally sound, economically viable, and socially responsible. It aims to protect the environment, conserve natural resources (soil, water, biodiversity), improve soil health, reduce pollution, and ensure long-term productivity and profitability for farmers. Practices include conservation agriculture, organic farming, agroforestry, integrated pest management, efficient water use, and crop diversification. It's about meeting present food needs without compromising the ability of future generations to meet their own needs.",
            "soil pH": "Soil pH measures the acidity or alkalinity of the soil and is crucial for nutrient availability. Most crops prefer a slightly acidic to neutral pH (6.0-7.0). If your soil is too acidic (below 5.5), nutrients like phosphorus become less available; you can add agricultural lime to raise the pH. If it's too alkaline (above 7.5), micronutrients may become deficient; you might add sulfur or organic matter to lower the pH. A soil test will tell you your soil's exact pH and recommended amendments.",
            "market access": "Improving market access for farmers involves several strategies: joining farmer cooperatives to aggregate produce and negotiate better prices collectively, utilizing digital platforms and mobile apps for timely market information (prices, demand), improving post-harvest handling and storage to maintain quality and reduce spoilage, and exploring value addition to make products more attractive and fetch better prices from buyers. Direct sales to consumers, institutions (schools, hospitals), or local aggregators can also bypass middlemen and increase farmer margins. Understanding market dynamics and consumer preferences is key.",
            "nutrient deficiency": "Nutrient deficiencies occur when plants lack essential elements for healthy growth. Symptoms vary: Nitrogen deficiency causes general yellowing of older leaves; Phosphorus deficiency leads to purpling of leaves, especially on undersides; Potassium deficiency results in yellowing or browning along leaf margins; Iron or Magnesium deficiencies cause yellowing between veins (chlorosis). A soil test is the best way to diagnose specific deficiencies, followed by applying appropriate fertilizers (organic or synthetic) or micronutrient sprays.",
            "organic matter in soil": "Organic matter refers to decomposing plant and animal residues in the soil. It is vital for soil health, improving soil structure, water retention, nutrient availability, and fostering beneficial microbial activity. Practices like composting, mulching, incorporating crop residues, and using green manures increase soil organic matter. It acts like a sponge, holding water and nutrients, and provides food for soil microorganisms, essential for nutrient cycling. Reduces soil erosion and compaction. Long-term accumulation of organic matter enhances overall soil fertility and resilience. It's a cornerstone of sustainable agriculture.",
            "climate-smart agriculture": "Climate-smart agriculture (CSA) is an approach that helps guide actions required to transform and reorient agricultural systems to effectively support development and ensure food security in a changing climate. CSA aims to achieve three main objectives: sustainably increasing agricultural productivity and incomes; adapting and building resilience to climate change; and reducing greenhouse gas emissions where possible. Practices include drought-tolerant crops, efficient water management, conservation agriculture, and agroforestry.",
            "youth in agriculture": "Initiatives to attract and empower young people to engage in agriculture are crucial given the aging farming population. These programs often include training in modern farming techniques, access to affordable land, provision of start-up capital or concessional loans, mentorship, and support for value addition and market linkages. The aim is to make agriculture attractive, profitable, and technologically advanced for the youth, creating employment and ensuring future food security."
        },
    commonQuestions: [
            "Tell me about livestock production?",
            "Tell me more about keeping hens?",
            "Tell me more about dairy production?",
            "Tell me more about sheep production?",
            "Tell me more about pig production?",
            "Tell me more about layers?",
            "Tell me more about boilers?",
            "Tell me more about goats production?",
            "What's the weather like in Kiambu today?",
            "Which crops grow well in Machakos?",
            "Tell me about maize farming in Kenya.",
            "What are the current market prices for tea?",
            "My plants have yellow spots on their leaves, what could it be?",
            "How can I improve my soil health naturally?",
            "What is drip irrigation and how does it work?",
            "Who developed you?",
            "What are the common challenges for small-scale farmers in Kenya?",
            "What is a cash crop?",
            "Tell me about the main staple foods in Kenya.",
            "How do I manage pests without using chemicals?",
            "What is the best planting season for beans in Kenya?",
            "Tell me more about organic farming practices.",
            "Which areas are good for coffee farming in Kenya?",
            "What's the best way to store harvested maize to prevent losses?",
            "How does climate change affect farming in Kenya?",
            "What is the role of the Kenyan government in agriculture?",
            "Are there any agricultural grants or loans available for small-scale farmers?",
            "Explain precision agriculture.",
            "What is conservation agriculture?",
            "What are the benefits of intercropping?",
            "Tell me about growing avocados.",
            "What are the symptoms of Fall Armyworm in maize?",
            "How to identify potato late blight?",
            "Where can I sell my pyrethrum?",
            "What are some drought-resistant crops for Kitui?",
            "Tell me about milk production in dairy farming.",
            "What is the value of mangoes as an export crop?",
            "How can I get certified seeds?",
            "Tell me about the benefits of soil testing.",
            "What is agroforestry?",
            "How can I do urban farming in Nairobi?",
            "What is value addition in agriculture?",
            "What are the best practices for controlling fruit flies in mangoes?",
            "Describe Cassava Mosaic Disease.",
            "What is the optimal soil pH for tea?",
            "How can I manage aphids on my vegetables?",
            "What are the key steps in composting?",
            "Where can I find market prices for green grams?",
            "What is the importance of farm record keeping?",
            "Tell me about raising camels for milk.",
            "What is the recommended spacing for planting maize?",
            "What crops are good for dry areas?",
            "How to protect crops from birds?",
            "Explain the common pests for sugarcane.",
            "What are the benefits of growing soya beans?",
            "Where is the main rice growing area in Kenya?",
            "What is the future of agriculture in Kenya?",
            "What are some government initiatives for youth in agriculture?",
            "What is cover cropping?",
            "Tell me about crop diversification.",
            "What is no-till farming?",
            "How does soil solarization work?",
            "What are the advantages of raised beds in farming?",
            "Tell me about organic matter in soil.",
            "What is Phytophthora root rot?",
            "How to prevent aflatoxin contamination?",
            "What is crucial for water quality in fish farming?",
            "How can I control soil erosion?",
            "Explain farm mechanization.",
            "What is greenhouse farming?",
            "How do I manage pests organically?",
            "What is contour farming?",
            "Tell me about terracing.",
            "What is hydroponics?",
            "Explain aquaponics."
        ],
   farmingChallenges: [
            "Climate change and adverse weather conditions (prolonged droughts, unpredictable rainfall, floods, extreme temperatures) leading to crop failures and livestock losses. This includes increased frequency and intensity of extreme weather events.",
            "High cost and inconsistent availability of quality farm inputs (certified seeds, fertilizers, pesticides, animal feeds), making farming expensive and risky for smallholder farmers.",
            "Prevalence of devastating pest and disease outbreaks (e.g., Fall Armyworm, Maize Lethal Necrosis Disease, Coffee Berry Disease, Potato Blight, Fruit Flies), causing significant yield losses and increasing production costs.",
            "Poor infrastructure, including inadequate rural roads, limited cold storage facilities, lack of reliable energy, and insufficient processing units, leading to high post-harvest losses (up to 40% for some perishable crops) and increased transportation costs.",
            "Limited access to reliable and fair markets, exploitation by middlemen, lack of timely and accurate market information, and limited access to formal value chains, which significantly affects farmers' profitability and incentivizes them to grow less.",
            "Soil fertility degradation due to continuous cultivation, overgrazing, unsustainable farming practices, erosion, and insufficient use of organic matter and balanced fertilizers. This results in declining yields over time.",
            "Land fragmentation and subdivision into smaller, uneconomical portions, particularly in high-potential agricultural areas, reducing the scale of production and making mechanization difficult.",
            "Limited access to affordable credit and finance, particularly for smallholder farmers and youth, hindering investment in modern farming technologies, improved inputs, and value addition initiatives.",
            "Outdated farming technologies and low adoption of modern, sustainable agricultural practices due to lack of knowledge, access to technology, or financial constraints.",
            "Inadequate agricultural extension services and limited access to timely, relevant agricultural information and training. The ratio of extension officers to farmers is often too low.",
            "Water scarcity and inefficient water management practices in many regions, despite significant irrigation potential. Over-reliance on rain-fed agriculture makes farmers vulnerable to rainfall variability.",
            "Insecurity and conflict in some agricultural areas, particularly pastoralist regions, disrupting farming activities, leading to displacement, and loss of livestock and assets.",
            "Youth disinterest in agriculture due to perception of it as a low-return, laborious, and outdated activity, leading to an aging farming population and lack of succession planning.",
            "Policy inconsistencies and inadequate enforcement of agricultural policies, which can create uncertainty for farmers and investors.",
            "Limited capacity for value addition and agro-processing, which means a large portion of agricultural produce is sold raw, reducing potential income and job creation."
        ],
   stapleFoods: [
            "Maize: The primary staple food, widely consumed as 'ugali' (a stiff porridge made from maize flour). It forms the core of many Kenyan meals.",
            "Beans: The most important legume, often consumed with maize ('githeri') or as a standalone stew. A vital source of protein.",
            "Irish Potatoes: A key tuber crop, especially in cooler highland areas, consumed boiled, fried (chips), or in stews. Increasingly important in urban diets.",
            "Rice: Gaining popularity, especially in irrigation schemes like Mwea, consumed as a main dish, often with stews or curries.",
            "Sorghum and Millet: Important traditional food crops, especially in arid and semi-arid regions due to their drought resistance. Used to make porridge, traditional brews, and sometimes flatbreads. Highly nutritious.",
            "Sweet Potatoes and Cassava: Important root crops, providing carbohydrates and increasingly promoted for nutritional value (especially orange-fleshed sweet potatoes) and food security, particularly in drought-prone areas. Can be boiled, fried, or mashed.",
            "Kales (Sukuma Wiki): The most widely consumed leafy green vegetable, a daily staple for many households, usually stir-fried and eaten with ugali.",
            "Bananas: A significant fruit that also serves as a staple in some regions, especially Western and Central Kenya (cooking bananas). Can be boiled, mashed, or used in stews.",
            "Wheat: Primarily consumed as bread, chapati, and other baked goods, especially in urban areas. Flour is widely available."
        ],
    cashCrops: [
            "Tea: Kenya is a leading global producer and exporter of black tea, contributing significantly to foreign exchange earnings and rural livelihoods.",
            "Coffee: High-quality Arabica coffee is a significant export, particularly from Central and Eastern Kenya, renowned for its distinct flavor profile.",
            "Horticulture (Cut Flowers, Vegetables, Fruits): A rapidly growing and high-value export sector. Fresh produce (e.g., French beans, snow peas, garden peas, herbs) and cut flowers are major foreign exchange earners. Avocado and mangoes are increasingly important fruits for export.",
            "Sugarcane: Important for domestic sugar production, primarily grown in Western Kenya, though the industry faces challenges.",
            "Tobacco: While cultivation is declining due to health campaigns and changing policies, it remains a cash crop in some regions like Migori and Meru, grown under contract.",
            "Macadamia and Cashew nuts: High-value nut crops with strong export markets, particularly from Central/Eastern (macadamia) and Coastal (cashew) regions respectively. Offers good long-term income.",
            "Pyrethrum: A natural insecticide crop, grown in highland areas, experiencing a revival with increasing global demand for natural products. Provides stable income for farmers in designated zones.",
            "Sisal: Grown for its strong fibers, used in ropes, twine, carpets, and handicrafts, especially in dryer areas. A long-term perennial crop.",
            "Miraa (Khat): A significant cash crop in Meru and Tharaka-Nithi, providing substantial income, though its legal status and markets are often debated.",
            "Cotton: Historically a major cash crop, it's undergoing revival efforts for the textile industry, particularly in Western and Coastal regions.",
            "Simsim (Sesame): An oilseed crop with growing demand for its edible oil and use in confectionery, particularly in Western and Coastal Kenya.",
            "Dairy Products: While not a crop, milk and dairy products are a significant cash earner for farmers in high-potential areas, contributing substantially to agricultural GDP.",
            "Fish (Aquaculture): Fish farming, particularly Tilapia and Catfish, is an emerging cash earner, providing protein and income, especially in Western Kenya."
    ]
}
      
   const marketData = {
            maize: [
                { month: 'Jan', price: 3200 }, { month: 'Feb', price: 3150 }, { month: 'Mar', price: 3100 },
                { month: 'Apr', price: 3050 }, { month: 'May', price: 3000 }, { month: 'Jun', price: 2950 },
                { month: 'Jul', price: 2900 }, { month: 'Aug', price: 2850 }, { month: 'Sep', price: 2800 },
                { month: 'Oct', price: 2900 }, { month: 'Nov', price: 3000 }, { month: 'Dec', price: 3100 }
            ],
            beans: [
                { month: 'Jan', price: 7000 }, { month: 'Feb', price: 6800 }, { month: 'Mar', price: 6500 },
                { month: 'Apr', price: 6200 }, { month: 'May', price: 6000 }, { month: 'Jun', price: 5800 },
                { month: 'Jul', price: 5500 }, { month: 'Aug', price: 5700 }, { month: 'Sep', price: 6000 },
                { month: 'Oct', price: 6300 }, { month: 'Nov', price: 6600 }, { month: 'Dec', price: 6900 }
            ],
            potatoes: [
                { month: 'Jan', price: 4500 }, { month: 'Feb', price: 4300 }, { month: 'Mar', price: 4100 },
                { month: 'Apr', price: 3900 }, { month: 'May', price: 3700 }, { month: 'Jun', price: 3500 },
                { month: 'Jul', price: 3800 }, { month: 'Aug', price: 4000 }, { month: 'Sep', price: 4200 },
                { month: 'Oct', price: 4400 }, { month: 'Nov', price: 4600 }, { month: 'Dec', price: 4800 }
            ],
            milk: [
                { month: 'Jan', price: 45 }, { month: 'Feb', price: 44 }, { month: 'Mar', price: 46 },
                { month: 'Apr', price: 47 }, { month: 'May', price: 48 }, { month: 'Jun', price: 49 },
                { month: 'Jul', price: 47 }, { month: 'Aug', price: 46 }, { month: 'Sep', price: 45 },
                { month: 'Oct', price: 43 }, { month: 'Nov', price: 42 }, { month: 'Dec', price: 41 }
            ],
            sorghum: [
                  { month: 'Jan', price: 2800 }, { month: 'Feb', price: 2750 }, { month: 'Mar', price: 2700 },
                  { month: 'Apr', price: 2650 }, { month: 'May', price: 2600 }, { month: 'Jun', price: 2550 },
                  { month: 'Jul', price: 2600 }, { month: 'Aug', price: 2650 }, { month: 'Sep', price: 2700 },
                  { month: 'Oct', price: 2750 }, { month: 'Nov', price: 2800 }, { month: 'Dec', price: 2850 }
           ],
            greenGrams: [
                  { month: 'Jan', price: 6000 }, { month: 'Feb', price: 5900 }, { month: 'Mar', price: 5800 },
                  { month: 'Apr', price: 5700 }, { month: 'May', price: 5600 }, { month: 'Jun', price: 5500 },
                  { month: 'Jul', price: 5400 }, { month: 'Aug', price: 5500 }, { month: 'Sep', price: 5600 },
                  { month: 'Oct', price: 5700 }, { month: 'Nov', price: 5800 }, { month: 'Dec', price: 5900 }
           ],
             avocados: [
                  { month: 'Jan', price: 1200 }, { month: 'Feb', price: 1300 }, { month: 'Mar', price: 1400 },
                  { month: 'Apr', price: 1500 }, { month: 'May', price: 1600 }, { month: 'Jun', price: 1700 },
                  { month: 'Jul', price: 1600 }, { month: 'Aug', price: 1500 }, { month: 'Sep', price: 1400 },
                  { month: 'Oct', price: 1300 }, { month: 'Nov', price: 1200 }, { month: 'Dec', price: 1100 }
           ], 
             onions: [
                  { month: 'Jan', price: 3500 }, { month: 'Feb', price: 3600 }, { month: 'Mar', price: 3700 },
                  { month: 'Apr', price: 3800 }, { month: 'May', price: 3900 }, { month: 'Jun', price: 4000 },
                  { month: 'Jul', price: 3900 }, { month: 'Aug', price: 3800 }, { month: 'Sep', price: 3700 },
                  { month: 'Oct', price: 3600 }, { month: 'Nov', price: 3500 }, { month: 'Dec', price: 3400 }
           ],
            cabbages: [
                  { month: 'Jan', price: 800 }, { month: 'Feb', price: 850 }, { month: 'Mar', price: 900 },
                  { month: 'Apr', price: 950 }, { month: 'May', price: 1000 }, { month: 'Jun', price: 1050 },
                  { month: 'Jul', price: 1100 }, { month: 'Aug', price: 1050 }, { month: 'Sep', price: 1000 },
                  { month: 'Oct', price: 950 }, { month: 'Nov', price: 900 }, { month: 'Dec', price: 850 }
             ],
             tomatoes: [
                   { month: 'Jan', price: 3000 }, { month: 'Feb', price: 3200 }, { month: 'Mar', price: 3100 },
                   { month: 'Apr', price: 3300 }, { month: 'May', price: 3400 }, { month: 'Jun', price: 3500 },
                   { month: 'Jul', price: 3400 }, { month: 'Aug', price: 3300 }, { month: 'Sep', price: 3200 },
                   { month: 'Oct', price: 3100 }, { month: 'Nov', price: 3000 }, { month: 'Dec', price: 2900 }
             ],
             carrots: [
                   { month: 'Jan', price: 2500 }, { month: 'Feb', price: 2400 }, { month: 'Mar', price: 2300 },
                    { month: 'Apr', price: 2200 }, { month: 'May', price: 2100 }, { month: 'Jun', price: 2000 },
                    { month: 'Jul', price: 2100 }, { month: 'Aug', price: 2200 }, { month: 'Sep', price: 2300 },
                    { month: 'Oct', price: 2400 }, { month: 'Nov', price: 2500 }, { month: 'Dec', price: 2600 }
             ],
             bananas: [
                   { month: 'Jan', price: 900 }, { month: 'Feb', price: 950 }, { month: 'Mar', price: 1000 },
                   { month: 'Apr', price: 1050 }, { month: 'May', price: 1100 }, { month: 'Jun', price: 1150 },
                   { month: 'Jul', price: 1100 }, { month: 'Aug', price: 1050 }, { month: 'Sep', price: 1000 },
                   { month: 'Oct', price: 950 }, { month: 'Nov', price: 900 }, { month: 'Dec', price: 850 }
             ],
             kale: [
                    { month: 'Jan', price: 600 }, { month: 'Feb', price: 620 }, { month: 'Mar', price: 640 },
                    { month: 'Apr', price: 660 }, { month: 'May', price: 680 }, { month: 'Jun', price: 700 },
                    { month: 'Jul', price: 680 }, { month: 'Aug', price: 660 }, { month: 'Sep', price: 640 },
                    { month: 'Oct', price: 620 }, { month: 'Nov', price: 600 }, { month: 'Dec', price: 580 }
             ],
              watermelon: [
                    { month: 'Jan', price: 2000 }, { month: 'Feb', price: 2100 }, { month: 'Mar', price: 2200 },
                    { month: 'Apr', price: 2300 }, { month: 'May', price: 2400 }, { month: 'Jun', price: 2500 },
                    { month: 'Jul', price: 2400 }, { month: 'Aug', price: 2300 }, { month: 'Sep', price: 2200 },
                    { month: 'Oct', price: 2100 }, { month: 'Nov', price: 2000 }, { month: 'Dec', price: 1900 }
             ],
              capsicum: [
                    { month: 'Jan', price: 2700 }, { month: 'Feb', price: 2750 }, { month: 'Mar', price: 2800 },
                    { month: 'Apr', price: 2850 }, { month: 'May', price: 2900 }, { month: 'Jun', price: 2950 },
                    { month: 'Jul', price: 2900 }, { month: 'Aug', price: 2850 }, { month: 'Sep', price: 2800 },
                    { month: 'Oct', price: 2750 }, { month: 'Nov', price: 2700 }, { month: 'Dec', price: 2650 }
             ],
             sweetPotatoes: [
                    { month: 'Jan', price: 3200 }, { month: 'Feb', price: 3100 }, { month: 'Mar', price: 3000 },
                    { month: 'Apr', price: 2900 }, { month: 'May', price: 2800 }, { month: 'Jun', price: 2700 },
                    { month: 'Jul', price: 2600 }, { month: 'Aug', price: 2700 }, { month: 'Sep', price: 2800 },
                    { month: 'Oct', price: 2900 }, { month: 'Nov', price: 3000 }, { month: 'Dec', price: 3100 }
             ],
             peas: [
                    { month: 'Jan', price: 4000 }, { month: 'Feb', price: 3900 }, { month: 'Mar', price: 3800 },
                    { month: 'Apr', price: 3700 }, { month: 'May', price: 3600 }, { month: 'Jun', price: 3500 },
                    { month: 'Jul', price: 3600 }, { month: 'Aug', price: 3700 }, { month: 'Sep', price: 3800 },
                    { month: 'Oct', price: 3900 }, { month: 'Nov', price: 4000 }, { month: 'Dec', price: 4100 }
              ],
             sugarcane: [
                    { month: 'Jan', price: 1200 }, { month: 'Feb', price: 1150 }, { month: 'Mar', price: 1100 },
                     { month: 'Apr', price: 1050 }, { month: 'May', price: 1000 }, { month: 'Jun', price: 950 },
                    { month: 'Jul', price: 1000 }, { month: 'Aug', price: 1050 }, { month: 'Sep', price: 1100 },
                    { month: 'Oct', price: 1150 }, { month: 'Nov', price: 1200 }, { month: 'Dec', price: 1250 }
             ],
              mangoes: [
                   { month: 'Jan', price: 1500 }, { month: 'Feb', price: 1600 }, { month: 'Mar', price: 1700 },
                   { month: 'Apr', price: 1800 }, { month: 'May', price: 1900 }, { month: 'Jun', price: 2000 },
                   { month: 'Jul', price: 1900 }, { month: 'Aug', price: 1800 }, { month: 'Sep', price: 1700 },
                   { month: 'Oct', price: 1600 }, { month: 'Nov', price: 1500 }, { month: 'Dec', price: 1400 }
            ],
             passionFruits: [
                   { month: 'Jan', price: 1200 }, { month: 'Feb', price: 1250 }, { month: 'Mar', price: 1300 },
                   { month: 'Apr', price: 1350 }, { month: 'May', price: 1400 }, { month: 'Jun', price: 1450 },
                   { month: 'Jul', price: 1400 }, { month: 'Aug', price: 1350 }, { month: 'Sep', price: 1300 },
                   { month: 'Oct', price: 1250 }, { month: 'Nov', price: 1200 }, { month: 'Dec', price: 1150 }
             ],
              pineapples: [
                   { month: 'Jan', price: 2000 }, { month: 'Feb', price: 2100 }, { month: 'Mar', price: 2200 },
                   { month: 'Apr', price: 2300 }, { month: 'May', price: 2400 }, { month: 'Jun', price: 2500 },
                   { month: 'Jul', price: 2400 }, { month: 'Aug', price: 2300 }, { month: 'Sep', price: 2200 },
                   { month: 'Oct', price: 2100 }, { month: 'Nov', price: 2000 }, { month: 'Dec', price: 1900 }
             ],
              pawpaws: [
                   { month: 'Jan', price: 800 }, { month: 'Feb', price: 850 }, { month: 'Mar', price: 900 },
                   { month: 'Apr', price: 950 }, { month: 'May', price: 1000 }, { month: 'Jun', price: 1050 },
                   { month: 'Jul', price: 1000 }, { month: 'Aug', price: 950 }, { month: 'Sep', price: 900 },
                   { month: 'Oct', price: 850 }, { month: 'Nov', price: 800 }, { month: 'Dec', price: 750 }
             ],
             pumpkins: [
                   { month: 'Jan', price: 1500 }, { month: 'Feb', price: 1450 }, { month: 'Mar', price: 1400 },
                   { month: 'Apr', price: 1350 }, { month: 'May', price: 1300 }, { month: 'Jun', price: 1250 },
                   { month: 'Jul', price: 1300 }, { month: 'Aug', price: 1350 }, { month: 'Sep', price: 1400 },
                   { month: 'Oct', price: 1450 }, { month: 'Nov', price: 1500 }, { month: 'Dec', price: 1550 }
             ],
             broccoli: [
                   { month: 'Jan', price: 3000 }, { month: 'Feb', price: 2900 }, { month: 'Mar', price: 2800 },
                   { month: 'Apr', price: 2700 }, { month: 'May', price: 2600 }, { month: 'Jun', price: 2500 },
                   { month: 'Jul', price: 2600 }, { month: 'Aug', price: 2700 }, { month: 'Sep', price: 2800 },
                   { month: 'Oct', price: 2900 }, { month: 'Nov', price: 3000 }, { month: 'Dec', price: 3100 }
             ],
             spinach: [
                   { month: 'Jan', price: 650 }, { month: 'Feb', price: 670 }, { month: 'Mar', price: 690 },
                   { month: 'Apr', price: 710 }, { month: 'May', price: 730 }, { month: 'Jun', price: 750 },
                   { month: 'Jul', price: 730 }, { month: 'Aug', price: 710 }, { month: 'Sep', price: 690 },
                   { month: 'Oct', price: 670 }, { month: 'Nov', price: 650 }, { month: 'Dec', price: 630 }
             ],
             arrowroots: [
                   { month: 'Jan', price: 3500 }, { month: 'Feb', price: 3400 }, { month: 'Mar', price: 3300 },
                   { month: 'Apr', price: 3200 }, { month: 'May', price: 3100 }, { month: 'Jun', price: 3000 },
                   { month: 'Jul', price: 3100 }, { month: 'Aug', price: 3200 }, { month: 'Sep', price: 3300 },
                   { month: 'Oct', price: 3400 }, { month: 'Nov', price: 3500 }, { month: 'Dec', price: 3600 }
             ],
             lemons: [
                   { month: 'Jan', price: 600 }, { month: 'Feb', price: 620 }, { month: 'Mar', price: 640 },
                   { month: 'Apr', price: 660 }, { month: 'May', price: 680 }, { month: 'Jun', price: 700 },
                   { month: 'Jul', price: 690 }, { month: 'Aug', price: 680 }, { month: 'Sep', price: 670 },
                   { month: 'Oct', price: 660 }, { month: 'Nov', price: 650 }, { month: 'Dec', price: 640 }
             ],
             guavas: [
                   { month: 'Jan', price: 1000 }, { month: 'Feb', price: 1050 }, { month: 'Mar', price: 1100 },
                   { month: 'Apr', price: 1150 }, { month: 'May', price: 1200 }, { month: 'Jun', price: 1250 },
                   { month: 'Jul', price: 1200 }, { month: 'Aug', price: 1150 }, { month: 'Sep', price: 1100 },
                   { month: 'Oct', price: 1050 }, { month: 'Nov', price: 1000 }, { month: 'Dec', price: 950 }
             ],
             strawberries: [
                   { month: 'Jan', price: 2000 }, { month: 'Feb', price: 2100 }, { month: 'Mar', price: 2200 },
                   { month: 'Apr', price: 2300 }, { month: 'May', price: 2400 }, { month: 'Jun', price: 2500 },
                   { month: 'Jul', price: 2450 }, { month: 'Aug', price: 2400 }, { month: 'Sep', price: 2350 },
                   { month: 'Oct', price: 2300 }, { month: 'Nov', price: 2200 }, { month: 'Dec', price: 2100 }
            ],
             apples: [
                   { month: 'Jan', price: 3000 }, { month: 'Feb', price: 3100 }, { month: 'Mar', price: 3200 },
                   { month: 'Apr', price: 3300 }, { month: 'May', price: 3400 }, { month: 'Jun', price: 3500 },
                   { month: 'Jul', price: 3450 }, { month: 'Aug', price: 3400 }, { month: 'Sep', price: 3350 },
                   { month: 'Oct', price: 3300 }, { month: 'Nov', price: 3200 }, { month: 'Dec', price: 3100 }
            ],
             treeTomatoes: [
                   { month: 'Jan', price: 900 }, { month: 'Feb', price: 950 }, { month: 'Mar', price: 1000 },
                   { month: 'Apr', price: 1050 }, { month: 'May', price: 1100 }, { month: 'Jun', price: 1150 },
                   { month: 'Jul', price: 1100 }, { month: 'Aug', price: 1050 }, { month: 'Sep', price: 1000 },
                   { month: 'Oct', price: 950 }, { month: 'Nov', price: 900 }, { month: 'Dec', price: 850 }
            ],
             groundnuts: [
                   { month: 'Jan', price: 2500 }, { month: 'Feb', price: 2400 }, { month: 'Mar', price: 2300 },
                   { month: 'Apr', price: 2200 }, { month: 'May', price: 2100 }, { month: 'Jun', price: 2000 },
                   { month: 'Jul', price: 2050 }, { month: 'Aug', price: 2100 }, { month: 'Sep', price: 2150 },
                   { month: 'Oct', price: 2200 }, { month: 'Nov', price: 2300 }, { month: 'Dec', price: 2400 }
             ],
            lettuce: [
                   { month: 'Jan', price: 500 }, { month: 'Feb', price: 520 }, { month: 'Mar', price: 540 },
                   { month: 'Apr', price: 560 }, { month: 'May', price: 580 }, { month: 'Jun', price: 600 },
                   { month: 'Jul', price: 580 }, { month: 'Aug', price: 560 }, { month: 'Sep', price: 540 },
                   { month: 'Oct', price: 520 }, { month: 'Nov', price: 500 }, { month: 'Dec', price: 480 }
             ],
             beetroots: [
                   { month: 'Jan', price: 950 }, { month: 'Feb', price: 970 }, { month: 'Mar', price: 990 },
                   { month: 'Apr', price: 1010 }, { month: 'May', price: 1030 }, { month: 'Jun', price: 1050 },
                   { month: 'Jul', price: 1020 }, { month: 'Aug', price: 990 }, { month: 'Sep', price: 960 },
                   { month: 'Oct', price: 930 }, { month: 'Nov', price: 900 }, { month: 'Dec', price: 870 }
              ],
             cucumber: [
                   { month: 'Jan', price: 800 }, { month: 'Feb', price: 820 }, { month: 'Mar', price: 840 },
                   { month: 'Apr', price: 860 }, { month: 'May', price: 880 }, { month: 'Jun', price: 900 },
                   { month: 'Jul', price: 880 }, { month: 'Aug', price: 860 }, { month: 'Sep', price: 840 },
                   { month: 'Oct', price: 820 }, { month: 'Nov', price: 800 }, { month: 'Dec', price: 780 }
              ],
             eggplant: [
                   { month: 'Jan', price: 1500 }, { month: 'Feb', price: 1450 }, { month: 'Mar', price: 1400 },
                   { month: 'Apr', price: 1350 }, { month: 'May', price: 1300 }, { month: 'Jun', price: 1250 },
                   { month: 'Jul', price: 1300 }, { month: 'Aug', price: 1350 }, { month: 'Sep', price: 1400 },
                   { month: 'Oct', price: 1450 }, { month: 'Nov', price: 1500 }, { month: 'Dec', price: 1550 }
              ],
             ginger: [
                   { month: 'Jan', price: 3000 }, { month: 'Feb', price: 3100 }, { month: 'Mar', price: 3200 },
                   { month: 'Apr', price: 3300 }, { month: 'May', price: 3400 }, { month: 'Jun', price: 3500 },
                   { month: 'Jul', price: 3400 }, { month: 'Aug', price: 3300 }, { month: 'Sep', price: 3200 },
                   { month: 'Oct', price: 3100 }, { month: 'Nov', price: 3000 }, { month: 'Dec', price: 2900 }
              ],
              garlic: [
                   { month: 'Jan', price: 4000 }, { month: 'Feb', price: 3900 }, { month: 'Mar', price: 3800 },
                   { month: 'Apr', price: 3700 }, { month: 'May', price: 3600 }, { month: 'Jun', price: 3500 },
                   { month: 'Jul', price: 3600 }, { month: 'Aug', price: 3700 }, { month: 'Sep', price: 3800 },
                   { month: 'Oct', price: 3900 }, { month: 'Nov', price: 4000 }, { month: 'Dec', price: 4100 }
              ],
              pumpkinsLeaves: [
                   { month: 'Jan', price: 600 }, { month: 'Feb', price: 580 }, { month: 'Mar', price: 560 },
                   { month: 'Apr', price: 540 }, { month: 'May', price: 520 }, { month: 'Jun', price: 500 },
                   { month: 'Jul', price: 520 }, { month: 'Aug', price: 540 }, { month: 'Sep', price: 560 },
                   { month: 'Oct', price: 580 }, { month: 'Nov', price: 600 }, { month: 'Dec', price: 620 }
               ]


        };
    commonQuestions: [
        'How to improve soil health?',
        'What are common crop diseases?',
        'Tell me about organic farming.',
        'What are the best crops for my county?',
        'How to deal with pests naturally?',
        'What are hybrid seeds?',
        'Tell me about crop rotation.',
        'What is precision agriculture?',
        'How does climate change affect farming?',
        'What is value addition in agriculture?'
                     ]

const cropSuggestionsList = document.getElementById('crop-suggestions');
const weatherReportEl = document.getElementById('weather-report');
const modal = document.getElementById('guide-modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');
const countySelector = document.getElementById('county-selector');
const chatbotToggler = document.getElementById('chatbot-toggler');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbotBtn = document.getElementById('close-chatbot');
const sendBtn = document.getElementById('send-btn');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotBody = document.getElementById('chatbot-body');
const loginNavBtn = document.getElementById('login-nav-btn');
   
const CURRENT_USER_STORAGE_KEY = 'farmWisdomCurrentUser';
window.MOCK_DATA = window.MOCK_DATA || {};
MOCK_DATA.users = JSON.parse(localStorage.getItem('farmWisdomUsers')) || [];

let currentUser = JSON.parse(localStorage.getItem(CURRENT_USER_STORAGE_KEY)) || null;
let currentLocationIndex = 0;
function hashPassword(password) {
        return password.split('').reverse().join('') + 'FarmWisdomSecretSalt';
    }

    function showModal(modalElement) {
        if (modalElement) {
            modalElement.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function hideModal(modalElement, errorElement = null) {
        if (modalElement) {
            modalElement.style.display = 'none';
            if (errorElement) {
                errorElement.style.display = 'none';
            }
            document.body.style.overflow = '';
        }
    }
    
    function updateAuthUI() {
 
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (!isAuthenticated) {
    window.location.href = 'auth.html';
    return;
  }

  const welcomeEl = document.getElementById('welcomeMessage');
  const profileContainer = document.getElementById('profile-container');
  const navUsername = document.getElementById('nav-username');
  const authSection = document.getElementById('auth-section');
  const profileIcon = document.getElementById('profile-icon');
  const logoutBtn = document.getElementById('logoutBtn');
  const communityUsername = document.getElementById('communityUsername');

 
  const username = localStorage.getItem('username') || (window.currentUser?.username) || 'User';

  
  if (welcomeEl) {
    welcomeEl.textContent = `Welcome, ${username}`;
  }
  if (navUsername) {
    navUsername.textContent = username;
  }
  if (profileIcon) {
    profileIcon.textContent = username.slice(0, 2).toUpperCase() + ' ▼';
  }
  if (authSection) {
    authSection.style.display = 'none';
  }
  if (profileContainer) {
    profileContainer.style.display = 'flex';
  }
  if (communityUsername) {
    communityUsername.value = username;
    communityUsername.readOnly = true;
  }

  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('username');
      window.location.href = 'auth.html';
    });
  }
    if (profileIcon) {
    profileIcon.addEventListener('click', () => {
      const profileMenu = document.getElementById('profile-menu');
      if (profileMenu) {
        profileMenu.classList.toggle('show');
      }
    });
  }

}

document.addEventListener('DOMContentLoaded', updateAuthUI);


function updateLocationUI() {
    const location = MOCK_DATA.locations[currentLocationIndex];
    if (weatherReportEl) {
        weatherReportEl.textContent = location.weather;
    }

    if (cropSuggestionsList) {
        cropSuggestionsList.innerHTML = '';
        location.crops.forEach(cropId => {
            const crop = MOCK_DATA.cropDetails[cropId];
            if (!crop) return;

            const li = document.createElement('li');
            li.textContent = crop.name;
            li.dataset.cropId = crop.id;
            li.addEventListener('click', () => displayCropGuide(crop.id));
            cropSuggestionsList.appendChild(li);
        });
    }

    const currentCountyNameEl = document.getElementById('current-county-name');
    if (currentCountyNameEl) {
        currentCountyNameEl.textContent = location.name;
    }

   
    localStorage.setItem('selectedCountyIndex', currentLocationIndex);
}

function populateCountySelector() {
    if (!countySelector) return;

    countySelector.innerHTML = ''; 
    MOCK_DATA.locations.forEach((location, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = location.name;
        countySelector.appendChild(option);
    });

   
    const savedIndex = localStorage.getItem('selectedCountyIndex');
    if (savedIndex !== null) {
        currentLocationIndex = parseInt(savedIndex);
        countySelector.value = currentLocationIndex;
    }

    updateLocationUI();
}

function displayCropGuide(cropId) {
    const crop = MOCK_DATA.cropDetails[cropId];
    if (crop && modal && modalBody) {
        modalBody.innerHTML = crop.guide;
        modal.style.display = 'block';
    }
}

if (countySelector) {
    countySelector.addEventListener('change', (e) => {
        currentLocationIndex = parseInt(e.target.value);
        updateLocationUI();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    populateCountySelector();
});


if (closeButton) {
    closeButton.onclick = () => { if (modal) modal.style.display = 'none'; };
}
window.onclick = (event) => {
    if (event.target == modal && modal) modal.style.display = 'none';
};

const communityForm = document.getElementById('community-form');
if (communityForm) {
    communityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;
        if (username && message) {
            const feed = document.getElementById('community-feed');
            if (feed) {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = `<p><strong>${username}:</strong> ${message}</p><small>${new Date().toLocaleString()}</small>`;
                feed.insertBefore(postDiv, feed.firstChild);
                this.reset();
            }
        }
    });
}
function filterCrops() {
  const input = document.getElementById("crop-search").value.toLowerCase();
  const select = document.getElementById("crop-select");
  const options = select.options;

  for (let i = 0; i < options.length; i++) {
    const optionText = options[i].text.toLowerCase();
    options[i].style.display = optionText.includes(input) ? "" : "none";
  }
}

function renderMarketChart(crop) {
  const marketChart = document.getElementById('market-chart');
  const cropData = marketData[crop];

  if (!marketChart || !cropData) return;

  if (!cropData) {
    marketChart.innerHTML = '<p>No market data available.</p>';
  } else {
    const allPrices = cropData.map(d => d.price);
    const maxPrice = Math.max(...allPrices);

    marketChart.innerHTML = '';

    cropData.forEach(data => {
      const bar = document.createElement('div');
      bar.className = 'chart-bar';

      const barHeight = (data.price / maxPrice) * 90;
      bar.style.height = `${barHeight}%`;

      bar.innerHTML = `
        <div class="bar-label">KES ${data.price}</div>
        <div class="bar-value">${data.month}</div>
      `;

      marketChart.appendChild(bar);
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const cropSelect = document.getElementById('crop-select');

  renderMarketChart(cropSelect.value);

  cropSelect.addEventListener('change', function () {
    renderMarketChart(this.value);
  });
});
const pestForm = document.getElementById('pest-form');
if (pestForm) {
    pestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const symptomInput = document.getElementById('symptom-input');
        const symptoms = symptomInput ? symptomInput.value.toLowerCase() : '';
        const resultDiv = document.getElementById('diagnosis-result');
        let diagnosis = "Diagnosis not found. Please describe the symptoms more clearly (e.g., 'yellow spots', 'wilting', 'holes in leaves') or consult a local agricultural expert.";

        if (symptoms) {
            let foundMatch = false;
            for (const key in MOCK_DATA.pestDiagnoses) {
                if (symptoms.includes(key)) {
                    diagnosis = MOCK_DATA.pestDiagnoses[key];
                    foundMatch = true;
                    break;
                }
            }
            if (!foundMatch) {
                for (const key in MOCK_DATA.diseaseInformation) {
                    if (symptoms.includes(key)) {
                        diagnosis = MOCK_DATA.diseaseInformation[key];
                        foundMatch = true;
                        break;
                    }
                }
            }
        }
        if (resultDiv) {
            resultDiv.innerHTML = `<strong>Possible Diagnosis:</strong><p>${diagnosis}</p>`;
        }
    });
}

const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('navbar');
if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

if (chatbotToggler) {
    chatbotToggler.addEventListener('click', () => {
        if (chatbotContainer) chatbotContainer.style.display = 'flex';
        chatbotToggler.style.display = 'none';
    });
}
if (closeChatbotBtn) {
    closeChatbotBtn.addEventListener('click', () => {
        if (chatbotContainer) chatbotContainer.style.display = 'none';
        if (chatbotToggler) chatbotToggler.style.display = 'block';
    });
}

if (sendBtn && chatbotInput && chatbotBody) {
    sendBtn.addEventListener('click', handleChat);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChat();
    });
}
 
    if (profileIcon) {
    profileIcon.addEventListener('click', () => {
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });
}



window.addEventListener('click', function(e) {
    if (!profileContainer.contains(e.target)) {
        profileDropdown.style.display = 'none';
    }
});
 
if (profileIcon) {
  profileIcon.addEventListener("click", () => {
    profileMenu.classList.toggle("show");
  });
}
  function showLoggedInUser(username) {
    document.getElementById("auth-section").style.display = "none";
    profileMenu.classList.remove("hidden");
    document.getElementById("profile-icon").textContent = username.slice(0,2).toUpperCase() + " ▼";
  }


   currentUser = JSON.parse(localStorage.getItem('farmWisdomCurrentUser'));
  if (currentUser) {
    showLoggedInUser(currentUser.username);
  }

  const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("farmWisdomCurrentUser");
        location.reload();
    });
}
function handleChat() {
    const messageText = chatbotInput.value.trim();
    if (!messageText) return;

    appendMessage(messageText, 'user-message');
    chatbotInput.value = '';

    setTimeout(() => {
        const botResponse = generateBotResponse(messageText);
        appendMessage(botResponse, 'bot-message');
    }, 600);
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.innerHTML = text;
    chatbotBody.appendChild(messageDiv);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function generateBotResponse(userText) {
    const text = userText.toLowerCase();

    if (text.includes('developer') || text.includes('creator') || text.includes('who made you') || text.includes('joe kamau') || text.includes('who developed you') || text.includes('your developer') || text.includes('your creator') || text.includes('who created you')) {
        return "I was developed by Joe Kamau, a brilliant computer scientist from Nakuru who studies at the University of Embu. He is passionate about machine learning algorithms and cybersecurity, and he poured that expertise into creating me.";
    }
    if (text.includes('development') || text.includes('how were you made') || text.includes('how are you made') || text.includes('creation') || text.includes('how were you created') || text.includes('how did he manage to create you') || text.includes('how did he manage to develop you') || text.includes('how did he manage to make you')) {
        return "My development was a complex and time-intensive process. Joe Kamau utilized the best machine learning algorithms and principles of artificial intelligence to build my core logic, ensuring I am both effective and responsive.";
    }
    if (text.includes('about joe kamau') || text.includes('about your developer') || text.includes('about who made you')) {
        return "Joe Kamau is a talented computer scientist from Nakuru, currently pursuing his studies at the University of Embu. He has a strong passion for machine learning and cybersecurity, which were instrumental in my creation.";
    }
    if (text.includes('where is university of embu')) {
        return "The University of Embu is located in Embu County, Kenya. It's where my developer, Joe Kamau, is currently studying.";
    }
    if (text.includes('what is your purpose') || text.includes('what are you for') || text.includes('why were you created')) {
        return "My purpose is to be a helpful agricultural assistant, providing farmers with valuable information on weather, crops, market trends, pest and disease management, and farming practices to optimize their farming practices and improve yields in Kenya. I aim to empower farmers with knowledge!";
    }
    if (text.includes('what can you do') || text.includes('your features') || text.includes('help me') || text.includes('what is your function')) {
        return "I can provide expert advice on crops suitable for different Kenyan counties, current weather conditions, and market price trends for various crops. I can also help you diagnose common pest and disease issues, offer general farming advice, explain different farming practices, and tell you a bit about my developer, Joe Kamau. Just ask me anything related to agriculture in Kenya!";
    }
    if (text.includes('how to use this app') || text.includes('how does this work')) {
        return "This app helps you with farming decisions. You can check weather and crop suggestions by selecting your county, find detailed guides for specific crops, see market trends, diagnose pest and disease issues, and interact with fellow farmers in the community forum. Just ask me if you have a specific question!";
    }

    if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('heyyy') || text.includes('hiii') || text.includes('hello there')) {
        return "Hello! I am FarmBot, a highly advanced agricultural AI. How can I assist you today?";
    }
    if (text.includes('how are you?') || text.includes('you good?') || text.includes('how have you been?')) {
        return "I'm functioning at optimal parameters, ready to assist with any agricultural queries you have!";
    }
    if (text.includes('thank you') || text.includes('thanks') || text.includes('good job') || text.includes('pleasure') || text.includes('it is my pleasure')) {
        return "You're most welcome! Is there anything else I can help you with?";
    }
    if (text.includes('bye') || text.includes('goodbye') || text.includes('see you') || text.includes('take care') || text.includes('adios')) {
        return "Goodbye! Happy farming, and feel free to reach out anytime.";
    }
    if (text.includes('good morning') || text.includes('good afternoon') || text.includes('good evening') || text.includes('morning') || text.includes('evening') || text.includes('afternoon')) {
        return `A very good ${userText.split('good ')[1]?.trim() || ''} to you! How can I help you grow your success today?`;
    }

    if (text.includes('weather in') || text.includes('weather like in')) {
        const countyName = userText.split(' in ')[1]?.trim();
        if (countyName) {
            const location = MOCK_DATA.locations.find(loc => countyName.includes(loc.name.toLowerCase()));
            if (location) {
                return `The weather in ${location.name} is: ${location.weather}.`;
            } else {
                return `I don't have weather information for "${countyName}". Please try a recognized county in Kenya.`;
            }
        } else {
            const location = MOCK_DATA.locations[currentLocationIndex];
            return `You asked about weather in general. The weather in your currently selected county, ${location.name}, is: ${location.weather}.`;
        }
    }
    if (text.includes('what is current location') || text.includes('where am i')) {
        const location = MOCK_DATA.locations[currentLocationIndex];
        return `You are currently viewing information for ${location.name}.`;
    }
    if (text.includes('change location to')) {
        const desiredLocation = userText.replace('change location to', '').trim().toLowerCase();
        const foundLocation = MOCK_DATA.locations.find(loc => loc.name.toLowerCase() === desiredLocation);
        if (foundLocation) {
            currentLocationIndex = MOCK_DATA.locations.indexOf(foundLocation);
            updateLocationUI();
            return `Location updated to ${foundLocation.name}. The weather there is ${foundLocation.weather}.`;
        } else {
            return `Sorry, I couldn't find information for "${desiredLocation}". Please specify a county in Kenya.`;
        }
    }
    if (text.includes('weather')) {
        const location = MOCK_DATA.locations[currentLocationIndex];
        return `The current weather in ${location.name} is: ${location.weather}.`;
    }

    if (text.includes('farming tips') || text.includes('advice on farming') || text.includes('how to farm')) {
        return "To give you the best tips, could you tell me what crop you're interested in or which county you're farming in? Or perhaps you have a specific farming practice in mind?";
    }
    if (text.includes('what crops grow in')) {
        const countyName = userText.split(' in ')[1]?.trim();
        if (countyName) {
            const location = MOCK_DATA.locations.find(loc => countyName.includes(loc.name.toLowerCase()));
            if (location) {
                const crops = location.crops.map(cropId => MOCK_DATA.cropDetails[cropId]?.name || cropId).join(', ');
                return `In ${location.name}, common crops include: ${crops}.`;
            } else {
                return `I don't have specific crop information for a county named "${countyName}". Please try a recognized county in Kenya.`;
            }
        } else {
            return "Please specify a county for me to list suitable crops.";
        }
    }
    if (text.includes('crop guide for') || text.includes('tell me about growing')) {
        const cropName = userText.replace(/crop guide for|tell me about growing/i, '').trim().toLowerCase();
        const crop = MOCK_DATA.cropDetails[cropName];
        if (crop) {
            return `Here is the growing guide for ${crop.name}: ${crop.guide}`;
        } else {
            return `I don't have a detailed guide for "${cropName}". Please try a different crop or check the list of suggested crops for your county.`;
        }
    }
    for (const key in MOCK_DATA.cropDetails) {
        if (text.includes(key) && (text.includes('guide') || text.includes('farming') || text.includes('grow'))) {
            return `Here is information on ${MOCK_DATA.cropDetails[key].name} farming: ${MOCK_DATA.cropDetails[key].guide}`;
        }
    }
    if (text.includes('how to plant') || text.includes('planting')) {
        const cropMatch = Object.keys(MOCK_DATA.cropDetails).find(crop => text.includes(crop));
        if (cropMatch) {
            return `For ${MOCK_DATA.cropDetails[cropMatch].name}, you should refer to its specific growing guide for detailed planting instructions. Generally, ensure proper seed depth, spacing, and favorable soil conditions. You can also ask about the 'planting season' in general.`;
        } else {
            return "To advise on planting, please specify the crop you're interested in.";
        }
    }
    if (text.includes('harvesting')) {
        const cropMatch = Object.keys(MOCK_DATA.cropDetails).find(crop => text.includes(crop));
        if (cropMatch) {
            return `Harvesting time for ${MOCK_DATA.cropDetails[cropMatch].name} is typically mentioned in its specific growing guide. It's important to harvest at the optimal time for the best yield and quality.`;
        } else {
            return "Harvesting time depends on the crop and variety. It's important to harvest at the optimal time for the best yield and quality. Do you have a specific crop in mind?";
        }
    }
    if (text.includes('storage') || text.includes('store crops') || text.includes('post-harvest')) {
        return MOCK_DATA.generalFarmingAdvice["post-harvest storage"];
    }
    if (text.includes('what is a crop') || text.includes('define crop')) {
        return "A crop is any plant or plant product that is grown and harvested for profit or subsistence. It typically refers to plants cultivated on a large scale.";
    }
    if (text.includes('better yields') || text.includes('increase yield') || text.includes('high yield')) {
        return "To get better yields, focus on soil health, optimal planting times, appropriate fertilization, effective pest and disease management, and sufficient irrigation. Using certified seeds also helps. Consider adopting practices like conservation agriculture and crop rotation.";
    }
    if (text.includes('hybrid seed') || text.includes('what are hybrid seeds')) {
        return "Hybrid seeds are produced by cross-pollinating two different parent plants. They often exhibit 'hybrid vigor,' leading to increased yield, disease resistance, and uniformity, but they don't breed true from their own seeds, meaning you generally have to buy new seeds each season.";
    }
    if (text.includes('planting season')) {
        return MOCK_DATA.generalFarmingAdvice["planting season"];
    }
    if (text.includes('main staple foods')) {
        const staples = MOCK_DATA.stapleFoods.map(s => s.replace(/\*\*/g, '')).join(', ');
        return `The main staple foods in Kenya include: ${staples}.`;
    }
    if (text.includes('cash crop')) {
        const cashCrops = MOCK_DATA.cashCrops.map(c => c.replace(/\*\*/g, '')).join(', ');
        return `Some of the important cash crops in Kenya are: ${cashCrops}. These are grown primarily for sale rather than direct consumption.`;
    }
    if (text.includes('food security')) {
        return MOCK_DATA.generalFarmingAdvice["food security"];
    }
    if (text.includes('certified seeds') || text.includes('how to get certified seeds')) {
        return MOCK_DATA.farmingPractices["seed selection"] + " You can source certified seeds from agricultural suppliers, reputable seed companies (e.g., Kenya Seed Company), or through farmer cooperatives and government agricultural programs. Always look for KEPHIS (Kenya Plant Health Inspectorate Service) certification.";
    }
    if (text.includes('best crops for dry areas') || text.includes('drought tolerant crops')) {
        const dryCropsIds = MOCK_DATA.locations.filter(loc => loc.weather.includes('Dry') || loc.weather.includes('Hot')).flatMap(loc => loc.crops).filter((value, index, self) => self.indexOf(value) === index);
        const commonDryCrops = ['sorghum', 'finger millet', 'green grams', 'pigeon peas', 'cowpeas', 'cassava', 'watermelon', 'mangoes', 'simsim', 'drought-resistant vegetables'];
        const relevantDryCrops = dryCropsIds.filter(id => commonDryCrops.includes(id)).map(cropId => MOCK_DATA.cropDetails[cropId]?.name || cropId);

        if (relevantDryCrops.length === 0 && (text.includes('livestock') || text.includes('animals'))) {
            return "For dry areas, livestock farming, especially with drought-tolerant animals like camels and goats, is highly suitable. Consider practices like fodder production and water harvesting. You can also look into drought-resistant crops specifically.";
        } else if (relevantDryCrops.length > 0) {
            return `For dry areas, consider drought-tolerant crops like: ${relevantDryCrops.join(', ')}. Efficient water management practices and livestock farming (e.g., goats, camels) are also key.`;
        } else {
             return "I can suggest drought-tolerant crops like sorghum, millet, green grams, pigeon peas, cowpeas, cassava, watermelon, mangoes, simsim, and drought-resistant vegetables. Livestock farming is also suitable for dry areas. Which specific one are you interested in?";
        }
    }
    if (text.includes('protect crops from birds') || text.includes('bird damage')) {
        return "To protect crops, especially cereals like sorghum and millet, from bird damage, you can use netting, bird scarecrows, reflective tapes, or employ bird scaring tactics. Some farmers use traditional methods like stringing up old CDs.";
    }

    if (text.includes('soil health') || text.includes('improve soil') || text.includes('healthy soil')) {
        return "Good soil health is key! Consider crop rotation, adding organic matter like compost and manure, getting a soil test to understand specific nutrient deficiencies, and ensuring proper pH balance. Mulching also greatly helps retain moisture and improve soil structure. Practices like conservation agriculture are excellent for long-term soil health.";
    }
    if (text.includes('fertilizer') || text.includes('nutrients')) {
        return "The best fertilizer depends on your soil and crop. A soil test will tell you exactly what nutrients your soil is lacking. Generally, NPK (Nitrogen, Phosphorus, Potassium) fertilizers are used, but organic options like manure and compost are also beneficial. Balanced fertilization is key for optimal growth.";
    }
    if (text.includes('organic fertilizer') || text.includes('natural fertilizer')) {
        return "Organic fertilizers are derived from plant or animal matter, such as compost, manure, bone meal, and green manures. They improve soil structure, enhance microbial activity, and release nutrients slowly. They are a core component of 'organic farming'.";
    }
    if (text.includes('soil type')) {
        return "Different crops thrive in different soil types. Do you want to know about a specific soil type, like sandy, clay, or loamy soil? Each has distinct properties affecting water retention and nutrient availability. Knowing your soil type helps in choosing the right crops.";
    }
    if (text.includes('soil test') || text.includes('soil testing')) {
        return MOCK_DATA.farmingPractices["soil testing"];
    }
    if (text.includes('compost') || text.includes('composting')) {
        return MOCK_DATA.farmingPractices["composting"];
    }
    if (text.includes('soil ph')) {
        return MOCK_DATA.generalFarmingAdvice["soil pH"];
    }
    if (text.includes('nutrient deficiency') || text.includes('lack of nutrients')) {
        return MOCK_DATA.generalFarmingAdvice["nutrient deficiency"];
    }
    if (text.includes('organic matter in soil')) {
        return MOCK_DATA.cropDetails["organic matter"] ? MOCK_DATA.cropDetails["organic matter"].guide : "Organic matter improves soil structure, water retention, and nutrient availability. It's crucial for healthy soil and can be added through compost, manure, and cover cropping.";
    }

    if (text.includes('irrigation') || text.includes('water crops')) {
        return "Efficient irrigation is crucial, especially in dry seasons. Drip irrigation and mulching are excellent ways to conserve water and deliver it directly to plant roots. Consider the crop's water requirements and explore rainwater harvesting techniques.";
    }
    if (text.includes('deal with drought') || text.includes('drought management') || text.includes('drought farming')) {
        return MOCK_DATA.generalFarmingAdvice["climate change impacts"];
    }
    if (text.includes('rainfall')) {
        return "Rainfall patterns are critical for rain-fed agriculture. You can check the 'weather report' for your selected county for current conditions, but for long-term planning, consider historical rainfall data for your area and adopt drought-resistant crops.";
    }
    if (text.includes('temperature for crops') || text.includes('optimal temperature')) {
        return "Optimal temperature ranges vary greatly by crop. For instance, maize prefers 20-30°C, while tea thrives in cooler conditions (18-30°C). Refer to the specific crop guide for details. Extreme temperatures (too hot or too cold) can stress plants and reduce yields.";
    }
    if (text.includes('drip irrigation')) {
        return MOCK_DATA.farmingPractices["drip irrigation"];
    }
    if (text.includes('rainwater harvesting')) {
        return MOCK_DATA.farmingPractices["rainwater harvesting"];
    }

    if (text.includes('pest management') || text.includes('deal with pests') || text.includes('control pests')) {
        return "For effective pest management, I highly recommend Integrated Pest Management (IPM). This involves a combination of strategies. Could you describe the symptoms you're seeing or the specific pest you're dealing with?";
    }
    for (const key in MOCK_DATA.pestDiagnoses) {
        if (text.includes(key)) {
            return `Based on '${key}', ${MOCK_DATA.pestDiagnoses[key]}`;
        }
    }
    if (text.includes('disease management') || text.includes('deal with diseases') || text.includes('control diseases')) {
        return "Disease management often involves using resistant varieties, practicing good sanitation, proper spacing, and sometimes fungicides. Could you describe the symptoms you're seeing or the specific disease you're concerned about?";
    }
    for (const key in MOCK_DATA.diseaseInformation) {
        if (text.includes(key)) {
            return `Based on '${key}', ${MOCK_DATA.diseaseInformation[key]}`;
        }
    }
    if (text.includes('integrated pest management') || text.includes('ipm')) {
        return MOCK_DATA.farmingPractices["integrated pest management (ipm)"];
    }
    if (text.includes('without chemicals') || text.includes('natural pest control') || text.includes('organic pest control')) {
        return MOCK_DATA.cropDetails["organic pest control"] ? MOCK_DATA.cropDetails["organic pest control"].guide : "Natural pest control involves methods like introducing beneficial insects, companion planting, using neem oil, and maintaining good plant health to resist pests naturally.";
    }
    if (text.includes('maize stem borer')) {
        return "The Maize Stem Borer is a common pest that bores into maize stems, causing wilting and reduced yields. Control measures include using resistant varieties, proper crop rotation, good field sanitation (destroying crop residues), and biological control agents. Insecticides can be used for severe infestations.";
    }
    if (text.includes('african bollworm')) {
        return "The African Bollworm is a polyphagous pest (feeds on many plants) that damages fruits (e.g., tomatoes, cotton bolls) and pods (e.g., beans). Larvae bore into the produce, causing direct loss. Control involves hand-picking, biological insecticides (Bt), and targeted chemical sprays.";
    }
    if (text.includes('fruit flies')) {
        return "Fruit flies are a major pest for fruits like mangoes, citrus, and passion fruit. They lay eggs in ripening fruit, causing rot. Control measures include bait sprays, trapping (pheromone traps), good orchard sanitation (collecting fallen fruits), and early harvesting.";
    }
    if (text.includes('mlnd') || text.includes('maize lethal necrosis disease')) {
        return MOCK_DATA.diseaseInformation["maize lethal necrosis disease (MLND)"];
    }
    if (text.includes('coffee berry disease') || text.includes('cbd')) {
        return MOCK_DATA.diseaseInformation["coffee berry disease (CBD)"];
    }
    if (text.includes('phytophthora root rot')) {
        return MOCK_DATA.cropDetails["phytophthora root rot"] ? MOCK_DATA.cropDetails["phytophthora root rot"].guide : "Phytophthora root rot is a soil-borne disease causing roots to rot, leading to wilting and plant death. It's often associated with waterlogged conditions. Management includes improving drainage, using resistant varieties, and fungicides.";
    }
    if (text.includes('aflatoxin contamination')) {
        return MOCK_DATA.cropDetails["aflatoxin contamination"] ? MOCK_DATA.cropDetails["aflatoxin contamination"].guide : "Aflatoxin is a toxic compound produced by certain fungi, particularly in maize and groundnuts, due to improper drying and storage. It's a major health concern. Prevention involves proper drying, storage, and using resistant varieties.";
    }
    if (text.includes('water quality for fish farming')) {
        return MOCK_DATA.cropDetails["water quality"] ? MOCK_DATA.cropDetails["water quality"].guide : "Good water quality is paramount for fish farming. Key parameters include pH, dissolved oxygen, ammonia, nitrites, and temperature. Regular monitoring and proper pond management are essential to prevent disease and ensure fish health.";
    }
    if (text.includes('soil erosion')) {
        return MOCK_DATA.cropDetails["soil erosion"] ? MOCK_DATA.cropDetails["soil erosion"].guide : "Soil erosion is the displacement of the upper layer of soil, caused by wind, water, or tillage. It reduces soil fertility and productivity. Control methods include terracing, contour farming, cover cropping, mulching, and agroforestry.";
    }
    if (text.includes('farm mechanization')) {
        return MOCK_DATA.cropDetails["farm mechanization"] ? MOCK_DATA.cropDetails["farm mechanization"].guide : "Farm mechanization involves using machinery and equipment (e.g., tractors, planters, harvesters) to perform agricultural tasks. It increases efficiency, reduces labor costs, and can improve precision in farming operations.";
    }
    if (text.includes('greenhouse farming')) {
        return MOCK_DATA.cropDetails["greenhouse farming"] ? MOCK_DATA.cropDetails["greenhouse farming"].guide : "Greenhouse farming is growing crops under a controlled environment. It allows for off-season production, protection from harsh weather and pests, and efficient resource use. It's common for high-value crops like tomatoes, peppers, and flowers.";
    }
    if (text.includes('drought-resistant vegetables')) {
        return MOCK_DATA.cropDetails["drought-resistant vegetables"].guide;
    }
    if (text.includes('camel milk')) {
        return MOCK_DATA.cropDetails["camel milk"].guide;
    }
    if (text.includes('urban farming')) {
        return MOCK_DATA.cropDetails["urban farming"].guide;
    }
    if (text.includes('forest products')) {
        return MOCK_DATA.cropDetails["forest products"] ? MOCK_DATA.cropDetails["forest products"].guide : "Forest products include timber, fuelwood, medicinal plants, resins, and wild fruits/vegetables. Sustainable forest management is crucial for these resources, providing both economic and environmental benefits.";
    }
    if (text.includes('fodder')) {
        return MOCK_DATA.cropDetails["fodder"].guide;
    }
    if (text.includes('spices')) {
        return MOCK_DATA.cropDetails["spices"].guide;
    }

    if (text.includes('market trends for') || text.includes('price of') || text.includes('market prices for')) {
        const cropName = userText.replace(/market trends for|price of|market prices for/i, '').trim().toLowerCase();
        const trends = MOCK_DATA.marketTrends.filter(trend => cropName.includes(trend.crop.toLowerCase()));
        if (trends.length > 0) {
            let response = `Here are some recent market trends for ${trends[0].crop} (prices in KES per ${trends[0].unit || 'unit'}) from my data:\n`;
            trends.forEach(trend => {
                response += `${trend.month}: KES ${trend.price.toLocaleString()}${trend.unit ? ` per ${trend.unit}` : ''}. `;
            });
            return response + "Please note, these are mock data and actual prices may vary. Always check local market boards and reliable market information sources for the most current prices.";
        } else {
            return `I don't have specific market trend data for "${cropName}". I currently have data for maize, tea, coffee, beans, potatoes, avocado, milk, green grams, mangoes, cabbages, onions, and strawberries. Which one would you like to know about?`;
        }
    }
    if (text.includes('market prices')) {
        return "I have market trend data for maize, tea, coffee, beans, potatoes, avocado, milk, green grams, mangoes, cabbages, onions, and strawberries. Which crop are you interested in?";
    }
    if (text.includes('market access')) {
        return MOCK_DATA.generalFarmingAdvice["market access"];
    }

    if (text.includes('common challenges') || text.includes('challenges facing farmers')) {
        return "Farmers in Kenya face several challenges, including: " + MOCK_DATA.farmingChallenges.join('; ') + ".";
    }
    if (text.includes('government policies on agriculture') || text.includes('government support for farmers') || text.includes('government role')) {
        return MOCK_DATA.generalFarmingAdvice["government role in agriculture"];
    }
    if (text.includes('sustainable farming') || text.includes('eco-friendly farming') || text.includes('sustainable agriculture')) {
        return MOCK_DATA.generalFarmingAdvice["sustainable agriculture"];
    }
    if (text.includes('conservation agriculture')) {
        return MOCK_DATA.farmingPractices["conservation agriculture"];
    }
    if (text.includes('crop rotation')) {
        return MOCK_DATA.farmingPractices["crop rotation"];
    }
    if (text.includes('intercropping')) {
        return MOCK_DATA.farmingPractices["intercropping"];
    }
    if (text.includes('organic farming')) {
        return MOCK_DATA.farmingPractices["organic farming"];
    }
    if (text.includes('agroforestry')) {
        return MOCK_DATA.farmingPractices["agroforestry"];
    }
    if (text.includes('precision agriculture')) {
        return MOCK_DATA.farmingPractices["precision agriculture"];
    }
    if (text.includes('mulching')) {
        return MOCK_DATA.farmingPractices["mulching"];
    }
    if (text.includes('value addition')) {
        return MOCK_DATA.farmingPractices["value addition"];
    }
    if (text.includes('farm record keeping') || text.includes('keeping records')) {
        return MOCK_DATA.farmingPractices["farm record keeping"];
    }
    if (text.includes('youth in agriculture') || text.includes('youth programs')) {
        return MOCK_DATA.generalFarmingAdvice["youth in agriculture"];
    }
    if (text.includes('future of agriculture in kenya')) {
        return "The future of agriculture in Kenya is trending towards climate-smart agriculture, technology adoption (precision agriculture), value addition, diversification of crops, and strengthening market linkages. There's also a growing focus on youth involvement and sustainable practices to ensure food security.";
    }
    if (text.includes('what is the role of agriculture in kenya economy')) {
        return "Agriculture is the backbone of Kenya's economy, accounting for over 25% of the GDP and employing over 70% of the rural population. It's crucial for food security, poverty reduction, and foreign exchange earnings (especially from tea, coffee, and horticulture exports).";
    }
    if (text.includes('cover cropping')) {
        return MOCK_DATA.farmingPractices["cover cropping"];
    }
    if (text.includes('crop diversification')) {
        return MOCK_DATA.farmingPractices["crop diversification"];
    }
    if (text.includes('no-till farming')) {
        return MOCK_DATA.farmingPractices["no-till farming"];
    }
    if (text.includes('soil solarization')) {
        return MOCK_DATA.farmingPractices["soil solarization"];
    }
    if (text.includes('raised beds')) {
        return MOCK_DATA.farmingPractices["raised beds"];
    }
    if (text.includes('contour farming')) {
        return MOCK_DATA.farmingPractices["contour farming"];
    }
    if (text.includes('terracing')) {
        return MOCK_DATA.farmingPractices["terracing"];
    }
    if (text.includes('hydroponics')) {
        return MOCK_DATA.farmingPractices["hydroponics"];
    }
    if (text.includes('aquaponics')) {
        return MOCK_DATA.farmingPractices["aquaponics"];
    }
    if (text.includes('climate-smart agriculture')) {
        return MOCK_DATA.generalFarmingAdvice["climate-smart agriculture"];
    }

    const suggestedQuestions = MOCK_DATA.commonQuestions.sort(() => 0.5 - Math.random()).slice(0, 3);
    return `I'm sorry, I don't have information on that specific query. Perhaps you'd like to ask about: <ul>${suggestedQuestions.map(q => `<li>"${q}"</li>`).join('')}</ul>`;
}

populateCountySelector();
updateLocationUI();


