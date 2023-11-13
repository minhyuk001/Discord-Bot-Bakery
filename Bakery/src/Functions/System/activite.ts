import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } from "discord.js";
import SlashCommand from "../../Structures/SlashCommand";

const slashCommandBuilder = new SlashCommandBuilder()
    .setName('개발자정보')
    .setDescription('개발자의 정보를 확인합니다')

const Command = new SlashCommand(slashCommandBuilder, async (bot, interaction) => {
  if (!interaction.inCachedGuild()) return;

    const embed = new EmbedBuilder()
      .setColor("#fcae4e")
      .setTitle("📘 개발자 정보")
      .setDescription("ㅤ")
      .addFields(
        { name: "👑 이름", value: "곽 현", inline: false },
        { name: "🏷 디스코드 태그", value: "<@880020790748254219>", inline: false },
        { name: "🌐 웹사이트", value: "없음", inline: false },
      )
      .setTimestamp()
      .setFooter({ text: `${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
    interaction.reply({ embeds: [embed] });
  },
)
export default Command;
