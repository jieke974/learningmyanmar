
import { createBrowserRouter } from "react-router";
import App from "../App";
import Mainhsk1 from "./chinese/hsk1/hsk1";
import Hsk1voca from "./chinese/hsk1/voca";
import Hsk1common from "./chinese/hsk1/common";
import Hsk1adj from "./chinese/hsk1/adj";
import Hsk1verbs from "./chinese/hsk1/hsk1verbs";
import Hsk1nouns from "./chinese/hsk1/hsk1nouns";
import Hsk1flashcard from "./chinese/hsk1/flashcard";
import Hsk2voca from "./chinese/hsk2/hsk2voca";
import Hsk2adverbs from "./chinese/hsk2/adverbs";
import Hsk2nouns from "./chinese/hsk2/nouns";
import Hsk2verbs from "./chinese/hsk2/verbs";
import Hsk2adj from "./chinese/hsk2/adj";
import Hsk2common from "./chinese/hsk2/common";
import Hsk2flashcard from "./chinese/hsk2/flashcard"
import Hsk3adj from "./chinese/hsk3/adj";
import Hsk3adverbs from "./chinese/hsk3/adverbs";
import Hsk3nouns from "./chinese/hsk3/nouns";
import Hsk3verbs from "./chinese/hsk3/verbs";
import Hsk3flashcard from "./chinese/hsk3/flashcard";
import Hsk3voca from "./chinese/hsk3/hsk3voca";
import Hsk4nouns from "./chinese/hsk4/nouns";
import HTMLIntro from "./html/htmlintro";
import Hsk4voca from "./chinese/hsk4/hsk4voca";
import Hsk4verbs from "./chinese/hsk4/hsk4verbs";
import Hsk4flashcard from "./chinese/hsk4/flashcard";
import HSKIntro from "./chinese/hskinto";
import Htmlvideos from "./html/videos";
import Html1intro from "./html/html1";
import Cssvideos from "./css/videos";
import Cssintro from "./css/css";


import Pythonintro from "./python/python";
import Pythonvideos from "./python/pyvideo";

import Javasciptvideos from "./javascipt/video";
import Javasciptintro from "./javascipt/javascipt";


import N5alphabet from "./japan/n5/n5";
import Mainjapan from "./japan/n5/mainjapan";
import N5voca from "./japan/n5/n5voca";
import N5adverbs from "./japan/n4/n4adverbs";
import N5adj from "./japan/n5/n5adj";
import N5nouns from "./japan/n5/nouns";
import N5pre_nouns from "./japan/n5/n5pre_nouns";
import N5verbs from "./japan/n5/n5verbs";


import N4verbs from "./japan/n4/n4verbs";
import N4voca from "./japan/n4/n4voca";
import N4adj from "./japan/n4/n4adj";
import N4nouns from "./japan/n4/n4noun";
import N4adverbs from "./japan/n4/n4adverbs";

import JapanStudyPortal from "./japan/japanintro";
import ReactIntro from "./react/reactintro";
import CSSIntro from "./css/cssintro";
import JSIntro from "./javascipt/javasciptintro";
import PythonIntro from "./python/pythonintro";
import MySQLIntro from "./mysql/mysqlintro";

import N3adj from "./japan/n3/n3adj";
import N3noun from "./japan/n3/n3noun";
import N3verb from "./japan/n3/n3verb";
import N3voca from "./japan/n3/n3voca";
import N2kanjin from "./japan/n2/n2kanjin";
import N2voca from "./japan/n2/n2voca";
import N1voca from "./japan/n1/n1voca";
import Reactvideos from "./react/video";
import Mainreact from "./react/react";
import Mainmysql from "./mysql/mysql";
import Mysqlvideos from "./mysql/video";

import IntroPage from ".";

import Hsk1videos from "./chinese/hsk1/video/hskvideo";
import Hsk2videos from "./chinese/hsk2/video/hsk2video";
import Hsk3videos from "./chinese/hsk3/video/hsk3video";
import Hsk4videos from "./chinese/hsk4/video/hsk4video";
import N5videos from "./japan/n5/video/n5video";

