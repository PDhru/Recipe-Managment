import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'

const Layout = () => {
  return (
    <div>
      {/* Preloader Start */}
      {/* <div id="preloader">
      <div className="yummy-load" />
    </div> */}
      <Header />
      <div className="breadcumb-area" >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumb-title text-center">
                <h2>Recipes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
      <div className="instargram_area owl-carousel section_padding_100_0 clearfix" id="portfolio">
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/1.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/2.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/3.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/4.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/5.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/6.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/1.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Item */}
        <div className="instagram_gallery_item">
          {/* Instagram Thumb */}
          <img src="img/instagram-img/2.jpg" alt />
          {/* Hover */}
          <div className="hover_overlay">
            <div className="yummy-table">
              <div className="yummy-table-cell">
                <div className="follow-me text-center">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /> Follow me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout