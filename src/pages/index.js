import * as React from "react"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/map"

const IndexPage = () => {
  const [ipAddress, setIpAddress] = useState("")
  const [city, setCity] = useState("")
  const [region, setRegion] = useState("")
  const [postCode, setPostCode] = useState("")
  const [timeZone, setTimeZone] = useState("")
  const [isp, setIsp] = useState("")
  const [userInput, setUserInput] = useState("")
  const [center, setCenter] = useState(null)

  useEffect(() => {
    fetch(`https://api.ipify.org?format=json`)
      .then(response => {
        return response.json()
      })
      .then(results => {
        fetch(
          `https://geo.ipify.org/api/v1?apiKey=at_dVth0kxr6ZAu7GxhEQeNiXBssW3Q6&ipAddress=` +
            results.ip
        )
          .then(response => {
            return response.json()
          })
          .then(results => {
            setIpAddress(results.ip)
            setCity(results.location.city + ",")
            setRegion(results.location.region)
            setPostCode(results.location.postalCode)
            setTimeZone(results.location.timezone)
            setIsp(results.isp)
            const newCenter = [results.location.lat, results.location.lng]
            setCenter([...newCenter])
          })
      })
  }, [])

  const onUserInputChange = e => {
    setUserInput(e.target.value)
  }

  const fetchNewData = () => {
    let periods = userInput.match(/\./g) ? userInput.match(/\./g).length : 0
    let parameter = periods === 3 ? "ipAddress" : "domain"

    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_dVth0kxr6ZAu7GxhEQeNiXBssW3Q6&` +
        parameter +
        `=` +
        userInput
    )
      .then(response => {
        return response.json()
      })
      .then(results => {
        setIpAddress(results.ip)
        setCity(results.location.city + ",")
        setRegion(results.location.region)
        setPostCode(results.location.postalCode)
        setTimeZone(results.location.timezone)
        setIsp(results.isp)
      })
      .catch(error => {
        setIpAddress("")
        setCity("")
        setRegion("")
        setPostCode("")
        setTimeZone("")
        setIsp("")
        console.error("Error:", error)
        alert(parameter + " not found")
      })
  }

  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Helmet>
      <Seo title="Home" />
      <h1 id="main-heading">IP Address Tracker</h1>
      <div id="searchbox-and-arrow">
        <input
          id="searchbox"
          type="text"
          placeholder="Search for any IP Address or Domain"
          value={userInput}
          onChange={onUserInputChange}
        />
        <button id="arrow-btn" onClick={fetchNewData}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
      <div id="output-boxes">
        <div className="box">
          <h4 className="box-header">IP ADDRESS</h4>
          <h3 className="box-output">{ipAddress}</h3>
        </div>
        <div className="box">
          <h4 className="box-header">LOCATION</h4>
          <h3 className="box-output">
            {city}
            <br /> {region}
            <br />
            {postCode}
          </h3>
          <div className="grey-line"></div>
        </div>
        <div className="box">
          <h4 className="box-header">TIMEZONE</h4>
          <h3 className="box-output">{timeZone}</h3>
          <div className="grey-line"></div>
        </div>
        <div className="box">
          <h4 className="box-header">ISP</h4>
          <h3 className="box-output">{isp}</h3>
          <div className="grey-line"></div>
        </div>
      </div>
      {center ? <Map center={center} /> : null}
    </Layout>
  )
}

export default IndexPage
