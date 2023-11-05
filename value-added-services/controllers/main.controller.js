import Video from '../models/video.model.js';
import Sports from '../models/sports.model.js';
import Gaming from '../models/gaming.model.js';
import News from '../models/news.model.js';
import VAS from '../models/vas.model.js';


export const getNewsServices = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const news = await News.find({ vas: id });
            const newsData = Promise.all(news.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { ...news, ...vas };
            }));
            console.log(newsData);
            if (newsData) {
                res.json(news);
            } else {
                res.json({ message: "News service not found" });
            }
        } else {
            const news = await News.find();
            const newsData = await Promise.all(news.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            console.log(newsData);
            if (newsData) {
                res.json(newsData);
            } else {
                res.json({ message: "News services not found" });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getGamingServices = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const games = await Gaming.find({ vas: id });
            const gamesData = await Promise.all(games.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            if (games) {
                res.json(games);
            } else {
                res.json({ message: "Gaming service not found" });
            }
        } else {
            const games = await Gaming.find();
            const gamesData = await Promise.all(games.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            if (gamesData) {
                res.json(gamesData);
            } else {
                res.json({ message: "Gaming services not found" });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getVideoServices = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const video = await Video.find({ vas: id });
            const videoData = await Promise.all(video.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            if (video) {
                res.json(video);
            } else {
                res.json({ message: "Video service not found" });
            }
        } else {
            const video = await Video.find();
            const videoData = await Promise.all(video.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            if (videoData) {
                res.json(videoData);
            } else {
                res.json({ message: "Video services not found" });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getSportServices = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const sports = await Sports.find({ vas: id });
            if (sports) {
                res.json(sports);
            } else {
                res.json({ message: "Sport service not found" });
            }
        } else {
            const sports = await Sports.find();
            const sportsData = await Promise.all(sports.map(async (item) => {
                const vas = await VAS.findById(item.vas);
                return { item, vas };
            }));
            if (sportsData) {
                res.json(sportsData);
            } else {
                res.json({ message: "Sport services not found" });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getAllServices = async (req, res) => {
    try {
        const sports = await Sports.find();
        const news = await News.find();
        const videos = await Video.find();
        const gaming = await Gaming.find();

        const allServices = {
            sports,
            news,
            videos,
            gaming
        };

        res.json(allServices);

    } catch (error) {
        console.log(error);
    }
}