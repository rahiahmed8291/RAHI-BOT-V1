// dont change any line this file

module.exports = {
  config: {
    name: "allbots",
    aliases: ["bots", "mybots", "links"],
    permission: 0,
    prefix: true,
    description: "Send all my bot links and tutorials",
    categories: "Utility",
    usages: [".allbots"],
    credit: "Developed by Mohammad Rahi"
  },

  start: async ({ api, event }) => {
    const { threadId, message } = event;

    const myNumber = "8801711209381";
    const msg = `🌟 *RAHI BOT COLLECTION* 🌟

🛠️ *Support Channel*
Link: https://chat.whatsapp.com/JzyhgrrhPvoI83EYQrJqsj?mode=ems_copy_t

📞 *Contact Me*: +${myNumber}`;

    await api.sendMessage(threadId, { text: msg }, { quoted: message });
  }
};
