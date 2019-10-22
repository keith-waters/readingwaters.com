const Metadata = ({metadata}) => {
  const {title, logoSrc, logoAlt, publishDate, tags} = metadata;
  return (
    <div style={{display: "flex"}}>
      <img src={logoSrc} alt={logoAlt} height="100px" width="100px" style={{marginRight: "10px"}} />
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{margin: "0 0 0 0"}}>{title}</h1>
        <p style={{margin: "0 0 0 0"}}>{publishDate}</p>
        <div style={{display: "flex", flexGrow: "1", alignItems: "flex-end"}}>
          {
            tags.map(tag => <p style={{margin: "0 5px 0 0", padding: "3px 7px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.1)"}}>{tag}</p>)
          }
        </div>
      </div>
    </div>
  );
}

export default Metadata;