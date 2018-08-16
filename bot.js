const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`My Commands $$`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', message => {
    if (message.content.startsWith("$$رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 







const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.", 
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.", 
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.", 
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.", 
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.", 
  "**لو خيروك بين الحقد أو المسامحة**.", 
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.", 
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.", 
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.", 
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.", 
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.", 
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.", 
  "**لو خيروك بين المال أو الجمال**.", 
  "**لو خيروك بين المال أو الذكاء**.", 
  "**لو خيروك بين المال أو الصحة**.", 
  "**لو خيروك بين الجمال أو الذكاء**.", 
  "**لو خيروك بين الذكاء أو الصحة**.", 
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("$$لوخيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});






client.on('message', function(msg) {
  const prefix = '^'
  if(msg.content.startsWith ('$$server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** server type**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ Members Number__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ Members Number who online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ The Owner__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ Server ID__**',`**${msg.guild.id}**`,true)
    .addField('📅**__The date when the server created __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});



client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '$$'; //تقدر تغير البرفكس
  
  if(args[0] === `${prefix}avatar`){
      let mentions = message.mentions.members.first()
      if(!mentions) {
        let sicon = message.author.avatarURL
        let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setColor("#f7abab") 
        .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
        message.channel.send({embed})
      } else {
        let sicon = mentions.user.avatarURL
        let embed = new Discord.RichEmbed()
        .setColor("#f7abab")
        .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
        .setImage(sicon)
        message.channel.send({embed})
      }
  };
});





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




client.on('message', message => {
  var prefix = "$$";
         if(message.content === prefix + "mutechannel") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ ✅ **")
                });
                  }
  //FIRE BOT
      if(message.content === prefix + "unmutechannel") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__✅**")
                });
      }
         
  });

  




  








const child_process = require("child_process");
client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
  client.destroy();
      child_process.fork(__dirname + "bot.js");
}, time);
});



  
client.on('message', message => {
  if(message.content == "<@" + `${client.user.id}` + ">"){
    var embed = new Discord.RichEmbed() 
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Requested By | ${message.author.username}`)
    .setColor("RANDOM")
    .addField(`اوامر`, "**قبل كل شيء حط $$ علشان تشغل الاوامر **")
    message.channel.send(`✅ | Done | Check Your DirectMessages <@${message.author.id}>`)
    message.author.send({embed})
  } 
});
  
 
client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('$$mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`S Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})
  
    
    
client.on('message', message => {
  if(message.content.startsWith("$$invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              let mmmmEmbed = new Discord.RichEmbed()
                        .setAuthor(client.user.username)
                        .setThumbnail(message.author.avatarURL)
.addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
          .setFooter(`- Requested By: ${message.author.tag}`);
          message.channel.send(mmmmEmbed)
});
 }
});



