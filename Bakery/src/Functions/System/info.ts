import { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from "discord.js";
import SlashCommand from "../../Structures/SlashCommand";


const slashCommandBuilder = new SlashCommandBuilder()
  .setName("서버정보")
  .setDescription("현재 서버의 정보를 보여줍니다.")
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)

const Command = new SlashCommand(slashCommandBuilder, async (bot, interaction) => {
  if (!interaction.inCachedGuild()) return;

  const roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).map((role) => role.toString());
  const channels = interaction.guild.channels.cache.map((channel) => channel.toString());

  const embed = new EmbedBuilder()
    .setColor("#fcae4e")
    .setTitle(`${interaction.guild.name} 정보`)
    .setDescription(`ㅤ`)
    .addFields(
      { name: "📛 이름", value: `${interaction.guild.name}`, inline: true },
      { name: "📝 서버 설명", value: `${interaction.guild.description || "없음"}`, inline: true },
      { name: "👑 서버 소유자", value: `<@${interaction.guild.ownerId}>`, inline: true },
      { name: "👤 유저 수", value: `${interaction.guild.memberCount}명`, inline: true },
      { name: "🎭 역할 및 권한", value: `${roles.length}개`, inline: true },
      { name: "📺 채널", value: `${channels.length}개`, inline: true },
      { name: "📜 서버 규칙", value: `${interaction.guild.rulesChannel || "없음"}`, inline: true },
      { name: "🕮 서버 규칙 채널", value: `${interaction.guild.rulesChannelId || "없음"}`, inline: true },
      { name: "🔒 서버 보안 수준", value: `${interaction.guild.verificationLevel} 레벨`, inline: true },
      { name: "📢 업데이트 채널", value: `${interaction.guild.publicUpdatesChannel || "없음"}`, inline: true },
      { name: "⚙️ 시스템 채널", value: `${interaction.guild.systemChannel || "없음"}`, inline: true },
      { name: "💤 AFK 채널", value: `${interaction.guild.afkChannel || "없음"}`, inline: true },
      { name: "⏰ AFK 시간", value: `${interaction.guild.afkTimeout / 60}분`, inline: true },
      { name: "✨ 서버 부스트 레벨", value: `${interaction.guild.premiumTier} 레벨`, inline: true },
      { name: "🌟 서버 부스트 수", value: `${interaction.guild.premiumSubscriptionCount}개`, inline: true },
      { name: "🎂 서버 생성일", value: `${interaction.guild.createdAt}`, inline: false},
    )
    .setTimestamp()

  await interaction.reply({ embeds: [embed] });
},
)
export default Command;