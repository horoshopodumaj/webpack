import Image1 from "@/assets/Image1.jpg";
import Image2 from "@/assets/Image2.png";
import Image3 from "@/assets/Image3.svg";
import Svg from "@/assets/svg.svg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

function simplyFunc(a: number) {
    console.log(a);
}

export const App = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    // if (__PLATFORM__ === "desktop") {
    //     return <div>ISDESKTOPPLATFORM</div>;
    // }

    // if (__PLATFORM__ === "mobile") {
    //     return <div>ISMOBILEPLATFORM</div>;
    // }

    // simplyFunc("ui");

    return (
        <div data-testid={"App.DataTestId"}>
            <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} src={Image2} alt="" />
                <img width={100} src={Image1} alt="" />
            </div>
            <div>
                <Image3 style={{ color: "green" }} width={50} height={50} />
                <Svg style={{ color: "red" }} width={50} height={50} />
            </div>
            <Link to={"/about"}>about</Link>
            <br />
            <Link to={"/shop"}>shop</Link>
            <br />
            <div className={classes.count}>{count}</div>
            <button className={classes.button} onClick={increment}>
                <span>+</span>
            </button>
            <button className={classes.button} onClick={decrement}>
                <span>-</span>
            </button>
            <Outlet />
        </div>
    );
};
