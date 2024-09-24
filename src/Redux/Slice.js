import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
    data:
        [
            {
                id: 1,
                category: "washing",
                title: "Havells-Lloyd 7.0 kg Fully Automatic Front Load Washing Machine (GLWMF70WC1 White)",
                image: "Speakers/wasing1.jpeg",
                price: "8900",
                delivery: "Free delivery"
            },

            {
                id: 2,
                category: "speaker",
                title: "Zebronics Zeb-Action Portable 10W BT Speaker with TWS Function, USB,mSD, AUX, FM, Mic & Fabric Finish(Red)",
                image: "Speakers/speaker1.jpg",
                price: "543",
                delivery: "Delivery charge : 80"
            },

            {
                id: 3,
                category: "cooler",
                title: "Casa Copenhagen, 27Ltr - RS27.10 Air Punch Collection Personal Air Cooler with Anti Bacterial Honeycomb Pads,",
                image: "Cooler/cooler-1.jpeg",
                price: "6300",
                delivery: "Free delivery"
            },

            {
                id: 4,
                category: "fen",
                title: "AmazonBasics High Speed 55 Watt Wall Fan for Cooling with Automatic Oscillation (400 MM), White",
                image: "fen/fen-10.jpeg",
                price: "873",
                delivery: "Delivery charge : 63"
            },

            {
                id: 5,
                category: "press",
                title: "Wipro Vesta 1200 Watt GD203 Heavyweight Automatic Dry Iron| Quick Heat Up| Anti bacterial German Weilburger Double Coated Black Soleplate |2 Years Warranty",
                image: "Press/press-1.jpeg",
                price: "650",
                delivery: "Delivery charge : 99"
            },

            {
                id: 6,
                category: "lcd",
                title: "BenQ GW2780 27 inch (68 cm) 1920 x 1080 Pixels IPS Full HD Ultra-Slim Bezel Monitor- Eye Care, Anti-Glare, Brightness Intelligence, Speakers, Low Blue Light",
                image: "Lcd/lcd-1.jpeg",
                price: "32000",
                delivery: "free delivery"
            },

            {
                id: 7,
                category: "headphone",
                title: "realme Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
                image: "headphone/h-1.jpg",
                delivery: "Delivery charge : 75",
                price: "1600"
            },

            {
                id: 8,
                category: "washing",
                title: "ONIDA 7 kg 5 Star Fully Automatic Top Load Washing Machine(T70CMLG, Light Grey, Hexa Crystal Drum)",
                image: "washing/washing10.jpeg",
                delivery: "Delivery charge : 90",
                price: "12750"
            },

            {
                id: 9,
                category: "speaker",
                title: "JBL Professional 104-BT Compact Desktop Reference Woofer Monitors with Bluetooth",
                image: "Speakers/speaker2.jpg",
                delivery: "Free delibery",
                price: "1800"
            },

            {
                id: 10,
                category: "cooler",
                title: "Symphony Ice Cube 27 Personal Air Cooler For Home with Powerful Fan, 3-Side Honeycomb Pads, i-Pure",
                image: "Cooler/cooler-2.jpeg",
                delivery: "Delivery charge : 70",
                price: "9000"
            },

            {
                id: 11,
                category: "fen",
                title: "Orient Electric Newly Launched I Tome 1200mm 26W Intelligent BLDC Energy Saving Ceiling Fan with Remote",
                image: "fen/fen-2.png",
                delivery: "Free delivery",
                price: "1,400"
            },

            {
                id: 12,
                category: "press",
                title: "wipro Aluminium Super Deluxe 1000 Watt Gd205 Automatic Electric Dry Iron | Large Soleplate,",
                image: "Press/press-2.jpeg",
                delivery: "Delivery charge :80",
                price: "550"
            },

            {
                id: 13,
                category: "lcd",
                title: "Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) Pixels VA Panel LCD Monitor with LED Back Light I 1 MS VRB, 100Hz Refresh",
                image: "Lcd/lcd-2.jpeg",
                delivery: "Free delivery",
                price: "22500"
            },

            {
                id: 14,
                category: "headphone",
                title: " Sony WH-CH520, Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale",
                image: "headphone/h-2.jpeg",
                delivery: "Delivery charge :130",
                price: "4200"
            },

            {
                id: 15,
                category: "washing",
                title: "Samsung 7 kg, 5 Star, Digital Inverter, Motor, Fully-Automatic Front Load Washing Machine (WW70T4020EE1TL, Hygiene Steam, White)",
                image: "washing/washing3.jpeg",
                delivery: "Free delivery",
                price: "13600"
            },

            {
                id: 16,
                category: "speaker",
                title: "IKALL IK-401 60W Bluetooth Home Theatre System with FM/AUX/USB Support and Remote Control (Black, 4.1 Channel)",
                image: "Speakers/speaker3.jpg",
                delivery: "Delivery charge :55",
                price: "1300"
            },

            {
                id: 17,
                category: "cooler",
                title: "Bajaj 36L Personal Air Cooler PMH 36 Torque (Anti-Bacterial Technology, Honeycomb Cooling Pads)",
                image: "Cooler/cooler-9.jpeg",
                delivery: " Free delivery",
                price: "9500"
            },


            {
                id: 18,
                category: "fen",
                title: "AmazonBasics High Speed Table Fan for Cooling with Automatic Oscillation (400 mm, 55W, White)",
                image: "fen/fen-3.jpeg",
                delivery: " Free delivery",
                price: "1500"
            },

            {
                id: 19,
                category: "press",
                title: "wipro Aluminium Super Deluxe 1000 Watt Gd205 Automatic Electric Dry Iron",
                image: "Press/press-3.jpeg",
                delivery: "Delivery charge :80",
                price: "600"
            },

            {
                id: 20,
                category: "headphone",
                title: "pTron Tangentbeat in-Ear Bluetooth 5.0 Wireless Headphones with Mic, Deep Bass, 10mm Drivers,",
                image: "headphone/h-3.jpeg",
                delivery: " Free delivery",
                price: "750"
            },

            {
                id: 21,
                category: "lcd",
                title: "LG - 20M39H, 19.5 Inch (49.53 Cm) Hd, 1366 X 768 Pixels Tn Panel LCD Monitor with Hdmi & Vga Port, Wall Mount, 3 Year Warranty (Black)",
                image: "Lcd/lcd-3.jpeg",
                delivery: "Delivery charge :40",
                price: "10500"
            },

            {
                id: 22,
                category: "washing",
                title: "Samsung 7 Kg 5 Star Inverter Fully Automatic Top Loading Washing Machine (WA70BG4545BDTL Versailles Gray, Ecobubble)",
                image: "washing/washing7.jpeg",
                delivery: "Free delivery",
                price: "12500"
            },

            {
                id: 23,
                category: "speaker",
                title: "Infinity - JBL Clubz Mini, Wireless Ultra Portable Mini Speaker with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0.",
                image: "Speakers/speaker4.jpeg",
                delivery: "Delivery charge :120",
                price: "500"
            },

            {
                id: 24,
                category: "cooler",
                title: "Casa Copenhagen, 27Ltr - 27LTRAP16.8 Air Punch Collection Personal Air Cooler",
                image: "Cooler/cooler-4.jpeg",
                delivery: "Delivery charge :80",
                price: "3000"
            },

            {
                id: 25,
                category: "fen",
                title: " DIGISMART High Speed 850 RPM Uphaar 4 Blades (600MM) Anti DUST Coating Ceiling Fan Smoke Brown 2 Year Warranty (24 Inch Smoke black)",
                image: "fen/fen-4.jpeg",
                delivery: "Free delivery",
                price: "8900"
            },

            {
                id: 26,
                category: "press",
                title: "HAVELLS Fabio 1250 W Steam Iron with Teflon Coated Sole Plate, Vertical & Horizontal Ironing & 2 Years Warranty. (Blue)",
                image: "Press/press-4.jpeg",
                delivery: "Deliveru charge :90",
                price: "750"
            },

            {
                id: 27,
                category: "lcd",
                title: "Samsung 32-Inch(80Cm) LCD M5 Fhd Smart Monitor, Mouse & Keyboard Iot Hub, Office 365, Apple Airplay, Dex, Speakers.",
                image: "Lcd/lcd-4.jpeg",
                delivery: "Free delivery",
                price: "17500"
            },

            {
                id: 28,
                category: "headphone",
                title: "pTron Bassbuds Tango In-Ear TWS Earbuds, TruTalk AI-ENC Calls, Movie Mode, 40Hrs Playtime, Bluetooth 5.1.",
                image: "headphone/h-4.jpeg",
                delivery: "Free delivery",
                price: "1550"
            },

            {
                id: 29,
                category: "washing",
                title: "Voltas beko, A Tata Product 7.2 Kg Semi-Automatic Top Load Washing Machine, (WTT72, Burgundy, 2023 Model, Fast Dry)",
                image: "washing/washing6.jpeg",
                delivery: "Delivery charge :150",
                price: "9400"
            },


            {
                id: 30,
                category: "speaker",
                title: "pTron Fusion Party v2 40W Karaoke Bluetooth Party Speaker with 3M Wired Microphone, Dual Drivers, RGB Lights, USB/SD Card Playback, Auto TWS Function",
                image: 'Speakers/speaker5.jpeg',
                delivery: "Free delivery",
                price: "800"
            },
            {
                id: 31,
                category: "cooler",
                title: "novamax 75 L Desert Air Cooler  (sky, Rambo JR 75L Desert Air Cooler With Honeycomb Cooling & Auto Swing Technology)",
                image: 'Cooler/cooler-5.jpeg',
                delivery: "Delivery charge :95",
                price: "Free delivery"
            },
            {
                id: 32,
                category: "press",
                title: "Longway Kwid 1100 W Dry Iron  (Blue, White)",
                image: 'Press/press-8.jpeg',
                delivery: "Delivery charge :110",
                price: "770"
            },

            {
                id: 33,
                category: "headphone",
                title: "SpinBot Ranger HX300 Bluetooth Gaming Headphones with 50ms Low Latency & RGB Lights Bluetooth Gaming Headset  (Black, On the Ear)",
                image: 'headphone/h-5.jpeg',
                delivery: "Free delivery",
                price: "10800"
            },
            {
                id: 34,
                category: "lcd",
                title: "Dyanora Sigma 108 cm (43 inch) Full HD LED Smart Linux TV with 40 Watt Box Speakers & Bezel-Less Design  (DYLD-43F1S)",
                image: 'Lcd/lcd-5.jpeg',
                delivery: "Delivery charge :75",
                price: "Free delivery"
            },

            {
                id: 35,
                category: "headphone",
                title: "Tunifi S109 Single Ear Headset With Mic 360 Degree Rotted HQ Technology Bluetooth Headset  (Black, True Wireless)",
                image: 'headphone/h-10.jpeg',
                delivery: "Delivery charge :55",
                price: "1250"
            },
            {
                id: 36,
                category: "fen",
                title: "DIGISMART Autum Mark-1 380 RPM High Speed 28Watt With LED Light Inverter Technology 5 Star 1200 mm BLDC Motor with Remote 3 Blade Ceiling Fan",
                image: 'fen/fen-8.jpeg',
                delivery: "Free delivery",
                price: "2500"
            }
        ],
    userProfile:
            [
                {
                name: "ayush",
                number: "765543",
                email: "ayush@123",
                password: "12345",
                gender: "male",
                city: "khandwa",
                pincode: "45001",
                state: "mp",
                address: "baman goam aakhai"
                }   
            ]
        
}

