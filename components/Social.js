import Link from "next/link";

const Social = ({ light }) => {
  return (
    <ul className="social-list">
      <li>
        <Link href="/" target="_blank">
          <img
            src={`/images/icons/linkedin${light ? "-white" : ""}.svg`}
            alt="linkedin icon"
            className="social-icon"
          />
        </Link>
      </li>
      <li>
        <Link href="/" target="_blank">
          <img
            src={`/images/icons/facebook${light ? "-white" : ""}.svg`}
            alt="facebook icon"
            className="social-icon"
          />
        </Link>
      </li>
      <li>
        <Link href="/" target="_blank">
          <img
            src={`/images/icons/instagram${light ? "-white" : ""}.svg`}
            alt="instagram icon"
            className="social-icon"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Social;
