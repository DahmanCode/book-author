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
import Books from '../books'
import Ctav5 from '../ctav5'
import Testimonial from '../testimonial'
import Ctav4 from '../ctav4'
import Contact from '../contact'

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
      <Books isBg='yes' />
      <Ctav5 isBg='' />
      <Testimonial isBg='yes' />
      <Ctav4 isBg='' />
      <Contact isBg='' />
    </>  
  );
}

export default MainPage;
