
import './App.css';
import Header from './common/Header';

function App() {
  return (
    <div>
      {/* Preloader Start */}
      <div id="preloader">
        <div className="yummy-load" />
      </div>
      <div id="patter-close">
        <i className="fa fa-times" aria-hidden="true" />
      </div>
      <Header />

      <div className="breadcumb-area" style={{ backgroundImage: 'url(img/bg-img/breadcumb.jpg)' }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="bradcumb-title text-center">
                <h2>Archive Page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcumb-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Archive Page</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="archive-area section_padding_80">
        <div className="container">
          <div className="row">
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/2.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.2s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/3.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The Top Breakfast And Brunch Spots In Hove, Brighton</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.3s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/4.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Pubs In The Lake District, Cumbria</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.4s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/5.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Brunch Spots In Newcastle, England</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.5s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/2.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.6s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/3.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The Top Breakfast And Brunch Spots In Hove, Brighton</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.7s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/4.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Pubs In The Lake District, Cumbria</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.8s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/5.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Brunch Spots In Newcastle, England</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="0.9s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/2.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">Where To Get The Best Sunday Roast In The Cotswolds</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="1s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/3.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The Top Breakfast And Brunch Spots In Hove, Brighton</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="1.1s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/4.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Pubs In The Lake District, Cumbria</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Single Post */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-post wow fadeInUp" data-wow-delay="1.2s">
                {/* Post Thumb */}
                <div className="post-thumb">
                  <img src="img/blog-img/5.jpg" alt />
                </div>
                {/* Post Content */}
                <div className="post-content">
                  <div className="post-meta d-flex">
                    <div className="post-author-date-area d-flex">
                      {/* Post Author */}
                      <div className="post-author">
                        <a href="#">By Marian</a>
                      </div>
                      {/* Post Date */}
                      <div className="post-date">
                        <a href="#">May 19, 2017</a>
                      </div>
                    </div>
                    {/* Post Comment & Share Area */}
                    <div className="post-comment-share-area d-flex">
                      {/* Post Favourite */}
                      <div className="post-favourite">
                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /> 10</a>
                      </div>
                      {/* Post Comments */}
                      <div className="post-comments">
                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true" /> 12</a>
                      </div>
                      {/* Post Share */}
                      <div className="post-share">
                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#">
                    <h4 className="post-headline">The 10 Best Brunch Spots In Newcastle, England</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="pagination-area d-sm-flex mt-15">
                <nav aria-label="#">
                  <ul className="pagination">
                    <li className="page-item active">
                      <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next <i className="fa fa-angle-double-right" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </nav>
                <div className="page-status">
                  <p>Page 1 of 60 results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ****** Archive Area End ****** */}
      {/* ****** Instagram Area Start ****** */}
      <div className="instargram_area owl-carousel section_padding_100_0 clearfix" id="portfolio">
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
      {/* ****** Our Creative Portfolio Area End ****** */}
      {/* ****** Footer Social Icon Area Start ****** */}
      <div className="social_icon_area clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-social-area d-flex">
                <div className="single-icon">
                  <a href="#"><i className="fa fa-facebook" aria-hidden="true" /><span>facebook</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-twitter" aria-hidden="true" /><span>Twitter</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /><span>GOOGLE+</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true" /><span>linkedin</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-instagram" aria-hidden="true" /><span>Instagram</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-vimeo" aria-hidden="true" /><span>VIMEO</span></a>
                </div>
                <div className="single-icon">
                  <a href="#"><i className="fa fa-youtube-play" aria-hidden="true" /><span>YOUTUBE</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****** Footer Social Icon Area End ****** */}
      {/* ****** Footer Menu Area Start ****** */}
      <footer className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content">
                {/* Logo Area Start */}
                <div className="footer-logo-area text-center">
                  <a href="index.html" className="yummy-logo">Yummy Blog</a>
                </div>
                {/* Menu Area Start */}
                <nav className="navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#yummyfood-footer-nav" aria-controls="yummyfood-footer-nav" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" aria-hidden="true" /> Menu</button>
                  {/* Menu Area Start */}
                  <div className="collapse navbar-collapse justify-content-center" id="yummyfood-footer-nav">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Archive</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Copywrite Text */}
              <div className="copy_right_text text-center">
                <p>Copyright @2018 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
