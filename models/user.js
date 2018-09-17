const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: String,
  avatar: {
    type: String,
    default:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHIAcgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYBAgUDB//EADIQAAICAQICBgkEAwAAAAAAAAABAgMEBRExQRIhUVJhcQYTIiNCkaHR4RQygbFy8PH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAYlJRW7expZYo9S4kdtye7YHtK/ur+Tydk3z+RFzsyrCp9Zb179UYrjJlXztSyM2T6cujXyhF9X5As9uo4lT2sya0+zpb/0aw1TBk9o5UE/HdFOAF9rt6UVKuxSi+Di90ekbmv3LcoePkXY0+nRZKD8H1PzLJpWrRzPdXJQvS5cJeX2A70JxlwNiH5HtXbyl8wPYAAAAAPO2fRWy4s3k+im3yIkm5NtgDWUlGLlJ7Rit2+xGTn69a6tMsSfXNqH3+gFc1DLlm5MrZdUeEI9iIwAAAADMZSjJSi2pRe6a5MwALjpeWs3Eja9vWL2ZpdpLK76MWtZF1PKUel/K/wCliA9qbNtoy/g9yESqpdKPXxQG4AA8ciXCPzPA3se9jNAByvSVN6fFrlYt/kzqkbUsf9Vg21Jbya3j5rrQFMA27QAAAAAAdT0bTepN8lW9/oWg4nozjuNduRJfvfRj5Lj/AL4HbAG9UujPzNDIEwGE90mAIj62zBkwAAAFc13TXXZLLojvXLrml8L7fI4xfGk1szjajolE97KLI0N8pP2fwBXAe1+NKl7OdUvGFiZpXVKx7RcF/lNL+wNCVp+FZnXqEN1Bfvn2L7k/A0RWtSvyIdHu1SUn8ywUU1Y9SrpgoRXJAZprhTVGqtbQitkjYAAAAN1NpAx0fAAJrabXianrfHaSl2nlw4gZOXna1j4zcKvfWrkn7K82c7V9Xle5UY0nGnhKS4z/AAccCfk6xm3t+99XHu1rb68SDKUpvecnJ9snuYAAAAF1PddTXNEvH1PNx2uhfKS7s/aREAFjwteqsahlQ9VLvrrj+DspqUVKLTT600+JQyfpep2YM+i950N+1Ds8UBbQa1WwurjZVJShJbpo9K10ppcuYEmMfZXkYNwBrZHpR2K16RZzqj+kqe0pLex9i7Czlb9JtLct86hbvb3sV/YFaAAAAAAAAAAAAAdf0fznTd+msfu7H7PhL8ltojst3zKfoWmSz8hTmmset7yfefYi6gAAADW/EACsa1oLg5ZGDDePGVS4ry+xXT6SczUtFxs5ue3qrn8cVx81zApIOlmaHnYrbVfroL4q+v6cTmtNPZrZrinyAAAAATMTTMzLadNEuj35ezH5gQzp6Ro92fJTnvXjp9c+94I7OnejlNLU8uSun3PhX3O4kopJJJLkgNMeivHqjVTBRhFbJI9AAAAAAAAAAMI8sjHoug/XU12dXxxTAAp+qVV1zfQrhH/GOxFwoRlYlKKa8UZAFw03FxoUxnDHqjPvKCTJxkAAAAAAAAAf/9k="
  },
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: { type: Boolean, default: false }
});

// UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
