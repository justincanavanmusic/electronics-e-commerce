const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Storage' },    // 0
        { name: 'Monitors' },   // 1
        { name: 'Laptops'},     // 2
        { name: 'Desktops'},    // 3
        { name: 'Keyboards'},   // 4
        { name: 'Mouse'}        // 5
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "WD 2TB Elements Portable External Hard Drive",
            price: 64,
            description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            category: categories[0]._id,
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            review: "test review test review test review test review test review "
        },
        {
            name: "SanDisk SSD PLUS 1TB Internal SSD",
            price: 109,
            description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            category: categories[0]._id,
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
        },
        {
            name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache",
            price: 109,
            description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            category: categories[0]._id,
            image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
        },
        {
            name: "WD 4TB Gaming Drive Works with Playstation 4",
            price: 114,
            description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            category: categories[0]._id,
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
        },
        {
            name: "Acer SB220Q bi 21.5 inches Full HD",
            price: 599,
            description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            category: categories[1]._id,
            image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        },
        {
            name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
            price: 999.99,
            description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE",
            category: categories[1]._id,
            image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
        },
        {
            name: "Lenovo V15 G2 15.6 Laptop Computer - Black",
            price: 599.99,
            description: "Designed for the modern workplace, the Lenovo V15 Gen 2 laptop gets it right. Suited for mobile productivity, it yields great performance in the office or at home. 11th Gen Intel Core processors and integrated graphics, plus top-notch security, memory, and storage options, give you a smooth workday, every day.",
            category: categories[2]._id,
            image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51k0XSQ++cL._AC_UF894,1000_QL80_.jpg"
        },
        {
            name: "ASUS ROG Strix Gaming Laptop Computer",
            price: 2199.99,
            description: "Draw more frames and win more games with the brand new Strix G16 and Windows 11 Pro. Powered by a 13th Gen Intel Core i9-13980HX Processor and an NVIDIA GeForce RTX 4070 Laptop GPU, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus support, the Strix G16 unlocks the true potential of its hardware. With PCIe Gen4 SSD storage and 32GB of 4800MHz DDR5 RAM, large game libraries and intense multitasking sessions are a breeze for this gaming machine.",
            category: categories[2]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/663012_540237_01_front_comping.jpg"
        },
        {
            name: "Dell OptiPlex 3000 SFF Desktop Computer",
            price: 599.99,
            description: "Fresh designs allow OptiPlex 3000 Small Form Factor desktops and accompanying peripherals to fit right into any modern workspace setup.",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/651464_441402_01_front_comping.jpg"
        },
        {
            name: "PowerSpec G472 Gaming PC",
            price: 2499.99,
            description: "The PowerSpec G472 desktop computer with Windows 11 Pro is a leading edge multipurpose system featuring the Intel Core i9-13900KF unlocked processor with a CoolerMaster ML240L AIO Liquid Cooler, a MSI Z690-A Pro system board powered by a 850W Gold PSU, G.Skill 32GB DDR5 5600 RAM, a 2TB Western Digital NVMe SSD, and a Nvidia RTX 4070Ti 12GB GDDR6X discrete video card to provide an exciting enveloping experience playing the latest games in the market today or handling the very most demanding power user workloads!",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/662597_535112_01_front_comping.jpg"
        },
        {
            name: "Glorious RGB Mechanical Gaming Keyboard",
            price: 119.99,
            description: "This is the last keyboard you will ever need to buy. Trying out different switches, replacing old ones, and matching several types of mechanical keyboard switches used to be difficult and required extreme technical skill. The Glorious Modular Mechanical Keyboard (GMMK) is the worlds first mechanical keyboard featuring hot-swappable switches for Cherry, Gateron, and Kailh branded switches. Ever wonder what Gateron Blues felt like? Or what is the craze behind the Cherry MX clears? Want to use Gateron Reds for your WASD, but Gateron Blacks for all your other keys? With the GMMK, you no longer have to purchase an entirely new keyboard, or disassemble and solder your switches you can simply pop out the switch just like a keycap, and mix/match to test out and use any combination of switches you desire. Armed with a glorious sandblasted aluminum faceplate, 100% anti-ghosting (full NRKO), RGB LED backlighting (several modes), modular switches, double-shot injection keycaps, and minimalistic design - The GMMK is revolutionizing the mechanical keyboard market, giving users full control without needing any technical experience.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648474_395228_01_front_comping.jpg"
        },
        {
            name: "Redragon Kumara RGB Gaming Mechanical Keyboard",
            price: 39.99,
            description: "Redragon K552 RGB LED is a Compact TKL Tenkeyless Ergonomic Designed 87 key mechanical gaming keyboard with custom switches (Cherry Blue equivalent) for longevity with greater durability and responsiveness offering clicky medium resistance audible loud click sound crisp precise tactile feedback for typing and gaming. It contains 18 different RGB lighting modes, 9 different colors, and 5 backlight brightness levels. Precision engineered keycaps offer crystal clear uniform backlighting. ALL 87 keys are conflict free n-Key Rollover for ultimate gaming performance. Its non-slip ergonomic design is splash-proof, and can be adjusted for different typing angles. The high-speed USB cable has a gold-plated connected that is corrosion free.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/641121_316117_01_front_comping.jpg"
        },
        {
            name: "Logitech G G703 Wireless Optical Gaming Mouse",
            price: 89.99,
            description: "Logetech G703 LIGHTSPEED enters the next generation of performance with the advanced HERO 16K sensor. Get ready for next-level tracking, enhanced LIGHTSPEED, and 10X the power efficiency of the previous generation. Add POWERPLAY to never worry about charging again and complete the ultimate LIGHTSPEED loadout.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/608591_956789_01_front_comping.jpg"
        },
        {
            name: "Razer Basilisk V3 X HyperSpeed Ergonomic Wireless Gaming Mouse",
            price: 69.99,
            description: "With the Razer Basilisk V3 X HyperSpeed, there are no limits on how you choose to play. Armed with 9 programmable controls, dual-mode wireless connectivity, and customizable Razer Chroma RGB, it is made to answer to only one master - you. Iconic Ergonomic Form with 9 Customizable Controls for unrivalled handling and command Favored by millions worldwide, the mouse's signature shape perfectly supports different grips, while its numerous easy-access buttons allow for an endless combination of commands and macros. Razer HyperSpeed Wireless (2.4 GHz) and Bluetooth for ultra-low-latency performance or extended battery life Unleash seamless, low-latency performance that's faster than other wireless tech or switch to Bluetooth for longer hours of gaming. Outfitted with multi-device support for a streamlined setup. Up to 285 Hours of Battery Life for long-lasting performance With up to 535* hours on Bluetooth and 285 hours on Razer HyperSpeed Wireless, last longer in the heat of battle with a mouse designed to play the long game. *May vary depending on usage conditions Razer 5G Advanced 18K Optical Sensor for fine-tuned precision Tailor the mouse to your playstyle with new, robust set of sensitivity settings. Enjoy responsive, pixel-precise aim with an ultra-reliable sensor that tracks your movement with zero spinouts. Razer Mechanical Mouse Switches Gen-2 for improved click durability and consistency With new gold-plated contact points, the switches are less prone to degrading and have a longer lifespan of up to 60-million clicks, so you can enjoy crisp execution that's just as consistent. Powered by Razer Chroma RGB for a truly immersive experience Customize from 16.8 million colors and countless lighting effects, and experience greater immersion as the mouse reacts dynamically with hundreds of Chroma-integrated games.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/664264_554717_01_front_comping.jpg"
        },
        {
            name: "Samsung 980 Pro SSD 2TB M.2 NVMe Internal SSD",
            price: 149.99,
            description: "Unleash the power of the Samsung 980 PRO PCIe 4.0 NVMe SSD for next-level computing. 980 PRO delivers 2x the data transfer rate of PCIe 3.0, while maintaining compatibility with PCIe 3.0. Get read speeds up to 7,000 MB/s with 980 PRO and push the limits of what SSDs can do. Powered by a new Elpsis controller designed to harmonize the flash memory components and the interface for superior speed - with a PCIe 4.0 interface thats 2x faster than PCIe 3.0 SSDs and 12x faster than Samsung SATA SSDs - every component of this NVMe SSD is manufactured by Samsung for performance that lasts.",
            category: categories[0]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/633342_229948_01_front_comping.jpg"
        },
        {
            name: "Seagate 16TB Seagate FireCuda Gaming Hub External HDD",
            price: 429.99,
            description: "Light up your gaming experience with the Seagate FireCuda Gaming Hub. Customizable RGB LED lighting helps you create the ultimate atmosphere and up to 16TB in capacity keeps all your titles safe, sound, and armed right into your battlestation. Plus, dual front-facing USB-C and USB-A ports enable you to connect and power all your peripherals in one place.",
            category: categories[0]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/639781_305540_01_front_comping.jpg"
        },
        {
            name: "ASUS VG27AQL1A 27 2K QHD 170Hz Gaming Monitor",
            price: 299.99,
            description: "Designed for intense, fast-paced games, the ASUS TUF Gaming VG27AQL1A is a 27 gaming IPS display with 1ms (MPRT) response time and blazing 170Hz (overclocked) refresh rate to give you super-smooth gameplay. The VG27AQL1A features ELMB Sync technology to eliminate screen tearing and ghosting.",
            category: categories[1]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/628172_171710_01_front_comping.jpg"
        },
        {
            name: "Alienware AW3423DW 34 2K WQHD 175Hz Curved Screen Gaming Monitor",
            price: 1199.99,
            description: "The world's first QD-OLED gaming monitor. Featuring infinite contrast ratio and VESA Display HDR for remarkably vivid colors and visuals bursting to life. Quantum Dot Display Technology enables a slim panel design and delivers a superior color performance with a higher peak luminance and greater color gamut range vs WOLED (White OLED). The monitor features an extensive cinema-grade color coverage of 99.3% DCI-P3 across a wide viewing angle, and colors are accurate out of the box with a factory calibration of Delta E less than 2. Combined with 1000 nits peak brightness, infinite contrast ratio, and VESA Display HDR True Black 400 certification, you can expect incredibly realistic visuals for unforgettably immersive gaming experiences. Experience ultra-low latency gameplay, support for HDR and cinematic color, plus smooth, tear-free gaming thanks to NVIDIA G-SYNC ULTIMATE certification. Additionally, with the industrys fastest 0.1 ms GtG (Gray to Gray) response time and up 175 Hz (native) high refresh rate, youll experience smoother gameplay and view fast-moving graphics with incredible clarity for a faster in-game reaction time. The jaw-dropping new design features a sleek QD-OLED curved 1800R panel integrated into the iconic new Legend 2.0 ID, plus customizable stadium loop OLED AlienFX lighting, 360 ventilation for better heat dissipation, improved cable management, and a new centralized OSD joystick to make adjusting your settings easier.",
            category: categories[1]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648332_390054_01_front_comping.jpg"
        },
        {
            name: "AOC 24G2E 24 Full HD 144Hz Gaming Monitor",
            price: 129.99,
            description: "144 Hz refresh rate IPS panel together with 1 ms response time and FreeSync support. 24 flat display in Full HD, 3-sides frameless design, and height-adjustable stand. Expand your view with multiple monitor setups. The narrow border and frameless design offer the minimal bezel distraction for the ultimate battle station. Equip yourself with twice the frame rate of other monitors and say goodbye to image stuttering and blurry motion. With a 144Hz refresh rate, every frame is rendered sharply and in smooth succession, so you can line up your shots accurately and appreciate high-speed races in all their glory.",
            category: categories[1]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/663180_541060_01_front_comping.jpg"
        },
        {
            name: "LG 27GP95R 26.9 4K UHD 160Hz Gaming Monitor",
            price: 799.99,
            description: "Experience the high speed and smooth movement with the LG UltraGear 27 4K HDR 160 Hz Gaming Monitor. Support for a 160 Hz refresh rate with the DisplayPort input (120 Hz with HDMI) helps to increase accuracy by reducing motion blur from fast action scenes. At the same time, AMD FreeSync Premium Pro technology and NVIDIA G-SYNC compatibility significantly reduce screen tearing, stuttering, and other visual artifacts with compatible graphics cards. With Display Stream Compression, the UltraGear monitor can maintain a high refresh rate at 4K UHD 3840 x 2160 resolution while delivering high dynamic range color that brings scenes to life with bright highlights and deep shadows.",
            category: categories[1]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/651384_424382_01_front_comping.jpg"
        },
        {
            name: "MSI Pulse 15 B13VGK-281US 15.6 Gaming Laptop Computer",
            price: 1699.99,
            description: "The new Pulse 15 comes with a stronger Sci-fi style outlook. Just like the valiant warriors of the Tribe of Dragon, the Pulse series is about to rule the galaxy with the ultimate pulsating power!",
            category: categories[2]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/662553_535062_01_front_comping.jpg"
        },
        {
            name: "Lenovo Legion Pro 7i  16 Gaming Laptop Computer",
            price: 2649.99,
            description: "AI-tuned via Lenovo AI Engine+ and LA AI chip for tremendous performance, the Legion Pro 7i flaunts fully-powered13th Gen Intel Core Processors and 40 Series NVIDIA GeForce RTX Graphics for searing processing power. Theall-new Legion Coldfront 5.0, with vapor chamber cooling, liquid metal, an expanded intelligent intake, and an upgradedfan and exhaust system with customized fan curve controls keeps things cool as can be while you game, work, andcreate all-day on a massive up to 99.99Whr battery. Including Lenovos proprietary PureSight Gaming Display, comingin at 16, 16:10, WQXGA with high refresh rates, alongside a Legion TrueStrike with per-key RGB powered by LegionSpectrum, gets you truly into your game and ready to play. Now with an more sustainable design forged from recycledaluminum and magnesium, cast in a fittingly-styled Onyx Grey, the Legion Pro 7i is truly the next generation ofperformance, power, and design.",
            category: categories[2]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/663836_547547_01_front_comping.jpg"
        },
        {
            name: "Dell Latitude 5430 14 Laptop Computer",
            price: 999.99,
            description: "The 14 Latitude 5430 Laptop from Dell is light and powerful. It is powered by an 12th Gen Intel Core i7-1265U 10-Core processor and DDR4 RAM. The 14 anti-glare LCD display features a 1920 x 1080 native resolution, a 16:9 aspect ratio, 250 nits brightness, 45% NTSC color gamut coverage, and viewing angles of 170/160-degree. The integrated Intel Iris Xe Graphics chipset delivers a sharp, clear picture, and you'll also be able to output video to an external display using the system's HDMI 2.0 port. If you want to add external storage, optical drives, memory card readers, and more, there are two 40 Gb/s Thunderbolt 4 ports that support Power Delivery, plus two 5 Gb/s USB 3.2 Gen 1 Type-A ports. Gigabit Ethernet and Wi-Fi 6 are built-in for wired and wireless networking, while Bluetooth 5.2 technology will allow you to connect additional compatible wireless peripherals.",
            category: categories[2]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/665348_560078_01_front_comping.jpg"
        },
        {
            name: "Dell Inspiron 3910 Desktop Computer",
            price: 749.99,
            description: "Dynamic doesnt begin to describe this duo. Together, Windows 11 and Dell PCs create a best-in-class experience.",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648749_395202_01_front_comping.jpg"
        },
        {
            name: "Dell XPS 8950 Gaming PC Platinum Collection",
            price: 1899.96,
            description: "An elegant desktop that gives your ideas room to grow - with infinite expandability, monstrous performance and blazing-fast speeds. The memory, SSD and GPU are added/upgraded by Micro Center.",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648840_394866_01_front_comping.jpg"
        },
        {
            name: "Razer Ornata V3 Low-profile Mecha-membrane Gaming Keyboard",
            price: 69.99,
            description: "Meet the Razer Ornata V3 a low-profile ergonomic gaming keyboard powered by Razer Chroma RGB. Sporting a new ultra-slim form factor, more durable keycaps, and unique mecha-membrane switches, enhance your work and play with a hybrid keyboard that combines the best of both worlds. Low-profile Keys for an ergonomic gaming experience With slimmer keycaps and shorter switches enjoy natural hand positioning that allows for long hours of use with little strain. Razer Mecha-Membrane Switches for clicky keystrokes with a soft, cushioned touch Fusing the snappy, clicky feedback of a mechanical switch with the familiar feel of a conventional keyboard, each keystroke you make is as satisfying as it is precise. UV-coated Keycaps for greater fade and scratch resistance More durable than regular keycaps, the UV coating ensures more fade-resistant legends and greater protection against wear and tear from frequent use. Backlit Dedicated Media Keys for convenient control Configure them to pause, play, skip and adjust everything from brightness to volume the ultimate convenience as you enjoy your entertainment. Magnetic Soft-touch Wrist Rest for extended gaming support Designed to seamlessly snap to the keyboard, the soft-touch wrist rest provides ample comfort and support for your wrists especially vital for long periods of use. Razer Chroma RGB Lighting Zones for customizable lighting With 16.8 million colors and a suite of effects to choose from, personalize the keyboard and get access to dynamic lighting effects for hundreds of Chroma-integrated games.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/648982_401232_01_front_comping.jpg"
        },
        {
            name: "Logitech MX Illuminated Mechanical Wireless Performance Keyboard",
            price: 169.99,
            description: "A full-size keyboard with extraordinary feel, precision, and performance. Low-profile mechanical keys in your choice of 3 switch types deliver satisfying feedback with every keystroke. Your fingers glide effortlessly across the matte surface of the keys and dual-color keycaps guide peripheral vision to make it easy to orient your fingers and stay in your flow. The full-size form factor of MX Mechanical features an integrated Numpad with a design that promotes better posture and improved ergonomics. Backlit keys automatically adjust to suit changing lighting conditions. MX Mechanical also boasts multi-device, multi-OS connectivity via Bluetooth Low Energy and USB-C recharging.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/649519_408070_01_front_comping.jpg"
        },
        {
            name: "Logitech MK270 Wireless Keyboard and Mouse",
            price: 27.99,
            description: "Logitech Advanced 2.4 GHz wireless gives you a fast, reliable connection up to 10 meters away with virtually no delays or dropouts. You can take the sleek mouse anywhere you take your computerthanks to its comfortable size and the tiny nano-receiver. A 24-month keyboard and 12-month mouse battery lifeplus on/off switchesmean you can go for months without the hassle of changing batteries.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/659032_495291_01_product_comping.jpg"
        },
        {
            name: "Logitech MX Master 3s",
            price: 99.99,
            description: "An iconic mouse remastered for ultimate tactility, performance, and flow. Quiet Click buttons deliver a satisfying tactile feel with 90% less click noise. MX Master 3S also now comes with an 8K optical sensor for next-gen responsiveness on any surface even glass. MagSpeed electromagnetic scrolling delivers remarkable speed, precision, and near-silence with the ability to scroll 1,000 lines a second. The ergonomic silhouette is crafted to support your palm and fingers. Logi Options enables Flow cross-computer control and introduces more customizations than ever. MX Master 3S stays powered for up to 70 days on a full charge and delivers three hours of use from a one-minute quick charge.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/649514_405845_01_front_comping.jpg"
        },
        {
            name: "Logitech G G502 HERO Gaming Mouse",
            price: 49.99,
            description: "G502 HERO features an advanced optical sensor for maximum tracking accuracy: customizable RGB lighting: custom game profiles: from 200 up to 16:000 DPI: and repositionable weights. Feature Benefits HERO Sensor Next generation HERO sensor delivers precision tracking up to 16:000 DPI with zero smoothing: filtering: or acceleration. 11 Programmable Buttons 11 programmable buttons and dual-mode hyper-fast scroll wheel give you fully customizable control over your gameplay.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/511175_816769_01_front_comping.jpg"
        },
        {
            name: "Razer DeathAdder V3 Pro Wireless Ergonomic Esports Mouse",
            price: 149.99,
            description: "With the Razer DeathAdder V3 Pro: victory takes on a new shape. Refined and reforged with the aid of top esports pros: its iconic ergonomic form is now more than 25% lighter than its predecessor: backed by a set of cutting-edge upgrades to push the limits of competitive play. 64g Ultra-lightweight Design No deadweight. Made more than 25% lighter than the Razer DeathAdder V2 Pro: enjoy a level of speed and control favored by the world's top players with one of the lightest ergonomic esports mice ever created. Refined Ergonomic Form Optimized for unrivaled handling and comfort. Developed in partnership with top esports pros: the iconic shape of the Razer DeathAdder has been further improved to continue its legacy of award-winning handling and comfort. Razer Focus Pro 30K Optical Sensor Best-in-class precision. Razer's brand-new sensor provides flawless tracking performance on a wider variety of surfaces including glass: supported by intelligent functions for enhanced aim and control. Razer Optical Mouse Switches Gen-3 No double-clicking issues. No debounce delay. From an improved 90-million click lifecycle with zero double-clicking issues: to a blistering 0.2ms actuation with no debounce delay: the mouse has the reliability and speed built for esports. Razer HyperSpeed Wireless is 25% faster than other wireless. With a connection 25% faster than any other wireless tech available: enjoy high-performance: low-latency competitive play that remains smooth and stable even in noisy wireless environments. Up To 90 Hours of Battery Life No gaming downtime. With a smaller: a lighter battery that boasts greater power efficiency: this wireless ergonomic esports mouse can run for up to 90 hours of continuous play and is rechargeable via USB Type C.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/651155_422030_01_front_comping.jpg"
        },
        {
            name: "Corsair Ironclaw RGB Wireless Gaming Mouse",
            price: 69.99,
            description: "The CORSAIR IRONCLAW RGB WIRELESS Gaming Mouse combines an ultra-accurate native 18,000 DPI optical sensorwith a durable contoured shape thats ideal for larger hands and palm grips. Easily connect to your PC via hyper-fast, sub1ms SLIPSTREAM CORSAIR WIRELESS TECHNOLOGY, Bluetooth or USB wired connection, with up to 50 hours ofbattery life. Powerful CORSAIR iCUE software allows you to precisely tune sensitivity in 1 DPI steps, customize the tenprogrammable buttons with macros or remaps, and synchronize your mouses three-zone RGB lighting with all your iCUEcompatible CORSAIR devices. With the freedom of wireless and the customizable precision you need to take your gameplay higher, take victory in hand with the CORSAIR IRONCLAW RGB WIRELESS.",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/605619_922930_01_front_comping.jpg"
        },
        {
            name: "HP ProBook 450 G9 15.6 Laptop Computer",
            price: 699.99,
            description: "The lightweight, compact design of the HP ProBook 450 laptop delivers commercial performance,security, and durability for professionals who move from desk, to meeting room, to home. Easily upgrade this laptop to keep up with your growing business.",
            category: categories[2]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/662582_537274_01_front_comping.jpg"
        },
        {
            name: "Acer Aspire TC-1750-UR11 Desktop Computer",
            price: 619.99,
            description: "Make everyday easlier with the high-performance Aspire TC. From basic computing to multimedia entertainment, its a robust hub for your every computing need. Snap between tasks with the latest 12th Gen Intel Core i5 processor and 8GB of memory, this sophisticated PC delivers plenty of speed, power and storage so you can play, create, do more! Easily expandable and with remarkable performance, the Aspire TC Series is the perfect partner when it comes to demanding tasks like video editing and compiling photo albums. And it offers front-panel media access so you can easily connect to your digital devices.",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/647297_378968_01_front_comping.jpg"
        },
        {
            name: "PowerSpec G513 Gaming PC",
            price: 899.99,
            description: "The PowerSpec G513 desktop computer is a hearty gaming machine featuring the AMD Ryzen 5 5600X unlocked processor with a Wraith Stealth cooler, an ASRock B550M-C system board powered by a 650W Gold power supply, 16GB DDR4 RAM, a 1TB NVME SSD, and a RTX 3060 12GB discrete video card to provide a fantastic experience playing the most challenging games in the market today!",
            category: categories[3]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/660304_514521_01_front_comping.jpg"
        },
        {
            name: "Mojo68 Mechanical Keyboard",
            price: 199.99,
            description: "TMojo68 is hot-swappable, allowing you to easily swap, upgrade, and mix switches without soldering. You can DIY it in your way and change it at any time! With Gasket Mount, RGB backlit, and hot-swappable & programmable keys, Mojo68 is the mechanical keyboard enhancing your type experience. Integrating a breakthrough transparent chassis design and unique internal gasket-mount layout makes Mojo68 truly one of a kind. Mojo68 by MelGeek ushers in a New Era of Mechanical Keyboard! Its time to evolve beyond the boring keyboards of the past and make typing an enjoyable experience.",
            category: categories[4]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/662217_531202_01_front_comping.jpg"
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@test.com',
        password: 'test123',
    });

    console.log('users seeded');

    process.exit();
});
