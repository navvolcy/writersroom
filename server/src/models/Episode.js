// how data looks in MongoDB fro user login ,epidsode info. favorites list for each individual account.
import mongoose from 'mongoose';

const EpisodeSchema = new mongoose.Schema(
    {
        episodeNumber: {
            type: Number,
            required:true,
            unique:true,
            min:1,
        },

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength:120,
        },

         description: {
      type: String,
      required: true,
      trim: true,
    },

    airDate: {
      type: Date,
      required: true,
    },

    durationMinutes: {
      type: Number,
      min: 1,
    },

    guests: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Episode', EpisodeSchema);
        



