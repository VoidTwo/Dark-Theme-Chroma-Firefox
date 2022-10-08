'use strict'

const [themeValues, last] = (() => {
  let rgbColors = [
    '#FF0000',
    '#FF1D00',
    '#FF2C00',
    '#FF3700',
    '#FF4000',
    '#FF4900',
    '#FF5000',
    '#FF5700',
    '#FF5E00',
    '#FF6400',
    '#FF6A00',
    '#FF6F00',
    '#FF7500',
    '#FF7A00',
    '#FF7F00',
    '#FF8800',
    '#FF9100',
    '#FF9B00',
    '#FFA400',
    '#FFAD00',
    '#FFB600',
    '#FFBF00',
    '#FFC800',
    '#FFD100',
    '#FFDB00',
    '#FFE400',
    '#FFED00',
    '#FFF600',
    '#FFFF00',
    '#F5FF00',
    '#EBFF00',
    '#E0FF00',
    '#D5FF00',
    '#CAFF00',
    '#BEFF00',
    '#B1FF00',
    '#A4FF00',
    '#95FF00',
    '#85FF00',
    '#73FF00',
    '#5EFF00',
    '#42FF00',
    '#00FF00',
    '#00F84A',
    '#00F073',
    '#00E79A',
    '#00DCC0',
    '#00D1E5',
    '#00C6FF',
    '#00BAFF',
    '#00AEFF',
    '#00A0FF',
    '#0090FF',
    '#007EFF',
    '#0066FF',
    '#0048FF',
    '#0000FF',
    '#2C00FC',
    '#3F00F8',
    '#4D00F5',
    '#5800F2',
    '#6100EE',
    '#6A00EB',
    '#7100E8',
    '#7700E5',
    '#7D00E2',
    '#8300DF',
    '#8700DC',
    '#8C00D9',
    '#9000D6',
    '#9400D3',
    '#AB00C8',
    '#BE00BC',
    '#CF00AF',
    '#DD00A1',
    '#E80093',
    '#F20085',
    '#F90076',
    '#FF0068',
    '#FF0059',
    '#FF004B',
    '#FF003C',
    '#FF002D',
    '#FF001C']

  const themeValues = Array(rgbColors.length).fill(null)

  for (let i = themeValues.length - 1; i > -1; i--) {
    let color = rgbColors.pop()

    themeValues[i] = {
      colors:
        {
          bookmark_text: color,
          button_background_active: '#464646',
          button_background_hover: '#323232',
          icons: color,
          icons_attention: color,
          frame: '#000000',
          frame_inactive: '#000000',
          ntp_background: '#000000',
          ntp_text: '#FFFFFF',
          popup: '#000000',
          popup_border: color,
          popup_highlight: '#464646',
          popup_highlight_text: color,
          popup_text: color,
          sidebar: '#000000',
          sidebar_border: color,
          sidebar_highlight: '#464646',
          sidebar_highlight_text: color,
          sidebar_text: color,
          tab_background_text: color,
          tab_line: color,
          tab_loading: color,
          tab_selected: '#000000',
          tab_text: color,
          toolbar: '#000000',
          toolbar_bottom_separator: '#141414',
          toolbar_field: '#141414',
          toolbar_field_border: '#0A0A0A',
          toolbar_field_border_focus: color,
          toolbar_field_focus: '#141414',
          toolbar_field_highlight: '#464646',
          toolbar_field_highlight_text: '#FFFFFF',
          toolbar_field_text: color,
          toolbar_field_text_focus: color,
          toolbar_top_separator: color,
          toolbar_vertical_separator: color
        },
      properties:
        {
          content_color_scheme: 'dark'
        }
    }

    color = null
  }

  rgbColors = null
  const last = themeValues.length - 1
  return [Object.freeze(themeValues), Object.freeze(last)]
})()

let index = 0

const setTheme = () => {
  browser.theme.update(themeValues[index])
  index === last ? index = 0 : index++
  return undefined
}

setTheme()

browser.alarms.onAlarm.addListener(setTheme)
browser.alarms.create('setTheme', Object.freeze({ periodInMinutes: 0.0042 }))
