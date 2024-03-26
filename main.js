const fs = require('fs');

const url = "https://srienlinea.sri.gob.ec/comprobantes-electronicos-internet/pages/consultas/recibidos/comprobantesRecibidos.jsf";
const headers = {
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "max-age=0",
  "content-type": "application/x-www-form-urlencoded",
  "sec-ch-ua": "\"Brave\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\"",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "same-origin",
  "sec-fetch-user": "?1",
  "sec-gpc": "1",
  "upgrade-insecure-requests": "1",
  "cookie": "JSESSIONID=eg-nkl7Qtir8GSjJeQ9YV0DO.sricel10; TS01c50b6e=0115ac86d2852fbbe97338bb118b61ebb87ec11349319c8007af03c6f9cce5cb1e703c662fae8e0116c0132ab29ce3b391153f24eb0ab673a189ad568880c1d76b31a32fa8dba8374f71d61d2f22a6d7e07eb7bce2515488b40b5621c4474760ac26b4bbaae526ace75daee8eeefb93138ddb66276020ed3ba1fe07a8c951c519d32416d79; _ga=GA1.3.1000550123.1710878995; _ga_FVQJG5HXTH=GS1.3.1710878995.1.0.1710878995.0.0.0; BIGipServerIntegra_statics=236847370.20480.0000; _gid=GA1.3.377944197.1711418809; BIGipServerDecla_Sesion=119406858.47873.0000; BIGipServerDecla_Statics=404619530.47873.0000; BIGipServerCEL-internet=572391690.47873.0000; _ga_Z0QD1W5QPG=GS1.3.1711429729.4.1.1711431870.0.0.0; TS01ed1cee=0115ac86d2ec9a4899e69e2dd0ca1b85e826f18e854433e6676ae486fcfb453a596a357d8942393a3cbf9baf4d174ece9fd19360be86ad781feec68a6ac10ca14f4db75b9589d0151484b9bc652df3ad4483a6d028b398d072a286f35f1a8fa42f7c5f619f778420386f0e08611e03746d991ef1eafabc02920309ab0ab0cbe8682959c737",
  "Referer": "https://srienlinea.sri.gob.ec/comprobantes-electronicos-internet/pages/consultas/recibidos/comprobantesRecibidos.jsf?&contextoMPT=https://srienlinea.sri.gob.ec/tuportal-internet&pathMPT=Facturaci%F3n%20Electr%F3nica&actualMPT=Comprobantes%20electr%F3nicos%20recibidos%20&linkMPT=%2Fcomprobantes-electronicos-internet%2Fpages%2Fconsultas%2Frecibidos%2FcomprobantesRecibidos.jsf%3F&esFavorito=S",
  "Referrer-Policy": "strict-origin-when-cross-origin"
}

const main = async () => {
  for (let i = 0; i < 31; i++) {
    try {
      const response = await fetch(url, {
        "headers": headers,
        "body": `frmPrincipal=frmPrincipal&frmPrincipal%3Aopciones=ruc&frmPrincipal%3Aano=2023&frmPrincipal%3Ames=8&frmPrincipal%3Adia=0&frmPrincipal%3AcmbTipoComprobante=0&g-recaptcha-response=&javax.faces.ViewState=4109937167315682737%3A8303638944053884479&frmPrincipal%3AtablaCompRecibidos%3A${String(i)}%3AlnkPdf=frmPrincipal%3AtablaCompRecibidos%3A${String(i)}%3AlnkPdf`,
        "method": "POST"
      });
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(`result${i + 1}.pdf`, buffer);
      console.log('Success: ' + (i + 1))
    } catch (error) {
      console.log('Error: ' + (i + 1));
      console.log(error);
    }
  }
}

main();

