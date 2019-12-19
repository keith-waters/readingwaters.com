import Head from 'next/head';
import css from './metadata.css';

const Metadata = ({metadata}) => {
  const {title, logoSrc, logoAlt, publishDate, tags} = metadata;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={css.flex} style={{margin: "50px 0 100px 0"}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <h1 style={{margin: "0 0 0 0"}}>{title}</h1>
          <p style={{margin: "0 0 0 0"}}>{publishDate}</p>
          <div style={{display: "flex", flexGrow: "1", alignItems: "flex-end"}}>
            {
              tags.map(tag => (
                <p 
                  key={tag} 
                  style={{margin: "0 5px 0 0", padding: "3px 7px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.1)"}}
                >
                  {tag}
                </p>
              ))
            }
          </div>
        </div>
        <img src={logoSrc} alt={logoAlt} height="100px" width="100px" style={{marginRight: "10px"}} />
      </div>
    </>
  );
}

export default Metadata;