import React from "react";
import "../css/imageGallery.css";
import a from "../mainpage/1.jpg";
import b from "../mainpage/2.jpg";
import c from "../mainpage/3.jpg";
import d from "../mainpage/4.jpg";
import e from "../mainpage/5.jpg";
import f from "../mainpage/6.jpg";
import g from "../mainpage/7.jpg";
import h from "../mainpage/8.jpg";
import i from "../mainpage/9.jpg";
import j from "../mainpage/10.jpg";
import k from "../mainpage/11.jpg";
import l from "../mainpage/12.jpg";
import m from "../mainpage/13.jpg";
import n from "../mainpage/14.jpg";
import o from "../mainpage/15.jpg";
import p from "../mainpage/16.jpg";
import q from "../mainpage/17.jpg";
import r from "../mainpage/18.jpg";
import s from "../mainpage/19.jpg";
import t from "../mainpage/20.jpg";
import u from "../mainpage/21.jpg";
import v from "../mainpage/22.jpg";
import w from "../mainpage/23.jpg";

const ImageGallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-tag">
        <h1>
          <i className="fas fa-dollar-sign" />
          ECOM GALLERY
        </h1>
        <p>#BeautyWearByBeauty</p>
      </div>
      <div className="gallery-images">
        <div className="column">
          <div className="row">
            <img src={a} />
            <img src={h} />
            <img src={c} />
            <img src={j} />
            <img src={e} />
            <img src={l} />
            <img src={g} />
            <img src={m} />
            <img src={i} />
            <img src={n} />
            <img src={k} />
            <img src={w} />
          </div>

          <div className="row">
            <img src={q} />
            <img src={d} />
            <img src={r} />
            <img src={b} />
            <img src={s} />
            <img src={f} />
            <img src={t} />
            <img src={v} />
            <img src={o} />
            <img src={u} />
            <img src={p} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
