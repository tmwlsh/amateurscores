import Document, { Html, Head, Main, NextScript } from 'next/document'

const baseStyle = {
  margin: 0,
  padding: 0,
  fontFamily: '"Ubuntu", sans-serif',
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html style={baseStyle}>
        <Head>
          {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap" rel="stylesheet" />
        </Head>
        <body style={baseStyle}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
