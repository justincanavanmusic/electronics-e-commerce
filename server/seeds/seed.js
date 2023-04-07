const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Storage' }, // 0
        { name: 'Monitors' }, // 1
        { name: 'Laptops'}, // 2
        { name: 'Desktops'}, // 3
        { name: 'Keyboards'}, // 4
        { name: 'Mouse'} // 5
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: "WD 2TB Elements Portable External Hard Drive",
            price: 64,
            description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            category: categories[0]._id,
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
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
            name: "Razer Basilisk V3 Pro Ergonomic Wireless Gaming Mouse",
            price: 159.99,
            description: "The king returns to raise the game. Enter the Razer Basilisk V3 Pro - the most advanced gaming mouse. Armed to the teeth with industry-leading technology, unlock your maximum potential with a weapon that pushes the known limits of performance, customization, connectivity, and control. Razer HyperScroll Tilt Wheel Smooth, free-spin scrolling or tactile cycling Speed through content with a scroll wheel that free-spins until it stopped, or switch to a tactile mode for more precision and satisfying feedback that's ideal for cycling through weapons or skills",
            category: categories[5]._id,
            image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/661786_530766_01_front_comping.jpg"
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
