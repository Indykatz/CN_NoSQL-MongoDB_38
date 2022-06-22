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
exports.editFilm = async (collection, title, editFilm) => {
  try {
    const aTitle = { Title: title };
    const editEntry = await collection.updateOne(title, {
      $set: { Actor: "The Actor" },
    });
    console.log(editEntry);
  } catch (error) {
    console.log(error);
  }
};

// create function to delete one or more db entries
exports.removeFilm = async (filmObj) => {
  try {
    const deleteEntry = await collection.deleteOne(filmObj);
    console.log(deleteEntry);
  } catch (error) {
    console.log(error);
  }
};
