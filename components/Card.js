import Link from "next/link";
import Social from "./Social";

const Card = ({
  feature,
  img,
  icon,
  title,
  link,
  buttonText,
  rounded,
  children,
  border,
  socials,
  alt,
  padding,
  subtitle,
}) => {
  return (
    <div
      className={`card ${feature ? "card--feature " : ""}${
        rounded ? "card--rounded " : ""
      }${border ? "card--bordered " : ""}${padding ? "card--padding" : ""}`}
    >
      {img && (
        <img src={img} alt={alt ? alt : "card image"} className="card-img" />
      )}
      {icon && (
        <img src={icon} alt={alt ? alt : "card image"} className="card-icon" />
      )}
      <div className="card-heading">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
      </div>
      <div className="card-body">{children}</div>
      {socials && <Social />}
      {link && (
        <div className="card-footer">
          <Link href={link} className={`btn ${feature ? "btn-secondary" : ""}`}>
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