export const Slice = createSlice(
    {
        name: "glow-mart",
        initialState: initialState,
        reducers:
        {
            addUser: (state, action) => 
            {
                // console.log("state.name",state.userProfile.name);
                // console.log(action.payload);         
                const users =
                {
                    
                    name: action.payload.name,
                    number: action.payload.number, 
                    email: action.payload.email,
                    password: action.payload.password, 
                    gender: action.payload.gender,
                    city: action.payload.city,
                    pinCode: action.payload.pinCode, 
                    state: action.payload.state,
                    address: action.payload.address, 
                }        
                state.userProfile.push(users)
            },

            login:(state,action)=>
                {                    
                    state.userProfile.map((data)=>
                       {
                          
                                if(data.email!==action.payload.email)
                                {
                                    alert("Email id is worg pleace enter currect email id !")
                                }
                                else if(data.password!==action.payload.password)
                                {
                                    alert("password is worg pleace enter currect password !")
                                }
                                else
                                {
                                    alert("Login Successfuly")                                   
                                }
                       })
                },

                editUser:(state,action)=>
                    {
                        state.userProfile.map((data)=>
                        {
                            if(data.name===action.payload.name)
                                {
                                    data.id=action.payload.id
                                    data.name=action.payload.name
                                    data.number=action.payload.number
                                    data.email=action.payload.email
                                    data.city=action.payload.city
                                    data.gender=action.payload.gender
                                    data.state=action.payload.state
                                    data.address=action.payload.address
                                    data.password=action.payload.password
                                }
                                return data
                        })
                       
                    }
        }
    })

export const { addUser,login,editUser} = Slice.actions
export default Slice.reducer;