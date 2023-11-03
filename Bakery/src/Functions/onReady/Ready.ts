import Bot from "../../Bot/Bot";
import Event from "../../Structures/Event";

function onCall(bot: Bot): void {
    console.log(`[ 로그인 되었습니다 ${bot.user?.tag} ]`);
    
}
const Ready = new Event("ready", onCall);

export default Ready;
