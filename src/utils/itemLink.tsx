import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

ItemLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

ItemLink.defaultProps = {
  exact: false,
};

type TItemLink = {
  href: string;
  exact: boolean;
  children: any;
  className: string;
};

function ItemLink({ href, exact, children, ...props }: TItemLink) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

export { ItemLink };
