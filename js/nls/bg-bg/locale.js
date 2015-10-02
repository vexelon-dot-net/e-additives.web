/*
 * e-additives.web
 * Copyright (C) 2013 VEXELON.NET Services
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

define({
    /**
     * bg_BG locale
     */
    
    // Changelog/News
    "news": {
        "latest": "Вече можеш да добавяш коментари под всяка една добавка."
    },    

    // Common for all pages
    "common": {
        "language": "Език",
        "outdated": "неактуално",
        "new": "Ново"
    },

    // Navbar
    "navbar": {
        "home": "Начало",
        "explore": "Разгледай",
        "additives": "Добавки",
        "categories": "Категории"
    },

    // Footer
    "footer": {
        "column_1": "Още",
        "contact_us": "Контакти",
        "contribute": "Искам да помогна",
        "blog": "Блог",
        "column_2": "Благинки",
        "apps": "Приложения",
        "api": "Developer API"
    },    

    // Home page
    "home": {
        "jumbotron" : "Знаеш ли какво ядеш? Не! Е, ...и ние. :)) Затова създадхоме платформата E-additives. <br> \
        Искаме да превърнем E-additives в място, където можеш да намериш, коментираш и коригираш информацията \
        относно различните добавки в храните.",
        "search_title": "Търси хранителни добавки",
        "search_hint": "Име или E-номер, напр. 101",
        "explore": "Разгледай",
        "faq": "F.A.Q."
    },

    // Additives page
    "additives": {
        "msg_notfound": "Добавката не може да бъде намерена!",
        "name": "Име",
        "code": "Код",
        "last_update": "Обновено на",
        "enter": "E-номер или Име"
    },

    // Categories page
    "categories": {
        "msg_notfound": "Категорията не може да бъде намерена!",
        "name": "Име",
        "amount": "Добавки (бр.)",
        "last_update": "Обновено на"
    },    

    // Single additives page
    "single_additives": {
        "code": "Код",
        "name": "Име",
        "function": "Употреба",
        "notice": "Противопоказности",
        "status": "Забрани",
        "veg": "Безопасно за вегетарианци",
        "foods": "Съдържа се в",
        "info": "Информация"
    },
    
    "goodies": {
        // Apps page
        "apps": {
            "jumbotron": 'Тук можете да намерите списък с приложения работещи с платформата E-additives. \
            Драснете ни някой ред, ако създадете ваше собствено приложение използвайки нашето API, за да го отразим в списъка. :) ',
            "j2me_title": "E-additives Java ME App",
            "j2me_body": "Java Microedition приложение чрез което може да получите достъп до информация относно хранителните добавки."
        },
        // Developers page
        "developers": {
            "jumbotron": 'Използвайки E-additives API-то можете да създадете приложения, които предоставят информация относно \
            хранителните добавки или да интегрирате такава информация във вече съществуващи приложения или web сайтове. <br> \
            Драснете ни някой ред, ако създадете ваше собствено приложение използвайки нашето API. Ще се радваме да разберем, \
            че работи. :-P ',

            "documentation": "Документация",
            "docu_body1": 'Най-новата документация, базирана на последната production версия, можете да намерите в \
            <a href="https://github.com/vexelon-dot-net/e-additives.server/blob/production/docs/API.md">GitHub</a>.',
            "docu_body2": 'За достъп до API моля рагледайте <a href="https://market.mashape.com/petarov/e-additives">Mashape</a> станицата ни.',
            "docu_body3": 'Естествено все още сме в <i>БЕТА</i>, така че API-то <u>може</u> да претърпи промени, когато \
            обновяваме production версията! Sorry :)',

            "apikeys": "API ключове",
            "apikeys_body1": "Все още нямаме заложен authentication модел. В момента, за да използвате API-то, трябва да добавите \
            демо ключ за авторизация към header-a на HTTP заявките.",
            "apikeys_body2": "<b>Демо ключ:</b> c89b0a895987a710db6ee5c86fc7da24d97e55dd"
        }        
    }    
  
});