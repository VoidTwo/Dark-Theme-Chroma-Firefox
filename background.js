function initialSetup()
{
    let hexColors = ['#FF0000', '#FF1D00', '#FF2C00', '#FF3700', '#FF4000',
                     '#FF4900', '#FF5000', '#FF5700', '#FF5E00', '#FF6400',
                     '#FF6A00', '#FF6F00', '#FF7500', '#FF7A00', '#FF7F00',
                     '#FF8800', '#FF9100', '#FF9B00', '#FFA400', '#FFAD00',
                     '#FFB600', '#FFBF00', '#FFC800', '#FFD100', '#FFDB00',
                     '#FFE400', '#FFED00', '#FFF600', '#FFFF00', '#F5FF00',
                     '#EBFF00', '#E0FF00', '#D5FF00', '#CAFF00', '#BEFF00',
                     '#B1FF00', '#A4FF00', '#95FF00', '#85FF00', '#73FF00',
                     '#5EFF00', '#42FF00', '#00FF00', '#00F84A', '#00F073',
                     '#00E79A', '#00DCC0', '#00D1E5', '#00C6FF', '#00BAFF',
                     '#00AEFF', '#00A0FF', '#0090FF', '#007EFF', '#0066FF',
                     '#0048FF', '#0000FF', '#2C00FC', '#3F00F8', '#4D00F5',
                     '#5800F2', '#6100EE', '#6A00EB', '#7100E8', '#7700E5',
                     '#7D00E2', '#8300DF', '#8700DC', '#8C00D9', '#9000D6',
                     '#9400D3', '#AB00C8', '#BE00BC', '#CF00AF', '#DD00A1',
                     '#E80093', '#F20085', '#F90076', '#FF0068', '#FF0059',
                     '#FF004B', '#FF003C', '#FF002D', '#FF001C'];

    let length = hexColors.length;
    let chromaColors = [];

    for (let i = 0; i < length; i++)
    {
        chromaColors.push(
            {
                colors:
                {
                    bookmark_text: hexColors[i],
                    button_background_active: '#464646',
                    button_background_hover: '#323232',
                    icons: hexColors[i],
                    icons_attention: hexColors[i],
                    frame: '#000000',
                    frame_inactive: '#000000',
                    ntp_background: '#000000',
                    ntp_text: '#FFFFFF',
                    popup: '#000000',
                    popup_border: hexColors[i],
                    popup_highlight: '#464646',
                    popup_highlight_text: hexColors[i],
                    popup_text: hexColors[i],
                    sidebar: '#000000',
                    sidebar_border: hexColors[i],
                    sidebar_highlight: '#464646',
                    sidebar_highlight_text: hexColors[i],
                    sidebar_text: hexColors[i],
                    tab_background_text: hexColors[i],
                    tab_line: hexColors[i],
                    tab_loading: hexColors[i],
                    tab_selected: '#000000',
                    tab_text: hexColors[i],
                    toolbar: '#000000',
                    toolbar_bottom_separator: '#141414',
                    toolbar_field: '#141414',
                    toolbar_field_border: '#0A0A0A',
                    toolbar_field_border_focus: hexColors[i],
                    toolbar_field_focus: '#141414',
                    toolbar_field_highlight: '#464646',
                    toolbar_field_highlight_text: '#FFFFFF',
                    toolbar_field_text: hexColors[i],
                    toolbar_field_text_focus: hexColors[i],
                    toolbar_top_separator: hexColors[i],
                    toolbar_vertical_separator: hexColors[i]
                }
            });
    }

    return [chromaColors, length - 1];
}

function setColor()
{
    browser.theme.update(chromaColors[index]);
    if (index === last)
        index = 0;
    else
        index++;
    return undefined;
}

const [chromaColors, last] = initialSetup();
let index = 0;

setColor();

browser.alarms.onAlarm.addListener(setColor);
browser.alarms.create('setColor', {periodInMinutes: 0.0042});