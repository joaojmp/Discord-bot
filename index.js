require('dotenv').config();

const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

const prefix = "h!";

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "careca") {
        message.channel.send(`O Jovem é careca, sem mais.`);
    }

    if (command === "agiota") {
        const messages = [
            "Pague o que me deve!", 
            "O agiota tá vindo te buscar.",
            "Corre senão morre.",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        message.reply(randomMessage);
    }

    if (command === "critica") {
        const messages = {
            "messages": [
                "0/10",
                "Você está de brincadeira com a minha cara. 1/10",
                "Desista de sua carreira, não tem futuro!!! 2/10",
                "Seu desenho está horrível, 3/10", 
                "Seu desenho esta minimamente bom, 4/10",
                "ta padrão, 5/10",
                "passavel, -_- 6/10",
                "bom mas não excelente 7/10",
                "Excelente, faz mais 8/10",
                "clap, clap, clap ta quase lá 9/10",
                "foda d+, está realmente incrivel, 10/10",
            ],
            "urls": [
                "https://media.tenor.com/images/20109f9e0221d1e2bcb4abe807db218d/tenor.gif",
                "https://media.giphy.com/media/zz2a5ctsXTzkidQVSM/giphy.gif",
                "https://media.tenor.com/images/a10c140020572ef525c35b135d68af84/tenor.gif",
                "https://media.tenor.com/images/95a6a1cb3dc17862bc515fb681d268b4/tenor.gif", 
                "https://media.tenor.com/images/2d4d466f17a7e4d38788511ed6ad43d7/tenor.gif",
                "https://i.gifer.com/OTc.gif",
                "https://media.giphy.com/media/3KVKgMOs8rXnomiVdD/giphy.gif",
                "https://media1.tenor.com/images/27d8b726ba9f51750c4156d3c827888a/tenor.gif",
                "https://media.giphy.com/media/l2Je19AZkPF7r6gXm/giphy.gif",
                "https://media.tenor.com/images/8e93a57e29cdcdd6b551cdba64e9aab9/tenor.gif",
                "https://media.giphy.com/media/BWySufD6KWQzC/giphy.gif",
            ]
        };

        let number = Math.round(Math.random() * messages.messages.length);
        let randomMessage = messages.messages[number];
        let randomUrl = messages.urls[number];
        let ballembed = new Discord.MessageEmbed()
            .setTitle(randomMessage)
            .attachFiles([randomUrl])

        message.reply(ballembed);
    }

    if (command === "feliz") {
        const messages = [
            "Sentindo que o mundo não está do seu lado? Você está certo.", 
            "Não pense que tudo está acabado só porque uma coisa ruim aconteceu. Você ainda viverá MUITAS coisas ruims e nem se lembrará mais disso",
            "Um dia você vai parar, olhar para trás, se lembrar de tudo isso que passou e só um pensamento estará em sua mente: Realmente, pior do que está, fica.",
            "Você nasceu para sonhar. Conquistar, já é outra história",
            "O sucesso te espera! E você pode procurar, por muito tempo, por toda sua vida, com toda sua garra, e mesmo assim você nunca o irá encontrar.",
            "Muitas vitórias seguidas? Não se preocupe, as derrotas virão por períodos mais largos.",
            "Você não nasceu para ganhar.",
            "Não deixe uma vitória te abalar.",
            "Tente uma, duas, 10 vezes! Tente até onde você conseguir... conseguir provar que não vai dar certo!",
            "Comemore suas derrotas para comemorar sempre.",
            "Quer um conselho? Nem tente.",
            "Na duvida, desista!",
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        message.reply(randomMessage);
    }

    if (command === "recomendação") {
        const urls = [
            "https://www.meuanime.com/deadman-wonderland",
            "https://www.meuanime.com/tensei-shitara-slime-datta-ken",
            "https://www.meuanime.com/overlord",
            "https://www.meuanime.com/sword-art-online",
            "https://www.meuanime.com/seiken-tsukai-no-world-break",
            "https://www.meuanime.com/death-march-kara-hajimaru-isekai-kyousoukyoku",
            "https://www.meuanime.com/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu",
            "https://www.meuanime.com/isekai-shokudou",
            "https://www.meuanime.com/isekai-wa-smartphone-to-tomo-ni",
            "https://www.meuanime.com/isekai-izakaya-koto-aitheria-no-izakaya-nobu",
            "https://www.meuanime.com/hataraku-maou-sama",
            "https://www.meuanime.com/ichiban-ushiro-no-daimaou",
            "https://www.meuanime.com/maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e",
            "https://www.meuanime.com/maou-sama-retry",
            "https://www.meuanime.com/maoyuu-maou-yuusha",
            "https://www.meuanime.com/hunter-x-hunter-2011",
            "https://www.meuanime.com/tate-no-yuusha-no-nariagari",
            "https://www.meuanime.com/kuroko-no-basket",
            "https://www.meuanime.com/mahouka-koukou-no-rettousei",
            "https://www.meuanime.com/gakusen-toshi-asterisk",
            "https://www.meuanime.com/ao-no-exorcist",
            "https://www.meuanime.com/shinmai-maou-no-testament",
            "https://www.meuanime.com/kiseijuu-sei-no-kakuritsu",
            "https://www.meuanime.com/ansatsu-kyoushitsu",
            "https://www.meuanime.com/no-game-no-life",
            "https://www.meuanime.com/bungou-stray-dogs",
            "https://www.meuanime.com/kono-subarashii-sekai-ni-shukufuku-wo",
            "https://www.meuanime.com/okusama-ga-seito-kaichou",
            "https://www.meuanime.com/kiss-x-sis",
            "https://www.meuanime.com/charlotte",
            "https://www.meuanime.com/beelzebub",
            "https://www.meuanime.com/owari-no-seraph",
            "https://www.meuanime.com/noragami-aragoto",
            "https://www.meuanime.com/saiki-kusuo-no-psi-nan",
            "https://www.meuanime.com/death-note",
            "https://www.meuanime.com/dr-stone",
            "https://www.meuanime.com/hundred",
            "https://www.meuanime.com/sakurasou-no-pet-na-kanojo",
            "https://www.meuanime.com/toradora",
            "https://www.meuanime.com/monster-musume-no-iru-nichijou",
            "https://www.meuanime.com/mob-psycho-100",
            "https://www.meuanime.com/noragami",
            "https://www.meuanime.com/goblin-slayer",
            "https://www.meuanime.com/trinity-seven",
            "https://www.meuanime.com/log-horizon",
            "https://www.meuanime.com/code-geass",
            "https://www.meuanime.com/rokudenashi-majutsu-koushi-to-akashic-records",
            "https://www.meuanime.com/masou-gakuen-hxh",
            "https://www.meuanime.com/quanzhi-fashi",
            "https://www.meuanime.com/shimoneta-to-iu-gainen-ga-sonzai-shinai-taikutsu-na-sekai",
            "https://www.meuanime.com/zero-no-tsukaima",
            "https://www.meuanime.com/absolute-duo",
            "https://www.meuanime.com/kenja-no-mago",
            "https://www.meuanime.com/masamune-kun-no-revenge",
            "https://www.meuanime.com/yosuga-no-sora",
            "https://www.meuanime.com/busou-shoujo-machiavellianism",
            "https://www.meuanime.com/magi-the-labyrinth-of-magic",
            "https://www.meuanime.com/ushio-to-tora-tv",
            "https://www.meuanime.com/netoge-no-yome-wa-onnanoko-ja-nai-to-omotta",
            "https://www.meuanime.com/accel-world",
            "https://www.meuanime.com/golden-time",
            "https://www.meuanime.com/mahoutsukai-no-yome",
            "https://www.meuanime.com/hagure-yuusha-no-estetica",
            "https://www.meuanime.com/seikon-no-qwaser",
            "https://www.meuanime.com/gate-jieitai-kanochi-nite-kaku-tatakaeri",
            "https://www.meuanime.com/tokyo-ravens",
            "https://www.meuanime.com/grisaia-no-kajitsu",
            "https://www.meuanime.com/madan-no-ou-to-vanadis",
            "https://www.meuanime.com/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai",
            "https://www.meuanime.com/another",
            "https://www.meuanime.com/taimadou-gakuen-35-shiken-shoutai",
            "https://www.meuanime.com/boku-dake-ga-inai-machi",
            "https://www.meuanime.com/tonari-no-kaibutsu-kun",
            "https://www.meuanime.com/date-a-live",
            "https://www.meuanime.com/arifureta-shokugyou-de-sekai-saikyou",
            "https://www.meuanime.com/kaze-no-stigma",
            "https://www.meuanime.com/prison-school",
            "https://www.meuanime.com/guilty-crown",
            "https://www.meuanime.com/akatsuki-no-yona",
            "https://www.meuanime.com/yahari-ore-no-seishun-love-come-wa-machigatteiru",
            "https://www.meuanime.com/nejimaki-seirei-senki-tenkyou-no-alderamin",
            "https://www.meuanime.com/kuusen-madoushi-kouhosei-no-kyoukan",
            "https://www.meuanime.com/highschool-of-the-dead",
            "https://www.meuanime.com/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen",
            "https://www.meuanime.com/taboo-tattoo",
            "https://www.meuanime.com/to-aru-majutsu-no-index",
            "https://www.meuanime.com/youjo-senki",
            "https://www.meuanime.com/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e",
            "https://www.meuanime.com/musaigen-no-phantom-world",
            "https://www.meuanime.com/boku-wa-tomodachi-ga-sukunai",
            "https://www.meuanime.com/rewrite",
            "https://www.meuanime.com/blade-dance-of-the-elementalers",
            "meuanime.com/mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo",
            "https://www.meuanime.com/chuunibyou-demo-koi-ga-shitai",
            "https://www.meuanime.com/radiant",
            "https://www.meuanime.com/cross-ange-tenshi-to-ryuu-no-rondo",
            "https://www.meuanime.com/kyoukai-no-kanata",
            "https://www.meuanime.com/ao-haru-ride",
            "https://www.meuanime.com/black-bullet",
            "https://www.meuanime.com/vinland-saga",
            "https://www.meuanime.com/nanbaka",
            "https://www.meuanime.com/god-eater",
        ];

        const randomUrl = urls[Math.floor(Math.random() * urls.length)];
        
        message.reply(randomUrl);
    }
});