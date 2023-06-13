import { type } from 'os';
import React from 'react'


type reg = {
    type: 'registered',
    id: number,
    name?: string
}

type unreg = {
    type: 'unregistered',
}

type TState<T> = {
    count: {
        value: number,
        info: T extends 'registered' ? reg : unreg
    }
}


export const t = () => {
  return (
    <div>t</div>
  )
}
