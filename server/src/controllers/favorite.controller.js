import Favorite from "../models/favorite.model.js";

export const addFavorite = async (req, res) => {
  try {
    const { projectId } = req.body;

    const favorite = await Favorite.create({
      user: req.user.id,
      project: projectId,
    });

    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const { projectId } = req.params;

    await Favorite.findOneAndDelete({
      user: req.user.id,
      project: projectId,
    });

    res.json({ message: "Removed from favorites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.user.id,
    }).populate("project");

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};