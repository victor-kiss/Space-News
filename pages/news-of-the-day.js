import React, { useEffect, useState } from 'react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'

import Loading from '../components/loading/loading'
import axios from 'axios'

export default function NewsOfDay() {

  //APOD is the name of api
  const [APODData, setAPODData] = useState(null)



  useEffect(() => {
    function getAPODData() {
      // The bellow URL must be setted for the domain URL your hosting the application (keeps 'api/services')
      axios.get(`http://localhost:3000/api/services`).then(res => {
        setAPODData(res.data)
      })
    }
    getAPODData()
  }, [])

  // check if exist data
  if (!APODData) return (
    <>
      <Loading />
    </>
  )
  return (
    <>
      <Header title="News of the day" />
      <GridDiv margin="50px 10px" padding="10px" column="column">
        <Div padding="10px">
          <h2>{APODData.title}</h2>
          <h3>Date: {APODData.date}</h3>
          <p>{APODData.explanation}</p>
        </Div>
        <Div>
          {
            // check if the APODData is a image or an video

            APODData.url.includes('www.youtube.com')
              ? <iframe src={APODData.url} title={APODData.title}></iframe> :
              <Img src={APODData.url} alt={APODData.title} width="100%" height="100%" padding="10px 0" />
          }
        </Div>
      </GridDiv>
      <Footer />
    </>
  )
}
