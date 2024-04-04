import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import "./Home.css"
export const Home = () => {
  return (
    <section className='Home'>
        <Header/>
        <Main/>
        <Footer/>
    </section>
  )
}
