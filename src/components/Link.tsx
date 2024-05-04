interface Link {
  link: string;
  url: string;
}

export function LinkComponent({ link, url }: Link) {
  return (
    <>
      <a className="nav-link" href={link}>
        {url}
      </a>
    </>
  );
}
