import React from "react";
import Header from '../global/Header'
import Hero from '../hero'
import Achieve from '../achieve'
import Chapter from '../chapter'
import ChapterPreview from '../chapter-preview'
import Pricing from '../pricing'
import Author from '../author'

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
    </>  
  );
}

export default MainPage;
