import { Context, Schema , Logger } from 'koishi'

import * as jrw from './wordle_core/wordle'
import * as jrcd from './jrcd/jrcd'

export const name = 'jrniuzi'
export const usage = `
<style>
html , body{
    width : 100%;
    height : 100%;
    display : flex;
    background : #000;
}
svg {
  width: 100%;
  height: 100px;
  margin: auto;
}
svg text {
  text-transform: uppercase;
  animation: stroke 5s infinite alternate;
  letter-spacing: 10px;
  font-size: 90px;
}
@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 0.8;
  }
  50% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 1.2;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 1.5;
  }
  90%,
  100% {
    fill: rgba(72, 138, 204, 1);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

</style>
<svg viewBox="400 0 400 200">
  <text x="0" y="70%"> Koishi-Plugin-jrniuzi </text>
</svg>

# a niuzi game dev by mckidsteve
`


interface PluginEnableConfig{
  enable : boolean;
}

interface myConfig{
    jrwordle?: jrw.myConfig & PluginEnableConfig
    jrcd?: jrcd.myConfig & PluginEnableConfig
}

function pluginLoad<T>(schema: Schema<T>): Schema<T & PluginEnableConfig> {
    