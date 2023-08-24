import { HeaderStyle } from "./Style";
import Bell from "/src/assets/bell.svg";
import { Avatar, TextField, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

interface customProps {
  title?: string;
  title_align?: string;
  iconRight?: any;
  avatar?: string;
  icon_left?: any;
  icon_left_click?: any;
  icon_left_link?: any;
  title_style?: any;
  customStyle?: any
}

const Header = (props: customProps) => {
  const {
    title,
    
    avatar,
    icon_left,
    title_align,
    title_style,
    icon_left_click,
    icon_left_link,
    customStyle,
    iconRight,
    ...other
  } = props;

  return (
    <HeaderStyle style={customStyle }>
      <div className="top">
        {avatar ? <Avatar alt="Remy Sharp" src={avatar} /> : null}

        {icon_left ? (
        <Link to={icon_left_link}>
          <IconButton onClick={icon_left_click} aria-label="icon" size="inherit">
            {icon_left}
          </IconButton>
        </Link>
        ) : null}
        <img src={iconRight} />
      </div>

      {(title && title_align && title_align === "left") ||
      title_align === undefined ? (
        <p style={title_style} className="title_left">
          {title}
        </p>
      ) : null}
      {title && title_align && title_align === "center" ? (
        <p style={title_style} className="title_center">
          {title}
        </p>
      ) : null}
      {title && title_align && title_align === "right" ? (
        <p style={title_style} className="title_right">
          {title}
        </p>
      ) : null}
    </HeaderStyle>
  );
};

export default Header;
