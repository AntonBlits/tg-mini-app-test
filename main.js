import {Telegraf, Markup} from "telegraf";
import {message} from "telegraf/filters";

const token = '7839249263:AAFg7e8oltliQTIRDRTRXQaDTdW4na70Iek';

const webAppUrl = 'https://tg-app-2260c.web.app/';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение!',
        Markup.keyboard([
            Markup.button.webApp(
                'Оставить отзыв',
                webAppUrl + '/feedback'
            ),
        ])
    );
});

bot.on(message('web_app_data'), async ctx => {
    const data =  ctx.webAppData.data.json();
    ctx.reply(`Ваш отзыв: ${data?.feedback}` ?? 'empty message');
});

bot.launch();