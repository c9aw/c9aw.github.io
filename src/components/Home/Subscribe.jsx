import { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [toggle, setToggle] = useState(false)

  function handleSubmit() {
    setToggle(true)
  }

  return (
    <>
      {toggle ? (
        <div className='h-[260px] flex justify-center items-center text-2xl sm:text-sm'>
          Thank You For Subscribing....
        </div>
      ) : (
        <div className='mx-10 py-10 sm:mx-5 sm:py-5'>
          <div className='flex flex-col justify-center gap-8 w-3/5 mx-auto bg-[#e8ecf0ff] rounded-xl p-10 sm:p-2 sm:w-full sm:gap-4'>
            <p className='text-4xl text-center font-bold sm:text-2xl'>
              Get exclusive offers & news
            </p>
            <p className='text-xl text-center text-white sm:text-sm'>
              Want to be updated on the latest drops, sales, events, giveaways and more? 
              Sign up below with your email and we'll keep you on the latest page!
            </p>
            <div className='flex justify-center items-center gap-4 sm:flex-col'>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className='bg-white w-full border-[3px] border-[#38c3ff] rounded-lg outline-none p-2 h-10'
                placeholder='youremail@example.com'
                type='email'
              />
              <button
                onClick={handleSubmit}
                className='rounded-lg w-[10rem] bg-[#4fff38] py-2 text-xl text-white hover:bg-white hover:border-[2px] hover:border-[#38c3ff] hover:text-[#38c3ff] focus:bg-[#38c3ff] focus:text-white transition sm:text-lg sm:p-1 sm:w-[6rem]'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

<div id='product-component-1683505865201'></div>
<script type="text/javascript">
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'd54584.myshopify.com',
      storefrontAccessToken: '7f707972a441a0f88436a2e769286a6e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8253247389983',
        node: document.getElementById('product-component-1683505865201'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#66b68e"
        },
        "background-color": "#71ca9e",
        ":focus": {
          "background-color": "#66b68e"
        },
        "border-radius": "11px"
      }
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#66b68e"
        },
        "background-color": "#71ca9e",
        ":focus": {
          "background-color": "#66b68e"
        },
        "border-radius": "11px"
      }
    },
    "googleFonts": [
      "Roboto"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#66b68e"
        },
        "background-color": "#71ca9e",
        ":focus": {
          "background-color": "#66b68e"
        },
        "border-radius": "11px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#71ca9e",
        ":hover": {
          "background-color": "#66b68e"
        },
        ":focus": {
          "background-color": "#66b68e"
        }
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/
</script>

export default Subscribe
