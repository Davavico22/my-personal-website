/*eslint-disable*/
import React from 'react'


import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  Badge,
  IconButton,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";

function IndexHeader() {
  //   let pageHeader = React.createRef();

  //   React.useEffect(() => {
  //     if (window.innerWidth > 991) {
  //       const updateScroll = () => {
  //         let windowScrollTop = window.pageYOffset / 3;
  //         pageHeader.current.style.transform =
  //           "translate3d(0," + windowScrollTop + "px,0)";
  //       };
  //       window.addEventListener("scroll", updateScroll);
  //       return function cleanup() {
  //         window.removeEventListener("scroll", updateScroll);
  //       };
  //     }
  //   });

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className="titulo">
          <AppBar>
            <Toolbar>
              {/* <MenuDesplegable /> */}
              <h1 className="titulo" color="inherit">
                <Link to="/" style={{ color: "white" }}>
                  <img  style={{height:"50px"}}src={logo} alt="MrTitiShop"></img>
                </Link>
              </h1>
              <div className={classes.espaciado} />
              <IconButton
                aria-label="añadir al carrito"
                onClick={handleDrawerOpen}
              >
                <Badge badgeContent={basket?.length} color="secondary">
                  <AddShoppingCart style={{ color: "white" }} />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Drawer variant="persistent" anchor="right" open={open}>
            {list("right")}
          </Drawer>
        </div>
        <div className={classes.offset}></div>
      </div>
    </React.Fragment>
  )
}

export default IndexHeader
