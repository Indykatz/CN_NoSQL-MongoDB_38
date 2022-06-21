exports.addFilm = async (collection, filmObj) => {
  try {
    const addEntry = await collection.insertOne(filmObj);
    console.log(addEntry);
  } catch (error) {
    console.log(error);
  }
};

exports.listFilms = async (collection) => {
  try {
    const filmList = await collection.find().toArray();
    console.log(filmList);
  } catch (error) {
    console.log(error);
  }
};

// create function for updating db entry

// create function to delete one or more db entries
