import React, { Component } from 'react';
import Deck from "components/Deck.react";
import Slide from "components/Slide.react";
import Code from "components/Code.react";
import DocumentTitle from "react-document-title";

// Prism JS configuration
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import "style!css!prismjs/themes/prism.css"; // Theme

import "css/theme.css";

const TOPIC = '«Чем выше заберешься, тем больнее падать»';
const SPEAKER = (<span>Вячеслав Шебанов, VK</span>)

import cover from "./images/cover.jpg";
import vkLogo from "./images/vk.svg";
import paperLogo from "./images/paper.svg";
import diggyDead from "./images/diggy_dead.png";
import diggySusp from "./images/diggy_susp.png";
import normalno from "./images/normalno.jpg";
import gitlabLogo from "./images/gitlab-logo-square.png";
import qa from "./images/qa.jpg";
import titanicMeme from "./images/titanic_meme.jpg";
import timeStats from "./images/time_stats.png";
import actStats from "./images/act_stats.png";
import supportStats from "./images/support_stats.png";
import liveStats from "./images/vk_live.png";
import rpcFailStats from "./images/rpc_fail.png";
import watchDog from "./images/watchdog.jpg";
import watchDog2 from "./images/watchdog.png";
import support from "./images/support.jpg";
import bugLocal from "./images/bug-local.png";
import commits from "./images/commit.png";
import communication from "./images/communication.jpg";
import errorVolume from "./images/error_volume.png";
import joker from "./images/joker.jpg";
import unluck from "./images/unluck.gif";
import onlines from "./images/online.png";
import onlineScheme from "./images/online_scheme.svg";
import onlineSchemeNew from "./images/online_scheme_new.svg";
import refactoring from "./images/refactoring.jpg";
import firstFail from "./images/first_fail.gif";
import secondFail from "./images/second_fail.gif";
import news from "./images/news.png";

