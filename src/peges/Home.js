
import "../csspagas/Home.css"
import Slaider from './Slaider'
import Product from './Product'
import { useState } from "react"



const Home = () => {
  const [products, setProducts] = useState([
    {
      title: "Havells-Lloyd 7.0 kg Fully Automatic Front Load Washing Machine (GLWMF70WC1 White)",
      //image: "washing-img-1",
      // image: '../washing/washing2.jpeg',
      // image: "washing-img-1",
      image: "Speakers/wasing1.jpeg",
      price: "8900",
      delivery: "Free delivery"
    },

    {
      title: "Zebronics Zeb-Action Portable 10W BT Speaker with TWS Function, USB,mSD, AUX, FM, Mic & Fabric Finish(Red)",
      image:"Speakers/speaker1.jpg",
      price: "543",
      delivery: "Delivery charge : 80"
    },

    {
      title: "Casa Copenhagen, 27Ltr - RS27.10 Air Punch Collection Personal Air Cooler with Anti Bacterial Honeycomb Pads,",
      image: "Cooler/cooler-1.jpeg",
      //image: "cooler-img-1",
      price: "6300",
      delivery: "Free delivery"
    },

    {
      title: "AmazonBasics High Speed 55 Watt Wall Fan for Cooling with Automatic Oscillation (400 MM), White",
      image: "fen/fen-10.jpeg",
      price: "873",
      delivery: "Delivery charge : 63"
    },

    {
      title: "Wipro Vesta 1200 Watt GD203 Heavyweight Automatic Dry Iron| Quick Heat Up| Anti bacterial German Weilburger Double Coated Black Soleplate |2 Years Warranty",
      image: "Press/press-1.jpeg",
      price: "650",
      delivery: "Delivery charge : 99"
    },

    {
      title: "BenQ GW2780 27 inch (68 cm) 1920 x 1080 Pixels IPS Full HD Ultra-Slim Bezel Monitor- Eye Care, Anti-Glare, Brightness Intelligence, Speakers, Low Blue Light",
      image: "Lcd/lcd-1.jpeg",
      price: "3290",
      delivery: "free delivery"
    },

    {
      title: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
      image: "headphone/h-1.jpg",
      delivery: "Delivery charge : 75",
      price: "1600"
    },

    {
      title: "ONIDA 7 kg 5 Star Fully Automatic Top Load Washing Machine(T70CMLG, Light Grey, Hexa Crystal Drum)",
      image: "washing/washing10.jpeg",
      delivery: "Delivery charge : 90",
      price: "12750"
    },

    {
      title: "JBL Professional 104-BT Compact Desktop Reference Woofer Monitors with Bluetooth",
      image: "Speakers/speaker2.jpg",
      delivery: "Free delibery",
      price: "1800"
    },

    {
      title: "Symphony Ice Cube 27 Personal Air Cooler For Home with Powerful Fan, 3-Side Honeycomb Pads, i-Pure",
      image: "Cooler/cooler-2.jpeg",
      delivery: "Delivery charge : 70",
      price: "9000"
    },

    {
      title: "Orient Electric Newly Launched I Tome 1200mm 26W Intelligent BLDC Energy Saving Ceiling Fan with Remote",
      image: "fen/fen-2.png",
      delivery: "Free delivery",
      price: "1,400"
    },

    {
      title: "wipro Aluminium Super Deluxe 1000 Watt Gd205 Automatic Electric Dry Iron | Large Soleplate,",
      image: "Press/press-2.jpeg",
      delivery: "Delivery charge :80",
      price: "550"
    },

    {
      title: "Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) Pixels VA Panel LCD Monitor with LED Back Light I 1 MS VRB, 100Hz Refresh",
      image: "Lcd/lcd-2.jpeg",
      delivery: "Free delivery",
      price: "22500"
    },

    {
      title: " Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale",
      image: "headphone/h-2.jpeg",
      delivery: "Delivery charge :130",
      price: "4200"
    },

    {
      title: "Samsung 7 kg, 5 Star, Digital Inverter, Motor, Fully-Automatic Front Load Washing Machine (WW70T4020EE1TL, Hygiene Steam, White)",
      image: "washing/washing3.jpeg",
      delivery: "Free delivery",
      price: "13600"
    },

    {
      title: "IKALL IK-401 60W Bluetooth Home Theatre System with FM/AUX/USB Support and Remote Control (Black, 4.1 Channel)",
      image: "Speakers/speaker3.jpg",
      delivery: "Delivery charge :55",
      price: "1300"
    },

    {
      title: "Bajaj 36L Personal Air Cooler PMH 36 Torque (Anti-Bacterial Technology, Honeycomb Cooling Pads)",
      image: "Cooler/cooler-9.jpeg",
      delivery: " Free delivery",
      price: "9500"
    },


    {
      title: "AmazonBasics High Speed Table Fan for Cooling with Automatic Oscillation (400 mm, 55W, White)",
      image: "fen/fen-3.jpeg",
      delivery: " Free delivery",
      price: "1500"
    },

    {
      title: "wipro Aluminium Super Deluxe 1000 Watt Gd205 Automatic Electric Dry Iron",
      image: "Press/press-3.jpeg",
      delivery: "Delivery charge :80",
      price: "600"
    },

    {
      title: "pTron Tangentbeat in-Ear Bluetooth 5.0 Wireless Headphones with Mic, Deep Bass, 10mm Drivers,",
      image: "headphone/h-3.jpeg",
      delivery: " Free delivery",
      price: "750"
    },

    {
      title: "LG - 20M39H, 19.5 Inch (49.53 Cm) Hd, 1366 X 768 Pixels Tn Panel LCD Monitor with Hdmi & Vga Port, Wall Mount, 3 Year Warranty (Black)",
      image: "Lcd/lcd-3.jpeg",
      delivery: "Delivery charge :40",
      price: "10500"
    },

    {
      title: "Samsung 7 Kg 5 Star Inverter Fully Automatic Top Loading Washing Machine (WA70BG4545BDTL Versailles Gray, Ecobubble)",
      image: "washing/washing7.jpeg",
      delivery: "Free delivery",
      price: "12500"
    },

    {
      title: "Infinity - JBL Clubz Mini, Wireless Ultra Portable Mini Speaker with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0.",
      image: "Speakers/speaker4.jpeg",
      delivery: "Delivery charge :120",
      price: "500"
    },

    {
      title: "Casa Copenhagen, 27Ltr - 27LTRAP16.8 Air Punch Collection Personal Air Cooler",
      image: "Cooler/cooler-4.jpeg",
      delivery: "Delivery charge :80",
      price: "3000"
    },
    
    {
      title: " DIGISMART High Speed 850 RPM Uphaar 4 Blades (600MM) Anti DUST Coating Ceiling Fan Smoke Brown 2 Year Warranty (24 Inch Smoke black)",
      image: "fen/fen-4.jpeg",
      delivery: "Free delivery",
      price: "8900"
    },

    {
      title: "HAVELLS Fabio 1250 W Steam Iron with Teflon Coated Sole Plate, Vertical & Horizontal Ironing & 2 Years Warranty. (Blue)",
      image: "Press/press-4.jpeg",
      delivery: "Deliveru charge :90",
      price: "750"
    },

    {
      title: "Samsung 32-Inch(80Cm) LCD M5 Fhd Smart Monitor, Mouse & Keyboard Iot Hub, Office 365, Apple Airplay, Dex, Speakers.",
      image: "Lcd/lcd-4.jpeg",
      delivery: "Free delivery",
      price: "17500"
    },

    {
      title: "pTron Bassbuds Tango In-Ear TWS Earbuds, TruTalk AI-ENC Calls, Movie Mode, 40Hrs Playtime, Bluetooth 5.1.",
      image: "headphone/h-4.jpeg",
      delivery: "Free delivery",
      price: "1550"
    },

    {
      title: "Voltas beko, A Tata Product 7.2 Kg Semi-Automatic Top Load Washing Machine, (WTT72, Burgundy, 2023 Model, Fast Dry)",
      image: "washing/washing6.jpeg",
      delivery: "Delivery charge :150",
      price: "9400"
    },


    {
      title: "pTron Fusion Party v2 40W Karaoke Bluetooth Party Speaker with 3M Wired Microphone, Dual Drivers, RGB Lights, USB/SD Card Playback, Auto TWS Function",
      image: 'Speakers/speaker5.jpeg',
      delivery: "Free delivery",
      price: "800"
    },
    {
      title: "novamax 75 L Desert Air Cooler  (sky, Rambo JR 75L Desert Air Cooler With Honeycomb Cooling & Auto Swing Technology)",
      image: 'Cooler/cooler-5.jpeg',
      delivery: "Delivery charge :95",
      price: "Free delivery"
    },
    {
      title: "Longway Kwid 1100 W Dry Iron  (Blue, White)",
      image: 'Press/press-5.jpeg',
      delivery: "Delivery charge :110",
      price: "450"
    },
    
    {
      title: "SpinBot Ranger HX300 Bluetooth Gaming Headphones with 50ms Low Latency & RGB Lights Bluetooth Gaming Headset  (Black, On the Ear)",
      image: 'headphone/h-5.jpeg',
      delivery: "Free delivery",
      price: "10800"
    },
    {
      title: "Dyanora Sigma 108 cm (43 inch) Full HD LED Smart Linux TV with 40 Watt Box Speakers & Bezel-Less Design  (DYLD-43F1S)",
      image: 'Lcd/lcd-5.jpeg',
      delivery: "Delivery charge :75",
      price: "Free delivery"
    },
   
    {
      title: "Tunifi S109 Single Ear Headset With Mic 360 Degree Rotted HQ Technology Bluetooth Headset  (Black, True Wireless)",
      image: 'headphone/h-10.jpeg',
      delivery: "Delivery charge :55",
      price: "1250"
    },
    {
      title: "DIGISMART Autum Mark-1 380 RPM High Speed 28Watt With LED Light Inverter Technology 5 Star 1200 mm BLDC Motor with Remote 3 Blade Ceiling Fan",
      image: 'fen/fen-8.jpeg',
      delivery: "Free delivery",
      price: "2500"
    },

   
  ])

  return (

    <div className="main-div-home">
      <Slaider />
      <div className=' div-n-1'>
        {
          products.map(productTemp => {
            return <Product
              title={productTemp.title}
              image={productTemp.image}
              price={productTemp.price}
              delivery={productTemp.delivery}
            />
          })
        }
      </div>

    </div>




  )
}

export default Home



