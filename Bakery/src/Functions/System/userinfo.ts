import { ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder, version, PermissionFlagsBits} from "discord.js";

import SlashCommand from "../../Structures/SlashCommand";

const slashCommandBuilder = new SlashCommandBuilder()
    .setName('유저정보')
    .setDescription('유저의 정보를 확인합니다')
    .addUserOption(option =>
        option
            .setName('유저')
            .setDescription('정보를 확인할 유저를 골라주세요')
            .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)
    
    const Command = new SlashCommand(slashCommandBuilder, async (bot, interaction) => {
      if (!interaction.inCachedGuild()) return;
      const user1 = interaction.options.getUser('유저');
    const userInfo = interaction.options.getMember("유저");
    if (!userInfo) return;

    const embed = new EmbedBuilder()
      .setColor("#fcae4e")
      .setTitle(`${userInfo.user.tag}의 정보`)
      .setThumbnail(userInfo.user.displayAvatarURL())
      .addFields(
        { name: "📛 이름", value: `${userInfo.user.username}`, inline: false},
        { name: "🎂 계정 생성일", value: `${userInfo.user.createdAt}`, inline: false },
        { name: "📅 서버 참여일", value: `${userInfo.joinedAt}`, inline: false }
      )
      .setTimestamp();
      await interaction.reply({ embeds: [embed] });
    },
    )
    export default Command;