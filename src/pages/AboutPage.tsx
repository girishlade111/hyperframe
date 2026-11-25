import { useState } from 'react';
import { SiteLayout } from '../components/layout/SiteLayout';
import { ClientLogoStrip } from '../components/common/ClientLogoStrip';
import { SectionLabel } from '../components/common/SectionLabel';
import { VideoModal } from '../components/common/VideoModal';
import { ClientStorySection } from '../components/testimonials/ClientStorySection';
import { TeamSection } from '../components/team/TeamSection';
import { usePageMeta } from '../components/common/usePageMeta';
import { aboutData } from '../data/about';

export function AboutPage() {
  usePageMeta(
    'About - HyperFrame',
    'Learn more about HyperFrame, a digital agency focused on branding, website design, development, and creative solutions that help modern brands grow online.'
  );

  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <SiteLayout headerTheme="light">
      {/* 01. About Hero */}
      <section className="section about">
        <div className="container">
          <div className="about-top-wrap">
            <div className="about-title-wrap">
              <h1 className="global-heading is-black-medium">
                Creating Experiences That
                <br />
                Are Growth-Driven
              </h1>
            </div>
            <div className="about-details-wrap">
              <p className="global-details">
                At HyperFrame, we craft websites and digital experiences that combine creativity, usability, and business strategy.
              </p>
            </div>
          </div>

          <div className="about-wrap">
            <div className="about-grid-wrap">
              {aboutData.heroPortraits.map((portrait) => (
                <div key={portrait.src} className="about-image-wrap">
                  <img
                    width={732}
                    height={820}
                    alt={portrait.alt}
                    src={portrait.src}
                    className="about-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Client Logo Strip */}
      <ClientLogoStrip />

      {/* 03. The Story Behind HyperFrame (Bento Grid) */}
      <section className="section story">
        <div className="container">
          <div className="story-top-wrap">
            <SectionLabel variant="brace" label="About Us" />
            <div className="story-title-wrap">
              <h2 className="section-title is-h3-medium">The Story Behind HyperFrame</h2>
            </div>
            <div className="story-details-wrap">
              <p className="global-details is-large-body">
                Our cross-functional teams work together to achieve outstanding portfolios across all the digital channels.
              </p>
            </div>
          </div>

          <div className="story-wrap">
            <div className="story-grid-wrap">
              <div className="story-card">
                <SectionLabel variant="brace" label={aboutData.storyBento.story.index} />
                <div className="story-btm-wrap">
                  <h3 className="story-card-title">{aboutData.storyBento.story.title}</h3>
                  <p className="story-card-details">{aboutData.storyBento.story.description}</p>
                </div>
              </div>

              <div className="story-image-card">
                <img
                  width={744}
                  height={840}
                  alt="Abstract luminous crystalline metallic object"
                  src={aboutData.storyBento.images.metallicObject}
                  loading="lazy"
                  className="story-image"
                />
              </div>

              <div className="story-card">
                <div className="story-btm-wrap">
                  <h3 className="story-card-title">{aboutData.storyBento.mission.title}</h3>
                  <p className="story-card-details">{aboutData.storyBento.mission.description}</p>
                </div>
                <SectionLabel variant="brace" label={aboutData.storyBento.mission.index} />
              </div>

              <div className="story-image-card">
                <img
                  width={744}
                  height={840}
                  alt="Portrait in deep blue studio lighting"
                  src={aboutData.storyBento.images.bluePortrait}
                  loading="lazy"
                  className="story-image"
                />
              </div>

              <div className="story-last-wrap">
                <div className="story-image-card">
                  <img
                    width={1520}
                    height={540}
                    alt="Floating orange geometric cube above a flower field"
                    src={aboutData.storyBento.images.orangeCube}
                    loading="lazy"
                    className="story-image"
                  />
                </div>

                <div className="story-vision-wrap">
                  <div className="story-card last">
                    <SectionLabel variant="brace" label={aboutData.storyBento.vision.index} />
                    <div className="story-btm-wrap">
                      <h3 className="story-card-title">{aboutData.storyBento.vision.title}</h3>
                      <p className="story-card-details">{aboutData.storyBento.vision.description}</p>
                    </div>
                  </div>

                  <div className="story-vidoe-wrap">
                    <button
                      type="button"
                      className="story-lightbox"
                      onClick={() => setVideoOpen(true)}
                      aria-label="Play Showreel 2025 video"
                    >
                      <img
                        width={744}
                        height={540}
                        alt="Showreel 2025 thumbnail"
                        src={aboutData.storyBento.images.videoPoster}
                        loading="lazy"
                        className="story-lightbox-image"
                      />
                      <span className="story-icon-wrap" aria-hidden="true">
                        <img
                          width={24}
                          height={24}
                          alt=""
                          src="/assets/icons/Play-Icon.svg"
                          className="story-icon"
                        />
                      </span>
                      <span className="story-video-title">{aboutData.storyBento.showreel.label}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Core Values: The Heart of HyperFrame */}
      <section className="section value">
        <div className="container">
          <div className="value-top-wrap">
            <SectionLabel variant="brace" label="Our Core Values" />
            <div className="value-title-wrap">
              <h2 className="section-title is-h3-medium">The Heart of HyperFrame</h2>
            </div>
            <div className="value-details-wrap">
              <p className="global-details is-large-body">
                The principles that shape how we think, design, and deliver, ensuring every project creates lasting impact.
              </p>
            </div>
          </div>

          <div className="value-wrap">
            <div className="value-grid-wrap">
              <div className="value-card">
                <div className="value-card-top-wrap">
                  <h3 className="value-card-title">{aboutData.coreValues[0].title}</h3>
                  <p className="value-card-details">{aboutData.coreValues[0].description}</p>
                </div>
                <div className="value-card-btm-wrap">
                  <div className="story-number-wrap">
                    <span className="story-number orange-color">(</span>
                    <span className="value-card-number">{aboutData.coreValues[0].index}</span>
                    <span className="story-number orange-color">)</span>
                  </div>
                  <div className="value-card-icon-wrap">
                    <img width={60} height={60} alt="" src={aboutData.coreValues[0].icon} loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="value-card-center-wrap">
                {aboutData.coreValues.slice(1, 3).map((val, i) => (
                  <div key={val.index} className={`value-card ${i === 0 ? 'is-bordered-btm' : ''}`}>
                    <div className="value-card-btm-wrap is-top">
                      <div className="story-number-wrap">
                        <span className="story-number orange-color">(</span>
                        <span className="value-card-number">{val.index}</span>
                        <span className="story-number orange-color">)</span>
                      </div>
                      <div className="value-card-icon-wrap">
                        <img width={60} height={60} alt="" src={val.icon} loading="lazy" />
                      </div>
                    </div>
                    <div className="value-card-top-wrap">
                      <h3 className="value-card-title">{val.title}</h3>
                      <p className="value-card-details">{val.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="value-card">
                <div className="value-card-top-wrap">
                  <h3 className="value-card-title">{aboutData.coreValues[3].title}</h3>
                  <p className="value-card-details">{aboutData.coreValues[3].description}</p>
                </div>
                <div className="value-card-btm-wrap">
                  <div className="story-number-wrap">
                    <span className="story-number orange-color">(</span>
                    <span className="value-card-number">{aboutData.coreValues[3].index}</span>
                    <span className="story-number orange-color">)</span>
                  </div>
                  <div className="value-card-icon-wrap">
                    <img width={60} height={60} alt="" src={aboutData.coreValues[3].icon} loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Our Achievements */}
      <section className="section awwards">
        <div className="container">
          <div className="awwards-top-wrap">
            <SectionLabel variant="brace" label="Awwwards" theme="dark" />
            <div className="awwards-title-wrap">
              <h2 className="section-title is-h3-white">Our Achievements</h2>
            </div>
            <div className="awwards-details-wrap">
              <p className="inner-details">
                Great design is about more than just visuals: it is about crafting meaningful experiences that lead to tangible results.
              </p>
            </div>
          </div>

          <div className="awwards-wrap">
            <div className="awwards-flex-wrap">
              {aboutData.awards.map((award) => (
                <div key={award.title} className="awwards-card">
                  <div className="awwards-card-flex-wrap">
                    <div className="awwards-card-left-wrap">
                      <div className="awwards-web-wrap">
                        <div className="awwards-web-name">{award.org}</div>
                      </div>
                      <div className="awwards-card-title">{award.title}</div>
                    </div>
                    <div className="awwards-web-name">{award.date}</div>
                  </div>
                  <div className="awwards-img-wrap" aria-hidden="true">
                    <img width={360} height={260} alt="" src={award.image} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06. Client Stories */}
      <ClientStorySection />

      {/* 07. Meet Our Team */}
      <TeamSection />

      <VideoModal
        isOpen={videoOpen}
        youtubeId={aboutData.storyBento.showreel.youtubeId}
        title={aboutData.storyBento.showreel.label}
        onClose={() => setVideoOpen(false)}
      />
    </SiteLayout>
  );
}
