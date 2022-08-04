import * as DATA from './data.json';
import React from 'react';

export const API = async () => {
  $.ajax({
    url: DATA,
    dataType: "json",
    async: true,
    data: {},
    type: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": "90aefea90eae4d479978e96246312966",
    },
    success:
      
        }, 
        error: function(err) {
          console.log("ERROR");
          console.log(err);
        }     
  })
}

