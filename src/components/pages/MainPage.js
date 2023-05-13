import React from "react";
import Header from '../global/Header'
import Hero from '../hero'
import Achieve from '../achieve'
import Chapter from '../chapter'
import ChapterPreview from '../chapter-preview'
import Pricing from '../pricing'
import Author from '../author'
import Achievement from '../achievements'
import Funfacts from '../fun-fact'

const MainPage = ({ header }) => { 

  return (
    <>
      <Header header={header} />
      <Hero isBg='yes' />
      <Achieve isBg='' />
      <Chapter isBg='yes' />
      <ChapterPreview isBg='' />
      <Pricing isBg='yes' />
      <Author isBg='' />
      <Achievement isBg='yes' />
      <Funfacts isBg='' />
    </>  
  );
}

export default MainPage;
