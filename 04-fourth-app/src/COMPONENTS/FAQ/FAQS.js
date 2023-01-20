import React from 'react'
import FAQ from './FAQ';
import {faqDatas} from './data.js';

const FAQS = () => {
  return (
    <div>
      {faqDatas.map((faq)=><FAQ key={faq.id} {...faq}/>)}
    </div>
  )
};

export default FAQS;
