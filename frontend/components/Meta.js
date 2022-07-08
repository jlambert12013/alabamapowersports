import Head from 'next/head'

const Meta = ({ pageTitle, title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta keywords="keywords" content={keywords} />
      <title>{pageTitle + ' - ' + title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  pageTitle: 'Home ',
  title: `Alabama Powersports | 2925 Citizens Pkwy, Selma AL, 36701`,
  keywords:
    'alabama powersports, alabama, powersports, ATV, UTV, side by side, polaris, ranger, RZR, polaris ranger, off road, motorcycles, selma, dirt biks, vintage, vintage motorcycles, go karts, golf karts',
  description: 'Proud Dealer of Cub Cadet! ',
}

export default Meta
