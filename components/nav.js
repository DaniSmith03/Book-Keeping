import React, { useState, useEffect } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { CommonActions } from '@react-navigation/native'



export const navigateActionFav=CommonActions.reset({
    index: 0,
    routes: [
      { name: 'Favorites' }
    ],
  })

export const navigateActionHome=CommonActions.reset({
    index: 0,
    routes: [
      { name: 'Favorites' }
    ],
  })

