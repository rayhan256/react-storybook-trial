import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisms/Navbar'
import CardFeature from '../components/atomics/FeatureCard'
import GameItems from '../components/atomics/GameItems'
import Footer from '../components/organisms/Footer'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      {/* navbar */}
      <Navbar isHome />
      <section className="header pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg-6 col-12 my-auto">
              <p className="text-support text-lg color-palette-2">
                Halo gamers,
              </p>
              <h1 className="header-title color-palette-1 fw-bold">
                Topup & Get <span className="d-sm-inline d-none">a</span>
                <span className="d-sm-none d-inline">a</span>
                <span className="underline-blue"> New</span>{' '}
                <br className="d-sm-block d-none" />{' '}
                <span className="underline-blue">Experience</span> in Gaming
              </h1>
              <p className="mt-30 mb-40 text-lg color-palette-1">
                Kami menyediakan jutaan cara untuk membantu
                <br className="d-md-block d-none" /> players menjadi pemenang
                sejati
              </p>
              <div className="d-flex flex-lg-row flex-column gap-4">
                <a
                  className="btn btn-get text-lg text-white rounded-pill"
                  href="#feature"
                  role="button"
                >
                  Get Started
                </a>
                <a
                  className="btn-learn text-lg color-palette-1 my-auto text-center"
                  href="#"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <img src="/img/Header-1.png" className="img-fluid" alt="" />
                  <div className="card left-card position-absolute border-0">
                    <div className="d-flex align-items-center mb-16 gap-3">
                      <img
                        src="/img/Header-2.png"
                        width="40"
                        height="40"
                        className="rounded-pill"
                        alt=""
                      />
                      <div>
                        <p className="text-sm fw-medium color-palette-1 m-0">
                          Shayna Anne
                        </p>
                        <p className="text-xs fw-light color-palette-2 m-0">
                          Professional Gamer
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                          fill="#FEBD57"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card right-card position-absolute border-0">
                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                      <img
                        src="/img/Header-3.png"
                        className="rounded-pill"
                        alt=""
                      />
                      <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                        New
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-center m-0 fw-medium color-palette-1">
                        Lann Knight
                      </p>
                      <p className="fw-light text-center m-0 color-palette-2 text-xs">
                        Dota 2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br /> Easy to Win the Game
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <div className="col-lg-4">
              <CardFeature
                image="/svg/start-game.svg"
                title="1. Start"
                subtitle="Pilih salah satu game yang ingin kamu top up"
              />
            </div>
            <div className="col-lg-4">
              <CardFeature
                image="/svg/fill-up-game.svg"
                title="2. Fill Up"
                subtitle="Top up sesuai dengan nominal yang tersedia"
              />
            </div>
            <div className="col-lg-4">
              <CardFeature
                image="/svg/be-a-winner.svg"
                title="3. Be a winner"
                subtitle="Siap digunakan untuk improve permainan kamu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <GameItems
              image="/img/Thumbnail-1.png"
              title="Super Mech"
              gameCategory="mobile"
            />
            <GameItems
              image="/img/Thumbnail-2.png"
              title="Call Of Duty: Modern"
              gameCategory="desktop"
            />
            <GameItems
              image="/img/Thumbnail-3.png"
              title="Mobile Legends"
              gameCategory="mobile"
            />
            <GameItems
              image="/img/Thumbnail-4.png"
              title="Clash Of Clans"
              gameCategory="mobile"
            />
            <GameItems
              image="/img/Thumbnail-5.png"
              title="Valorant"
              gameCategory="desktop"
            />
          </div>
        </div>
      </section>
      <section className="reached pt-50 pb-50">
        <div className="container-fluid">
          <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
            <div className="me-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                290M+
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Players Top Up
              </p>
            </div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                12.500
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Games Available
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                99,9%
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Happy Players
              </p>
            </div>
            <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
            <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
            <div className="me-lg-35 ms-lg-35">
              <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                4.7
              </p>
              <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                Rating Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="story pt-50 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
            <div
              className="col-lg-7 col-12 d-lg-flex d-none justify-content-lg-end pe-lg-60"
              data-aos="zoom-in"
            >
              <img
                src="/img/Header-9.png"
                width="612"
                height="452"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-12 ps-lg-60">
              <div className="">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                  Win the battle.
                  <br /> Be the Champion.
                </h2>
                <p className="text-lg color-palette-1 mb-30">
                  Kami menyediakan jutaan cara untuk
                  <br className="d-sm-block d-none" />
                  membantu players menjadi
                  <br className="d-sm-block d-none" /> pemenang sejati
                </p>
                <div className="d-md-block d-flex flex-column w-100">
                  <a
                    className="btn btn-read text-lg rounded-pill"
                    href="#"
                    role="button"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home
