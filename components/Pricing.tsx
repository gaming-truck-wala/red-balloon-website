import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'jal', label: 'Jalandhar', priceSuffix: '' },
    // { value: 'ldh', label: 'Ludhiana', priceSuffix: '' },
    // { value: 'yearly', label: 'Amritsar', priceSuffix: '' },
    { value: 'others', label: 'Others', priceSuffix: 'Contact for price' },
]
const tiers: any = [
    
    
    {
        "name": "Gaming Truck 🎮",
        "id": "tier-startup",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "3500",
                "original": "2000"
            },
            // "ldh": {
            //    "fake": "22990",
            //     "original": "17990"
           // },
            // "others": {
            //     "fake": "11990",
            //     "original": "14990"
            // }
        },
        "description": "Our Gaming Truck is a premium entertainment option that will take your event to the next level! With cutting-edge technology, engaging games, and a luxurious gaming environment, it’s guaranteed to leave your guests in awe. Whether it’s kids battling in multiplayer games or adults trying VR adventures, this truck is a showstopper.",
        "features": [
            "Fun for kids, teens, and adults.",
            "Safe setup with lightweight bows and soft-tipped arrows.",
            "Trained supervisors ensure safety and guide players.",
            "Interactive and engaging for all guests.",
            "Perfect for friendly competitions and challenges.",
            "Creates fun photo-worthy moments.",
            "Improves focus and hand-eye coordination.",
            "Ideal for birthdays, carnivals, and events.",
            //"Basic Red, Black, and Blue Spider-Man Themed Interior",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Video Recording",
            //"Custom Invitation Card (Digital)",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },
    

    {
        name: "Bounce House 🏰",
        id: "tier-freelancer",
        href: "tel:9530677035",
        "price": {
            "jal": {
                "fake": "8000",
                "original": "6000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "21990"
            // }
        },
        "description": "The Bounce House from The Red Balloon is a fun-filled, safe, and exciting addition to any event, perfect for kids to enjoy. It’s the perfect way to bring joy and laughter to any celebration!",
        "features": [
            "Ideal for birthday parties, carnivals, festivals, and school fairs.",
            "Spacious enough for multiple kids to jump and play together.",
            "Safe and secure design with soft surfaces and sturdy walls.",
            "Provides hours of bouncing fun and entertainment.",
            "Adds an energetic and playful vibe to the event.",
            "Encourages physical activity and social interaction.",
            "Completely supervised and managed by trained staff.",
            "Suitable for indoor and outdoor spaces, with flexible setup options.",
            "Reliable and timely delivery, ensuring everything is ready to go.",
            "Guaranteed to create happy memories for every child.",
            "Enhances the overall party experience.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Video Recording",
            //"Custom Invitation Card (Digital)",
            //"Photo Booth & Props",
            // "Temporary Tattoos",
            
        ],
        "mostPopular": false
    },

    {
        "name": "Canvas Painting 🎨",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Canvas Painting Stall offers a creative outlet for guests to explore their artistic side and take home a unique masterpiece.",
        "features": [
            "Provides guests with high-quality canvas, paints, and brushes.",
            "Engaging and fun for kids, teens, and adults alike.",
            "Encourages creativity and self-expression.",
            "Guests can create a personalized keepsake to remember the event.",
            "Guided by expert artists for tips and inspiration.",
            "Suitable for both casual and theme-based events.",
            "Adds an interactive and relaxing element to your celebration.",
            "Perfect for social sharing and aesthetic event vibes.",
            "Little rewards for the best or most creative artwork.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Balloon Dart 🎯",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "8000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Balloon Dart Stall brings a burst of excitement to your event with a classic and fun activity for all ages.",
        "features": [
            "Fun and challenging game that everyone loves.",
            "Suitable for kids, teens, and adults, making it inclusive.",
            "Offers a bright and colorful setup that adds to the festive vibe.",
            "Engages guests in friendly competition.",
            "Supervised by trained staff to ensure safety.",
            "Perfect for carnivals, birthdays, and school events.",
            "Winners get fun rewards like keychains to take home.",
            "Perfect for both indoor and outdoor events.",
            "Creates memorable photo opportunities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Snap Wall 📸",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Snap Wall is a delightful way to capture and cherish the memories of your special event. Combining photography with an aesthetic display, it adds a unique and interactive element to your celebration!",
        "features": [
            "Guests can pose for instant photos, creating fun and candid moments.",
            "Photos are printed instantly and beautifully clipped onto a fairy string light wall.",
            "Acts as both a photo station and a keepsake memory wall.",
            "Guests love seeing their pictures displayed throughout the event.",
            "Provides a fun and interactive experience for all age groups.",
            "At the end of the party, clients can take the photos with whole fairy string frame at home as lasting memories.",
            "Adds a warm and personal touch to any celebration.",
            "Fully managed by our trained staff for a hassle-free experience.",
            "Great for birthdays, carnivals, weddings, corporate events, and family gatherings.",
            "The fairy lights and photo clips create a magical and dreamy vibe.",
            "Creates picture-perfect moments and a fun atmosphere for everyone.",
            "Compact and portable setup, adaptable to any indoor or outdoor venue.",
            "Adds value by combining entertainment, decor, and a takeaway memory in one.",
            "Helps capture the joy and essence of your celebration effortlessly.",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Mini Golf ⛳",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "4500",
                "original": "3000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Mini Golf is a unique and engaging activity that promises fun for all ages, making your event unforgettable!",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Compact yet realistic mini golf course perfect for any space.",
            "Suitable for indoor and outdoor events, adaptable to all venues.",
            "Safe and easy to play for kids, teens, and adults alike.",
            "Encourages focus, precision, and healthy competition.",
            "Trained staff available to guide and assist players.",
            "Little rewards like keychains for top scorers.",
            "Durable and safe equipment ensures worry-free fun.",
           // "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
           // "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Ball in Bucket 🪣",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "The Ball in Bucket Stall is a simple yet addictive game that guests of all ages will enjoy.",
        "features": [
            "Easy-to-understand rules make it fun for all age groups.",
            "Bright and colorful setup attracts attention instantly.",
            "Safe, lightweight balls ensure safety for kids.",
            "Little prizes like keychains for participants who score well.",
            "Fully supervised by trained staff to ensure smooth gameplay.",
            "Portable setup makes it adaptable to any indoor or outdoor space.",
            "Provides a fun way to create lasting memories and photo-worthy moments.",
           // "Make your celebration extra special and delicious with The Red Balloon’s Popcorn Station - guaranteed to bring smiles and flavor to your event!",
           // "The Bounce House can be paired with other exciting games and activities.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
           // "With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Cup Shoot 🥤",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "12000",
                "original": "8000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Cup Shoot is a fun and interactive game that tests accuracy and focus.",
        "features": [
            "Great for birthdays, corporate events, fairs, and carnivals.",
            "Fun and challenging game suitable for kids, teens, and adults.",
            "Encourages focus, precision, and hand-eye coordination.",
            "Perfect for creating friendly competitions among guests.",
            "Supervised by trained staff for safety and smooth operation.",
            "Interactive and exciting, ensuring all guests stay engaged.",
           // "Guests love snapping photos of their creations.",
           // "A fun and time-worthy activity for any celebration.",
           // "Add a touch of creativity to your event with Glass Can Painting by The Red Balloon.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Angry Bird Football Toss ⚽🐦",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Unique and eye-catching design inspired by Angry Birds.",
        "features": [
            "Fun and safe for kids, teens, and adults to play.",
            "Unique and eye-catching design inspired by Angry Birds.",
            "Encourages teamwork, strategy, and precision.",
            "Lightweight footballs ensure a safe and enjoyable experience.",
            "Adds a playful and lively vibe to your celebration.",
            "Little prizes for participants who hit the targets with accuracy.",
            "Fully supervised by trained staff for smooth gameplay.",
            "Interactive and perfect for friendly challenges among guests.",
            "Perfect for birthdays, school fairs, carnivals, and family events.",
            "Creates unforgettable moments and fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Ring Toss ⭕",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Ring Toss is a classic game that adds timeless fun to your event.",
        "features": [
            "Ideal for birthday parties, carnivals, and festivals.",
            "Encourages hand-eye coordination and accuracy.",
            "Lightweight rings ensure safety for kids and ease of play.",
            "Offers fun prizes for successful throws.",
            "Simple rules make it fun and accessible for all ages.",
            "Portable and adaptable, suitable for both indoor and outdoor venues.",
            "Adds a nostalgic and interactive element to your celebration.",
            "Keeps guests entertained and engaged for hours.",
            "Creates fun moments that are perfect for photos and videos.",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Pass the Ball from Joker Mouth 🎭⚽",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "A quirky and entertaining game where guests try to score points by passing a ball through a joker’s mouth.",
        "features": [
            "Fun and easy for kids, teens, and adults to participate.",
            "Vibrant and colorful setup adds charm to the event.",
            "Encourages coordination and focus while keeping it entertaining.",
            "Perfect for friendly challenges and competitions.",
            "Safe and child-friendly, with soft materials for the ball.",
            "Fully supervised by trained staff for smooth gameplay.",
            "Small rewards like keychains for participants with high scores.",
            "Suitable for birthdays, school events, fairs, and carnivals.",
            "Engages guests of all age groups, ensuring everyone enjoys.",
            "Ideal for creating fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Oculus VR Station 🎮",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Step into the future with cutting-edge VR gaming experiences that thrill and excite!",
        "features": [
            "Immersive games that transport players to another world.",
            "Top-notch VR equipment ensures a high-quality experience.",
            "Trained supervisors assist guests for a smooth and safe experience.",
            "Suitable for all ages, from kids to adults.",
            "Creates a tech-savvy, futuristic vibe at your event.",
            "Perfect for birthday parties, corporate events, and school fairs.",
            "Encourages friendly competitions among guests.",
            "Exciting rewards for top performers, such as keychains or small gifts.",
            "Ideal for creating memorable moments and captivating photos.",
            "Ensures guests stay entertained for hours.",
            "Adds an innovative and premium feel to your celebration.",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Magic Show 🎩",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Bring enchantment and wonder to your event with a professional magic show that captivates all ages.",
        "features": [
            "Engages guests with mind-blowing tricks and illusions.",
            "Perfect for creating a sense of amazement.",
            "Fun audience participation keeps everyone involved.",
            "Ideal for kids, teens, and adults alike.",
            "Provides a mix of classic tricks and modern illusions.",
            "Highly skilled magician ensures a professional performance.",
            "Keeps the audience entertained and engaged throughout the show.",
            "Adds an element of surprise and delight to your celebration.",
            "Rewards for kids who assist the magician in performing tricks.",
            "Creates magical moments that are perfect for photos and videos.",
            "Suitable for birthdays, carnivals, corporate events, and school fairs.",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Archery Station 🎯",
        "id": "tier-startup",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "3500",
                "original": "2000"
            },
            // "ldh": {
            //    "fake": "22990",
            //     "original": "17990"
           // },
            // "others": {
            //     "fake": "11990",
            //     "original": "14990"
            // }
        },
        "description": "Our Archery Stall is the perfect choice to keep your guests entertained and engaged! Whether it’s a birthday party, carnival, or a family get-together, this exciting activity will leave everyone talking about your celebration for weeks!",
        "features": [
            "Fun for kids, teens, and adults.",
            "Safe setup with lightweight bows and soft-tipped arrows.",
            "Trained supervisors ensure safety and guide players.",
            "Interactive and engaging for all guests.",
            "Perfect for friendly competitions and challenges.",
            "Creates fun photo-worthy moments.",
            "Improves focus and hand-eye coordination.",
            "Ideal for birthdays, carnivals, and events.",
            //"Basic Red, Black, and Blue Spider-Man Themed Interior",
            // "3D Video Experience Available with Red/Blue glasses",
            // "Costumes(Cape + Band + Mask)",
            //"Video Recording",
            //"Custom Invitation Card (Digital)",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Tattoo Station 🖌️✨",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Add a touch of art and creativity to your event with a fun and colorful tattoo station.",
        "features": [
            "Skin-safe, non-toxic materials ensure safety for all ages.",
            "Wide variety of temporary tattoo designs for kids, teens, and adults.",
            "Encourages guests to express their style and personality.",
            "Professional artists ensure neat and beautiful tattoos.",
            "Adds a creative and interactive element to your event.",
            "Offers glitter, metallic, and vibrant color options for a trendy look.",
            "Guests can enjoy their tattoos as souvenirs of your event.",
            "Reliable and professional setup by The Red Balloon team.",
            "Perfect for birthdays, fairs, and family gatherings.",
            "Ideal for creating fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Stone Painting 🖌️",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Unleash creativity with stone painting, where guests can design unique keepsakes to cherish forever.",
        "features": [
            "Provides smooth stones, paints, and brushes for a complete experience.",
            "Engages guests in a relaxing and artistic activity.",
            "Suitable for all ages, from kids to adults.",
            "Encourages creativity and imagination.",
            "Guests can take home their painted stones as personalized souvenirs.",
            "Expert guidance available for inspiration and ideas.",
            "Adds a fun and calming element to any celebration.",
            "Perfect for themed events, carnivals, and birthdays.",
            "Little rewards for the most artistic or creative designs.",
            "Safe, non-toxic paints used for a worry-free experience.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Fairy Garden 🌸",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Step into a magical world with our Fairy Garden station, where guests can create enchanting mini-gardens.",
        "features": [
            "Includes all materials, like miniature plants, fairy figurines, and decorative items.",
            "Fun and engaging for kids, teens, and even adults.",
            "Encourages creativity and storytelling through design.",
            "Guests can take home their fairy gardens as keepsakes.",
            "Guided by experts to help create a beautiful arrangement.",
            "Suitable for birthday parties, fairs, carnivals and theme-based celebrations.",
            "Little rewards for the most magical and creative fairy garden designs.",
            "Offers an interactive and calming experience.",
            "Great for social media sharing with aesthetic setups.",
          //  "Ideal for creating fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Glass Can Painting 🖌️",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "Let your guests personalize their own glass jars with beautiful and colorful designs.",
        "features": [
            "Provides high-quality glass jars, paints, brushes, and other materials.",
            "Guests can create unique and artistic designs to take home.",
            "Engages participants of all ages in a creative activity.",
            "Expert guidance available for design inspiration.",
            "Adds a personal and interactive touch to your celebration.",
            "Non-toxic paints/markers ensure a safe experience for everyone.",
            "Perfect for birthdays, fairs, and themed events.",
            "Creates aesthetic keepsakes that guests will cherish.",
         //   "Engages guests of all age groups, ensuring everyone enjoys.",
          //  "Ideal for creating fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    },

    {
        "name": "Red Balloon Return Gift Counter 🎁",
        "id": "tier-enterprise",
        "href": "tel:9530677035",
        "price": {
            "jal": {
                "fake": "9000",
                "original": "5000"
            },
            // "ldh": {
             //    "fake": "31990",
             //    "original": "27990"
           // },
            // "others": {
            //     "fake": "26990",
            //     "original": "29990"
            // }
        },
        "description": "End your event on a high note with personalized return gifts that leave a lasting impression.",
        "features": [
            "Wide variety of high-quality gifts curated for kids and families.",
            "Adds a thoughtful and memorable touch to your celebration.",
            "Creates excitement among guests as they leave with special souvenirs.",
            "Reliable and professional management by The Red Balloon team.",
            "Perfect for birthdays, school events, carnivals and corporate parties.",
            "Ensures your event is remembered fondly by all attendees.",
         //   "Perfect for birthdays, fairs, and themed events.",
          //  "Creates aesthetic keepsakes that guests will cherish.",
         //   "Engages guests of all age groups, ensuring everyone enjoys.",
          //  "Ideal for creating fun photo opportunities.",
            // "Costumes(Cape + Band + Mask)",
           // "Reliable and on-time delivery, ensuring the Bounce House is ready to go for the event.",
            //"With The Red Balloon's Bounce House, you're guaranteed a safe, fun, and unforgettable experience for every child at your event!",
            //"Photo Booth & Props",
            // "Temporary Tattoos"
        ],
        "mostPopular": false
    }



]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-gtw-red">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Pricing plans for events of&nbsp;all&nbsp;sizes
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 ">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}
                    Level Up Your party with The Red Balloon!
                    {/* <br/> */}
                    {/* Note: All prices are calculated based on the assumption that the base location is Jalandhar. For services provided outside of Jalandhar, transportation charges will apply. */}
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-400">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}

                    Note: Prices are based on Jalandhar as the base location and include transportation charges for other locations.
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
                    >
                        <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked ? 'bg-gtw-black text-white' : 'text-gray-500',
                                        'cursor-pointer rounded-full px-2.5 py-1'
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier: any) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'ring-2 ring-gtw-black' : 'ring-1 ring-gray-200',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'text-gtw-black' : 'text-gray-900',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-gtw-red/10 px-2.5 py-1 text-xs font-semibold leading-5 text-gtw-red">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    {tier.price[frequency.value]?.original ? ("₹ " + tier.price[frequency.value]?.original) : ""}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">
                                    {frequency.priceSuffix}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600 line-through">
                                    {tier.price[frequency.value]?.fake ? ("₹ " + tier.price[frequency.value]?.fake) : ""}
                                </span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-gtw-black text-white shadow-sm hover:bg-gtw-red'
                                        : 'text-gtw-black ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                Call Now!
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                                {tier.features.map((feature: any) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-gtw-red" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="rounded-half bg-gray-700/5 mx-auto mt-16 max-w-2xl text-center text-lg leading-8 text-gtw-black">
                    {/* Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer
                    loyalty, and driving sales. */}

                    Want to Reserve The Red Balloon for Your School or College Event ?<br /> Call Now!
                    {/* and Make The Ordinary events Extraordinary */}
                </p>
            </div>
        </div>
    )
}