client.on('voiceStateUpdate', (codes, ReBeL) => {
  if(ReBeL.voiceChannelID !== "479011493266849812") return console.log("أيرور . ");
  ReBeL.guild.createChannel(ReBeL.user.username , 'voice').then((rebeeel) =>{
      rebeeel.setParent("474679851576590366");
  ReBeL.guild.members.get(ReBeL.id).setVoiceChannel(rebeeel.id).then((codess) =>{
    console.log("تــــــم .");
    let scan = setInterval(()=>{
  if(!ReBeL.voiceChannel) {
    rebeeel.delete();
  }
    }, 1700);
  });
  });
  });
    



  



   client.on("message", message => {

            if (message.content.startsWith(prefix + "$$bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});  



  client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })
 

    client.on('message', msg => { 
      if (msg.content.startsWith(`$$report`)) {
      // تعريف الارجس
         let args = msg.content.split(" ").slice(1);
      // لو ما منشن احد يرد عيله
        if (!msg.mentions.members.first()) return msg.reply(`يجب عليك منشن شخص`)
      // لو ما كتب تبليغ بيقوله اكتب تبليغ
        if (!args[1]) return msg.reply(`امممم .. اكتب تبليغك`)
      // استبدل <الروم> بأسم الروم حقك
        if (msg.guild.channels.find('name', 'report')) {
      // استبدل هنا بعد
          msg.guild.channels.find('name', 'report').send(`
        تبليغ على : ${msg.mentions.members.first()}
        بلغ عليه من قبل : ${msg.member}
        في روم : ${msg.channel.name}
        السبب : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
        `)
        }
      }
      })

     

        client.on('message', message => {
          if(message.content === '$$عقاب') {
            if(!message.channel.guild) return message.reply('**هاذا الامر فقط للسيرفرات**');
            var edits = ['تضرب نفسك كف' , 'لا تتحرك ابد' , 'خلاص مسامحك' , 'ارمي حالك ببير' , 'روح دق على كل بيوت العماره']
            var embed = new Discord.RichEmbed()
         .setDescription(`${edits[Math.floor(Math.random() * edits.length)]}`)
         .setThumbnail(message.author.avatarURL)
         .setFooter('By Legend_SG ')
         .setColor('RANDOM')
        message.channel.send(embed);
        }
        });
         

        
       
          
       
 



client.on('message', message => {
  var args = message.content.split(/[ ]+/)
  if(message.content.includes('https://')){
    if(!message.member.hasPermission('ADMINISTRATOR'))
      message.delete()
  return message.reply(`** يمنع نشر الروابط بهذا السيرفر  :angry: ! **`)
  }
});


client.on("message", message => {
  var prefix = "$$"; // غير هنا حط البرفكس

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: "Legend_SG" // غير هنا حط اسم البوت
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});




client.on('message', message => {
  if (message.content === "$$help") {
  let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$$ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **$$info**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **$$report** ' , '**تبلغ السخص الي تبغا **')
.addField('     **$$server** ' ,' ** معلومات عن السيرفر**')
.addField('     **$$bcall** ' , '**للبرودوكاست**')
.addField('     **$$clear** ' , '**لمسح الشات**')
.addField('     **$$mute-$$unmute** ' ,   '** لاعطاء ميوت ل بني ادمين و فك الميوت :joy:**') 
.addField('     **العاب** ' ,' ** هنا مكان العاب استمتع يا حبيبي** ')
.addField('     **$$صراحة** ' ,' ** العبة بختصار لازم تصارح بل حقيقة ** ')
.addField('     **$$micr** ' ,' ** العبة بختصار هي اسئلة ماين كرافتية و انت لازم تجاوب** ')
.addField('     **$$لوخيروك ** ' ,' ** لعبة لوخيروك مرة حلوة و بسيطة** ')
.addField('     **$$عقاب** ' , '**لعبة عقاب هي يعطيك عقاب ولازم انت تسوية** ')
.addField('     **$$** ' , '**** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
 }

});




const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
   '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith('$$صراحة')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة صراحة ..")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}
});



client.on('message', message => {
  let reason = message.content.split(" ").slice(2).join(" ")
  let muterole = message.guild.roles.find("name", "muted")
  let men = message.mentions.users.first()

  if(message.content.startsWith("$$mute")) {
      if(!men) return message.channel.send("**Do you want me to mute you 🤔 ?, please @mention someone. `Ex. #mute @xRokz bad boy`**");
      if(!reason) return message.channel.send("**Do you want me to mute " + men.username + " with no reason ?, `Ex. #mute @xRokz bad boy` or just use `none` for no reason **`")
      if(!muterole) {
          message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

      }
      message.guild.member(men).addRole(muterole)
          message.channel.send("**" + men.username + " has been muted! :zipper_mouth:**")
  }

  if(message.content.startsWith("$$unmute")) {
      if(!men) return message.channel.send("**please @mention someone. `Ex. #unmute <@!298732816995319809> bad boy`**");

      if(!muterole) {
          message.guild.createRole({name: "muted", color:"#505f74", permissions: [1115136]})

      }
      message.guild.member(men).removeRole(muterole)
          message.channel.send("**" + men.username + " has been unmuted! 😀 **")
  }
})



const minecraft = [  'ما معنى تطويرة؛ silk touch ؟',  'من هوة اللذي قد انهى سلسلة سيرفر مايت كرافت؟',  'ماهو الوحش اللذي يرسبن في معبد البحر؟',  'من افضل يوتيوبر ينزل شروحات)ردستونية؛عامة',  'ماذا يفعل لك الهيروبراين؟',  'ماهو الشئ اللذي يمكن مكاثرة الفلجر فيه؟',  'من هو اندر ثاني شئ في ماين كرافت',  'ماهو الامر اللذي يعطينا كوماند بلوك؟',  'كم من الوقت يستغرق اليوم العادي في ماين كرافت؟',  'هل لليردستون اهمية كبيرة في ماين كرافت؟',  'اندر اور',  'مطور ماين كرافت السابق',  'اصغر موب في ماين كرافت',  'كيف تصنع البوق',  'في اي ارتفاع تلقى الدايموند',  'موب مستحيل تضربة بالبو (السهم)',  'كم نحتاج من Glowstone Dust لكي نصنع بلكة كاملة منه',  'كم نحتاج حبة ايرون لصنع سكة الحديد (Track)',  'كم عدد قلوب البقرة',  'ن ماذا يخاف الكريبر',  'يشتهر الاندرمان ب…..?',  'كم عدد قلوب الايرون قولم',  'كم ضربة تضرب الدجاجة و تموت',  'كم بلوكة تحتاج بوابة النذر',  'كم بلوكة تحتاج بوابة الاند',  'كم تحتاج الفرن ايروون عشان تصنعها',  'كيف تصنع كرافتنق تيبل',  'كم ياخذ وقت النبات عشان يكبر',  'كم قلوب ستيفي',  'كم قلوب الاندر مان',  'هل الاندر مان يضرب',  'هل الزومبي غبي ؟ و في اي تحديث ؟',  'ماهو الافضل للتسخين الافا او فحم ؟',  'ماهو شئ الذي اقوى من الاوبسيدين ؟',]
client.on('message', message => {

 
if (message.content.startsWith('$$micr')) {

  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("لعبة ماين كرافت ..")
.setColor('RANDOM')
.setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
.setImage("https://i.imgur.com/RyOXHmZ.png")
               .setTimestamp()

message.channel.sendEmbed(client);
message.react("??")
}

});



client.on('message' , function (message){
  var token = 'NDY1MTc1OTAwMzg4OTgyNzg0.DkdJMg.TA3ywWvhuq3AvMR3zExtzowX5_c'; // التوكن هنا بس
  if(message.content === 'res') {
if(message.author.id !== '301370225062838272') return message.reply('**الامر خاص بـ صاحب البوت وشكرا**');
      client.destroy();
      client.login(token) // لا تغيرها
var time = 7200000;
client.setInterval(function() {
client.destroy();
client.login(token) // لا تغيرها
}, time);
}
})








  client.on('message' , message => {
    var prefix = "$$";
if(message.content.startsWith(prefix+"info")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'لا يلعب حاليا.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'لم يرسل رسالة. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`معلومات ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });



  



   


  client.on('guildMemberAdd', member => {
   if(member.presence.status === 'offline') {
       member.guild.owner.send(`:eyes: في واحد دخل السيرفر ومسوي نفسه غامض اوفلاين `)
}
});
client.on('guildMemberRemove', member => {
   if(member.presence.status === 'offline') {
       member.guild.owner.send(`في واحد خرج من سيرفرك وهو مسوي نفسه غامض اوف لاين :eyes: `)
}
});
  



client.on('typingStart', (ch, user) => {
  if(user.presence.status === 'offline') {
      
      ch.send(`${user} هاهاهاا , كشفتك وانت تكتب ي اوف لاين`)
      .then(msg => {
          msg.delete(10000)
      })
  }
})




client.on('message', function(message) {
  if(message.content.startsWith(prefix + '$$roll')) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) {
          message.channel.send('**1**');
          return;
          }
  message.channel.send(Math.floor(Math.random() * args.join(' ')));
          if (!args[0]) {
        message.edit('1')
        return;
      }
  }
});




const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
if (message.content.startsWith("$$كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});


client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") //تقدر تغير اسم الشات
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  //By S Codes
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

client.on("channelCreate",  cc => {
  const channel = cc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(cc.guild.name)
  .setDescription(`***Channel Created Name : *** **${cc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });

   client.on("deleteChannel",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  
  
  client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});

client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});



