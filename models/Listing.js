import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        squareFeet: {
            type: Number,
            required: true,
        },
        location: {
            type: {
                type: String,
                default: 'Point'
            },
            coordinates: {
                type: [Number],
                default: [0.0000, 0.0000]
            },
        },
    },
    {
        timestamps: true,
    }
);

// schema.index({ location: "2dsphere" });

const Listing = mongoose.models.Listing || mongoose.model("Listing", schema);
export default Listing;


// import mongoose from "mongoose";

// const schema = new mongoose.Schema(
//     {
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User",
//         },
//         title: {
//             type: String,
//             required: true,
//         },
//         description: {
//             type: String,
//             required: true,
//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         image: {
//             type: String,
//             required: true,
//         },
//         address: {
//             type: String,
//             required: true,
//         },
//         bedrooms: {
//             type: Number,
//             required: true,
//         },
//         bathrooms: {
//             type: Number,
//             required: true,
//         },
//         squireFeet: {
//             type: Number,
//             required: true,
//         },
//         location: {
//             long: {
//                 type: Number,
//                 required: true,
//             },
//             lat: {
//                 type: Number,
//                 required: true,
//             },
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// const Listing = mongoose.models.Listing || mongoose.model("Listing", schema);
// export default Listing;


// {
//     "user": "63f51dabfc50508dfb34a11d",
//     "title": "1238 Montreal Park, Montreal, Canada, RWUI12",
//     "price": 5000,
//     "image": "https://rhoomy.smartdemowp.com/wp-content/uploads/p-12.png",
//     "address": "1238 Montreal Park, Montreal",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "squareFeet": 2400,
//     "location": {
//         "coordinates": [-73.519997, 45.630001]
//     }
// } 