export default () =>
  <DocumentTitle title={TOPIC}>
    <Deck>
      <header className="caption">
        <h1>{TOPIC}</h1>
        <p>{SPEAKER}</p>
      </header>
      <Slide className="cover-me">
        <h2>{TOPIC}</h2>
        <p>{SPEAKER}</p>
        <img src={cover} alt="" className="cover" />
        <div className="curtain"></div>
      </Slide>
      <Slide>
        <h2>Привет, меня зовут Слава</h2>
        <ul>
          <li className="sparse-item">
            <img className="work-logo" src={vkLogo} /> Разработчик «ВКонтакте»
            (<a href="https://vk.com" target="_blank">vk.com</a>)
          </li>
          <li className="sparse-item">
            <img className="work-logo work-logo_paper" src={paperLogo} /> Сооснователь интернет-газеты «Бумага»
            (<a href="http://paperpaper.ru" target="_blank">paperpaper.ru</a>)
          </li>
        </ul>
      </Slide>
      <Slide>
        <h2 className="shout">Disclaimer</h2>
      </Slide>
      <Slide>
        <h2 className="shout">Проблемы?</h2>
        <img src={diggySusp} alt="" className="diggy-bottom" />
      </Slide>
      <Slide>
        <h2>Есть два типа проблем:</h2>
        <ul>
          <li>Проблемы, которые можно отследить на вашей стороне</li>
          <li>Проблемы, которые можно отследить на стороне клиента</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Что с ними можно делать?</h2>
        <ul>
          <li>Предотвращать</li>
          <li>Отслеживать</li>
          <li>Локализовывать</li>
          <li>Чинить</li>
        </ul>
        <img src={diggyDead} alt="" className="diggy-side" />
      </Slide>
      <Slide className="center">
        <h2 className="upper">Предотвращение</h2>
        <img src={normalno} alt="" className="upper" />
      </Slide>
      <Slide>
        <h2 className="shout">Unit-тесты</h2>
      </Slide>
      <Slide>
        <h2 className="shout">Код-ревью</h2>
        <a href="https://giltab.com">
          <img src={gitlabLogo} alt=""  className="gitlab" />
        </a>
      </Slide>
      <Slide>
        <h2 className="shout">Интеграционные тесты</h2>
      </Slide>
      <Slide className="center cover-me">
        <img height="100%" src={qa} alt="" className="cover" />
      </Slide>
      <Slide>
        <h2>Инструменты</h2>
        <ul>
          <li>Линтеры (ESLint, StyleLint, php -l)</li>
          <li>KPHP</li>
          <li>Свои решения</li>
        </ul>
      </Slide>
      <Slide className="cover-me">
        <h2>Обнаружение проблем</h2>
        <img src={titanicMeme} alt="" className="cover" />
        <div className="curtain"></div>
      </Slide>
      <Slide className="center">
        <h2>Статистика по разделам</h2>
        <img src={timeStats} alt="" />
      </Slide>
      <Slide className="center">
        <h2 className="upper">Статистика по действием</h2>
        <img src={actStats} alt="" className="upper" />
      </Slide>
      <Slide className="center">
        <h2 className="upper">Статистика по обращениям в поддержку</h2>
        <img src={supportStats} alt="" className="upper" />
      </Slide>
      <Slide className="center">
        <h2 className="upper">Статистика #вкживи</h2>
        <img src={liveStats} alt="" className="upper" />
      </Slide>
      <Slide className="center">
        <h2 className="upper">Статистика ошибок БД</h2>
        <img src={rpcFailStats} alt="" className="upper" />
      </Slide>
      <Slide className="center">
        <h2>Дэшборд</h2>
        <img src={timeStats} alt="" />
      </Slide>
      <Slide className="cover-me">
        <h2 className="shout">Watchdog</h2>
        <img src={watchDog} alt="" className="cover" />
        <div className="curtain"></div>
      </Slide>
      <Slide className="center">
        <h2>Поддержка</h2>
        <img src={support} alt="" />
      </Slide>
      <Slide className="center">
        <img src={bugLocal} alt=""/>
      </Slide>
      <Slide>
        <h2 className="shout">Сбор ошибок</h2>
      </Slide>
      <Slide className="center">
        <img src={errorVolume} alt="" />
      </Slide>
      <Slide>
        <h2 className="shout">Логи</h2>
      </Slide>
      <Slide className="center">
        <h2 className="upper">Коммиты на графиках</h2>
        <img src={commits} alt="" />
      </Slide>
      <Slide className="cover-me cover-slide">
        <img src={communication} alt="" className="cover" />
      </Slide>
      <Slide>
        <h2 className="shout">Нормальный деплой</h2>
      </Slide>
      <Slide className="cover-me black">
        <h2 className="upper" style={{marginTop: -50}}>Тестирование под нагрузкой</h2>
        <img src={joker} alt="" className="cover" />
        <div className="curtain"></div>
      </Slide>
      <Slide>
        <h2>Зачем?</h2>
        <ul>
          <li>Сложно моделировать нагрузку</li>
          <li>Сложно моделировать инфраструктуру</li>
        </ul>
      </Slide>
      <Slide>
        <h2 className="shout">If и рандом</h2>
      </Slide>
      <Slide>
        <h2 className="shout">То же, без деплоя</h2>
      </Slide>
      <Slide>
        <h2 className="shout">Деплой на % пользователей</h2>
      </Slide>
      <Slide className="center">
        <h2 className="upper">Все плохое обязательно случится</h2>
        <img src={unluck} alt="" className="upper" />
      </Slide>
      <Slide className="center">
        <h2>Онлайны</h2>
        <img src={onlines} alt="" />
      </Slide>
      <Slide className="center">
        <h2>Старая схема</h2>
        <img src={onlineScheme} style={{marginLeft: -170}} alt="" />
      </Slide>
      <Slide className="cover-me black">
        <h2 style={{ letterSpacing: "0.4em" }}>РЕФАКТОРИНГ</h2>
        <img src={refactoring} alt="" className="cover" />
        <div className="curtain"></div>
      </Slide>
      <Slide className="center">
        <h2>Новая схема</h2>
        <img src={onlineSchemeNew} style={{marginLeft: -50}} alt="" />
      </Slide>
      <Slide>
        <h2>План «А»</h2>
        <ul>
          <li>Прикинули нагрузку</li>
          <li>Взяли 4 сервера</li>
          <li>Отрефакторили код</li>
          <li>«Ну как часто могут спрашивать статус онлайн...?»</li>
        </ul>
      </Slide>
      <Slide className="cover-me black">
        <img src={firstFail} alt="" className="cover" />
      </Slide>
      <Slide>
        <h2>Выводы</h2>
        <ul>
          <li>Недооценили поток запросов</li>
          <li>Спасло, что выкатывали постепенно</li>
          <li>Поняли, что количество запросов — примерно 10<sup>7</sup> в секунду</li>
          <li>Подумали</li>
          <li>Увеличили кол-во серверов до 60</li>
          <li>Попробовали пооптимизировать</li>
        </ul>
      </Slide>
      <Slide className="cover-me black">
        <img src={secondFail} alt="" className="cover" />
      </Slide>
      <Slide className="cover-me black">
        <h2>Пользователи заметили</h2>
        <img src={news} className="cover" alt="" />
        <div className="curtain"></div>
      </Slide>
      <Slide>
        <h2 className="shout">Хроника</h2>
      </Slide>
      <Slide>
        <h2 className="shout">Постмортем</h2>
      </Slide>
      <Slide>
        <h2>Итого</h2>
        <ul>
          <li>Помните, что люди ошибаются гораздо чаще программ</li>
          <li>Обложитесь статистиками и мониторингами</li>
          <li>Используйте любые индикаторы проблем, даже самые нестандартные</li>
          <li>Быстрый роллбэк</li>
          <li>Эффективная коммуникация</li>
          <li>Не паникуйте</li>
        </ul>
      </Slide>
      <Slide>
        <h2>Вопросы?</h2>
        <ul>
          <li>VK: <a href="https://vk.com/bysould">245216</a></li>
          <li>Твиттер: <a href="https://twitter.com/thought_sync">@thought_sync</a></li>
          <li>Github: <a href="https://github.com/Termina1">@Termina1</a></li>
          <li>Презентация: <a href="https://termina1.github.io/toobigtofail-presentation/p/">https://termina1.github.io/toobigtofail-presentation/p/</a></li>
        </ul>
      </Slide>
    </Deck>
  </DocumentTitle>