import Policy from "../about/policy";
import Contact from "../about/contact";
import About from "../about/about";
import Maincomponent from "./componment/main";
import BeautifulButtons from "./componment/button";
import StyledTextInputs from "./componment/input";
import {Allalert} from "./componment/alerts";
import Alltheselector from "./componment/selector";
import AllTheTables from "./componment/tables";
import AllTheCollapsibles from "./componment/collsible";
import Componentintro from "./componment/intro";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, Component: IntroPage }],
  },

  {
    path: "/about",
    Component: Policy,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/hsk1",
    Component: Mainhsk1,
    children: [
      { index: true, Component: HSKIntro },
      { path: "hsk1vocabulary", Component: Hsk1voca },
      { path: "hsk1common", Component: Hsk1common },
      { path: "hsk1adj", Component: Hsk1adj },
      { path: "hsk1verbs", Component: Hsk1verbs },
      { path: "hsk1nouns", Component: Hsk1nouns },
      { path: "hsk1flashcard", Component: Hsk1flashcard },
      { path: "/hsk1/video/:id", Component: Hsk1videos },
      //hsk2
      { path: "hsk2vocabulary", Component: Hsk2voca },
      { path: "hsk2common", Component: Hsk2common },
      { path: "hsk2adj", Component: Hsk2adj },
      { path: "hsk2verbs", Component: Hsk2verbs },
      { path: "hsk2nouns", Component: Hsk2nouns },
      { path: "hsk2adverbs", Component: Hsk2adverbs },
      { path: "hsk2flashcard", Component: Hsk2flashcard },
      { path: "hsk2video/:id", Component: Hsk2videos },
      //hsk3

      { path: "hsk3vocabulary", Component: Hsk3voca },
      { path: "hsk3common", Component: Hsk2common },
      { path: "hsk3adj", Component: Hsk3adj },
      { path: "hsk3verbs", Component: Hsk3verbs },
      { path: "hsk3nouns", Component: Hsk3nouns },
      //{ path: "hsk3times", Component: Hsk3times },
      { path: "hsk3adverbs", Component: Hsk3adverbs },
      { path: "hsk3flashcard", Component: Hsk3flashcard },
      { path: "hsk3video/:id", Component: Hsk3videos },

      //hsk4
      { path: "hsk4vocabulary", Component: Hsk4voca },
      { path: "hsk4nouns", Component: Hsk4nouns },
      { path: "hsk4verbs", Component: Hsk4verbs },
      { path: "hsk4flashcard", Component: Hsk4flashcard },
      { path: "hsk4video/:id", Component: Hsk4videos },
    ],
  },
  {
    path: "/html",
    Component: Html1intro,
    children: [
      { index: true, Component: HTMLIntro },
      { path: "video/:id", Component: Htmlvideos },
    ],
  },

  {
    path: "/css",
    Component: Cssintro,
    children: [
      { index: true, Component: CSSIntro },
      {
        path: "cssvideo/:id",
        Component: Cssvideos,
      },
    ],
  },

  {
    path: "/python",
    Component: Pythonintro,
    children: [
      { index: true, Component: PythonIntro },
      {
        path: "video/:id",
        Component: Pythonvideos,
      },
    ],
  },

  {
    path: "/javascipt",
    Component: Javasciptintro,
    children: [
      { index: true, Component: JSIntro },
      {
        path: "video/:id",
        Component: Javasciptvideos,
      },
    ],
  },

  {
    path: "/react",
    Component: Mainreact,
    children: [
      { index: true, Component: ReactIntro },
      {
        path: "video/:id",
        Component: Reactvideos,
      },
    ],
  },

  {
    path: "/japan",
    Component: Mainjapan,
    children: [
      { index: true, Component: JapanStudyPortal },
      {
        path: "alphabet",
        Component: N5alphabet,
      },
      { path: "n5/video/:id", Component: N5videos },
      {
        path: "voca",
        Component: N5voca,
      },
      {
        path: "noun",
        Component: N5nouns,
      },
      {
        path: "pre_nouns",
        Component: N5pre_nouns,
      },
      {
        path: "adverbs",
        Component: N5adverbs,
      },
      {
        path: "verb",
        Component: N5verbs,
      },
      {
        path: "adj",
        Component: N5adj,
      },
      {
        path: "n4/adj",
        Component: N4adj,
      },
      {
        path: "n4/verb",
        Component: N4verbs,
      },
      {
        path: "n4/adverb",
        Component: N4adverbs,
      },
      {
        path: "n4/noun",
        Component: N4nouns,
      },
      {
        path: "n4/voca",
        Component: N4voca,
      },
      {
        path: "n3/voca",
        Component: N3voca,
      },
      {
        path: "n3/verb",
        Component: N3verb,
      },
      {
        path: "n3/adj",
        Component: N3adj,
      },
      {
        path: "n3/noun",
        Component: N3noun,
      },
      { path: "n2/voca", Component: N2voca },

      { path: "n2/kanjin", Component: N2kanjin },

      { path: "n1/voca", Component: N1voca },
    ],
  },

  {
    path: "/mysql",
    Component: Mainmysql,
    children: [
      { index: true, Component: MySQLIntro },
      {
        path: "video/:id",
        Component: Mysqlvideos,
      },
    ],
  },

  {
    path: "/component",
    Component: Maincomponent,
    children: [
      { index: true, Component: Componentintro },
      { path: "buttons", Component: BeautifulButtons },
      { path: "inputs", Component: StyledTextInputs },
      { path: "alert", Component: Allalert },
      { path: "selector", Component: Alltheselector },
      { path: "tables", Component: AllTheTables },
      { path: "collapsible", Component: AllTheCollapsibles },
    ],
  },
]);

export default router
