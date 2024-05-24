// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('radius')
  console.log(radius)

  // process
  const volume = Math.PI * (4.0 / 3.0) * Math.pow(radius, 3)
  const dimensions = "<ul>\n<li>radius = " + "</li>\n</ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' mm³'
}