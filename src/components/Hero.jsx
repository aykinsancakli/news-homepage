import desktopImage from "../images/image-web-3-desktop.jpg";
import mobileImage from "../images/image-web-3-mobile.jpg";
import retroPcsImage from "../images/image-retro-pcs.jpg";
import topLaptopsImage from "../images/image-top-laptops.jpg";
import gamingGrowthImage from "../images/image-gaming-growth.jpg";

export default function Hero() {
  return (
    <section className="section-hero container">
      <div className="section-hero__news">
        <div className="section-hero__news-main">
          <picture className="section-hero__image">
            <source
              media="(max-width: 600px)"
              srcSet={mobileImage}
              className="section-hero__image--mobile"
            ></source>
            <img
              src={desktopImage}
              alt="Web3"
              className="section-hero__image--desktop"
            />
          </picture>

          <h1 className="heading-primary">The Bright Future of Web 3.0?</h1>

          <div className="section-hero__cta">
            <p className="paragraph">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="#" className="cta-link">
              Read more
            </a>
          </div>
        </div>

        <div className="section-hero__news-sub">
          <p className="sub-header">New</p>

          <div className="article">
            <h3 className="article__header">Hydrogen VS Electric Cars</h3>
            <p className="article__description">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>

          <div className="article">
            <h3 className="article__header">The Downsides of AI Artistry</h3>
            <p className="article__description">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="article">
            <h3 className="article__header">Is VC Funding Drying Up?</h3>
            <p className="article__description">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>

      <div className="top-articles">
        <div className="top-articles__content">
          <img
            className="top-articles__img"
            src={retroPcsImage}
            alt="article cover"
          ></img>
          <div className="top-articles__content-text">
            <div className="top-articles__num">01</div>
            <div className="top-articles__heading">Reviving Retro PCs</div>
            <div className="top-articles__description">
              What happens when old PCs are given modern upgrages?
            </div>
          </div>
        </div>

        <div className="top-articles__content">
          <img
            className="top-articles__img"
            src={topLaptopsImage}
            alt="article cover"
          ></img>
          <div className="top-articles__content-text">
            <div className="top-articles__num">02</div>
            <div className="top-articles__heading">Top 10 Laptops of 2022</div>
            <div className="top-articles__description">
              Our best picks for various needs and budgets
            </div>
          </div>
        </div>

        <div className="top-articles__content">
          <img
            className="top-articles__img"
            src={gamingGrowthImage}
            alt="article cover"
          ></img>
          <div className="top-articles__content-text">
            <div className="top-articles__num">03</div>
            <div className="top-articles__heading">The Growth of Gaming</div>
            <div className="top-articles__description">
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
