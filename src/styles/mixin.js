export const ObjectFitMixIn = () => {
  return `object-fit: cover;
  width:100%;
  height:100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;`
}

export const FlexStyle = (Valign, Halign) => {
  return `
    display     : flex;
    ${Halign === 'flex-start' ? `
      justify-content   : ${Halign};
      -webkit-box-align : inherit;
      -ms-flex-align    : inherit;
    ` : `
      justify-content   : ${Halign};
    `}
    align-items : ${Valign};
  `;
}

export const TextStyle = (color, font, fontSize, fontWeight) => {
  return `
  color       : ${color};
  font-family : ${font}, sans-serif;
  font-size   : ${fontSize};
  font-weight : ${fontWeight};
  `;
}