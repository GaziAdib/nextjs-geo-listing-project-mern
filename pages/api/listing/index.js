import db from "@/lib/db";
import Listing from "@/models/Listing";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await db.dbConnect();
            const create = await Listing.create(req.body);
            res.status(201).json({
                msg: "Listing created",
                data: create,
            });
        } catch (error) {
            res.status(500).json({
                msg: error.message,
            });
        }
    }
    if (req.method === "GET") {
        try {
            const query = {};

            // checking query of keywords
            if (req.query.keywords) {
                query.title = { $regex: req.query.keywords, $options: "i" };
            }

            // checking query of address
            if (req.query.address) {
                query.address = { $regex: req.query.address, $options: "i" };
            }

            // checking query of near distance

            // limit & page
            const limit = req.query.limit;
            const page = req.query.page;

            await db.dbConnect();
            const q = Listing.aggregate([
                {
                    $geoNear: {
                        near: {
                            type: "Point",
                            coordinates: [parseFloat(req.query.long), parseFloat(req.query.lat)],
                        },
                        key: "location",
                        maxDistance: parseInt(Math.abs(req.query.nearMaxDistance)) * 1609,
                        distanceField: "dist.calculated",
                        spherical: true

                        // http://localhost:3000/api/listing?nearMaxDistance=3400 then monreal canada is near london
                        // calculated_distance is in meters as * 1609 and maxDistance is in kilometers

                        // testing dyanmic data
                        // nearmaxDistance: 2600 / 2700, lat: 24.2468 long: -35.5987


                    },
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "user",
                        foreignField: "_id",
                        as: "user",
                    },
                },
                {
                    $project: {
                        user: {
                            googleId: 0,
                        },
                    },
                },

                {
                    $match: query,
                },
            ]);

            // checking if limit & page data exists
            if (limit && page) {
                q.limit(parseInt(limit)).skip(
                    (parseInt(page) - 1) * parseInt(limit)
                );
            }

            // main query
            const get = await q;

            res.status(200).json({
                data: get,
            });
        } catch (error) {
            res.status(500).json({
                msg: error.message,
            });
        }
    }
}
