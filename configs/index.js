const fs = require("fs");

global.apikeys = "Your Apikeys";
global.prefix = "!";
global.multiprefix = false;
global.nonprefix = false;
global.watermark = "ππππ₯π€πΈπ‘π‘ πΉππ ππ¦ππ₯π π»ππ§πππ";
global.packname = "Created By";
global.authorname = "Farhannn";
global.language = true;
global.ownerNumber = ["0@s.whatsapp.net"];
global.thumbnail = fs.readFileSync("./images/thumbnail.jpg");
global.responseEN = {
  isCreators: "*Owner Only*",
  success: "*Success...*",
  error: {
    request: "*Oops, Your request error '_'*",
    url: "*Invalid Input url*"
  },
  process: "```[β³] Waiting Processed```",
};
global.responseID = {
  isCreators: "*Khusus Owner*",
  success: "*Sukses...*",
  error: {
    request: "*Ups, permintaan Anda error '_'*",
    url: "*URL Yang Anda Masukkan Tidak Valid*"
  },
  process: "```[β³] Mohon Tunggu Permintaan Anda Diproses```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
});
