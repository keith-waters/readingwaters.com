const Metadata = ({metadata}) => {
  const {title, logoSrc, logoAlt, publishDate, tags} = metadata;
  return (
    <div style={{display: "flex"}}>
      <img src={logoSrc} alt={logoAlt} height="100px" width="100px" />
      <div>
        <h1>{title}</h1>
        <p>{publishDate}</p>
        <div style={{display: "flex"}}>
          {
            tags.map(tag => <p>{tag}</p>)
          }
        </div>
      </div>
    </div>
  );
}

export default Metadata;