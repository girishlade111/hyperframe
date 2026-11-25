import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { SectionLabel } from '../components/common/SectionLabel';
import { usePageMeta } from '../components/common/usePageMeta';
import { articles } from '../data/articles';

export function BlogPage() {
  usePageMeta(
    'Blog - HyperFrame',
    'Read the HyperFrame blog for insights, trends, and ideas about website design, branding, user experience, and building stronger digital brands online.'
  );

  const featured = articles[0];
  const gridArticles = articles.slice(1);

  return (
    <SiteLayout headerTheme="dark">
      <section className="section inner contact">
        <div className="container">
          <div className="inner-wrap">
            <div className="inner-title-wrap">
              <h1 className="global-heading">
                Insights and Ideas for
                <br />
                Digital Growth
              </h1>
            </div>
            <div className="inner-details-wrap">
              <p className="inner-details">
                Stay ahead of the curve with expert insights on design, strategy, and technology. Uncover tips, case studies, and trends that are shaping digital experiences.
              </p>
            </div>
          </div>

          <div className="blog-top-wrap">
            <article className="blog-top-card">
              <Link to={`/blog/${featured.slug}`} className="blog-top-image-link">
                <img
                  width={900}
                  height={680}
                  alt={featured.title}
                  src={featured.coverImage}
                  className="blog-top-image"
                />
              </Link>

              <div className="blog-top-right-wrap">
                <div className="blog-top-info-wrap">
                  <div className="blog-top-number-wrap">
                    <span className="blog-top-number">{featured.index}</span>
                    <span className="blog-top-number">{featured.publicationDate}</span>
                  </div>
                  <Link to={`/blog/${featured.slug}`} className="blog-top-title">
                    {featured.title}
                  </Link>
                  <p className="blog-top-details">{featured.excerpt}</p>
                </div>

                <PrimaryButton
                  to={`/blog/${featured.slug}`}
                  label="Learn More"
                  variant="grey"
                  tiltedArrow
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section blog">
        <div className="container">
          <div className="blog-b-top-left-wrap">
            <SectionLabel variant="brace" label="Our Blogs & Insights" />
            <h2 className="section-title is-h3-medium">Browse All Blogs</h2>
          </div>

          <div className="blog-wrap">
            <div className="blog-grid-wrap">
              {gridArticles.map((article) => (
                <article key={article.id} className="blog-card">
                  <Link to={`/blog/${article.slug}`} className="blog-card-image-link">
                    <img
                      width={831}
                      height={720}
                      alt={article.title}
                      src={article.coverImage}
                      loading="lazy"
                      className="blog-card-image"
                    />
                    <div className="blog-image-overly">
                      <span className="primary-button">
                        <span className="primary-btn-text-wrap">
                          <span className="primary-btn-text one">Learn More</span>
                        </span>
                        <span className="primary-btn-icon-wrap is-tilted">
                          <img width={22} height={22} alt="" src="/assets/icons/Whtie-Arrow.svg" />
                        </span>
                      </span>
                    </div>
                  </Link>

                  <div>
                    <div className="blog-top-number-wrap">
                      <span className="blog-top-number">{article.index}</span>
                      <span className="blog-top-number">{article.publicationDate}</span>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="blog-card-title">
                      {article.title}
                    </Link>
                    <p className="blog-top-details">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
