const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addFilm, listFilms, removeFilm, editFilm } = require("./utils/index");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    await addFilm(collection, {
      Title: yargsObj.title,
      Actor: yargsObj.actor,
    });
    console.log("success, entry added");
  } else if (yargsObj.list) {
    await listFilms(collection);
    // edit
  } else if (yargsObj.edit) {
    await editFilm(collection, {
      // Title: yargsObj.title,
      // Actor: yargsObj.actor,
    });
    // remove
  } else if (yargsObj.delete) {
    await removeFilm(collection, {
      Title: yargsObj.title,
      Actor: yargsObj.actor,
    });
    console.log("success, entry removed");
  } else {
    console.log("Incorrect command");
  }
  await client.close();
};

app(yargs.argv);
