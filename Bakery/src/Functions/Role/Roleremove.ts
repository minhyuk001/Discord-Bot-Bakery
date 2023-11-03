import {EmbedBuilder, SlashCommandBuilder, PermissionFlagsBits} from "discord.js";
import SlashCommand from "../../Structures/SlashCommand";

const slashCommandBuilder = new SlashCommandBuilder()
    .setName('역할제거')
    .setDescription('역할을 제거합니다')
    .addUserOption(option =>
        option
            .setName('유저')
            .setDescription('제거할 유저를 선택해주세요')
            .setRequired(true)
    )
    .addRoleOption(role =>
        role.setName('역할').setDescription('제거할 역할을 선택해주세요').setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames)

const Command = new SlashCommand(slashCommandBuilder, async (bot, interaction) => {
    const role = interaction.options.getRole('역할');
    const role1= interaction.guild?.roles.cache.find(r => r.id === role?.id);
    const user1 = interaction.options.getUser('유저');
    const user = await interaction.guild?.members.fetch(user1?.id || '')
    await interaction.reply({content:interaction.user.toString()+'님이 '+user1?.toString()+'님의 '+role1?.toString()+'을 제거했습니다'});
    await user?.roles.remove(role1!)
});
export default Command;