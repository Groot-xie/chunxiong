/* eslint-disable */
"use strict";
import Vue from 'vue';
import _ from "loadsh";

Object.defineProperties(Vue.prototype, {
  _: {
    get() {
      return _;
    }
  }
})
