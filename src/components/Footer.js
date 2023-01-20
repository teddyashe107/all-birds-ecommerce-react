import List from "./List"
import HList from "./HList";


const help = {
    title: 'help',
    items:
    [
      '1-888-963-8944',
      '1-814-251-9966 (Text)',
      'help@allbirds.com',
      'Returns/Exchanges',
      'FAQ/Contact Us',
      'Afterpay',
    ],
}

const shop = {
    title: 'Shop',
    items:
    [
      "Men's Shoes",
      "Women's Shoes",
      "Men's Apparel",
      "Women's Apparel",
      'Socks',
      'Gift Cards',
      'Refer a Friend',
      'Download the Allbirds App',
    ],
  }
const components = {
      title: 'company',
      items:
      [
        'Our Stores',
        'Our Story',
        'Our Materials',
        'Sustainability',
        'FAQ/Contact Us',
        'Our Stores',
        'Our Story',
        'Our Materials',
        'Sustainability',
        'FAQ/Contact Us',
      ],
}



const data = [
    {
      title: 'help',
      items:
      [
        '1-888-963-8944',
        '1-814-251-9966 (Text)',
        'help@allbirds.com',
        'Returns/Exchanges',
        'FAQ/Contact Us',
        'Afterpay',
      ],
    },
    {
      title: 'Shop',
      items:
      [
        "Men's Shoes",
        "Women's Shoes",
        "Men's Apparel",
        "Women's Apparel",
        'Socks',
        'Gift Cards',
        'Refer a Friend',
        'Download the Allbirds App',
      ],
    },
    {
      title: 'company',
      items:
      [
        'Our Stores',
        'Our Story',
        'Our Materials',
        'Sustainability',
        'FAQ/Contact Us',
        'Our Stores',
        'Our Story',
        'Our Materials',
        'Sustainability',
        'FAQ/Contact Us',
      ],
    }
];


const socials = [
    'https://cdn.allbirds.com/image/upload/q_auto/cms/7ALf4NFNH4VStmrXU0qSKK/0aa03178ac1a2dc0789703f6dac6e7ef/social-instagram.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/7jsrb2oMQypD1kO6iZLXZN/8bbcbd3f4c776e7150954f053aee3c00/social-twitter-white.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/55ZLXdMQu728huA78Qlfkb/faa7706d3b83f77d73026e3cfdaca7d0/social-facebook.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/5VBkylibm5XkgzjDP153Mo/e3d80019f111cf8652618aa05ca5528e/social-pinterest-white.svg'
];

const flags = [
    'https://cdn.allbirds.com/image/upload/q_auto/cms/3ohqY3WWyehlkYpVi815p9/6f7fbf2f1e4a08abc8da4788a95c2376/flag-us.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/22gqFXi2QPoT2IhEpBuzOi/d01a77d603e94a10b8a690deded124f7/flag-nz.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/6FnrOphj9NsjD38uREtsBn/cbf3c42e92a6c0628da4462b04e92e2c/flag-au.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/mpzswQHoLPhzgFkXpcZ7P/eba356c7c7929352d5d3eea6999f5ad3/flag-ca.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/5OVl6dmwlwOJPrg5F3Ot1s/e9679772ddd64de49cd96cbd4a819743/flag-uk.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/2bpMfDa3leuCSpX1lLXKvB/19c74fd77f850e29497ad82d91e83292/flag-cn.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/5DEtULZUsBHTJp8aXcaOIc/c9d3ff14bde3bf45235f906dfb63f649/method-draw-image.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/3TWBjQxibzqkiXua4hrmCu/1730ec7122e70b26bd29d972733a8190/Japan-Flag.svg',
    'https://cdn.allbirds.com/image/upload/q_auto/cms/lqp21Rk7GI8HTImpSTOip/cdb1a8e18b337c27e91c18b82dd93ddf/South-Korea-Flag.svg',
];
  



const Footer = () => { 
    return (
        <footer className='px-8 py-10 mt-6 text-gray-100 bg-black'>
        <p className='text-gray-100 md:text-left'>Enter you email to stay in touch!</p>

        <div className='flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-row lg:max-w-lg'>
        <input type="text" placeholder="" className='w-full md:col-span-2 mt-1 bg-gray-600 border-b-2 border-gray-200 rounded-sm py-2 ' />
        <button type='button' className='mt-1 font-bold tracking-wider text-gray-100 uppercase bg-gray-600 rounded-xs md:inline-block md:ml-5 lg:max-w-sm lg:px-5 lg:whitespace-nowrap'>Sign up</button>
      </div>

      <div className='grid gap-5 my-10 text-center lg:text-left lg:grid-cols-4'>
          <div className="lg:col-span-2">
            <div className="lg:grid lg:grid-cols-2">
              <List content={help} />
              <List content={shop} />
            </div>
        </div>
           <div className="lg:col-span-2"> <List content={components} /></div>
      </div>

      <div className='flex flex-col items-center justify-center gap-6 text-center lg:grid lg:grid-cols-4 lg:my-16 lg:text-left'>
        <div>
            <h2 className='font-bold tracking-wider uppercase'>
              FOLLOW THE FLOCK
            </h2>
            <p className='text-sm'>Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds</p>
            <ul className='flex justify-center lg:justify-start gap-5 mt-5'>
               {socials.map(social => {
                         return <li key={social}><img src={social} alt="social medias" className='cursor-pointer' /></li>
               })}
            </ul>
          </div>
        <div className='my-3 lg:flex lg:justify-center'>
        <img src='https://cdn.allbirds.com/image/upload/f_auto,q_auto/cms/1X4EOQF1JJOjMbo48vDUzB/c249da5825f9ae39f1f53bdb90d65285/icon-b-corp.svg' alt='some logo' />
        </div>
        <div className="col-span-2">
        <HList data={flags} />
        </div>
   

      </div>

      <div className='mb-10 text-center space-y-9 lg:mx-5'>
        <p className='text-sm' >© 2022 Allbirds, Inc. All Rights Reserved. <a href='#' className='underline'>Terms</a>, <a href='#' className='underline'>Privacy</a> & <a href='#' className='underline'>Accessibility</a></p>
        <p className='text-sm underline'> <a href='#'>Do Not Sell My Personal Information</a></p>
      </div>
  </footer>
    )

}

export default Footer;