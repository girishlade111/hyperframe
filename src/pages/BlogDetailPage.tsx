import { useParams } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { usePageMeta } from '../components/common/usePageMeta';
import { articles } from '../data/articles';
import { siteConfig } from '../data/siteConfig';
import { NotFoundPage } from './NotFoundPage';

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  usePageMeta(
    article ? article.seo.title : 'Article Not Found - HyperFrame',
    article ? article.seo.description : 'Article details.'
  );

  if (!article) return <NotFoundPage />;

  return (
    <SiteLayout headerTheme="dark">
      <section className="section blog-single">
        <img
          src={article.bannerImage}
          alt=""
          className="blog-banner-image"
          aria-hidden="true"
        />
        <div className="blog-relative-wrap">
          <div className="container">
            <PrimaryButton to="/blog" label="Back to Blogs" variant="back-light" />
            <div className="blog-single-title-wrap">
              <h1 className="global-heading">{article.title}</h1>
            </div>
            <div className="blog-single-details-wrap">
              <p className="inner-details">{article.excerpt}</p>
            </div>

            <div className="blog-ctg-wrapper">
              <div className="blog-ctg-wrap">
                <span className="blog-ctg-star-wrap">
                  <img width={20} height={20} alt="" src="/assets/icons/Blog-Star.svg" />
                </span>
                <span className="blog-ctg">{article.category}</span>
              </div>
              <span className="blog-ctg-card-line" aria-hidden="true" />
              <span className="blog-ctg">{article.publicationDate}</span>
              <span className="blog-ctg-card-line" aria-hidden="true" />
              <span className="blog-ctg">{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-rich">
        <div className="container">
          <div className="blog-rich-wrapper">
            <div className="blog-rich-text">
              {article.sections.map((sec) => (
                <div key={sec.heading}>
                  <h4>{sec.heading}</h4>
                  {sec.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {sec.callout && (
                    <p>
                      <strong>{sec.callout}</strong>
                    </p>
                  )}
                  {sec.blockquote && <blockquote>{sec.blockquote}</blockquote>}
                  {sec.image && (
                    <figure>
                      <img width={880} height={540} alt={sec.heading} src={sec.image} loading="lazy" />
                    </figure>
                  )}
                </div>
              ))}
            </div>

            <div className="blog-single-btm-wrap">
              <div className="blog-author-wrap">
                <div className="blog-author-img-wrap">
                  <img
                    width={96}
                    height={96}
                    alt={article.author.name}
                    src={article.author.avatar}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="blog-author-name">{article.author.name}</div>
                  <div className="blog-author-pst">{article.author.role}</div>
                </div>
              </div>

              <div className="blog-btm-right-wrap">
                <span className="blog-social-title">Share:</span>
                <div className="footer-social-wrap">
                  {siteConfig.socials.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Share on ${soc.name}`}
                      className="social-link"
                    >
                      <img width={20} height={20} alt="" src={soc.orangeIcon} className="social-icon two" />
                      <img width={20} height={20} alt={soc.name} src={soc.grayIcon} className="social-icon one" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