const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();
const PREFIX = '$$';

client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = [`${PREFIX}help`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/skwadraa`);
    }, ms);10000

});

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('message', async msg => { // eslint disable line
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    if (msg.content.startsWith(`${PREFIX}play`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}play command in ${msg.guild.name}`);

        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'I\'m sorry but you need to be in a voice channel to play music!'
              }
            ]
          }
        });
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot connect to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "❌ Error",
                    value: 'I cannot speak to your voice channel, make sure I have the proper permissions!'
                  }
                ]
              }
            });
        }
        
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true) // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added playlist",
                    value: `Playlist: **${playlist.title}** has been added to the queue!`
                  }
                ]
              }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "📋 Song selection",
                            value: `${videos.map(video2 => `\`${++index}\` **-** ${video2.title}`).join('\n')}`
                          },
                          {
                              name: "You have 10 seconds!",
                              value: "Provide a value to select on of the search results ranging from 1-10."
                          }
                        ]
                      }
                    }).then(message =>{message.delete(20000)})
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send({embed: {
                            color: 15158332,
                            fields: [{
                                name: "❌ Error",
                                value: 'No or invalid value entered, cancelling video selection...'
                              }
                            ]
                          }
                        }).then(message =>{message.delete(5000)})
                    }
                    const videoIndex = (response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send({embed: {
                        color: 15158332,
                        fields: [{
                            name: "❌ Error",
                            value: 'I could not obtain any search results.'
                          }
                        ]
                      }
                    }).then(message =>{message.delete(5000)})
                }
            }

            return handleVideo(video, msg, voiceChannel);
        }
    } else if (msg.content.startsWith(`${PREFIX}skip`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}skip command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.connection.dispatcher.end();
        return undefined;
    } else if (msg.content.startsWith(`${PREFIX}stop`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}stop command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could stop for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (msg.content.startsWith(`${PREFIX}volume`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}volume command in ${msg.guild.name}`);
        if (!msg.member.voiceChannel) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'You are not in a voice channel!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        if (!args[1]) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `The current volume is: **${serverQueue.volume}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🔊 Volume",
                value: `I set the volume to: **${args[1]}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${PREFIX}np`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}np command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "🎵 Now playing",
                value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    } else if (msg.content.startsWith(`${PREFIX}queue`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}queue command in ${msg.guild.name}`);
        if (!serverQueue) return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing that I could skip for you.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "📋 Song queue",
                value: `${serverQueue.songs.map(song => `**- ${song.title}**`).join('\n')}`
              },
              {
                  name: "🎵 Now playing",
                  value: `**${serverQueue.songs[0].title}**`
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        } else if(msg.content.startsWith(`${PREFIX}help`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}help command in ${msg.guild.name}`);

        msg.channel.send('Please check your direct messages :inbox_tray:').then(message =>{message.delete(5000)})

        msg.react('✅');

        msg.author.send({embed: {
            color: 15158332,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Bot's commands:",
                value: `**${PREFIX}help** - This message!\n\
**${PREFIX}play** - Play a song from YouTube.\n\
**${PREFIX}skip** - Skip a song.\n\
**${PREFIX}stop** - Stops the music.\n\
**${PREFIX}volume** - Change the volume of the bot.\n\
**${PREFIX}np** - The song that now playing.\n\
**${PREFIX}queue** - See the queue of songs.\n\
**${PREFIX}pause** - Pause the music.\n\
**${PREFIX}resume** - Resume the music.`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Misaka"
            }
          }
        });
    } else if (msg.content.startsWith(`${PREFIX}pause`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}pause command in ${msg.guild.name}`);
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "⏯️ Pause",
                value: 'Paused the music for you!'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing.'
              }
            ]
          }
        }).then(message =>{message.delete(2000)})
    } else if (msg.content.startsWith(`${PREFIX}resume`)) {
        console.log(`${msg.author.tag} has been used the ${PREFIX}resume command in ${msg.guild.name}`);

        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing =  true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "⏯️ Resume",
                    value: 'Resumed the music for you!'
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return msg.channel.send({embed: {
            color: 15158332,
            fields: [{
                name: "❌ Error",
                value: 'There is nothing playing or something is already playing.'
              }
            ]
          }
        }).then(message =>{message.delete(5000)})
    }

    return undefined;
});


async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
        const song = {
            id: video.id,
            title: Util.escapeMarkdown(video.title),
            url: `https://www.youtube.com/watch?v=${video.id}`
        };
        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
            queue.set(msg.guild.id, queueConstruct);

            queueConstruct.songs.push(song);

            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0]);
            } catch (error) {
                console.error(`I could not join the voice channel: ${error}`);
                queue.delete(msg.guild.id);
                return msg.channel.send({embed: {
                    color: 15158332,
                    fields: [{
                        name: "❌ Error",
                        value: `I could not join the voice channel: ${error}`
                      }
                    ]
                  }
                });
            }
        } else {
            serverQueue.songs.push(song);
            if (playlist) return undefined;
            else return msg.channel.send({embed: {
                color: 15158332,
                fields: [{
                    name: "✅ Added song",
                    value: `**${song.title}** has been added to the queue!`
                  }
                ]
              }
            }).then(message =>{message.delete(5000)})
        }
        return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            console.log('Song ended.');
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.log(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send({embed: {
        color: 15158332,
        fields: [{
            name: "✅ Start playing",
            value: `Start playing: **${song.title}**`
          }
        ]
      }
    }).then(message =>{message.delete(5000)})
}

client.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "439187325503930369") return;

if (message.content.startsWith(PREFIX + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});

client.login(process.env.BOT_TOKEN);
