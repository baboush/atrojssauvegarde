interface Logo {
  url: string;
  alt: string;
}

export function LogoComponent({ url, alt }: Logo) {
  return (
    <>
      <img className="logo" src={url} alt={alt} />
    </>
  );
}
