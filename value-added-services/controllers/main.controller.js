import Video from '../models/video.model.js';
import Sports from '../models/sports.model.js';
import Gaming from '../models/gaming.model.js';
import News from '../models/news.model.js';


export const getVideoServices = async (req, res) => {
    try {
        const videos = await Video.find({});
        if (videos.length === 0) {
            res.json({ message: "No video services available" });
        } else {
            res.json(videos);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getSportsServices = async (req, res) => {
    try {
        const sports = await Sports.find({})
        if (sports.length === 0) {
            res.json({ message: "No sports services available" });
        } else {
            res.json(sports);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getGamingServices = async (req, res) => {
    try {
        const games = await Gaming.find({})
        if (games.length === 0) {
            res.json({ message: "No gaming services available" });
        } else {
            res.json(games);
        }
    } catch (error) {
        console.log(error);
    }
}

export const getNewsServices = async (req, res) => {
    try {
        const news = await News.find({})
        if (news.length === 0) {
            res.json({ message: "No news services available" });
        } else {
            res.json(news);
        }
    } catch (error) {
        console.log(error);
    }
}